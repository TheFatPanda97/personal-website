#!/bin/bash

npm run build
rm -r docs/*
cp -R dist/* docs/

git add .
git commit -m "deploy"
git push