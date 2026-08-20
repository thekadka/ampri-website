# ampri-website

Ühelehe-staatiline veebisait (index.html + styles.css + main.js), Ampri OÜ / Ampri Elekter.

## Deploy Configuration (configured by /setup-deploy)
- Platform: GitHub Pages (repo thekadka/ampri-website, branch main, root)
- Production URL: https://amprielekter.ee
- Deploy workflow: auto-deploy on push to main (GitHub Pages legacy build)
- Deploy status command: gh api repos/thekadka/ampri-website/pages --jq .status
- Merge method: push directly to main
- Project type: static web site
- Post-deploy health check: https://amprielekter.ee

### Custom deploy hooks
- Pre-merge: none
- Deploy trigger: automatic on push to main
- Deploy status: gh api repos/thekadka/ampri-website/pages --jq .status
- Health check: https://amprielekter.ee

## DNS (Zone.ee, domain amprielekter.ee)
- 4× A @ → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153 (GitHub Pages)
- CNAME www → thekadka.github.io
- Hallatakse Zone.ee paneelis: https://my.zone.eu/dashboard/et/amprielekter.ee/domain/dns/records
- CNAME-fail repos (`CNAME`) peab sisaldama `amprielekter.ee` — ära kustuta.
