# Parallax — Ideas Backlog

A running list of expansion ideas for Parallax. Not commitments. Not promises.
This is where good ideas go to wait until the data says "build me."

**How to use:**
- Whenever an idea pops into your head (voice memo, shower, driving), add it here.
- Don't filter. Good ideas and silly ones both belong.
- Every 3-6 months, Orion and Eddie review and pick 1-2 to actually build.
- The bar for building: "we have evidence users want this, not just a hunch."

---

## Decision framework (for when we review)

Three questions Orion and Eddie should ask of any idea before building:

1. **What does the user naturally want NEXT after using our existing tools?**
2. **Would this create a "oh damn, I have to show my friends" moment?**
3. **Would Eddie actually enjoy building and maintaining this?**

If 2 of 3 answers are "yes" → worth building.
If only 1 → shelve it.
If 0 → delete it.

---

## 🌱 SEEDS (raw brainstorm — not evaluated yet)

Format: `[idea]` — `[why it's interesting]` — `[rough effort]` — `[risk level]`

### User-triggered by Eddie's conversations (2026-04-19)

- **Virtual communities on planets (social "plots" + citizenship)** — Turns one-off visits into return visits; taps nostalgia for Geocities-era internet; shareable citizenship badges — 20-40h to build Tier 1 (social-only, no 3D); MORE if any paid tier — HIGH risk (metaverse is in a graveyard phase right now; community takes years to grow or dies fast)
- **Real-estate deeds on planets (novelty)** — Works as gag gift; proven market ($600M+ sold by Lunar Embassy over 30 years) — 10-20h for PDF generator + Stripe; partnership path faster — MEDIUM risk (payment processors hate "real deed" framing; must be clearly labeled novelty; compete with incumbents)

### Extensions of existing tools (incremental)

- **Age on Other Planets — for two people** — Couples/friends compare ages across planets; huge viral potential (couples share more than singles) — 3-5h — LOW risk (pure extension of existing tool)
- **Life in Weeks — for couples** — Overlay two grids, see shared weeks vs separate — 4-6h — LOW risk
- **Time Dust — lifestyle comparison** — "You've spent 4 fewer years on your phone than the average American" — 4h — LOW risk (need a good stats source)
- **Cosmic Birthday — persistent countdown widget** — Users can bookmark their next Mars birthday, see live countdown — 3-4h — LOW risk

### New curiosity calculators (viral-shaped)

- **"How many heartbeats have you had?"** — Avg 70bpm × lifetime. Simple, punchy — 2h — LOW
- **"How many breaths?"** — Same math. Possibly morbid; pair with beauty framing — 2h — LOW
- **"How many times have you circled the Earth walking?"** — Avg 4 miles/day × lifetime ÷ 25,000 mile circumference — 2h — LOW
- **"How many meals have you eaten? Will eat?"** — Personal + unsettling — 2h — LOW
- **"What % of human history have you been alive for?"** — 300,000 years of humanity — 2h — LOW
- **"If you were born on Mars, when would every birthday be?"** — Reverse of Cosmic Birthday — 3h — LOW
- **"Time until..."** — Retirement, child's 18th, median death age, your next leap year — 2-6h — LOW-MEDIUM (death angle is either viral gold or a brand problem)

### Historical / personal context tools

- **"What songs were #1 on each of your birthdays?"** — Needs Billboard API / scraped data — 10-15h — LOW (data-heavy but no legal issues)
- **"Who was born on the exact same Earth day as you?"** — Famous birthdays on your day — 4h — LOW (Wikipedia has this data free)
- **"What happened in the news the week you were born?"** — Needs archive API — 15-20h — MEDIUM (data licensing)
- **"Life in Weeks — overlay world events"** — Mark major events on your personal grid — 10h — LOW

### Share-driven (viral moments)

