---
name: sdd-docs
description: Use when creating, reviewing, or maintaining professional module and API documentation, aligning README and standalone guides with an SDD project's supported implementation, checking documentation examples and links, or auditing documentation after code changes or across the project.
---

# Maintain project documentation

Choose the requested scope: documentation for affected code, README or selected guides, or a project-wide audit. Read only the relevant references:

| Work | Load |
| --- | --- |
| Module docstrings, API documentation, and explanatory comments | [in-code documentation](references/in-code-documentation.md) |
| README, standalone guides, examples, and navigation | [standalone documentation](references/standalone-documentation.md) |
| Change-scoped or project-wide audit and amendment findings | [review and findings](references/review-and-findings.md) |

Use a current **sdd-orient** handoff for applicable instructions, Git state, target paths, and ownership. **sdd-manage** coordinates the requested editing scope; the active implementation workflow, **sdd-implement** for main task work or **sdd-steer** for a checkpoint amendment, coordinates documentation maintenance after substantive code changes. Read project documentation policies, relevant layout, accepted design, SPEC and PLAN or their active feature equivalents, affected code and tests, and existing documentation as needed. Review can remain read-only; edits require an eligible Git worktree and established ownership of pending changes.

Follow the documentation style specified by governing project documents. Otherwise select an established professional style appropriate to the language and documentation tooling, such as Google-style Python docstrings. Keep documentation accurate, useful, and proportionate to the code's responsibility. Ensure every code module within the selected scope has a professional module docstring or its language's equivalent; a project-wide audit covers every project-owned code module. Report generated or externally maintained modules separately and follow project policy for editing them.

Maintain documentation against both accepted requirements and observed implementation. Clearly distinguish supported behavior from planned capabilities. If a discrepancy requires an amendment to SPEC, PLAN, design, layout, or another authoritative requirement, identify its location, issue, impact, and proposed amendment and report it to the user. Defer the decision to the user; do not amend the governing document or invoke its owning skill automatically. Continue independent documentation work and report anything dependent on that decision as unresolved.

Keep code edits confined to documentation unless additional work is authorized. Do not mark tasks complete, create commits, push, or change hosted objects here; the active implementation workflow owns those operations. For Markdown, separate every heading from adjacent content with blank lines; a heading at the beginning of a file or template needs no preceding blank line.

Return the reviewed scope, chosen style and source, documentation changed, checks and observed outcomes, unreviewed or excluded areas, and unresolved findings or user decisions. Use **sdd-report** for a completion summary when requested.
