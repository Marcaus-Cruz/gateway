#!/usr/bin/env sh

# Abort on errors
set -e

# Build your app
npm run build-only

# Go into the dist folder
cd dist

# Clean any previous git history (very important!)
rm -rf .git

# Add CNAME for custom domain
echo 'marcauscruz.com' > CNAME

# Initialize a new Git repository
git init
git checkout -b master
git add -A
git commit -m 'deploy'

# Add GitHub remote and push to gh-pages branch
git remote add origin git@github.com:Marcaus-Cruz/gateway.git
git push -f origin master:gh-pages

# Go back
cd -