- **"Parallax Citizenship" shareable badge/image** — Generates a pretty personalized image for Instagram/Twitter with the user's planet-ages — 6-8h — LOW risk, HIGH viral potential
- **"Gift a Mars birthday"** — Send a friend a custom "your Mars birthday is on X" card — 4h — LOW
- **"Family tree in planetary years"** — Enter whole family, see everyone's age on every planet side-by-side — 8h — LOW (parents will share this)

### Habit / retention mechanics

- **"Curiosity of the week"** — New calculator every Sunday; newsletter drives repeat visits — 2h per tool + email infra (8h one-time) — LOW (but creates forever-obligation)
- **"Reader-requested calculators"** — Community-submitted ideas, voted on — 10h (+ ongoing community mod) — MEDIUM (community management is expensive in time)
- **"Memento Mori" daily email** — One existential reminder + Parallax link. Growing niche (Oliver Burkeman fans) — 10h email infra — LOW
- **"Daily planetary prompt"** — "Today is Sol 1,247 on Mars. What would you do with an extra 39 minutes of daylight?" — 4h — LOW

### Paid / premium products (later, after traffic proves out)

- **Printed "Life in Weeks" book** (Amazon Print-on-Demand) — Personalized hardcover, each row a year with space to write — 30-50h including layout + POD setup — MEDIUM (inventory-free but production quality matters)
- **Birthday greeting cards with cosmic themes** (print + ship) — Partner with Minted/Moo — 10-15h — LOW (affiliate model)
- **"Planet-of-the-Month" subscription box** — $20/mo, themed items (Mars month gets red rocks, etc.) — 100h+ to set up + ongoing ops — HIGH (physical fulfillment is a different business)
- **Paid "Pro" tier** — Export all calculations as PDF, custom theming, no ads, API access — 40h — MEDIUM (needs auth infra)

### Digital products (added 2026-05-01 by user, morning brainstorm)

**Why digital products fit Parallax specifically:** Brand creates personal artifacts — your age on Mars, your weeks remaining — that translate naturally to printables, posters, templates. Margin profile is way better than ads (~$15-25 per unit vs $0.001 per ad impression). Zero inventory, instant delivery, design-once-sell-forever. Diversifies revenue beyond AdSense (which can be banned anytime).

**Strongest candidates (build in this order):**
- **"My Life in Weeks" printable poster** ⭐ HIGHEST FIT — Personalized PDF: user's 4,680-week grid with their birthday baked in + "this week" highlighted. Tim Urban's original article spawned dozens of these on Etsy; Parallax can dominate with the brand + tool ecosystem. **$15-25. 10-15h.**
- **Cosmic perspective journal (printable PDF)** — Pairs with the poster. Guided journal with weekly reflection prompts ("How did you spend last week's box?"). **$10-15. 8-12h.**
- **"Years on Every Planet" printable birthday card** — Fill-in-the-blank planetary birthday card for nerdy gift-giving. **$5-10. 4-6h.**
- **Notion template — Life in Weeks tracker** — Auto-calculates remaining weeks, hosts year-by-year reflections. Notion templates sell well on Gumroad. **$20-30. 8-12h.**

**Stretch candidates (only after first product validates):**
- **"Cosmic Time" e-book** — 30-50 page deep dive on time perspective + planetary scales + mortality math. **$9-15. 40-60h.**
- **Course: "Recompute Your Life"** — 4-week video course teaching the Parallax framework. **$50-150. 80-120h.** (Heavy lift — needs real audience.)
- **Milestone PDF generator pack** — bundle of personalized "how old will you be when X" PDFs. **$10. 6-8h.**

**Sequencing rules (CRITICAL — do not skip):**
1. **Audience first, product second.** Classic trap: spend 3 months on a perfect Notion template, launch to 100 followers, sell 2 copies, get demoralized. Never build the product BEFORE the audience.
2. **Email list is the prerequisite.** Warm email list converts 2-5%+; cold ads to strangers eat margin. Until the email list infrastructure (already in GROWING tier) ships, digital products won't have a working sales channel.
3. **One product first.** Don't launch a portfolio. Pick ONE (the Life-in-Weeks poster), validate with real revenue, THEN expand.
4. **Threshold to start building:** email list > 500 subscribers OR a single Parallax tool seeing > 1k weekly users (whichever first).

