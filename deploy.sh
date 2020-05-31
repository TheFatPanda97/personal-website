#! /bin/bash

npm run build
shopt -s extglob
cd docs
rm -r !(CNAME)
cd ..
cp -R dist/* docs/

git add .
git commit -m "deploy"
git push