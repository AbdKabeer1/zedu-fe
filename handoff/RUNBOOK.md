# Runbook

## Setup

```bash
pnpm install
pnpm dev
```

## Verify

```bash
pnpm check-format
pnpm check-lint
pnpm check-types
pnpm exec cypress run \
  --config baseUrl=http://localhost:3000 \
  --spec cypress/e2e/migrate.cy.ts
pnpm build
```

Expected scoped result: 4 Cypress tests pass. Repository lint currently exits 0 with 134 pre-existing warnings outside this issue's files.

## Deliver

```bash
git push -u fork feat/ziki-1394-migration-page
gh pr create \
  --repo zeduchat/zedu-fe \
  --base central-staging \
  --head AbdKabeer1:feat/ziki-1394-migration-page
```