**Storefront when ready:** **Gumroad first** (fastest validation, 10% fee, handles tax/payments globally). Migrate to direct Stripe-on-parallaxhub.app later if revenue justifies the integration work.

**Eddie's mode (2026-05-01):** *"I'm a get back to it when the time is right."* Logged. Don't force.

### Merch / branded products (added 2026-04-26 by user)

**Eddie's mode (2026-04-26):** "Maybe in the future when the channel is much bigger." Logged for revisit. NOT BEFORE 1K subscribers — below that, store management eats more time than it returns.

**Setup approach when activated:**
- Print-on-demand only (Printful, Bonfire, or Spring/Teespring) — zero inventory, zero upfront cost
- Skip YouTube's official Merch Shelf for now (requires 10K subs + YPP) — link to external store from video descriptions
- Designs MUST tie to specific moments/lines from videos. Generic "I love space" designs don't sell; quotable lines do.

**Design seed list (from existing/planned scripts):**
- **"I will not be attending my Neptune birthday"** tee — callback to long-form #1 closing line
- **"0.22 Neptune years old"** mug — universal among under-50s on Earth
- **Custom planet-age mug** — generated from user's birthday via Parallax tool ("Eddie · 149 Mercury years old · 19 Mars years")
- **"Pluto's first year completes 2178"** tee — works as both nerd flex and conversation starter
- **Planet-orbit pin/keychain set** — 9 minimal pins (one per planet + Pluto), sold individually or as a set
- **"Same body. Same heartbeat. Different number."** poster — pulled from script's emotional beat
- **Life-in-weeks blank journal** — pairs with the Life in Weeks tool; 90 rows of 52 weeks, hardback

**Why merch fits Parallax specifically:** the brand creates personal artifacts. A user's actual Neptune age, their actual planetary birthdays — these are unique-to-them numbers that translate well to a printed item. Generic astronomy merch is saturated; personalized cosmic merch is rare.

**Threshold to revisit:** 1K subs OR strong direct request signal in comments. Not before.

### Branding / tagline (added 2026-04-26)

**Eddie's first draft:** "Parallax. Change your perspective. Change your life."

**Why iterate:** "change your life" is overused across self-help and fitness brands; doesn't lean into what makes "parallax" a unique word. The astronomy term literally means *the apparent shift of an object's position when viewed from different vantage points* — that physics meaning is the brand's hidden gift, and any tagline should exploit it.

**Refined options to revisit:**
- **"Parallax. See yourself from somewhere else."** ← Orion's pick — literal (your age on Mars), poetic (perspective shift), uniquely tied to the calculator concept
- "Parallax. Your life, from a different angle."
- "Parallax. A new view of your time."
- "Parallax. Step back. See more."
- "Parallax. The universe, scaled to you."

**When to lock it in:** Once a tagline is added to logo/banner/end screens it's expensive to change (creative + reuploads). Defer until either (a) channel hits 1K subs and we're refreshing brand assets anyway, or (b) a single tagline obviously stands out after 4+ videos of testing it in outros.

### Platform / tech expansions

- **iOS / Android native app** — Reskin of Parallax + push notifications ("Your Mars birthday is tomorrow!") — 80-120h (React Native) — MEDIUM (app store approval, ongoing maintenance)
- **Widget / Chrome extension** — Shows your next planetary birthday on new-tab page — 15h — LOW
- **Slack / Discord bots** — "/mars-age @user" shows someone's Mars age in a channel — 10h each — LOW (fun, grows brand awareness)
- **Amazon Alexa / Google Home skill** — "Hey Alexa, how old am I on Mars?" — 20h — LOW (brand play, probably low revenue)

