#!/usr/bin/env sh

# abort on errors
set -e

# build the app
npm run build

# go into the build output directory
cd dist

# add a CNAME file for your custom domain
echo 'marcauscruz.com' > CNAME

# initialize a fresh Git repo in dist/
git init
git add -A
git commit -m 'deploy'

# force push to the gh-pages branch of your "gateway" repo
git push -f git@github.com:Marcaus-Cruz/gateway.git main:gh-pages

# go back to the root
cd -