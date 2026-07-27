/* AMPRI — liikumine. Vähem ja perfektselt. */
(function () {
  "use strict";

  var html = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================================================
     Avamise moment: lüliti klõpsab ~0.8s pärast laadimist,
     tuled lähevad põlema. Üks kord sessiooni jooksul.
     ============================================================ */

  function lightsOn() {
    html.classList.remove("dim");
    html.classList.add("lit");
    try { sessionStorage.setItem("ampri-lit", "1"); } catch (e) {}
  }

  function lightsOff() {
    html.classList.remove("lit");
    html.classList.add("dim");
  }

  if (html.classList.contains("dim")) {
    window.setTimeout(lightsOn, 800);
  }

  /* Lüliti jääb töökorda — klõps kustutab ja süütab tuled. */
  var lightSwitch = document.getElementById("lightSwitch");
  if (lightSwitch) {
    lightSwitch.addEventListener("click", function () {
      if (reduceMotion) return;
      if (html.classList.contains("dim")) {
        lightsOn();
      } else {
        html.classList.remove("no-intro");
        lightsOff();
      }
    });
  }

  /* ============================================================
     Scroll-reveal — IntersectionObserver, pehme fade + nihe
     ============================================================ */

  var revealables = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("in"); });
  }

  /* ============================================================
     Numbrid loevad üles, kui vaatevälja jõuavad
     ============================================================ */

  var counters = document.querySelectorAll("[data-count]");

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    if (reduceMotion) { el.textContent = String(target); return; }

    var duration = 900;
    var start = null;

    function tick(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3); /* easeOutCubic */
      el.textContent = String(Math.round(eased * target));
      if (t < 1) window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { countObserver.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute("data-count");
    });
  }

  /* ============================================================
     Jaluse monogramm joonistab end scroll'imisel
     ============================================================ */

  var footerMono = document.getElementById("footerMonogram");
  if (footerMono && "IntersectionObserver" in window && !reduceMotion) {
    var monoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            footerMono.classList.add("draw");
            monoObserver.unobserve(footerMono);
          }
        });
      },
      { threshold: 0.5 }
    );
    monoObserver.observe(footerMono);
  } else if (footerMono) {
    footerMono.classList.add("draw");
  }

  /* ============================================================
     Hinnapäringu vorm — demo: näita kinnitust
     ============================================================ */

  var form = document.getElementById("inquiryForm");
  var success = document.getElementById("formSuccess");
  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.querySelectorAll("input, textarea, button").forEach(function (el) {
        el.disabled = true;
      });
      success.hidden = false;
      form.querySelector(".form-promise").hidden = true;
    });
  }
})();
