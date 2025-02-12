## What is a Repository?

A **repository (repo)** is where Git tracks everything in your project. Think of it as a special folder that stores all versions of your code. If a folder is being tracked by Git, we call it a repository.

### Creating a New Repository

To create a new Git repository, follow these steps:

1. **Open your terminal** and navigate to your project folder.
2. **Run the following command to initialize Git:**

   ```sh
   git init
   ```

   This command initializes an empty Git repository in your folder.

3. **Understanding the Output**
   - After running `git init`, Git initializes in the folder and creates a hidden `.git` directory.
   - This `.git` folder stores all Git-related data, such as commit history, branches, and configurations.
   - You don’t need to touch this folder—Git manages everything inside it.

### Default Branch Name

In earlier versions of Git, the default branch was called `master`. However, nowadays, Git defaults to naming the primary branch `main`.

#### Setting the Default Branch Name

If you see a warning about the default branch name, you can set it manually using:

```sh
git config --global init.defaultBranch main
```

After setting this, whenever you initialize a new repository, Git will create `main` as the default branch.

### Re-initializing Git in a New Folder

If you change your Git settings and want to test them, you can:

1. Create a new folder (e.g., `MasteringGit`).
2. Open it in your IDE.
3. Run `git init` again inside the folder.
4. Check that you are now on the `main` branch.

Most modern frameworks and libraries automatically initialize Git when you create a new project, making it an essential part of a developer's workflow.
