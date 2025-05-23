#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vitepress build

# 进入生成的文件夹
cd .vitepress/dist

# # 如果是发布到自定义域名
# # echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'build: deploy site docs'

# # 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/yanyue404/cook.git master:gh-pages

cd -
