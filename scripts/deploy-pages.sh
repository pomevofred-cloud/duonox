#!/usr/bin/env bash
# Deploy the static export to the gh-pages branch (GitHub Pages).
# Usage: npm run deploy   (from the duonox/ project root)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building static export (DEPLOY_TARGET=pages)…"
rm -rf .next out
DEPLOY_TARGET=pages npm run build
touch out/.nojekyll

echo "→ Updating gh-pages branch…"
WT="$(mktemp -d)"
git fetch -q origin gh-pages || true
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
  git worktree add -q --checkout "$WT" -B gh-pages origin/gh-pages
else
  git worktree add -q --orphan -b gh-pages "$WT"
fi

# Replace tracked contents with the fresh export.
find "$WT" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R out/. "$WT/"

cd "$WT"
git add -A
if git diff --cached --quiet; then
  echo "→ No changes to deploy."
else
  git commit -q -m "Deploy Duonox static site $(date -u +%Y-%m-%dT%H:%MZ)"
  git push -q origin gh-pages
  echo "→ Deployed. Live at https://pomevofred-cloud.github.io/duonox/"
fi

cd "$ROOT"
git worktree remove --force "$WT"
