yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" && 
git remote add origin git@github.com:DuckZZZzzz/gulu-duck-ui.git &&
git push origin master -f -u &&
cd .. 
echo https://duckzzzzzz.github.io/gulu-duck-ui/#/