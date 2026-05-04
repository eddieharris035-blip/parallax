# Playbook: Long AI Video Production (Mr Void Method)

**Source:** Mr Void — "RIP Paid Tools: Make LONG AI Videos With Consistency!" (YouTube `Qsi9MeLh95Q`, 11:52, May 2026)
**Documented:** 2026-05-03
**Last reviewed:** Pending real-world test

---

## Executive summary

Mr Void chains together **5 free Google/Meta tools + 2 browser extensions + CapCut** to generate cinematic long-form AI videos (he claims "massive long" — likely 5-15 min in practice on free-tier rate limits, NOT 30 min unless paying or running for days). The headline claim is "flawless character consistency" — a feature for fictional storytelling that **does NOT apply to Parallax's grounded perspective content** but is valuable if we ever spin a fictional/cinematic channel.

---

## The full pipeline (7 steps)

### Step 1 — Generate the cinematic story (Gemini)
- **Tool:** Google Gemini (`gemini.google.com`)
- **Action:** Paste master prompt #1 (cinematic story prompt) into Gemini chat. AI returns full story.
- **Customize:** Length, genre, tone, characters
- **Output:** Plain text story
- **Orion can drive:** ✅ Yes (Chrome MCP — open Gemini, paste, copy output)

### Step 2 — Generate visual prompts (Gemini)
- **Tool:** Google Gemini
- **Action:** Paste master prompt #2 (visual generation prompt) → Gemini returns N visual prompts (default 18, customizable for length)
- **Orion can drive:** ✅ Yes
- **Math:** ~18 prompts ≈ 2-3 min finished video. For 10 min, ~60 prompts. For 30 min, ~180 prompts.

### Step 3 — Lock character consistency (Meta AI / AI Studio)
- **Tool:** Meta AI (`meta.ai`) — uses Facebook login
- **Action:** Generate a master "character reference" image first. Subsequent image prompts reference the same character via prompt-engineering tricks (seed/reference image upload).
- **Orion can drive:** 🟡 Partial — can drive prompts, but consistency is hand-tuned. Quality varies.

### Step 4 — Mass image generation (Meta AI + Chrome extension)
- **Tool:** Meta AI Imagine + an unnamed "Meta Automation" Chrome extension
- **Action:** The extension batches all 18+ image prompts through Meta AI Imagine, downloads each image automatically.
- **Orion can drive:** ❌ **No.** Chrome extensions run user-side; I cannot install or run them.
- **Workaround if executing solo:** Manually paste each prompt → wait → save → repeat 18+ times. Tedious but works. Expect 1-2 hours of clicking.

### Step 5 — Full animation automation (Google Flow + Chrome extension)
- **Tool:** Google Flow (`labs.google/fx/tools/flow`) + a second "Meta Automation" Chrome extension
- **Action:**
  1. Get camera movement prompts from Gemini (Mr Void provides a separate camera doc to upload alongside the visual prompts)
  2. Install Flow extension from Chrome Web Store
  3. Extension batches each image + animation prompt through Flow → produces 8-second Veo clips
  4. Auto-downloads each clip
  5. Review all clips. Regenerate bad ones (free).
- **Orion can drive:** ❌ **No** (extension dependency)
- **Workaround:** Manually drive Flow one image at a time. 60+ clips × 1-3 min each = 1-3 hours.
- **Free tier reality:** Flow likely caps at 5-15 generations/day on free tier. **30-min video = many days/weeks of waiting.**

### Step 6 — Voiceover + music (Google AI Studio + Gemini)
- **Voiceover:** Open Google AI Studio (`aistudio.google.com`). Pick a voice from the dramatic voice options. Click Run → generates studio-quality TTS narration. Download audio file.
- **Music:** Return to Gemini. Provide a "highly descriptive prompt" asking it to generate corresponding music. Download as high-quality audio.
- **Orion can drive:** ✅ Yes for both (text prompts + downloads)

