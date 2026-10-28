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
pnpm exec cypress run --spec cypress/e2e/migrate.cy.ts
pnpm build
```

## Deliver

```bash
git push -u fork feat/ziki-1394-migration-page
gh pr create \
  --repo zeduchat/zedu-fe \
  --base central-staging \
  --head AbdKabeer1:feat/ziki-1394-migration-page
```