### Content / media expansion (complements YouTube)

- **TikTok** — Reshare YouTube Shorts natively — 0h extra if YouTube is already producing Shorts — LOW
- **Instagram Reels** — Same — 0h extra — LOW
- **Blog / SEO** — Long-form articles about planetary time, physics of birthdays, etc. Google ranks these forever — 4h per article — LOW (but time-intensive if done weekly)
- **Podcast** — 5-10 min episodes of "Planetary Perspective" — 4-6h per episode — MEDIUM (podcast growth is slow; not recommended until YouTube proves out)
- **Email newsletter** — Weekly curiosity tidbit + tool highlight — 2h per issue — LOW (high ROI for audience-building)

---

## 🌿 GROWING (ideas we're lightly researching)

(Move items here when we start exploring data for them)

### ⭐⭐ Cross-promotion: Easy Smart Home HQ sponsors Parallax YouTube (added 2026-04-20)

**Why this is GROWING tier:**
Two-brand funnel that turns Parallax's curiosity-audience into Smart Home's buyer-audience. Affiliate commissions (Amazon 4% on $50-300 products) monetize way better than AdSense on curiosity traffic. Parallax = top-of-funnel; YouTube = distribution; Smart Home = monetization engine.

**The architecture:**
```
                    YouTube Shorts (Orion-style)
                            |
                   ┌────────┴────────┐
                   ▼                 ▼
            Parallax videos     Smart Home videos
            (curiosity hooks)   (buying guides)
                   |                 |
                   ▼                 ▼
         parallax-phi-ten.      easysmarthomehq.com
         vercel.app             (to be built)
                   |                 |
                   ▼                 ▼
              AdSense $$           Amazon 4% $$$$
```

Parallax traffic also gets FUNNELED to Smart Home via:
- End-of-video sponsor reads (5 sec each)
- Description-line links on every Parallax video
- Topic-matched tie-ins (Time Dust → digital wellness products; Cosmic Birthday → Echo Show calendar; Life in Weeks → air quality/sleep tech)

**Revenue projection (month 6, realistic):**
| Source | Monthly |
|---|---|
| Parallax AdSense (10K visitors) | $50-200 |
| Parallax YouTube ads (if monetized) | $50-150 |
| **Smart Home affiliate (500 buyers × $8 avg commission)** | **$500-2,000** |
| **Total** | **$600-2,350** |

Smart Home revenue dominates because buying intent >> curiosity for conversion rate.

**Rollout plan (phased):**
- **Phase 1 (now → mid-May):** Ship 4 Parallax videos on schedule. Just add description-line placeholder: "Sponsored by Easy Smart Home HQ — launching soon at easysmarthomehq.com." Builds brand anticipation even before the site is live.
- **Phase 2 (mid-May → mid-June):** Build Smart Home site (20-30 review articles, apply to Amazon Associates). Separate project — see `CLUDE TRADEING/smart-home/` folder once created.
- **Phase 3 (late June+):** Once Smart Home has 10+ real reviews live, upgrade Parallax video outros to include 5-sec end-of-video sponsor reads. Use topic-matched tie-ins where the product naturally fits the video's emotional hook.

**Sponsor read templates (pre-drafted, ready to use when Phase 3 starts):**

*Generic outro (any video):*
> "Sponsored by Easy Smart Home HQ — the honest reviews site for smart home gear. Link below."

*Time Dust tie-in (digital wellness angle):*
> "If this video hit too close to home — we review screen-free alarm clocks and bedroom tech that gets your phone out of arm's reach. EasySmartHomeHQ.com."

*Cosmic Birthday tie-in (voice assistants/calendar):*
> "Put your next Mars birthday on an Echo Show — we review the best smart displays at EasySmartHomeHQ.com."

*Life in Weeks tie-in (quality-of-life angle):*
> "If this video made you want to reclaim some time — the best smart home gear that actually makes life better. EasySmartHomeHQ.com."

