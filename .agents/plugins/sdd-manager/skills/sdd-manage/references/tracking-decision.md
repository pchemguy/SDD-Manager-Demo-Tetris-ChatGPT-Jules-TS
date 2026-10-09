# Select optional hosted tracking

At workflow entry, preparation handoff and phase activation, proactively establish the tracking decision for the repository and scope. Git publication authority and authenticated access are separate from the choice to activate issue/label/milestone tracking.

| Observed decision / access context | Coordinator action and state |
| --- | --- |
| User supplies a GitHub token for this repository workflow; no tracking decision exists | Recommend **enable** by default. Ask for confirmation of the concrete managed scope before any hosted projection. State **recommended enabled; confirmation pending**. |
| Confirmation already covers this repository/scope, or tracking is already active | Carry it forward without another question. Confirm eligible phase identity and retained objects, then route projection/reconciliation to sdd-forge. |
| Explicit decline covers this scope | Respect it, retain **declined**, and continue local/Git work without repeated offers. A later supplied token alone does not erase the decline. |
| No supplied token and no choice | Offer supported tracking when relevant. Use existing authenticated access for confirmed operations; do not probe for credentials or invent consent to make the offer. |
| Confirmation pending | Preserve **pending**, not declined or active. Preparation and independent authorized local work can continue; ask before an affected activation decision. Do not silently choose local-only execution at a phase gate requiring that choice. |

The confirmation proposal identifies the established repository, eligible phase label, every milestone/task issue and their associations, and verification-based closure/reopening within the selected lifecycle. Use known accepted hierarchy counts when available; do not invent them before planning. A supplied token alone neither creates objects nor authorizes a new destination. An explicit request to create and maintain these objects is itself confirmation; do not ask the same question again.

Record the recommendation, actual user decision, repository/scope, activation and observed provider state in existing project/handoff evidence. An agent-authored PLAN statement that tracking is inactive describes performed state, not proof of a user decline. Do not create another state registry.

## Late confirmation

When confirmed after local execution begins, discover existing eligible-phase objects and reconcile missing identities/associations idempotently. Attach retained commit/check evidence and close only verified tasks/milestones; leave incomplete work open. Do not repeat product tasks, create future-phase objects or rewrite historical reports to imply earlier projection. Apply phase activation, document readiness and backend lifecycle rules to the actual continuation state.
