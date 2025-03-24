# 🚀 Git Workflow: Managing Feature Branches and Merging with Best Practices

## 🔹 Overview

This guide outlines an efficient workflow for creating and managing Git branches, committing changes, and resolving merge conflicts while following best practices.

---

## 📌 Step 1: Creating and Switching Branches

### **Create a New Branch (`DevJSM`)**

```bash
git branch DevJSM
```

**Use Case:**  
This creates a new branch named `DevJSM` without switching to it. It is useful when you need to create multiple branches at once but don’t need to work on them immediately.

### **Create and Switch to a New Branch (`DevAdrien`)**

```bash
git checkout -b DevAdrien
```

**Use Case:**  
This command creates the `DevAdrien` branch and immediately switches to it. This is useful when you want to start working on a new feature without running two separate commands (`git branch` and `git checkout`).

---

## 📌 Step 2: Staging and Committing Changes

### **Stage All Changes**

```bash
git add .
```

**Use Case:**  
Stages all modified and new files for commit. However, using `git add .` blindly can sometimes include unintended files. It’s recommended to use:

```bash
git add <specific-file>
```

to have more control over what gets committed.

### **Commit Changes with a Meaningful Message**

```bash
git commit -m "Modify README by changing the heading and adding a new line"
```

**Best Practice:**

- Keep commit messages concise but descriptive.
- Avoid unnecessary personal notes in commit messages.
- Follow the convention:
  ```
  <type>: <subject>
  ```
  Example:
  ```
  feat: Add user authentication module
  fix: Resolve issue with API timeout
  ```

---

## 📌 Step 3: Pushing Changes to Remote Repository

### **Push Changes to Remote Branch**

```bash
git push -u origin DevAdrien
```

**Use Case:**

- Pushes the `DevAdrien` branch to the remote repository (`origin`).
- The `-u` flag sets `DevAdrien` as the upstream branch, so future pushes can simply be done using `git push`.

---

## 📌 Step 4: Switching Between Branches

### **Switch to an Existing Branch (`DevJSM`)**

```bash
git checkout DevJSM
```

**Use Case:**  
Switching back to `DevJSM` to work on another set of changes. Always **commit or stash** your changes before switching to avoid conflicts.

---

## 📌 Step 5: Committing Changes on Another Branch

```bash
git add .
git commit -m "Refactored the function for better performance"
git push -u origin DevJSM
```

❌ **Bad Commit Message Example:**

```
"Today I woke up and drank some coffee then I sat at the table and added a few lines of code"
```

✔ **Better Commit Message Example:**

```
"refactor: Improve function efficiency and reduce runtime complexity"
```

**Best Practice:**

- Keep commit messages relevant to the actual code changes.
- Avoid vague descriptions; instead, specify what was modified and why.

---

## 📌 Step 6: Syncing with the Main Branch

### **Switch to Main Branch**

```bash
git checkout main
```

### **Pull the Latest Changes**

```bash
git pull
```

**Use Case:**  
This fetches and integrates changes from the remote `main` branch into your local repository. Always do this before merging to avoid conflicts.

---

## 📌 Step 7: Merging Main into `DevAdrien` and Resolving Conflicts

### **Switch to `DevAdrien`**

```bash
git checkout DevAdrien
```

### **Merge `main` into `DevAdrien`**

```bash
git merge main
```

**Use Case:**

- This integrates the latest changes from `main` into `DevAdrien`.
- If conflicts arise, Git will notify you.

### **Resolve Merge Conflicts**

1. Open conflicting files (marked by `<<<<<<< HEAD` and `=======`).
2. Manually edit and resolve conflicts.
3. Mark conflicts as resolved:
   ```bash
   git add <resolved-file>
   ```
4. Commit the merge resolution:
   ```bash
   git commit -m "Resolve merge conflicts"
   ```
5. Push the changes:
   ```bash
   git push
   ```

---

## 🔥 Best Practices for Git Collaboration

✅ **Use Feature Branches:**  
Each feature or bug fix should be developed in a separate branch before merging into `main`.

✅ **Write Meaningful Commit Messages:**  
Follow the format:

```
<type>: <short description>
```

Example:

```
fix: Correct typo in error message
feat: Add dark mode toggle feature
```

✅ **Pull Before You Push:**  
Always run `git pull` before pushing to avoid conflicts.

✅ **Use `git stash` When Switching Branches:**  
If you have uncommitted changes but need to switch branches, use:

```bash
git stash
```

to temporarily save changes.

---

## 🎯 Summary

| Command                         | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| `git branch <branch-name>`      | Creates a new branch                                      |
| `git checkout -b <branch-name>` | Creates and switches to a new branch                      |
| `git add .`                     | Stages all changes                                        |
| `git commit -m "<message>"`     | Commits changes with a message                            |
| `git push -u origin <branch>`   | Pushes changes to the remote repository                   |
| `git pull`                      | Fetches and integrates changes from the remote repository |
| `git merge <branch>`            | Merges changes from another branch                        |
| `git stash`                     | Temporarily saves uncommitted changes                     |

---

By following these structured Git workflows and best practices, developers can collaborate efficiently and maintain a clean, well-documented commit history. 🚀✨
