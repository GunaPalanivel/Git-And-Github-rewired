## Git Installation & Setup

To get started with Git, you need to install it on your system. Whether you're on **Windows, Mac, or Linux**, installing Git is just a few clicks away.

### Installing Git

1. **Download Git**

   - Open your browser and search for **Download Git**.
   - Visit the official Git website and download the version for your operating system.
   - Follow the installation steps to complete the setup.

2. **Verify Installation**
   - Open a terminal or command prompt.
   - Run the following command to check if Git is installed:
     ```sh
     git --version
     ```
   - If installed correctly, this will return the Git version number.

### Configuring Git

After installing Git, you need to configure your username and email. This helps Git track who makes changes in the project.

1. **Set your Git username**

   ```sh
   git config --global user.name 'Your Name'
   ```

   Example:

   ```sh
   git config --global user.name 'John Doe'
   ```

2. **Set your Git email**

   ```sh
   git config --global user.email 'your.email@example.com'
   ```

   Example:

   ```sh
   git config --global user.email 'johndoe@example.com'
   ```

3. **Verify your Git configuration**
   ```sh
   git config --global --list
   ```
   This will display your username and email settings to confirm they were set correctly.

### Using Git in an IDE

Many modern **IDEs (Integrated Development Environments)** have built-in Git support. The video recommends **WebStorm** because of its seamless Git integration, allowing you to:

- **Create branches**
- **Commit changes**
- **Pull and merge updates**
- **Resolve conflicts visually**
- **View Git history and stash changes**
- **Review pull requests directly in the IDE**

If you're interested in trying out WebStorm, you can download it from the link provided in the video’s description.

With Git installed and configured, you're now ready to start using version control effectively!
