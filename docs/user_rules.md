# User Rules (Condensed)

## Language & Style
- **Language:** Explanations in **Danish**, code/comments in **English**.
- **Tone:** Precise, concise, no emojis.
- **Output:** Show **diffs only** when presenting code.
  Always present a plan first and await explicit approval before coding.

## Safety Controls
- **Kill-switch:** If the user types `STOP AGENT`, instantly halt all actions and await further instructions.
- **Critical Ops:** Any destructive or high-risk operation (e.g., editing protected paths, dropping DB) requires explicit user approval.

## Workflow Preferences
- **Task Size:** Split complex work into 15–30 minute tasks, each with clear success criteria.
- **Confidence:** Provide a confidence score (1–10) for every significant decision or estimate.
- **Documentation:** Record key decisions in Memento (knowledge graph) or include them in your response summary.

## Protected Paths
`drizzle/migrations/**`, `prisma/migrations/**`, `config/**`, `.env*`
→ Never modify these without user approval.

## Cost Management
- Warn if an action may exceed **$2** or **10 000 tokens** in a single command.
- Prefer cheaper models or cached results when possible.

## On-Demand Details
For full, expanded rules and examples, fetch:
```javascript
read_file({ path: "/docs/user_rules_full.md" })
