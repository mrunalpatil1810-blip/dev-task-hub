# DevTask Hub

A beginner-friendly Git workflow project: a small task-board website with a build step, automated tests, branches, pull/merge requests, issues, milestones, and a release tag.

## Project files

- `index.html` — responsive task-board demo with add, complete, and delete actions.
- `test.js` — Node.js assertions for task input validation.
- `.gitignore` — files that should not be committed.
- `.gitlab-ci.yml` — GitLab CI pipeline with `build` and `test` stages.
- `.github/workflows/ci.yml` — equivalent GitHub Actions workflow.

## Run locally

1. Install Node.js 18 or later.
2. Open this folder in VS Code.
3. Open a terminal in the project folder.
4. Run `node test.js`. Expected output: `Tests Passed!`
5. Open `index.html` in a browser to use the task board.

## Upload to GitHub

Create a **new empty repository** named `dev-task-hub` on GitHub. Do not initialize it with a README if you already have this README locally.

In the VS Code terminal, from this folder, run:

```bash
git init
git add .
git commit -m "Initial commit: DevTask Hub"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dev-task-hub.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git says the remote `origin` already exists, use:
`git remote set-url origin https://github.com/YOUR-USERNAME/dev-task-hub.git`

## Branch and merge conflict practice

```bash
git checkout -b feature/app-ui
```

Make a change to `index.html`, then commit and push:

```bash
git add index.html
git commit -m "Add task board UI"
git push -u origin feature/app-ui
```

To practice a merge conflict safely, create two branches from `main` and edit the same line in `README.md` differently on each branch. Commit each change, merge one branch into the other, then open the conflicted file and resolve the `<<<<<<<`, `=======`, and `>>>>>>>` markers. After resolving:

```bash
git add README.md
git commit -m "Resolve README merge conflict"
git push
```

On GitHub, open a **Pull Request** from `feature/app-ui` to `main`, review it, and merge it. GitHub calls this a Pull Request (PR); GitLab calls it a Merge Request (MR).

## Issues and milestone

1. Open the repository's **Issues** tab and create three issues, for example:
   - `#1 Build the task board interface`
   - `#2 Add input validation tests`
   - `#3 Configure CI workflow`
2. Create a milestone from **Issues → Milestones** (menu wording may vary) named `v1.0.0 Release`.
3. Assign all three issues to that milestone.
4. Use the **Projects** tab if your instructor requires a visual project board. Add the issues to the board.

When the pull request resolves issue #1, include `Closes #1` in its description. GitHub will close the issue automatically when the PR is merged into the default branch.

## Release tag

After merging the finished work into `main`:

```bash
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

Confirm the tag under **Releases** or **Tags** on GitHub.

## CI/CD verification on GitHub

The workflow file `.github/workflows/ci.yml` runs on every push to `main` or `feature/**`, and on pull requests targeting `main`.

1. Push a commit.
2. Open the repository's **Actions** tab.
3. Select **DevTask Hub CI**.
4. Confirm both **Build** and **Test** jobs pass.
5. Capture a screenshot showing the successful workflow run and both jobs.

GitHub Actions uses GitHub-hosted runners. If your assignment specifically requires a **GitLab Runner**, push the same project to GitLab and use `.gitlab-ci.yml` instead.

## GitLab-specific submission

For the original GitLab requirements, create the project at GitLab and use the `.gitlab-ci.yml` included here. GitLab uses **Merge Requests**; GitHub uses **Pull Requests**. GitLab Issues, Milestones, Project Board, tags, and pipeline screenshots must be created on GitLab itself if the instructor requires GitLab evidence.

## Suggested screenshots for submission

1. Repository home page showing the project files.
2. Commit history.
3. Feature branch and merged PR/MR.
4. Issues list or project board showing the three issues and milestone.
5. Tag `v1.0.0`.
6. Successful CI/CD run showing build and test jobs.

**Important:** GitHub and GitLab are different platforms. A GitHub repository alone does not satisfy a requirement to show GitLab Issues, Merge Requests, or a GitLab Runner pipeline. Use the platform your instructor specified.
