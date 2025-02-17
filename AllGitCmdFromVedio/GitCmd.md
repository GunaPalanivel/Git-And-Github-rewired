1. git --version
2. git config --global user.name 'Your Name'
3. git config --global user.email 'your.email@example.com'

4. git init
5. git config --global init.defaultBranch main
6. git status
7. git add readme.md
8. git commit -m 'Add readme.md file'
9. git add .
10. git commit -m 'Add hello and test files'
11. git log
12. git checkout <commit-hash>
13. git checkout main
14. git checkout -f main
15. git branch -m main
16. git remote add origin <repository-url>
17. git push -u origin main

git branch <branch-name>
git branch <new-branch-name> <source-branch>
git checkout <branch-name>
git checkout -b <new-branch-name>
git clone <repository-url>
git commit -m "commit message"
git merge <branch-name>
git pull
git pull origin main
git push
git push --set-upstream origin <branch-name>
git push -u origin <branch-name>

1. git branch Dev JSM
2. git checkout -b Dev Adrien
3. git commit -m "modify readme by changing the heading and adding a new line"
4. git push -u origin Dev Adrien
5. git checkout Dev JSM
6. git commit -m "today I woke up and drank some coffee then I sat at the table and added a few lines of code"
7. git push -u origin Dev JSM
8. git checkout main
9. git pull
10. git checkout Dev Adrien
11. git merge main
12. git commit -m "resolve merge conflicts"
13. git push
14. git reset --soft <commit-hash>
15. git reset --mixed <commit-hash>
16. git reset --hard <commit-hash>
17. git reset <commit-hash>
18. git log
19. git status
20. git commit -m "add GitHub console log to hello.js"
21. git commit -m "add hello console.log to hello.js"
22. git commit -m "add another console log"