*Age on Other Planets (most generic — use if no natural fit):*
> "If you're curious about the future — we review the smart home tech that's already here. EasySmartHomeHQ.com."

**Legal / compliance checklist:**
- ✅ FTC sponsor disclosure (in description and/or video audio)
- ✅ YouTube "Paid promotion" checkbox on upload (even for self-sponsorship)
- ✅ Amazon Associates disclosure on every Smart Home page linking to Amazon ("As an Amazon Associate I earn from qualifying purchases")
- ✅ Honest product claims (don't say things work if they don't)

**Why self-sponsorship is fine (and common):**
MrBeast → Feastables. MKBHD → MKBHD Shop. Casey Neistat → Beme. Creators owning the sponsor is best-case scenario: zero conflict of interest, full alignment on what gets recommended, full revenue capture.

**User's mode (2026-04-20):**
> "Let's save it to ideas. And let's get the other two projects running. In this way, we can add that down the road and it will easily mesh and work for us."

Right call. Ship sequentially, don't overload.

---

### ⭐ Planetary birthday email list + YouTube notifications (added 2026-04-19)

**Why this is in GROWING, not SEEDS:**
Scored highest across the evaluation framework (user value HIGH, business value HIGH, feasibility MEDIUM, maintenance LOW). Birthday emails have industry-best open rates (~50%+). This is the single highest-leverage idea for converting one-off Parallax visitors into a persistent audience.

**User experience:**
- Signup form on Cosmic Birthday page + Parallax footer
- User enters email + birth date + (optional) name
- Receives a personalized "Happy Martian Birthday" / Mercury / Jupiter / etc. email on each planetary birthday
- Plus: monthly curiosity digest + new YouTube video alerts
- One-click unsubscribe (legally required)

**The YouTube compound effect:**
Every email includes a "New on YouTube" section auto-populated with Eddie's latest video. This bootstraps YouTube subscribers from email list. Two audiences, one flywheel.

**Tech stack to build:**
- Signup form on Parallax (30 min)
- Database — users + birthdays + preferences (Railway Postgres or similar; need a backend — Parallax is currently pure-static)
- Email service — **Resend** (3K emails/mo free; $20/mo at 50K); alternatives: Mailgun, SendGrid
- Daily scheduler — cron checks each morning "whose planet birthday is today?" → queue emails
- Email templates — branded HTML (4-8h design)
- Unsubscribe handler + CAN-SPAM / GDPR compliance
- Domain email "from" address (requires SPF/DKIM/DMARC setup — Resend walks through it)

**Total build effort:** 20-40h across 2-3 weekends.

**Ongoing cost:** $20-40/mo at 10K subscribers. Scheduler is zero-maintenance once running.

**Deliverability note:**
New email-sending domains get junk-foldered by Gmail for 4-8 weeks. Standard "email warm-up" protocol: start at 100/day, double weekly. Launch email volume must ramp slowly or all emails hit spam. Patience pays.

**Ideal timing:**
- **Now (Apr-early May):** Focus on YouTube launch + Reddit + AdSense. Don't build this yet.
- **Mid-May:** IF Parallax is getting traffic, begin building.
- **Late May:** Beta test with 50 friends/family.
- **Early June:** Public launch.

By summer, email + YouTube + SEO all compound together. Right timing.

**Metrics to hit before building:**
- Parallax traffic > 500 weekly visitors
- At least one referral-traffic moment (Reddit/HN/viral YouTube video)
- User interest signal (anyone asking for email updates, or direct feedback)

If those don't materialize by mid-May, revisit whether it's worth the lift.

**Eddie's mode on this one (user quote):**
> "When the time comes, we'll just do it."

Exactly right. Queue it, don't force it.

---

## 🌳 BUILDING (actively in development)

(Move items here when a decision is made to build)

- *[none yet]*

---

