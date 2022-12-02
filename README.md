# front-end-capstone

## Setup

### Start with main branch
```
git checkout master
```
```
git fetch origin 
```
```
git reset --hard origin
```
This switches the repo to the main branch, pulls the latest commits and resets the repo's local copy of main to match the latest version.

### Create a new-branch
```
git checkout -b new-feature
```
This checks out a branch called new-feature based on main, and the -b flag tells Git to create the branch if it doesn’t already exist.

### Update, add, commit, and push changes as you usually would
```
git status
```
```
git add <some-file>
```
```
git commit
```
### Push feature branch to remote
```
git push -u origin new-feature
```

This command pushes new-feature to the central repository (origin), and the -u flag adds it as a remote tracking branch. After setting up the tracking branch, git push can be invoked without any parameters to automatically push the new-feature branch to the central repository. To get feedback on the new feature branch, create a pull request in a repository management solution like Bitbucket Cloud or Bitbucket Data Center.

## Front End Technology
This application will be built using React and Styled Components
