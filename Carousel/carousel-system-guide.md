# How I Make Viral Carousels With Claude (The Full System)

Claude sucks at carousels.

Not because it can't do it. Because it has no system and no taste. Ask it for a carousel and you get walls of text, ten competing ideas per slide, and design suggestions that look like a 2015 PowerPoint.

I fixed it with two skills and one workflow. This guide is the entire system: the exact process, the prompts, and both skills as files you can install and edit. Nothing held back.

Here's the short version:

1. Plan the copy first with /carousel-copy
2. Give Claude taste with /design-taste
3. Generate 3 hook variants, iterate until one stops your scroll
4. Lock a visual anchor and clone it across every value slide
5. Give the CTA the same treatment as the hook

Now the long version.

---

## Step 0: Why copy comes before images

Every bad carousel starts the same way: someone opens an image tool and starts designing. The result looks fine and performs terribly, because the structure was never planned.

Copy decides structure. Design amplifies it. You cannot amplify a structure that doesn't exist.

So the first thing that happens in my process has nothing to do with images. It's a planning session with Claude.

---

## Step 1: Plan every slide with /carousel-copy

I built a Claude skill called /carousel-copy. You give it an idea, it gives you back a complete slide plan: slide count, exact text per slide, and a visual direction for each one.

The skill enforces rules I learned the hard way:

**Hook encapsulates the pain point.** The first slide states the problem or a bold claim in two lines max. No setup, no subtitle.

**No framework slide.** Never put a "here's what we'll cover" slide after the hook. Slide 2 is where drop-off happens. It has to deliver the first payoff, not restate the promise.

**One idea per slide.** If you need "and" to describe what a slide teaches, it's two slides.

**Word budget: 25 words max per slide.** Not just for readability. Image models mangle long text. Short copy is what makes the generation step actually work. Anything longer than 25 words becomes a diagram, not body text.

**Every slide specifies its visual.** The copy isn't done until each slide has a one-line visual direction. Rules, lists, and comparisons live in diagrams, not paragraphs.

**CTA gets hook treatment.** The last slide is written with the same care as the first. One action, stated plainly.

[IMAGE: screenshot of the /carousel-copy output, the full slide plan for this exact carousel]

The output of this step is a document. Slide by slide: role, title, body lines, visual direction. That document is the input for everything that follows.

---

## Step 2: Give Claude taste with /design-taste

Here's the thing nobody tells you about image models: they have no design opinion. Zero. They'll happily generate cramped text, three accent colors, and gradients from 2021.

So I hardcoded my design opinion into a second skill called /design-taste. It's a design system that gets injected into every single image prompt automatically:

- Generous margins, nothing touches the edges
- One dominant element per slide (the title, readable at thumbnail size)
- One accent color, used in three places max
- Bold condensed type for titles, clean sans for body
- Visual metaphors instead of paragraphs
- Recurring furniture: a step label, a page arrow, consistent on every slide

The skill also contains a prompt template. Every slide prompt follows the same skeleton: format, style, layout, exact text in quotes, visual description, and negative instructions (no extra text, no watermarks, no gradient soup).

[IMAGE: the design-taste rules card, or a screenshot of the skill file]

The magic phrase in every prompt is this: quote the exact text and add "render this text exactly, no other words." Image models are much better at text than they used to be, but they still improvise if you let them.

---

## Step 3: Connect Claude to an image model

This is the step people overcomplicate, so let me resolve it properly.

"Connecting" Claude to an image model can literally mean copy-paste. Claude does the thinking (copy, structure, prompts). The image model does the rendering. The bridge between them can be as dumb as two browser tabs.

Here are your options, from easiest to most automated. I'm not affiliated or sponsored by any of these.

**Option A: ChatGPT (easiest, start here).** OpenAI's GPT Image 2 is the current best-in-class for rendering text inside images, and it's available straight inside ChatGPT, including on the free tier. The workflow: Claude gives you the prompt, you paste it into ChatGPT, you attach your reference images, it generates. That's it. No API keys, no setup. GPT Image 2 also handles reference images at high fidelity automatically, which is exactly what the anchor workflow in Step 5 needs.

