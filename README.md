# Matt 50.0 — Official Launch Brochure

A one-page birthday site for Matt: [https://hbdmatt.com](https://hbdmatt.com) (custom domain, once DNS is pointed) and the GitHub Pages URL once the repo is live.

This is a static site. No build step, no API keys, no cost.

## Swap in or replace the jersey photo

The page already loads this exact file:

`images/elon-jersey.jpg`

To replace it later:

1. Name the new photo `elon-jersey.jpg`.
2. Overwrite `images/elon-jersey.jpg` in this repository (keep the same path and filename).
3. A reasonably square or landscape shot is ideal; the frame is locked to 4:3 and crops from the upper center.
4. Commit and push to `main`. GitHub Pages will republish automatically.
5. Leave the CSS speech bubble alone. It is overlaid on the photo slot, not baked into the image, so it will still say “Happy Birthday Matt!” on whatever photo is in that path. If a later photo crops differently, adjust `.speech-bubble` in `styles.css` (`top` / `right`) so the bubble stays near the head and clear of the face.

If the file is missing, the page shows a placeholder and the same bubble.

## Custom domain (Porkbun DNS)

Do this in Porkbun yourself. The host should already be set to `hbdmatt.com` as the primary GitHub Pages domain, with `www.hbdmatt.com` redirecting to it.

Remove Porkbun’s default parking / placeholder records for `@` and `www` if they conflict, then add:

### Recommended: apex A + AAAA records, plus www CNAME

| Type | Host / Name | Value | TTL |
|------|-------------|-------|-----|
| A | `@` | `185.199.108.153` | 600 (or default) |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |
| AAAA | `@` | `2606:50c0:8000::153` | 600 |
| AAAA | `@` | `2606:50c0:8001::153` | 600 |
| AAAA | `@` | `2606:50c0:8002::153` | 600 |
| AAAA | `@` | `2606:50c0:8003::153` | 600 |
| CNAME | `www` | `zippybuiltllc.github.io` | 600 |

Do **not** put a CNAME on `@`. Do **not** add a wildcard (`*`) record.

### Alternative for the apex only

Porkbun supports ALIAS. If you prefer one apex record instead of the eight A/AAAA records, you can use:

| Type | Host / Name | Value |
|------|-------------|-------|
| ALIAS | `@` | `zippybuiltllc.github.io` |
| CNAME | `www` | `zippybuiltllc.github.io` |

GitHub’s docs allow ALIAS *or* the A/AAAA set, not a mix of ALIAS plus A records for the same name. The A/AAAA set is the more common setup.

After DNS is live (sometimes minutes, sometimes up to 24 hours), turn on **Enforce HTTPS** in the repo’s Settings → Pages if it is not already on. A `CNAME` file in this repo is already set to `hbdmatt.com`.

## Page sections

1. Live ticker strip: TSLA and SPCX (TradingView, `NASDAQ:TSLA` and `NASDAQ:SPCX`) plus a joke ticker, `MATT50 ▲ +50.0 YRS`.
2. Hero: “Matt 50.0 — Now with Full Self-Birthday.”
3. Crew portrait with the Chain Gang jersey photo and a cartoon “Happy Birthday Matt!” bubble.
4. Vehicle specifications.
5. Standard-equipment features.
6. Mission / flight timeline.
7. Ceremonial launch countdown (replayable).
8. Mountain-bike trail report, including “Plaid mode on the downhill.”
9. A short toast, then the parody fine print.

## Local preview

Serve the `site` folder (or the repo root, which is the site) with any static file server, for example `python3 -m http.server 8080`.
