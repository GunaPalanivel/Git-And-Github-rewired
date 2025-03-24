# **Understanding Pull Requests in GitHub**

## **Introduction**

A **Pull Request (PR)** in GitHub is a crucial feature for collaboration in software development. It allows developers to propose, review, and merge code changes efficiently while maintaining a stable codebase.

## **What is a Pull Request?**

A pull request enables you to share your code changes with your team for **review and feedback** before merging them into the main branch. Once the PR is **approved and merged**, your changes become a part of the primary codebase.

## **Steps to Create a Pull Request in GitHub**

### **1. Opening a Pull Request**

To open a PR in GitHub:

1. **Navigate to your repository** and go to the **Pull Requests** tab.
2. Click on **New Pull Request**.
3. Select the branch you want to merge **from** (e.g., `feature-branch`) and the branch you want to merge **into** (e.g., `main` or `develop`).
4. GitHub will display the changes made in the selected branch.
5. If the changes look good, click **Create Pull Request**.
6. Modify the title and add a detailed description of the PR.
7. Click **Create Pull Request** once again.

### **2. Reviewing and Merging a Pull Request**

After creating the PR:

1. Your **team lead or senior developer** will review the PR.
2. They may **request changes** or **approve the PR**.
3. If there are **merge conflicts**, you need to resolve them before merging.
4. Once approved, click **Merge Pull Request** → **Confirm Merge**.
5. The feature branch is now merged into the main branch.
6. You can **delete the merged branch** to keep the repository clean.

### **3. Fetching Merged Changes to Local Repository**

After merging on GitHub, the changes exist in the remote repository but not in your local repository. To sync your local main branch with the latest merged changes:

```bash
# Switch to the main branch
git checkout main

# Pull the latest changes from the remote repository
git pull origin main
```

> **Note:** The command `git pull` is a shorthand for `git pull origin main`, as GitHub defaults to pulling from the remote origin and the same branch you are currently on.

## **GitHub's Workflow for Pull Requests**

The **standard workflow** for contributing changes to a repository using Git and GitHub follows these steps:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repo_url>
   cd <repo_name>
   ```
2. **Create a new branch from the `main` branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes and commit them**:
   ```bash
   git add .
   git commit -m "Added a new feature"
   ```
4. **Push the branch to the remote repository**:
   ```bash
   git push origin feature-branch
   ```
5. **Open a Pull Request on GitHub**.
6. **Review and merge the Pull Request**.
7. **Sync your local repository with the latest changes**:
   ```bash
   git checkout main
   git pull origin main
   ```
8. **Repeat from Step 2 for the next feature or bug fix.**

## **Why Use Pull Requests?**

- **Code Review & Quality Assurance**: Ensures that code is reviewed before merging, improving overall quality.
- **Collaboration**: Allows multiple developers to work on the same project without conflicts.
- **Version Control**: Maintains a clean history of changes.
- **Prevents Breaking Changes**: Reduces the risk of bugs in the production code.

## **Conclusion**

Pull requests are an essential part of GitHub's collaborative workflow. By following a structured approach, you can ensure smooth development, better code quality, and efficient teamwork. Mastering PRs will make you a more effective developer in any team environment!