**Option B: Higgsfield MCP (what I use, generation happens inside Claude).** Higgsfield has an MCP connector for Claude, which means Claude can call the image model directly instead of you copy-pasting. Prompt, generate, iterate, all in one chat. Slightly more setup (connect it once in Claude's connector settings), and it gives you access to multiple image models in one place. Not sponsored, it's just what stuck in my workflow.

**Option C: API routes (for builders).** If you live in Claude Code, you can wire gpt-image-2 through the OpenAI API, or through providers like fal.ai or Replicate, and script the whole pipeline. Overkill for your first carousel. Nice once you're producing weekly.

My honest recommendation: start with Option A. The copy-paste friction is smaller than it sounds, and you'll understand the workflow before you automate it.

---

## Step 4: Generate 3 hooks, not 1

The hook slide is the most important image in the carousel, so it never gets one attempt.

The process:

1. Collect 2 or 3 reference images of slides you love. Not to copy, but to steal the feeling: layout, texture, type treatment.
2. Have Claude (with /design-taste loaded) write 3 hook prompts that are structurally different. Not color swaps. Different layouts, different visual metaphors.
3. Generate all 3. Attach your references each time.
4. Pick the direction that stops YOUR scroll, then iterate rounds on that one: fix the type size, tighten the margins, kill the extra accent color.

[IMAGE: hook variant 1, first generation]
[IMAGE: hook variant 2, first generation]
[IMAGE: hook variant 3, first generation]
[IMAGE: the winning hook after 2 to 3 iteration rounds, side by side with its first draft]

The test is brutal and simple: if the hook doesn't stop you, it won't stop them. You made it and you're biased toward liking it. If even you scroll past it, it's dead.

Iteration notes from doing this a lot:

- If text comes out misspelled, don't just re-roll. Cut words or make the type bigger. Fewer, bigger words is the fix.
- If the layout is busy, remove one element. Diagrams need three components max.
- Two to four iteration rounds is normal. If you're on round seven, the prompt is wrong, not the model.

---

## Step 5: Lock the anchor

This is the step that makes a carousel look like one designer made it instead of six random generations stapled together.

1. Take your first value slide and run the same 3-variant process as the hook.
2. Pick the winner. That image is now your anchor.
3. For every remaining value slide, attach the anchor as a reference image and use a prompt that says: match this layout, typography, palette, and spacing exactly. Change only the text and the diagram.

[IMAGE: the 3 value slide variants]
[IMAGE: the chosen anchor slide]
[IMAGE: 3 or 4 finished value slides side by side, visibly the same family]

The anchor does two jobs. It keeps the visual system consistent without you re-describing it every prompt, and it makes iteration faster because the model is editing a known layout instead of inventing a new one each time.

If a slide drifts off-style, the fix is always the same: re-attach the anchor and add "do not change the layout, type, palette, or margins" to the prompt.

---

## Step 6: The CTA is a hook

Most people phone in the last slide. Big mistake. The last slide is the one people share from, screenshot, and act on.

So the CTA gets the exact same treatment as the hook: 3 structurally different variants, iterate, pick the winner. It should stay in the same visual family as the rest of the carousel (same palette, same type), but it's allowed to break the layout for emphasis.

One rule on the copy: one action only. Comment a keyword, or tap the link, or follow. Never two. Every extra option cuts your conversion.

[IMAGE: the 3 CTA variants]
[IMAGE: the final CTA slide]

---

## The full pipeline, start to finish

1. Idea goes into Claude with /carousel-copy. Out comes a slide plan: count, text, visual directions.
2. /design-taste turns each slide into an image prompt with the design system baked in.
3. Prompts go to the image model (ChatGPT is the easiest start).
4. Hook: 3 variants, iterate to a winner.
5. First value slide: 3 variants, winner becomes the anchor.
6. Remaining value slides: anchor attached as reference, content swapped.
7. CTA: 3 variants, same as the hook.
8. Post it.

Total time once you have the skills installed: about an hour for a 7-slide carousel, most of it spent on hook iterations. Which is exactly where the time should go.

---

## Install the skills

Both skills are included with this guide as SKILL.md files:

- **carousel-copy** handles Step 1: the slide plan.
- **design-taste** handles Steps 2 through 6: the prompts, the design system, the anchor workflow.

Drop them into your Claude skills folder (in Claude Code: your skills directory; in Claude.ai: upload them to a project or paste the contents at the start of a chat).

They're deliberately generic. My specific brand choices (paper texture, one orange accent, condensed type) live in clearly marked "customize this" sections. Swap in your own palette, fonts, and slide furniture, and the logic still holds. The rules about structure, word budgets, variants, and anchoring are not style choices. They're what makes the system work regardless of how your slides look.

Now go make Claude good at carousels.
