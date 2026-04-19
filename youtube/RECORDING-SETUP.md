# Recording Setup — One-Time Installation Guide

Do this ONCE, before Saturday 2026-04-26. Should take 25-40 minutes total.

If you hit a wall on any step, just tell Orion the step number and what's stuck.

---

## Step 1 — Install OBS Studio (free screen recorder)

**Download:** https://obsproject.com/download
(Pick the Windows 64-bit installer.)

During setup, just click Next through everything. Default settings are fine.

### First-launch settings (5 min)

When you open OBS the first time:

1. **Auto-Configuration Wizard pops up** → pick **"Optimize for recording, I will not be streaming"** → Next
2. Base resolution: **1920×1080** → Next
3. Let it run the test → Apply settings
4. Top menu: **File → Settings → Output**
5. Change:
   - **Recording Format:** `mp4`
   - **Recording Quality:** "High Quality, Medium File Size"
6. **File → Settings → Video**
7. Change:
   - **Base (Canvas) Resolution:** `1080×1920` (this is the vertical Shorts size)
   - **Output (Scaled) Resolution:** `1080×1920`
   - **FPS:** `60`
8. Click **Apply**, then **OK**.

### Create your "Parallax" scene (5 min)

1. In OBS bottom-left: **Scenes** → click **+** → name it "Parallax"
2. **Sources** (bottom middle): click **+** → **Display Capture** → name it "Screen" → OK → OK
3. You should now see your screen inside OBS. Resize it to fill the vertical canvas.
4. Click **+** again → **Audio Input Capture** → pick your mic from the dropdown.

### Test recording

1. In Chrome, open `https://parallax-phi-ten.vercel.app/age-on-other-planets/`
2. Make the Chrome window narrow (drag right edge toward the middle — phone-shaped)
3. In OBS, click **Start Recording**
4. Speak into your mic: "Test one two three, this is the Parallax test."
5. Do 3-4 clicks on the page
6. In OBS click **Stop Recording**
7. OBS bottom bar shows where the file saved (usually `C:\Users\Eddie\Videos`)
8. Play the file. Does it:
   - Show your screen clearly? ✅
   - Play your voice clearly? ✅
   - No background noise (fridge, fan, truck outside)? ✅

If the audio is muddy or quiet, open OBS → Settings → Audio → Sample Rate 48 kHz.

---

## Step 2 — Install CapCut (free video editor)

CapCut is the fastest editor for Shorts. Used by every major creator.

**Download:** https://www.capcut.com/ → "Download" → pick **Desktop** (Windows)

Install is one-click. No account needed; you can sign up with Google if prompted.

### First-use orientation (5 min)

Open CapCut → **+ New Project**.

The 4 things you need to know:
1. **Media panel (top left):** Drop your OBS recording here.
2. **Preview (top right):** What your video looks like.
3. **Timeline (bottom):** Drag clips here. Trim by dragging edges.
4. **Text / Audio / Effects (left sidebar):** Add captions, sounds, etc.

For Parallax videos, your workflow is:
1. Drag your OBS recording into Media.
2. Drag it to the timeline.
3. Drag your voiceover (if recorded separately) to the audio track below it.
4. Trim both to match.
5. Export as **1080×1920 MP4, 60fps, High quality**.

### First test

1. Drop your OBS test recording into CapCut.
2. Drag to timeline.
3. Click **Export** (top right) → pick 1080×1920 preset → Export.
4. Watch the exported file. It should look like a YouTube Short.

---

## Step 3 — Mic check

You said you have a mic. Good.

**Quick quality test:**
1. Record 10 seconds of yourself speaking normally in OBS.
2. Play it back.
3. Answer honestly:
   - Is there a hiss / hum in the background?
   - Do your S's sound like static?
   - Is there a weird echo from the room?

If any of those → **simple fixes before recording:**
- Record in a smaller room (not the living room)
- Put a blanket over your mic area on a shelf (absorbs echo)
- Close windows; turn off fans
- Record at 7 PM or after — quieter time of day

If the mic is just bad (unavoidable hiss), a $30 Samson Q2U or Fifine K669 fixes it permanently. Not urgent.

---

## Step 4 — Chrome setup for screen recordings

Before Saturday:

1. Create a new Chrome profile called "Recording" (top right avatar → Add)
2. In that profile, only install no extensions. Hide the bookmarks bar (Ctrl+Shift+B).
3. Zoom level: **100%** (Ctrl+0 to reset)
4. Window size: drag to phone-proportions before recording (roughly 450 × 800 pixels)
5. Bookmark https://parallax-phi-ten.vercel.app for easy access

**Why a separate profile:** No autocomplete popups, no cookie banners, no "you have 12 tabs" warnings, no notifications. Clean recordings.

---

## Step 5 — Saturday morning pre-flight

On recording day, before you sit down:

- [ ] OBS set to **Start Recording** shortcut → F9 (File → Settings → Hotkeys)
- [ ] Chrome "Recording" profile open
- [ ] Parallax tab loaded
- [ ] Mic plugged in
- [ ] Script printed or on second monitor
- [ ] House quiet, phone on Do Not Disturb
- [ ] Glass of water nearby

You're ready.

---

## If anything goes wrong

Pick the Step number where you're stuck and send me a message like:
> "Stuck on Step 2, CapCut crashes when I drop the file in"

I'll walk you through the fix. Don't spin your wheels for more than 15 min on any one step.
