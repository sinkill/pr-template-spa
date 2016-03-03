#!/bin/sh

git reset --hard HEAD
git clean -f -d
git pull

npm run build