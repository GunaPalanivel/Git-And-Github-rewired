git reset

git revert

git checkout

git cherry-pick

git stash

---

git blame

---

git --version

git config --global user.name 'Your Name'

git config --global user.email 'your.email@example.com'

---

git init

git config --global init.defaultBranch main

---

git status

git add readme.md

git commit -m 'add readme.md file'

git add .

git commit -m 'add hello and test files'

git log

git checkout <commit-hash>

git checkout main

git checkout -f main

---

git branch -m main

git remote add origin <repository-URL>

git push -u origin main

---

git branch <branch-name>

git checkout <branch-name>

git checkout main

git checkout -b <new-branch-name>

git branch <new-branch-name> <source-branch>

git add .

git commit -m "<commit-message>"

git push --set-upstream origin <branch-name>

git push -u origin <branch-name>

git push

git pull

---

git checkout main

git merge <branch-name>

git pull

git pull origin main

---

git branch DevJSM

git checkout -b DevAdrien

git add .

git commit -m "Modify read me by changing the heading and adding a new line"

git push -u origin DevAdrien

git checkout DevJSM

git add .

git commit -m "Today I woke up and drank some coffee then I sat at the table and added a few lines of code"

git push -u origin DevJSM

git checkout main

git pull

git checkout DevAdrien

git merge main

git add .

git commit -m "Resolve merge conflicts"

git push

---

git add .

git add <file>

git checkout <commit-hash>

git commit -m "commit message"

git log

git log --oneline

git reset --soft <commit-hash>

git reset --mixed <commit-hash> # Default mode, no flag needed

git reset --hard <commit-hash>

git reset <commit-hash>

git revert <commit-hash>

git revert --continue

git stash

git stash list

git stash apply stash@{0}

git status

git push
