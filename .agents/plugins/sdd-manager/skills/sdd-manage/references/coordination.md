# Coordination protocol

## Establish scope and prerequisites

- **Request:** Capture the objective, inspection or mutation mode, target paths or documents, owning task list, selected boundary, and allowed external effects. Reuse session authorization and decisions.
- **Orientation:** Start with **sdd-orient**. Use its observed repository, applicable instructions, baseline, pending changes, tooling, and task evidence. Do not mistake an unchecked task or latest maintenance commit for a proven execution boundary.
- **Git:** Require an eligible worktree for repository mutations. Outside Git, continue discussion or inspection and report the mutation blocker; do not initialize a repository implicitly.
- **Pending work:** Establish ownership of dirty paths. Preserve unrelated staged and unstaged changes. Do not reset because the tree is dirty. Pass interrupted task implementation to **sdd-implement**, document incorporation to **sdd-integrate-feature**, and commanded amendment continuation to **sdd-steer**; if it lies outside the requested new scope, resolve that conflict before overlapping mutations.
- **Inputs:** Confirm the authoritative requirements, design, strategy, and layout needed by the selected stage. File presence alone does not establish acceptance or consistency.
- **Document readiness:** Use [document QC gates](document-qc-gates.md) before dependent PLAN/TASKS generation, implementation or hosted projection. Compare actual reviewed/governing state and coverage; route missing focused review within scope instead of trusting file presence or a Ready label.
- **Preparation baseline:** Project preparation documents and their QC reports are committed/pushed on design-docs. Complete [preparation integration](branch-management.md#preparation-integration-gate) into the actual default branch before creating a dependent implementation branch. Campaign plans/reports remain on the campaign revision branch. Carry actual preparation tip, default merge/publication and implementation starting checkpoint through the handoff.
- **Proactive handoff:** At entry, preparation handoff, phase activation and completion, identify relevant capabilities, prerequisites, unresolved user choices and coordination gaps. Record the concrete next owner/action, decision source, observed state and stopping boundary in the existing handoff. Use [tracking decision](tracking-decision.md) for optional hosting; ask only when the missing decision affects the next dependent work. Do not create an unrelated administrative task chain.
- **Facilities:** Check availability of the selected skills and necessary tools. Report concrete missing capabilities. Use ordinary filesystem, Git, and available provider tools; require no particular client, hidden hooks, or implicit installation mechanism.
- **Historical scope:** Use current authorities and the active campaign. Discover prior identities/paths without loading old contents; consult selected history only for a specific current question. Keep [closed records](../../sdd-conventions/references/review-campaigns.md#closed-campaign-records) unchanged and outside current compatibility checks. Inspect proposed paths before staging/integration for incidental edits to closed packages.

For branch workflows, use [branch management](branch-management.md) for setup and [Git workflows](git-workflows.md) for final integration. Preserve implementation's push-first prerequisite; a direct focused invocation uses the same protocol.

## Coordinate execution

1. Give each responsible skill the objective, scope, authoritative inputs, decisions, relevant task IDs, branch/HEAD, dirty-path ownership, permitted effects, required evidence, and stopping point. Carry the actual human grant, destination/ref, payload scope and explicit limits through handoffs; do not ask each worker to obtain the same approval again. Keep credentials out of ordinary handoff text.
2. Let the skill perform its owned procedure. Collect its changed paths, observed evidence, findings, and remaining differences before the next dependent stage.
3. Refresh the material baseline when HEAD, instructions, project, target scope, or relevant pending changes change. Do not repeatedly run orientation or checks when the current evidence remains applicable.
4. Resolve missing human decisions and out-of-scope requirements without guessing or silently expanding work. Continue independent authorized work where possible. State the blocked operation and decision needed.
5. For verification failures, return repairs to the active **sdd-implement** or **sdd-steer** workflow. A standalone verification request returns findings; it does not start implementation. Documentation findings requiring governing-document changes are returned to the user before any authoring is coordinated.
6. Stop at the requested boundary. A checkpoint is not permission to select another milestone, start steering, incorporate unselected feature documents, or create hosted objects. Complete explicit integration/publication when its workflow gate is met; incomplete main phases push and pause even when the requested task subset is complete. A human-commanded steering amendment always returns control without resuming implementation.

## Persist repository changes

Use this procedure for document preparation, accepted integration, and standalone maintenance. Do not duplicate the commit workflows owned by **sdd-implement** or **sdd-steer**.

- **Policy:** Honor the user's commit and push instructions and repository policy, including standing session instructions. When no persistence policy is established, commit and push authorized finished changes to an established destination. Do not invent a remote branch or force-push.
- **Verification:** Inspect the actual diff and run checks appropriate to its effects: document consistency and links for authoring, relevant tests for test changes, or **sdd-verify** for acceptance campaigns. Verify heading spacing and project conventions. Do not manufacture task completion for document-only work.
- **Bootstrap:** Before the first SDD commit, apply [repository bootstrap](repository-bootstrap.md): package-derived root disclosure and usage notice plus README links travel with the first owned result. Reuse existing valid records; respect explicit path limits.
- **Staging:** Stage only owned changes; inspect the staged diff and exclude unrelated pre-existing staged paths from the commit. Preserve their index state. A normal commit includes all staged content; use a path-scoped commit only for wholly owned file contents, or isolate selected changes in a temporary index. Stop if ownership cannot be separated safely. Avoid broad staging or destructive cleanup.
- **Commit:** Use **sdd-report** to compose an evidence-backed message. Include stable task IDs and verified issue references when the change belongs to those tasks; preparation without assigned tasks does not invent IDs. Inspect commit contents and remaining staged and unstaged diffs; after a temporary-index commit, reconcile stale committed owned index entries while preserving unrelated staged content.
- **Push:** Assume existing shell authentication is usable; push the finished commits to the established destination and check that the remote contains them. For an access 403 or explicit credential failure, coordinate [shell recovery](credentials.md) and retry the affected push before reporting it as unresolved. Report a committed-but-unpushed result if access, destination, or divergence blocks persistence; retain local work. Resolve divergence without discarding changes or force-pushing.
- **State:** Distinguish committed, pushed, and hosted status. A successful local commit does not establish remote persistence or issue closure.

## Return results

Use **sdd-report** for the result format. Include the fulfilled objective and affected artifacts or task IDs, observed verification and gaps, commits and push status when applicable, hosted changes or pending reconciliation, unresolved decisions, and the boundary reached. Keep planned work distinct from implemented functionality. No extra workflow-state artifact is required: current documents, task evidence, Git, and applicable session decisions supply continuation context.

## Diagnostic and findings handoff

Return instruction source, actual user choice/grant, observed state and evidence limits separately when explaining omissions. Persist explicit amendment notes under the authorized [review/revision findings procedure](review-and-revision.md#retain-requested-amendment-findings), reporting conversation-only, written, committed, pushed and implemented states truthfully.

## Coordinate environment recovery

On a relevant environment/tooling blocker, coordinate investigation of reasonable supported alternatives within authorized scope before declaring the work blocked. Route technical investigation to the affected execution workflow; implementation uses [environment recovery](../../sdd-implement/references/environment-recovery.md). Preserve partial work, require actual attempt/capability evidence, disclose material substitutions and resolve consequential scope/requirement decisions. Bound investigation by real constraints rather than an arbitrary retry quota. For a host denial, retain the pending operation and report the observed reason; do not reframe it as a tooling failure or switch tools to evade it.
