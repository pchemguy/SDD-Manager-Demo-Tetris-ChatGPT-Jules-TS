# Greenfield Project Prompt Template

Replace the placeholders, then copy the prompt below.

````text
Help me develop the following project using $sdd-manager.

Preliminary project description:

```
{PROJECT_DESCRIPTION}
```

GitHub repository: https://github.com/{OWNER}/{REPO}
GitHub token: {FINE_GRAINED_GH_TOKEN}

I authorize every repository operation required for this project under SDD Manager within the agreed scope and the token's permissions, including branch creation, commits, pushes, merges and GitHub tracking updates. This authorization applies throughout this conversation. Perform these operations without asking for separate or repeated permission, unless I explicitly instruct otherwise or SDD Manager requires a human document review checkpoint or execution boundary.

Enable and maintain GitHub tracking for phase labels, milestones and task issues.
````
