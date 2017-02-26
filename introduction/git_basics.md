# Git basics

## Instalation

**macOS**

On macOS it's usually more convenient to use [brew](https://brew.sh/) than download
files from the web.

```bash
brew install git
```

If you don't have [brew](https://brew.sh/), We highly recommend to install it.

**Linux**

Use your package manager, e.g. `apt-get install git`

**Windows**

Download Git from the official page: [https://git-scm.com/download/win](https://git-scm.com/download/win)

## How to start your work in the course

1. **Go to the project repository you want to work on**, e.g. [https://github.com/msd-code-academy/lessons](https://github.com/msd-code-academy/lessons) 
and *fork* the repository

2. **Clone your newly created repository:**
```bash
git clone <url-of-your-repo>
```

Copypasting url from browser is enough.

3. **Create new branch**

Don't push changes directly to the master, instead use branches so we can do Code Review with pull requests

```bash
git checkout -b <some-name-for-your-branch>
```

4. **Commit & push your changes**

```bash
git add *
git commit -m 'New cool stuff added'
git push
```

5. **Create pull request**

- Go back to your Github repository
- Click on "New pull request"
- Select your branch in second dropdown you want to merge
- You can use "Reviewers" in righ panel to assign someone, e.g. some lectors, to review your changes

*Tip*: Use ssh keys instead of username/password:

- Go to [github.com/settings/keys](https://github.com/settings/keys) or by clicking on your icon in righ top panel > **settings** > **SSH and GPG keys**
- Click on *new SSH key* and provide the ssh key (usually located in ~/.ssh/id_rsa.pub), the title doesn't matter, it's just info for you
- See [Github help](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) if you need advice

## Useful resources

- [git - the simple guide](http://rogerdudler.github.io/git-guide/) - Great introductory guide if you don't know much about git.
- [Try Git](https://try.github.io) - Learn by doing, for beginners to git
- [Github Hello World](https://guides.github.com/activities/hello-world/) - Introductory guide to Github
- [Git DOCs](https://git-scm.com/doc) - official docs
- [Gitflow](http://nvie.com/posts/a-successful-git-branching-model/) - original article about common flow