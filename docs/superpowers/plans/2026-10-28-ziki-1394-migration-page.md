# Ziki #1394 Migration Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a responsive, SEO-ready `/migrate` marketing page that converts teams moving from fragmented education tools into Zedu demos or signups.

**Architecture:** Build one server-rendered App Router page using existing marketing buttons and Lucide icons, with static typed content arrays for benefits, steps, and FAQ. Add navigation/footer discovery links and one Cypress route contract; no client state, backend calls, or dependencies.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Lucide React, Cypress.

**Spec:** `docs/superpowers/specs/2026-10-28-ziki-1394-migration-page-design.md`

## Global Constraints

- Reuse `ArrowBtn`, `OutlineBtn`, and existing marketing tokens.
- CTAs target `/contact-sales` and `/auth/sign-up`.
- No unsupported import automation or numerical claims.
- No new dependencies, protected configuration, or unrelated page changes.

## Review Focus

- Mobile migration map remains ordered and readable without horizontal overflow.
- Plain competitor names do not imply official partnerships.
- FAQ details remain keyboard-accessible without client JavaScript.
- Metadata canonical and Open Graph URL resolve to `/migrate`.
- Desktop and mobile navigation both expose the new route through the existing data arrays.

---

### Task 1: Route contract

**Files:**

- Create: `cypress/e2e/migrate.cy.ts`

- [x] Add a Cypress contract for route 200, H1, both CTA hrefs, before/after content, three migration steps, five FAQ questions, and no horizontal overflow at desktop/mobile widths.
- [x] Run the spec against the pre-implementation app and verify RED because `/migrate` is missing.

### Task 2: Migration landing page

**Files:**

- Create: `src/app/(homepage)/migrate/page.tsx`

- [x] Add complete metadata.
- [x] Implement the hero, migration map, before/after, benefits, three-step path, FAQ, and closing CTA.
- [x] Reuse shared buttons and Lucide icons.
- [x] Run Cypress and verify GREEN.
- [x] Commit: `feat: add migration marketing page`.

### Task 3: Marketing discovery links

**Files:**

- Modify: `src/app/(homepage)/_components/header/index.tsx`
- Modify: `src/app/(homepage)/_components/footer/index.tsx`

- [x] Add “Migrate to Zedu” to the Solutions arrays used by desktop and mobile navigation and footer.
- [x] Extend Cypress to verify both discovery links.
- [x] Commit: `feat: link migration page from marketing navigation`.

### Task 4: Verification and delivery

**Files:**

- Create: `handoff/README.md`, `handoff/STATUS.md`, `handoff/DECISIONS.md`, `handoff/RUNBOOK.md`

- [x] Run format, lint, TypeScript, Cypress, and production build.
- [x] Complete desktop/mobile screenshot QA and run the Impeccable detector.
- [x] Review the target diff for scope and secrets.
- [ ] Push, open the PR, and link it to Ziki #1394 with test evidence.
