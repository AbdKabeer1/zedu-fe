# Decisions

## Honest migration positioning

- The page explains a guided move and organized setup.
- It does not promise automated imports or fabricated performance results.

## Existing marketing system

- Reuse Zedu’s violet palette, rounded surfaces, shared CTA components, and Lucide icons.
- No new image assets or dependencies are required.

## Clean staging branch

- The issue exists against Zedu’s staging repository state.
- A target-based branch avoids unrelated team-fork commits.

## Focused browser contract

- Missing local public API environment values make the global data provider parse a local HTML fallback as JSON.
- The migration Cypress spec suppresses only that exact baseline `Unexpected token '<'` exception so route assertions remain meaningful; production code is unchanged.

## Visual review corrections

- Added a computed-style regression assertion after review found white text on a white before-panel override.
- Removed decorative section kickers and preserved the headings, migration map, and three-step narrative.