### Step 7 — Bonus: Google Vids for action scenes
- **Tool:** Google Vids (`vids.google.com`)
- **Action:** When a scene has too much motion for the Flow workflow to capture cleanly, use Vids' built-in Veo 3 storyboard generator for that scene specifically.
- **Orion can drive:** ✅ Yes (we've already validated end-to-end Vids workflow this weekend — Time Dust + Tail End)

### Final assembly
- **Tool:** CapCut Desktop
- **Action:** Import all video clips + voiceover + music. Arrange on timeline. Export.
- **Orion can drive:** ❌ **No.** CapCut is desktop-only, not accessible via Chrome MCP. **User does this step.**

---

## Categorization: Who drives what

| Step | Orion via Chrome MCP | User must do | Blocker |
|------|----------------------|--------------|---------|
| 1. Story prompt → Gemini | ✅ | — | — |
| 2. Visual prompts → Gemini | ✅ | — | — |
| 3. Character consistency | 🟡 Partial | Hand-tune | Quality variance |
| 4. Mass image gen | ❌ | Install + run Chrome extension | Extension dependency |
| 5. Mass video animation | ❌ | Install + run Chrome extension | Extension + free-tier rate limit |
| 6. Voiceover + music | ✅ | — | — |
| 7. Vids action scenes | ✅ | — | — |
| 8. CapCut assembly | ❌ | Drag clips into timeline, export | Desktop app |

---

## Honest reality check

1. **Free-tier rate limits cap output.** Flow ≈ 5-15 video gens/day on free tier. **A 30-min video at 8-sec clips = 225 clips = 15-45 days of generation.** Mr Void's "press button, get long video" claim hides this. He's either using paid tiers or spreading across many days.

2. **Browser extensions = 90% of his "automation."** Without them, the workflow becomes manual clicking. With them, you're trusting a 3rd-party extension to drive your Google account through rate-limited APIs — which can trigger account flags or ToS violations.

3. **AI character consistency is impressive but BREAKS Parallax's brand.** Per `feedback_tiktok_format.md`: "AI-generated people get TikTok-downranked and read as ad." Parallax = grounded human stock B-roll, NOT AI characters.

4. **CapCut is still the final step.** The friction we hit yesterday (CapCut TTS UI hide-and-seek) is still in the pipeline. Mr Void doesn't address that.

---

## When this playbook IS useful

- **Fictional storytelling channels** (sci-fi, fantasy, "what if" speculative content) where AI characters are the point
- **Spinning a SECONDARY channel** alongside Parallax that runs cinematic AI shorts (different brand, different audience)
- **Test rendering Time Dust SHORTS** with Veo for a more cinematic look (would still need a single hero clip, not 30 of them)

## When this playbook is NOT useful

- **Parallax long-forms.** Time Dust + Tail End's grounded warm register would feel uncanny with AI characters/scenes. Stick with Vids' Pexels-stock matching.
- **Anything where production speed matters.** Browser-extension batching + free-tier limits + manual CapCut assembly = many hours per video.
- **Anything where the "long" claim is load-bearing.** 3 min ≠ low-performing. Tight perspective content can outperform padded 30-min.

---

## What Orion will execute on demand (no extra input from user)

When the user says "generate the Mr Void pipeline for [topic]":

1. ✅ Drive Gemini → story
2. ✅ Drive Gemini → 18+ visual prompts
3. ✅ Save prompts to a text file in `parallax/youtube/ai-runs/<topic>/`
4. ✅ Drive AI Studio → voiceover MP3 → save to local
5. ✅ Drive Gemini → music prompt → AI Studio → music MP3 → save to local
6. ✅ Drive Vids for ONE hero action scene if needed
7. ❌ User must: install extensions, run image batch, run video batch, assemble in CapCut

**Realistic time:** 30-45 min of Orion-driven work + 1-3 hours of user-side execution. Output = ~3-5 min cinematic video on free tier.

---

## Master prompts source

Mr Void's master prompts file is in his **Discord** (link in his video description). To execute this playbook fully, the user needs to:

1. Join Mr Void's Discord
2. Download the master prompts text file
3. Save to `parallax/youtube/ai-runs/MASTER-PROMPTS.txt`

Until those exist on disk, Orion can write substitute prompts but they won't match Mr Void's tested output quality.

---

## Recommended next test (when energy returns)

Don't run a full 30-min Parallax video. Instead, run **a 90-second cinematic experiment** for a non-Parallax topic to validate the pipeline:

- Topic suggestion: "The last astronaut on Mars" (1 character, simple narrative, sci-fi where AI render fits)
- 6 visual prompts → 6 video clips → 60 seconds finished
- Validates the chain end-to-end without committing days of free-tier generation

If that 90-sec experiment succeeds, we know the chain works and can decide whether to pursue longer cinematic content as a SEPARATE project. We do NOT pivot Parallax to this method.
