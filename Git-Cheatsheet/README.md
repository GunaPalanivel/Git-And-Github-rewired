# 🚀 Mastering Git Commands

## 📌 Introduction

Git is an essential tool for version control, widely used in software development to manage source code efficiently. This guide provides a deep understanding of fundamental and advanced Git commands, helping developers streamline their workflow and enhance collaboration.

## 🛠 Git Commands Overview

This guide covers essential Git commands, including:

- **Staging changes (git add)**
- **Committing changes (git commit)**
- **Viewing commit history (git log)**
- **Undoing commits (git reset and git revert)**
- **Managing stashes (git stash)**
- **Pushing changes to remote (git push)**

Each section includes clear explanations, real-world applications, and best practices.

---

## 🔍 1. Staging Changes: git add

Moves changes from the working directory to the staging area.

### _Usage:_

```bash
# Add all changes to staging

git add .
```

```bash
# Add a specific file to staging

git add <file>
```

_Real-world Use Case:_ When modifying multiple files but only wanting to commit specific ones, use git add <file> to selectively stage changes.

---

## ✅ 2. Committing Changes: git commit

Saves staged changes with a descriptive message.

### _Usage:_

```bash
git commit -m "Descriptive commit message"
```

_Best Practice:_ Use clear, concise commit messages that describe the changes made.

---

## 🔄 3. Resetting Commits: git reset

Moves the HEAD to a previous commit and modifies the working directory.

### _Types of Reset:_

```bash
# Soft Reset: Keeps changes staged

git reset --soft <commit-hash>
```

```bash
# Mixed Reset: Unstages changes but keeps files

git reset --mixed <commit-hash>
```

```bash
# Hard Reset: Discards all changes

git reset --hard <commit-hash>
```

_⚠ Use Caution:_ git reset --hard is irreversible and will delete all uncommitted changes.

---

## 🔁 4. Reverting Commits: git revert

Creates a new commit that undoes a previous commit while preserving history.

### _Usage:_

```bash
git revert <commit-hash>
```

_Best Practice:_ Use git revert instead of git reset in shared repositories to maintain commit history.

---

## 🎭 5. Stashing Changes: git stash

Temporarily saves uncommitted changes, allowing a clean working directory.

### _Usage:_

```bash
# Save current work

git stash
```

```bash
# List all stashes

git stash list
```

```bash
# Apply a specific stash

git stash apply stash@{0}
```

_Real-world Use Case:_ Useful when switching branches but not ready to commit current work.

---

## 📂 6. Checking Status: git status

Displays the state of the working directory and staging area.

### _Usage:_

```bash
git status
```

_Best Practice:_ Run git status frequently to avoid accidental commits or untracked files.

---

## 🚀 7. Pushing Changes: git push

Uploads local commits to a remote repository (e.g., GitHub, GitLab).

### _Usage:_

```bash
git push
```

_Best Practice:_ Always pull the latest changes from the remote repository before pushing new commits.

---

## 💡 Best Practices

1. _Commit Frequently_ – Small, meaningful commits improve traceability.
2. _Use Descriptive Commit Messages_ – Avoid vague messages like "Updated files".
3. **Prefer git revert Over git reset --hard** – Keeps history intact in team projects.
4. **Check git status Regularly** – Avoid accidental commits or untracked files.
5. **Use git stash Before Switching Branches** – Prevents loss of work.

---

## 📘 Conclusion

Mastering these Git commands will significantly enhance your version control workflow, making collaboration and code management seamless. Whether working solo or in a team, understanding these commands ensures efficiency and reliability in software development.

Happy coding! 🚀
