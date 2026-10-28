---
name: Zedu
description: Clear, education-first collaboration in a light violet workspace.
colors:
  primary-violet: "#7141F8"
  primary-hover: "#8D67FA"
  primary-soft: "#F3F1FF"
  primary-border: "#C6B3FC"
  learning-indigo: "#303073"
  content-blue: "#4A4AAF"
  body-gray: "#525252"
  border-gray: "#E5E5E5"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Lato, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Lato, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Lato, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Lato, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  control: "9999px"
  panel: "24px"
  feature: "32px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary-violet}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.learning-indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  feature-panel:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.learning-indigo}"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: Zedu

## Overview

**Creative North Star: "The Organized Learning Workspace"**

Zedu's public experience makes complicated education coordination feel ordered and approachable. White space carries most pages; violet identifies decisions, movement, and the product itself; deep indigo gives headlines authority without becoming corporate. Product demonstrations should show real learning structures—cohorts, channels, resources, and people—rather than generic software decoration.

**Key Characteristics:**

- Light, spacious, and education-first.
- Violet action color with deep-indigo editorial hierarchy.
- Rounded controls and structural panels, not a page made entirely of cards.
- Product-specific diagrams and workspace examples instead of invented metrics.

## Colors

Primary violet owns calls to action and focused product states. Pale violet creates quiet structural fields, while deep indigo anchors headings and dark sections. Neutral grays support long-form copy and dividers.

**The Violet Means Action Rule.** Reserve saturated violet for controls, active states, directional cues, and decisive branded regions; do not scatter it as decoration.

## Typography

**Display Font:** Lato (sans-serif fallback)
**Body Font:** Lato (sans-serif fallback)

The type system is direct and highly legible. Display copy uses tight tracking and compact leading; body copy opens up to support scanning and comprehension.

### Hierarchy

- **Display:** Semibold, fluid 36–64px, 1.08 line height; one H1 per marketing page.
- **Headline:** Semibold, fluid 30–48px, approximately 1.1 line height; section arguments.
- **Title:** Semibold, 18–20px; feature and step names.
- **Body:** Regular, 16–20px, 1.6–1.75 line height; keep explanatory blocks near 65 characters.
- **Label:** Semibold, 14px; controls and compact interface labels.

**The Heading Carries the Section Rule.** Do not add decorative eyebrows above headings; use the heading's wording, scale, and surrounding space to establish hierarchy.

## Layout

Marketing pages use centered containers up to roughly 1280–1400px, 16px mobile gutters, and progressively larger tablet and desktop gutters. Sections generally carry 80–112px vertical padding. Alternate editorial text, product demonstration, dense structure, and quiet space instead of repeating one card grid. Multi-column compositions collapse into one ordered vertical flow below the large breakpoint.

## Elevation & Depth

The system is flat by default. Borders and tonal violet layers create most hierarchy. Use broad, low-opacity shadows only for a focal product object that must sit above its field; avoid equal shadows on every container.

**The One Focal Lift Rule.** A section may elevate its principal product demonstration, while supporting content remains border- or tone-defined.

## Shapes

Actions are fully rounded pills. Content panels use generous 24px corners; major branded fields may reach 32px. Small nested interface rows use 12–16px corners. Thin, neutral or pale-violet borders preserve definition on white backgrounds.

## Components

### Buttons

- **Primary:** Saturated violet, white label, pill shape, 12px × 24px padding; hover shifts to the lighter violet step.
- **Outline:** White or transparent surface, 1px violet border, deep-indigo label; hover fills violet and reverses the label to white.
- **Arrow action:** The existing circular arrow mark follows the label and moves slightly on hover.

### Cards / Containers

- Use panels to communicate a real grouping or workspace object, not to wrap every paragraph.
- Pale violet supports demonstrations; white supports nested content; dark indigo owns high-contrast process sections.
- Use 1px borders for structure and reserve ambient shadow for a single focal object.

### Navigation

Desktop navigation is a white fixed bar with compact text links, dropdown solutions, and paired outline/primary actions. Mobile navigation reduces to the brand and menu trigger; items remain available through the same source arrays.

### Migration Map

Source tools flow through a visible directional cue into a larger Zedu workspace. Plain-text source names avoid implying competitor partnerships. On mobile the map becomes vertical without hiding or reordering the story.

## Do's and Don'ts

### Do:

- **Do** demonstrate how learning communication becomes structured.
- **Do** use generous section spacing and clear heading scale.
- **Do** keep mobile reading order complete and obvious.
- **Do** use existing shared buttons and the Lucide stroke-icon family.

### Don't:

- **Don't** invent migration automation, customer proof, or performance metrics.
- **Don't** build whole pages from identical icon cards.
- **Don't** introduce decorative gradients, glass, or heavy shadows where content should carry the idea.
- **Don't** use competitor logos or imply an official partnership.
