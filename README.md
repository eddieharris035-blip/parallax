# Parallax — Setup & Launch Guide

A small, fast, ad-supported calculator hub. Anchor tool: **Age on Other Planets**. Built as pure static HTML/CSS/JS — zero build step, zero dependencies, deploys anywhere.

---

## What's already done (by me)

- ✅ 4 working tools: Age on Other Planets, Life in Weeks, Time Dust, Cosmic Birthday
- ✅ Homepage hub with tool cards
- ✅ About, Privacy, Terms, Contact pages (AdSense-compliant templates)
- ✅ 404 page, `robots.txt`, `sitemap.xml`
- ✅ Dark cosmic theme, responsive, works on mobile
- ✅ No frameworks, no build step, no third-party requests (except future AdSense)
- ✅ AdSense placeholder slots marked in every tool page

---

## Your step-by-step setup

Total estimated time: **30–60 minutes** spread across 3 sessions. Most of it is waiting on Google.

### PHASE 1 — Preview it locally (2 min)

Open the folder in any file explorer and double-click `index.html`. It works as-is. But for absolute correctness (so the `/age-on-other-planets/` style links resolve properly), serve it through a tiny local server:

**Option A — Python (if installed):**
```
cd "C:\Users\Eddie\CLUDE TRADEING\parallax"
python -m http.server 8080
```
Then open http://localhost:8080 in your browser.

**Option B — Node (if installed):**
```
npx serve .
```

If you don't have either, skip this — you'll see it fully once deployed.

---

### PHASE 2 — Pick a site name & (optional) buy a domain (10 min)

"Parallax" is just my working name. Rename if you want something else.

**To rename** (quick find-and-replace):
- Open every `.html` file
- Replace `Parallax` with your name
- Replace the `logo` text in `<span>Parallax</span>` block (one per page)

**Domain (optional, ~$10/yr):** If you want `yoursite.com` instead of a free subdomain:
1. Go to [Namecheap](https://www.namecheap.com), [Porkbun](https://porkbun.com), or [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
2. Search for a name (keep it short, brandable, .com preferred but not required)
3. Buy it — don't buy add-ons (WhoisGuard is usually free; skip hosting, email, SSL add-ons)
4. You'll configure DNS in Phase 4

Good alternative names if `parallax.com` is taken: `tryparallax.com`, `parallax.fun`, `orbityears.com`, `elsewhere.so`, `planetyears.com`, `sunyears.com`.

---

### PHASE 3 — Push to GitHub (10 min)

Parallax deploys from a GitHub repo. You need a free GitHub account.

1. Go to [github.com](https://github.com) → sign in (or sign up)
2. Click the `+` top-right → **New repository**
3. Name it `parallax` (or whatever you chose)
4. Set to **Public** (required for GitHub Pages free tier; private also works on Vercel)
5. **Don't** add README/gitignore/license — we already have them
6. Click **Create repository**
7. GitHub shows you setup instructions. Run these in a terminal from the project folder:

```
cd "C:\Users\Eddie\CLUDE TRADEING\parallax"
git init
git add .
git commit -m "Initial Parallax site"
git branch -M main
git remote add origin https://github.com/<your-username>/parallax.git
git push -u origin main
```

Replace `<your-username>` with your actual GitHub username.

---

### PHASE 4 — Deploy (5 min)

Pick one. Vercel is faster and prettier; GitHub Pages is simpler.

#### Option A — Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. After signup → **Add New → Project**
3. Select your `parallax` repo → **Import**
4. Leave every setting at default (Framework: Other, no build command, output: `/`)
5. Click **Deploy**
6. 30 seconds later you have a live URL like `parallax-xyz.vercel.app`

To add a custom domain:
- In Vercel project → **Settings → Domains → Add**
- Type your domain → follow the DNS instructions Vercel shows
- Add the records at your domain registrar → wait 10–60 min

#### Option B — GitHub Pages

1. In your GitHub repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → **Save**
4. 2 minutes later the site is live at `https://<your-username>.github.io/parallax/`

Custom domain: add a `CNAME` file containing just your domain, commit, then configure the DNS at your registrar per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

### PHASE 5 — Fix the placeholder references (5 min)

Open these files and replace `<your-domain>` with your actual live domain (e.g., `parallax.fun`):

- `robots.txt` — line 3
- `sitemap.xml` — every `<loc>` line (9 total)
- `contact/index.html` — the email link

Commit and push:
```
git add .
git commit -m "Fix domain placeholders"
git push
```

---

### PHASE 6 — Submit to Google Search Console (5 min, then wait)

This gets your site indexed.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add property** → pick **URL prefix** → enter your full domain (with `https://`)
3. Verify ownership — the easiest option is **HTML tag**:
   - Google gives you a `<meta name="google-site-verification" content="...">` tag
   - Paste it into the `<head>` of your `index.html` (right after `<meta name="viewport">`)
   - Commit + push
   - Back in Search Console → click **Verify**
4. Once verified → **Sitemaps** (left sidebar) → paste `sitemap.xml` → **Submit**
5. Google usually indexes the first pages in 3–14 days.

---

### PHASE 7 — Apply for Google AdSense (10 min apply, 1–4 weeks wait)

This is the money step. **Do this only after Phase 6 — AdSense rejects sites that aren't indexed.**

1. Go to [google.com/adsense](https://www.google.com/adsense)
2. **Sign up** with your Google account
3. Enter your live domain
4. Fill in address, legal name, payment info (they pay via direct deposit; you'll need bank info or a tax form — keep your SSN/EIN ready if US-based)
5. AdSense gives you a script tag like:
   ```
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
6. Paste it into the `<head>` of EVERY page (search for `<!-- [ADSENSE] verification script -->` comments — that's where it goes)
7. Commit + push
8. In AdSense dashboard → click **Request review**
9. **Wait.** Review takes 1 day to 4 weeks. You'll get an email.

**If rejected:** the most common reason is "not enough content." Add 1–2 more calculators or blog posts, resubmit.

---

### PHASE 8 — Place ad units (5 min, after approval)

Once approved:

1. In AdSense → **Ads → By ad unit → Display ads**
2. Create a **Responsive** unit called "Parallax Inline"
3. Copy the generated `<ins class="adsbygoogle">...</ins>` snippet
4. In your code, find each line marked `<!-- [ADSENSE] Ad slot ...` and replace the `<div class="ad-slot">[ Ad slot — ...]</div>` below it with:
   ```html
   <div class="ad-slot live">
     <!-- paste your AdSense <ins> snippet here -->
   </div>
   ```
5. Do this for all 4 tool pages + the homepage (5 locations total)
6. Commit + push
7. Ads appear within 20 minutes

---

### PHASE 9 — (Optional) Add analytics

Google Analytics is free and shows you traffic. [analytics.google.com](https://analytics.google.com) → create property → get the `gtag` script → paste into every page's `<head>`.

Or use a lighter privacy-respecting option: [Plausible](https://plausible.io) (paid) or [Umami](https://umami.is) (free, self-host).

---

## Expanding the site

Each new calculator = a new folder + one `index.html`. Use the existing tools as templates. Add the URL to `sitemap.xml` and a card to the homepage.

Ideas for future tools that fit the theme:
- "Your weight on other planets"
- "Your heartbeats so far" (based on avg 70 bpm)
- "Miles walked in a lifetime"
- "Breaths taken"
- "How old were you when [famous event]"
- Birthday twins (famous people born same day)

---

## Support / questions

Look in the HTML — most of it is plainly commented. The only JS lives in `assets/script.js` (shared math) + inline `<script type="module">` blocks at the bottom of each tool page.
