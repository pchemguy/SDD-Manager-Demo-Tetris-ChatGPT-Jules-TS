# Activate an eligible phase

Use the [backend object lifecycle](../../sdd-conventions/references/backend-object-lifecycle.md), current orientation and accepted PLAN/TASKS. Preparation can describe all phases locally; it does not create all hosted objects or authorize execution.

1. Resolve the owning phase, selected range, prerequisite evidence, actual integration target and established tracking mode. For the first phase, no predecessor is required. For later phases, require completed predecessor delivery/phase reviews and reports, applicable local exits, all hosted milestones closed when tracking is active, and required verified target integration/publication. A phase label is historical association, not a completion state.
2. Confirm explicit review tasks and final single-task phase review milestone already exist in accepted planning. Missing hierarchy/exits require their owning amendment before execution; do not fabricate them during startup.
3. Before creating the first or a newly dependent phase branch, confirm [preparation integration](branch-management.md#preparation-integration-gate): accepted project documents and QC reports are merged, verified and published on the actual default branch. Establish/reuse the eligible phase branch under branch management, preserving later phases' predecessor integration gate. When tracking is active, request sdd-forge projection for this phase only, reading full owning lists for identity/dependencies. Require readback of its label, every milestone and every task issue with initial associations before the first task. Partial/unavailable projection leaves activation pending; local-only continuation requires an explicit human override.
4. Hand off eligible tasks, exact phase identity, report prefix, applicable exits and confirmed/pending hosted state to sdd-implement. Respect count/boundary selection. Never create later-phase objects or run later tasks solely because the full backlog is available.

On continuation, recover the same phase identity and confirmed objects rather than allocating another phase. Finish missing creation/associations with readback and preserve unrelated objects. Before next-phase activation, reconcile pending task/milestone closures and existing merge/publication; unknown effects block that transition. Independent local work in an already activated phase remains governed by its requested range and actual dependencies.

## Preparation readiness before projection

Before creating the eligible phase's hosted objects or starting its first task, establish current owning TASKS/PLAN/SPEC readiness under [document QC gates](document-qc-gates.md). This adds no administrative task or phase and does not activate future phases. Resolve focused missing assessment within scope; stale or confirmed blocked inputs stop dependent projection/execution. Existing issue/milestone closure still follows verified implementation lifecycle evidence, not a document Ready label.

## Optional tracking decision at handoff

Use **sdd-manage**'s [tracking decision](tracking-decision.md) before dependent phase activation. Carry the recommendation, actual confirmation/decline, repository/scope and observed hosted state separately. A supplied GitHub token recommends enabled tracking but does not activate it; unresolved activation choices return to the manager. Reuse confirmed scope without repeated approval. Late confirmation reconciles retained evidence instead of replaying product tasks.
