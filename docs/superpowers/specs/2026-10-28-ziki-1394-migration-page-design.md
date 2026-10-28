# Ziki #1394 Migration Page Design

## Intent

Create a public `/migrate` landing page that helps school, bootcamp, and cohort leaders recognize the cost of scattered communication and understand a low-risk path into Zedu.

## Audience

- School administrators coordinating staff, teachers, students, and announcements.
- Bootcamp operators managing cohorts, mentors, projects, and live updates.
- Learning-community leads currently combining WhatsApp, Telegram, Google Classroom, email, and shared drives.

## Page narrative

1. **Hero:** “Move your learning community out of scattered chats.” Explain that Zedu gives every cohort, update, file, and conversation a clear home. Include Book a Demo and Start for Free.
2. **Migration map:** Visually show WhatsApp, Telegram, Classroom, email, and files converging into one organized Zedu workspace without using competitor logos.
3. **Before and after:** Contrast buried updates, repeated announcements, lost files, and fragmented discussion with structured channels, searchable context, focused threads, and one shared workspace.
4. **Benefits:** Clear communication, simpler onboarding, persistent context, and room to scale.
5. **Three-step path:** Map current spaces, set up the Zedu structure, then launch one cohort at a time.
6. **FAQ:** Address data migration, coexistence with current tools, setup effort, audience fit, and demo/onboarding support.
7. **Closing CTA:** Repeat Book a Demo and Start for Free.

## Visual direction

- Extend the existing Zedu marketing world: white canvas, primary violet, rounded surfaces, restrained blue tint, Plus Jakarta/marketing typography, existing pill buttons.
- The hero’s migration map is the signature element: source tools sit on the left, directional paths converge into a structured Zedu workspace on the right.
- Keep sections spacious and editorial; do not create a wall of identical feature cards.
- Use Lucide icons already installed; no new imagery or dependencies.

## Direction contract

**THESIS:** Migration is shown as a change in information architecture, not a magic import. The page refuses the category-default stack of generic feature cards by making scattered conversations visibly converge into one ordered learning workspace.

**OWN-WORLD:** Extend Zedu's established white and violet world with deep-blue text, lavender fields, rounded structural panels, thin connector lines, and compact tool labels. The migration map is diagrammatic and tactile while every control remains an existing Zedu pill button.

**STORY:** A learning leader first recognizes familiar fragmentation, sees what organized communication changes, then receives a credible three-step rollout path. The repeated actions are to book a guided demo or start a workspace for free.

**FIRST VIEWPORT:** A left-led editorial headline and paired calls to action occupy the first half. Beside them, plain-text source tools flow through visible paths into a larger Zedu workspace containing named cohort channels, updates, and resources. On mobile, the same story becomes a vertical top-to-bottom flow without hiding content.

**FORM:** Established-world extension, migration-map structure, first choice from the approved design brief. `seed: none (brief-pinned direction)`.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Content constraints

- Do not claim automated import support that does not exist.
- Say “move” and “set up” rather than promising one-click migration.
- Do not use unsupported percentages, customer counts, or time-saving claims.
- Competitor names may appear as plain text for comparison; do not use their logos.

## Accessibility and responsive behavior

- One clear H1 and logical H2/H3 hierarchy.
- Semantic ordered migration steps and FAQ details.
- CTAs are links to `/contact-sales` and `/auth/sign-up`.
- Migration map remains readable as a vertical flow on small screens.
- Focus states inherit shared button/link behavior; decorative lines are hidden from assistive technology.

## Discoverability

- Add “Migrate to Zedu” to the Solutions dropdown and footer.
- Add title, description, keywords, canonical `/migrate`, Open Graph, Twitter card, index/follow robots, category, application name, creator, and publisher metadata.

## Acceptance criteria

- `/migrate` renders publicly with the full narrative, FAQ, and working CTAs.
- Page is linked from marketing navigation and footer.
- Metadata is complete and points to `/migrate`.
- Existing marketing styling and routes remain intact.
- Cypress contract, formatting, lint, TypeScript, and production build pass.
