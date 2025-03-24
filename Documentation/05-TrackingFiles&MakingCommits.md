# **Tracking Files and Making Commits in Git**

Version control is essential for software development, and **Git** is one of the most widely used tools for tracking changes, collaborating on projects, and maintaining code integrity. This guide walks you through the process of tracking files, committing changes, and navigating Git history.

---

## **1. Creating and Tracking Files**

To begin tracking files, let's create a simple JavaScript file and a README file.

### **Step 1: Create Files**

Create two files in your project directory:

```bash
touch hello.js readme.md
```

Open `hello.js` and add the following content:

```javascript
console.log("Hello, Git!");
```

Open `readme.md` and add:

```
# Hello Git
This is a simple README file.
```

### **Step 2: Check Git Status**

Before adding the files to version control, check their status:

```bash
git status
```

Git will output something like:

```
On branch main
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    hello.js
    readme.md
```

This means Git recognizes these files but isn't tracking them yet.

---

## **2. Adding Files to Git**

To start tracking specific files, use the `git add` command:

```bash
git add readme.md
```

Now, check the status again:

```bash
git status
```

Expected output:

```
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
    new file:   readme.md
```

At this stage, Git is tracking `readme.md`, but `hello.js` remains untracked.

### **Adding Multiple Files**

Instead of adding files one by one, you can add all untracked and modified files at once using:

```bash
git add .
```

This will track `hello.js` and any other new or modified files.

---

## **3. Committing Changes**

Committing in Git captures a snapshot of the current project state. To commit changes, use the following command:

```bash
git commit -m "Initial commit: Added readme.md and hello.js"
```

Explanation:

- `git commit` records the changes.
- `-m "message"` provides a meaningful commit message describing what was changed.

---

## **4. Viewing Commit History**

To see the commit history, use:

```bash
git log
```

You'll see an output similar to this:

```
commit 3a1f7b2e8d3c456a (HEAD -> main)
Author: Your Name <your.email@example.com>
Date:   Sun Mar 24 14:35:21 2025 +0530

    Initial commit: Added readme.md and hello.js
```

Key parts of the commit log:

- **Commit hash** (e.g., `3a1f7b2e8d3c456a`) – A unique ID for each commit.
- **Author** – Who made the commit.
- **Date** – When the commit was made.
- **Message** – Describes the purpose of the commit.

---

## **5. Checking Out Older Commits**

If you need to switch back to an older commit, first copy its **commit hash** from `git log`, then use:

```bash
git checkout <commit-hash>
```

Example:

```bash
git checkout 3a1f7b2e8d3c456a
```

**Warning:** This will put Git into a "detached HEAD" state, meaning you are viewing an older commit without being on a branch.

To return to the latest commit on the `main` branch:

```bash
git checkout main
```

---

## **6. Undoing Changes**

If you made changes and want to discard them, use:

```bash
git checkout -- <file>
```

Example:

```bash
git checkout -- hello.js
```

If you staged files but haven’t committed yet, unstage them with:

```bash
git restore --staged <file>
```

Example:

```bash
git restore --staged readme.md
```

To revert to a previous commit permanently, use:

```bash
git reset --hard <commit-hash>
```

**Be careful:** This permanently erases all changes after the specified commit.

---

## **7. Best Practices for Git Commits**

- **Commit Often** – Regular commits help track progress and allow easy rollbacks.
- **Use Meaningful Messages** – Write clear commit messages that explain the changes.
- **Group Related Changes** – Avoid committing unrelated changes in the same commit.
- **Push Regularly** – Keep your remote repository updated to prevent data loss.

---

## **Conclusion**

By mastering these Git commands, you can effectively manage version control, track changes, and collaborate efficiently. Whether working on solo projects or large-scale applications, these fundamental Git practices will help ensure a smooth and reliable development process.
