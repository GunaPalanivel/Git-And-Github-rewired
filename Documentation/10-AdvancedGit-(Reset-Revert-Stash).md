# Advanced Git Techniques: Reset, Revert, and Stash

As a developer, you’ll inevitably make mistakes, break production, or need to manage changes effectively. Git provides powerful commands to handle such situations: **git reset, git revert, and git stash**. These commands are crucial for managing your repository efficiently, whether you want to undo commits, revert changes while keeping history, or temporarily store your work.

---

## **1. Undoing Commits with `git reset`**

The `git reset` command allows you to remove commits from history while deciding whether to keep or discard changes in the working directory. It’s useful when you’ve made mistakes and want to undo changes before pushing them.

### **Types of Git Reset**

Git provides three types of resets, each with different effects:

| Reset Type                           | Effect on Commit History      | Effect on Staging Area | Effect on Working Directory            |
| ------------------------------------ | ----------------------------- | ---------------------- | -------------------------------------- |
| **Soft Reset** (`--soft`)            | Moves HEAD to an older commit | Keeps changes staged   | Keeps changes in the working directory |
| **Mixed Reset** (`--mixed`, default) | Moves HEAD to an older commit | Unstages changes       | Keeps changes in the working directory |
| **Hard Reset** (`--hard`)            | Moves HEAD to an older commit | Deletes all changes    | **Completely removes all changes**     |

### **Example: Removing a Commit but Keeping Changes**

If you have made 10 commits but want to revert to the 3rd commit while keeping changes, use:

```sh
git reset --mixed <commit-hash>
```

- This removes commits from history but keeps your code in the working directory, allowing you to modify and recommit them.

### **Example: Removing a Commit and Its Changes Completely**

If you want to remove all commits after a specific one **without keeping any changes**, use:

```sh
git reset --hard <commit-hash>
```

⚠️ **Warning:** Hard reset permanently deletes all changes after the specified commit. Use it cautiously.

---

## **2. Reverting Commits with `git revert`**

Unlike `git reset`, `git revert` **does not delete commits** but creates a new commit that undoes the changes of a previous one. This is useful when you’ve already pushed changes and want to maintain a clean history.

### **Use Case: Fixing a Deployed Bug Without Removing Commit History**

If you pushed a commit that broke production, revert it while keeping logs intact:

```sh
git revert <commit-hash>
```

- This will open an editor where you can modify the commit message.
- After saving, Git will create a new commit that negates the effects of the specified commit.

💡 **Best Practice:** Use `git revert` instead of `git reset` when working in a shared repository to avoid rewriting history.

### **Example: Reverting a Commit**

```sh
git revert HEAD~1
```

This reverts the last commit while keeping history intact.

---

## **3. Temporarily Storing Changes with `git stash`**

Sometimes, you need to switch tasks but don't want to commit unfinished work. `git stash` temporarily saves your modifications, allowing you to restore them later.

### **Example: Stashing Unfinished Work**

```sh
git stash
```

- This removes changes from the working directory but saves them for later use.

### **Example: Listing Stashes**

```sh
git stash list
```

- Displays all saved stashes.

### **Example: Restoring Stashed Changes**

```sh
git stash apply stash@{0}
```

- Restores the most recent stash.

💡 **Use Case:** If you’re working on a feature but need to fix an urgent bug, use `git stash`, fix the bug, and then restore your changes using `git stash apply`.

---

## **Conclusion**

Mastering these Git commands will make you a more efficient developer. Here’s a quick summary:

- Use **`git reset`** to remove commits from history and decide whether to keep changes.
- Use **`git revert`** when you want to undo changes but keep a clean history.
- Use **`git stash`** to temporarily save changes and restore them later.

By understanding these commands, you’ll have more control over your Git workflow and be better equipped to handle mistakes effectively.
