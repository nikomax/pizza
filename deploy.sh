gulp build
cd build
git init
git remote add origin https://github.com/pizza-app/pizza-app.github.io.git
git add -A
git commit -m "Build"
git push -f origin master