## 🍂 DECIDED AGAINST (with reasons — don't re-propose)

(Move items here when we've actively chosen NOT to build, with why)

- *[none yet]*

---

## 🪴 SHIPPED (live on Parallax)

- **Age on Other Planets** (anchor tool, launched 2026-04-19)
- **Life in Weeks** (launched 2026-04-19)
- **Time Dust** (launched 2026-04-19)
- **Cosmic Birthday** (launched 2026-04-19)

---

## 📋 POST-PARALLAX PROJECTS (separate sites — not Parallax features)

Project queue for when Parallax + Smart Home are stable and Eddie has bandwidth for a new build.

### Tier 3 — Pet Tools Hub (added 2026-04-24)

**Concept:** Fork the Parallax codebase → new static calculator hub in the pet niche. NOT another dog-age/BMI calculator (saturated — 7+ incumbents on page 1). Instead: breed-specific or life-stage-specific tools the incumbents skipped.

**Why this niche won the 2026-04-24 Home/DIY vs Pet analysis:**
- **Affiliate economics 5-10x better:** Holistapet 35% commission, Ollie $60 flat per order vs Amazon's 4% on home gear
- **Shareability:** Pet owners share cute tools aggressively; nobody forwards a paint calculator
- **Market tailwind:** $250B → $370B projected 2023-2030
- **Aesthetic fit:** Eddie's Parallax "curiosity + fun" design sensibility translates directly; dies on utilitarian home calcs
- **AdSense signal:** solo creator reported $700-900/mo from a "funny dog website" (not even a tool site)

**What we parked (Home/DIY):**
- Tempting because of Smart Home cross-promo, but: Amazon 4% on $30-300 gear = $1.20-12/sale vs $60 Ollie flat. Math doesn't compete.
- HammerIO + HomeWyse + Build-Folio + NerdWallet own the obvious tools. Local ZIP-code pricing data is expensive to replicate.
- Could revisit as a "Tools" subdirectory INSIDE easysmarthomehq.com later (single domain = better SEO than parallel sister site).

**Build wedge ideas (underserved tools the incumbents skipped):**
- "How much food does a [breed] eat per day?" — breed-aware feeding calculator
- "When will my puppy stop growing?" — breed-specific growth predictor
- "Dog travel cost calculator" — flight + hotel + gear bundled
- "What dog breed fits my apartment + schedule?" — breed matcher
- "Real dog years" — better than the generic 7×age formula (breed-aware)
- Senior dog / pregnant dog / puppy life-stage specific tools

**When:** NOT before mid-2026 at earliest. Prerequisites:
1. Parallax AdSense approved + producing real data
2. Smart Home phase 1 launched (target ~June 2026)
3. YouTube channel has > 1,000 subs OR clear product-market fit signal
4. Eddie explicitly says "ready for project #4"

**Next step when activated:** 45-min research session to pull actual search volumes on 15-20 specific long-tail pet keywords and rank by opportunity. Produces a shortlist of 5 tools to build first.

**Sources (2026-04-24 research):**
- HammerIO construction calculator suite (saturation evidence)
- BloggersPassion pet affiliate programs review
- BlackHatWorld pet-niche-site profitability discussion
- Coupler.io 20 best niches for affiliate marketing 2026

---

## Meta notes

- **The list grows; the list also shrinks.** Ideas that look good today may look dumb in 6 months. That's fine. Prune aggressively.
- **No idea is too small.** Some of the best features in successful apps are 2-line changes someone noted 6 months before building.
- **Orion's role:** Help evaluate, draft specs, and build when we commit. Not to push for more features — that's Eddie's call.
- **Eddie's role:** Live with Parallax users (read comments, watch what people do), feed the list with ideas driven by real user behavior.

---

*Last updated: 2026-05-01 by Orion. Added digital products section (Life-in-Weeks poster, journal, Notion template, courses). Add entries freely; Orion will reorganize during quarterly reviews.*
