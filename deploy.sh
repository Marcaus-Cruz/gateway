#!/usr/bin/env sh

# Abort on errors
set -e

# Build your app (this must happen first!)
npm run build-only

# Go into the dist folder
cd dist

# Add CNAME for custom domain
echo 'marcauscruz.com' > CNAME

# Initialize a new Git repository
git init
git add -A
git commit -m 'deploy'

# Add GitHub remote and push to gh-pages
git remote add origin git@github.com:Marcaus-Cruz/gateway.git
git push -f origin master:gh-pages

# Go back to previous directory
cd -