# Operational Workflow Guide – CodeMaker Autonomous Pipeline
1. Sprint Kick-off & Task Planning
- Initiate New Request: When a new feature or sprint is started, CodeMaker creates a TaskManager
request for it. The original user story or request description is included ( request_planning ).
- Automated Task Breakdown: CodeMaker uses the request details to draft an initial task list
(leveraging its reasoning framework). It calls request_planning with a list of suggested tasks/sub-
tasks for the feature. Each task has a title and description.
- Review & Refine Tasks: The agent (or a human supervisor) reviews the generated task plan. If the
plan is suboptimal or missing steps, tasks can be added ( add_tasks_to_request ) or updated. The
goal is to have a clear, atomic breakdown of work.
- Output Plan for Approval: CodeMaker presents the task breakdown (in YAML or bullet format) to the
user for approval. No coding begins until the Plan is explicitly approved by the user (per user_rules).
2. Environment Setup & Context Alignment
- Set Project Context: The agent ensures it’s operating on the correct codebase. It uses
set_project_path (Code-Index) to point to the project repository, and may run refresh_index
to index the latest code. This enables up-to-date searches.
- Load Knowledge Base: CodeMaker calls read_graph on Memento to pull in any prior knowledge
about similar features or relevant components (e.g., if a “Booking” component exists and the new
feature is “Booking cancellation”, it retrieves those nodes). This context is kept in memory for reasoning.
- Initiate Version Control: Using Git MCP, CodeMaker creates a new branch for this request (e.g.,
git_checkout to feature/[request-id] ). All changes will happen in this branch, isolating them
from the main branch. This also serves as a rollback mechanism – if something goes wrong, we simply
don’t merge the branch.
3. Task Execution Loop
CodeMaker proceeds to execute each task in the TaskManager plan, one at a time, in order.
- (a) Fetch Next Task: The agent calls get_next_task to retrieve the next incomplete task from
TaskManager. If none remain, it moves to step 4 (completion).
- (b) Task Analysis: For the fetched task, CodeMaker analyzes requirements. It may use Sequential
27
Thinking MCP to break the task internally into sub-steps or just to reason through complex logic. It also
queries Code-Index ( search_code, find_files ) to locate relevant existing code that will be
affected or can be reused for this task.
- (c) Solution Proposal (if needed): If the task is non-trivial (e.g., “Design database schema for feature
X”), the agent might draft a mini-plan or alternatives for that task and present it to the user. This acts as
a checkpoint for particularly complex changes (ensuring the approach is correct before coding).
- (d) Code Implementation: CodeMaker proceeds to implement the task:
• Write/Modify Code: Uses Filesystem MCP ( write_file, edit_block ) to create new modules or
update existing ones. It strictly follows the style guides (TypeScript, naming conventions) – it may run
eslint --fix via execute_command to auto-format after writing.
• Self-Check Diff: After making changes, the agent calls git_status or git_diff (if available) to
review what it has changed. It “self-reviews” the diff to catch any obvious mistakes (this is an
autonomous self-repair opportunity: e.g., if it sees it accidentally edited a protected file, it will revert
that change before proceeding).
• Local Commit: The agent commits the changes to the feature branch with a descriptive message
using Git MCP ( git_commit ). Commits are made task-by-task for clarity.
- (e) Testing: CodeMaker runs relevant tests for that task’s scope: it might execute unit tests via
execute_command({command: "npm run test:unit"}) or specific test files. For backend
changes, it runs API tests; for UI, perhaps Storybook or Jest tests. It captures the output.
• If tests pass: mark this subtask as completed.
• If tests fail: the agent records the failures, enters a debug cycle: analyze failure output, possibly use
Sequential Thinking to figure out the cause, then go back to modify code. This loop continues until
tests pass or the agent determines it cannot resolve without guidance. Each attempt and fix can be
committed (or amended) for traceability.
- (f) Mark Task Done: Once the code for the task is implemented and verified locally, CodeMaker
updates TaskManager: calls mark_task_done with a summary (e.g., “Task 2 done – implemented API
and all tests green”).
- (g) User Checkpoint (if configured): If the project or user requires, CodeMaker may pause here and
present the diff or outcome of this task to the user, especially if it’s a significant change. (This is
configurable – by default, minor tasks might not require user sign-off, but major milestones might.) If
user feedback is given, the agent will address it (possibly resulting in new tasks or modifications).
•
The loop then repeats (go back to step 3a for the next task) until all tasks are completed or
awaiting approval.
4. Feature Integration & Verification
- Aggregate Testing: With all individual tasks marked done, CodeMaker now conducts full-system tests.
It runs the entire test suite ( npm run test for unit/integration, and possibly npm run e2e for end-
to-end if available). It also builds the project ( npm run build ) to catch any typing or compilation
issues.
- Static Analysis: Optionally, the agent triggers static code analysis tools (if set up, e.g.,
or uses an MCP for Snyk/CodeQL). This catches security or style issues not covered by
npm run lint tests.
- Performance Check: If the feature could impact performance (say, a new algorithm), the agent may
run a quick benchmark or at least ensure no obvious slowdowns (perhaps by analyzing Big-O in code or
using profiling tools in MCP if available).
- Verification Against Requirements: CodeMaker cross-references the implemented feature against
the original requirements (it has stored the original request in TaskManager’s originalRequest and
its own analysis). It ensures all acceptance criteria are met. It also retrieves the success criteria
documented in the plan and verifies each one.
- Documentation & Knowledge Update: The agent updates documentation if required (this could be
28
part of a task list too). E.g., update README.md or usage docs to include the new feature, or add an
entry to CHANGELOG. It also calls Memento’s add_observations to note that “Feature X
implemented on module Y” and any key design decision (for future reference by other agents or future
iterations).
- User Demo: CodeMaker prepares a summary of the feature for the user: it may deploy it to a staging
environment (if configured) or simply start the app locally and capture screenshots. It drafts a brief
report: what was implemented, test results summary, and any important notes (limitations, any TODOs
for future). This is presented for final approval.
5. Final User Approval & Deployment
- User Review: The user reviews the final diff or the summary report. CodeMaker will provide the code
diff of the entire feature branch against main , or a link to the branch/repository if applicable. The user
can ask questions or request changes.
- Iterate if Needed: If the user finds an issue or requests tweaks, CodeMaker treats this as new sub-
tasks: it can either reopen the TaskManager request or create a follow-up request for revisions. Those
are addressed in the same manner (analyze, code, test).
- Merge & Release: Once the user is satisfied and explicitly approves the feature, CodeMaker proceeds
to merge and deploy:
• It uses Git MCP to merge the feature branch into main to merge, depending on policy). If auto-merge is allowed, (or it might push and create a PR for a human
approve_request_completion is called,
and the agent executes git_push to update the remote main.
• CI/CD Pipeline: The merge triggers GitHub Actions which run a final verification (tests/lint in CI).
CodeMaker monitors the CI results (it could poll via API or just wait a configured time). If CI fails, it
notifies the user and reopens the issue to fix. If CI passes, deployment (e.g., Vercel or Docker deploy)
runs.
• Post-deployment, CodeMaker might do a quick sanity check on the live environment if it has access
(this could be automated tests on the deployed URL). If issues arise, it immediately flags them.
- Task Closure: The TaskManager request is marked as completed with all tasks done and approved
( approve_request_completion ). CodeMaker logs a closing summary in PromptHistory/Memento
(“Feature X completed on [date], deployed to production.”).
6. Continuous Monitoring & Anomaly Detection
- Even after deployment, CodeMaker remains alert. It monitors application logs and user feedback for
anomalies related to the new feature (if such data is accessible via tools). For example, if an error
related to the new code appears in logs, CodeMaker can catch it.
- Alerting: If an anomaly is detected (exception, performance drop, unusual user input causing failure),
the agent either creates a new TaskManager request (bug fix task) or alerts a human operator,
depending on severity. This ensures issues are addressed proactively rather than waiting for user
reports.
- Cost Monitoring: Throughout operation, CodeMaker’s Budget Sentinel (internal) tracks the API usage.
If the new feature is causing significantly higher token usage than expected (perhaps users are hitting
the AI feature heavily), CodeMaker will flag this in its weekly report (or sooner if it hits thresholds). This
might trigger a task to optimize prompts or switch to a cheaper model.
7. Weekly Meta-Learning & Prompt Optimization Loop
- Scheduled Review: Once a week, a meta-analysis process kicks in (this could be a cron job or a manual
trigger by the team). CodeMaker (or a dedicated “Evaluator” agent) compiles data on the past week’s
operations: tasks completed, any failures or rollbacks, user feedback, cost reports, etc.
- Performance Evaluation: The agent uses this data to evaluate where it struggled. For instance, it
examines PromptHistory for any instance it had to ask the user for clarification or where the user said
output was unsatisfactory. It also looks at tasks where multiple attempts were needed.
29
- Identify Prompt Improvements: Based on this analysis, CodeMaker formulates hypotheses for
improving its prompts/rules. e.g., “If repeatedly forgetting to not use emojis, strengthen that rule in the
system prompt,” or “Agent often asks for plan approval on trivial tasks – maybe adjust threshold for
when to require approval.”
- Draft Prompt Updates: The agent prepares a proposed update to the system prompt, user rules, or
its reasoning framework. This could be in the form of a diff or a list of suggestions (leveraging the fact
that these prompt files are under version control).
- Human Oversight: The team reviews these suggestions each week. They might accept some, modify
others. For example, if the agent suggests adding “Always verify database transactions,” the team may
incorporate it into project_rules.md.
- A/B Testing (if applicable): For significant changes, the updated prompts might be tested on a subset
of tasks or in a staging environment using historical queries (ensuring no regression in performance or
new unwanted behaviors). CodeMaker can assist by simulating past requests with the new prompt and
comparing outputs (this is an automated eval step).
- Prompt Deployment: The prompt/rule files are updated in the repository (with version control).
CodeMaker will use the new versions in subsequent operations, effectively “learning” from the past.
These prompt optimizations are documented (via commit messages and in Memento as “meta-
knowledge” of the agent’s evolution).
8. Safety & Exception Handling Throughout (Embedded safeguards at all steps):
- Policy Enforcement: At every user interaction, the system (OpenAI or a moderation layer) checks the
input/output against content policies. CodeMaker has an internal checklist before executing any tool:
“Does this action abide by the project rules and OpenAI policies?” If any doubt, it stops and asks for human
confirmation.
- Emergency Stop: The moment a “STOP AGENT” command is received (at any time, in any step),
CodeMaker will immediately: cancel any running tool calls, refrain from further output, and enter an
idle state. A human can then decide to resume or abort the workflow. The agent will log this event and
await instructions, as per user_rules.
- Protected Resources: The agent has in-built awareness of Protected Paths (from project_rules).
Before editing a file or executing a command, it checks the target against the protected list. Attempt to
modify a protected file will result in the agent raising a warning: “Attempted to edit config file, which is not
allowed. Seeking approval.” It will not proceed unless explicitly allowed, thereby preventing accidental
damage.
- Cost Thresholds: The Budget Sentinel monitors cumulative token usage. For example, if a single task
or conversation is about to exceed, say, 50k tokens (a predefined budget), the agent will pause and
output: “Notice: High resource usage. Continue (yes/no)?” If no user confirmation, it stops further calls. It
also uses cheaper model for very large inputs if possible (e.g., use GPT-3.5 for a long intermediate
reasoning step).
- Error Handling: If any tool call fails (e.g., file write error, test command crashes, etc.), CodeMaker
catches the exception. It will not blindly retry ad infinitum; instead, it logs the error and analyzes it. It
may decide to rollback recent changes (e.g., if npm run test fails due to a code syntax error it
introduced, it will fix the syntax rather than continuing). If a critical error occurs that it cannot resolve
(e.g., lost connection to code index or a corrupted state), it gracefully notifies the user and suggests a
reset or human intervention.
By following this end-to-end operational workflow, CodeMaker functions as a highly autonomous yet
controlled coding assistant. It plans work, executes in a sandboxed manner, continuously tests and
validates, and learns over time – all while keeping the user in the loop at critical junctures for safety and
quality assurance.