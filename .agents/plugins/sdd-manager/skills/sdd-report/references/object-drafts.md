# Issue, commit, and PR drafts

Keep the same task identity across all outputs. Use the project-wide ID from its owning TASKS or FEATURE-TASKS entry; include a resolved issue reference only when **sdd-forge** supplies a unique repository and number. Match the requested object's time perspective: an issue describes intended work, while a commit or PR describes actual changes and available evidence.

## Task issue

Return `title` and `body` separately. Format the title as `[<task-id>] <task title>`, using the owning task list. Draft the body from the task outcome, reason and project context, expected scope and dependencies, objective acceptance and prescribed checks, and source document links. Add relevant kind-specific details. For example:

- **Performance:** Describe the problem with the current implementation, explain how the proposed approach may improve it, and identify the measurement plan and any established baseline. Do not present an expected speedup as an achieved result.
- **Security:** State the affected guarantee and risk without exposing exploit instructions or credentials.

**sdd-report** owns the title and body format. Preserve an exact task identity marker when one is supplied. Never invent host labels, milestone associations, issue URLs, or resolution state.

## Git commit

For a first SDD commit or adoption backfill, load **sdd-manage**'s [repository bootstrap](../../sdd-manage/references/repository-bootstrap.md). Confirm the commit owner has included or validly retained root disclosure/usage records and README links within scope. Return missing bootstrap evidence to that owner; drafting does not perform bootstrap or establish a committed result.

Draft a short imperative subject naming the actual change. For task-associated work, always include the owning task ID. For preparation or maintenance without an assigned task, do not invent an ID. Use a body when the reason, verification, migration implications, or multiple issue references need explanation. Base it on the inspected diff and checks, not merely the task brief.

Use `Refs owner/repo#123` when the commit advances an issue without completing it. Use `Fixes owner/repo#123`, `Resolves owner/repo#123`, or `Closes owner/repo#123` when the commit fully resolves that issue and the evidence supports completion. A commit may reference multiple issues, with a separate appropriate reference for each; omit issue references when no verified association exists. On GitHub, closing keywords may close an issue when the commit reaches the default branch. **sdd-forge** still reconciles issue closure after verified task completion, without waiting for that automation. If verification has not been run, say so in a proposed body rather than claiming it passed. The active implementation workflow makes and checks its commits; **sdd-manage** coordinates persistence for other authorized repository changes.

## Merge commit

Draft a subject identifying the actual feature, steering amendment, or selected range, such as `Merge phase 2 Archive support` or `Merge feature ZIP support`. A main milestone/task subset does not justify a merge draft while its phase remains incomplete. Return the subject and body separately. Include the working and target branches, starting checkpoint and verified parent tips, included task IDs where applicable, boundary and merged-state checks, material conflict resolutions, and limitations. Do not represent an amendment as completion of the next task. The coordinator performs the explicit two-parent merge; drafting the message does not authorize extra work or a hosted PR.

## Pull request

Draft a title and description only when requested; this skill does not create a PR. Scope the text to the actual branch diff and its included task IDs. Summarize **What**, **Why**, **Verification**, and **Result**; add the relevant fields from [change kinds](change-kinds.md). State the base branch and integration status only when known. List unrun checks, limitations, and remaining work explicitly rather than presenting partial work as complete.

A code health PR should explain the ownership or maintainability problem and the checks supporting behavior preservation. A performance PR should include baseline and current times, input size, environment, method, and whether the measured gain is meaningful. Do not imply that GitHub PR operations are available through **sdd-forge**.

## Examples

These show formatting for an issue title, commit message, and PR draft. Use actual task IDs, issue references, checks, and results for the current work.

### Issue title

```text
[T-012] Implement ZIP stream support
```

### Commit message

```text
Clarify filesystem utility ownership (T-041)

Move shared filesystem helpers into the module named by the project layout.
Update its documented responsibility; the focused unit suite passed.

Refs owner/repo#123
```

### Code health PR

```markdown
# 🧹 Clarify filesystem utility ownership

- 🎯 **What:** Renamed `common.py` to `fs.py` and updated its documented responsibility.
- 💡 **Why:** A focused module name makes ownership clear under the project's layout rules.
- ✅ **Verification:** Inspected layout references and passed the focused unit tests.
- ✨ **Result:** Filesystem utility ownership is explicit, with behavior preservation supported by the cited checks.
```
