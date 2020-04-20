#!/bin/bash

npm run build
cd docs
rm -v -r !("CNAME")
cd ..
cp -R dist/* docs/

git add .
git commit -m "deploy"
git push