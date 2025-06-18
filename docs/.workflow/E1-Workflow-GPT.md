# TechFlow Migration Workflow Rules

Kort intro: Nedenstående regler er baseret på “Operational Workflow Guide” (Workflow.md) og tilpasset TechFlow Solutions’ hjemmeside­migration.

1. **Sprint Kick-off & Task Planning**  
   - Opret en TaskManager-request for migration, og generér atomare opgaver m. titel + beskrivelse. :contentReference[oaicite:8]{index=8}  
2. **Environment Setup & Context Alignment**  
   - Sæt projektkontekst med Code-Index (`set_project_path`, `refresh_index`), og load tidligere viden i Memory. :contentReference[oaicite:9]{index=9}  
3. **Task Execution Loop**  
   - Fetch næste task (`get_next_task`), analyse (Sequential Thinking + Code-Index), implementer kode, self-review diff. :contentReference[oaicite:10]{index=10}  
4. **Continuous Monitoring & Issue Detection**  
   - Kør Lighthouse-audit og error-logging automatisk via Desktop-Commander & Memory for proaktiv detektion. :contentReference[oaicite:11]{index=11}  
5. **Cost Monitoring**  
   - Budget Sentinel overvåger token-forbrug; når forbrug > tærskel, trigger en task til prompt-optimering. :contentReference[oaicite:12]{index=12}  
6. **Weekly Meta-Learning & Prompt Optimization**  
   - Udfør ugentlig evaluering af “PromptHistory” i Memory, foreslå diff-drevne prompt-opdateringer, og deploy efter review. :contentReference[oaicite:13]{index=13}  
7. **Safety & Exception Handling**  
   - Indbyg kill-switch `STOPAGENT`; alle tool-calls tjekkes mod projekt-regler i `project_rules.md`. :contentReference[oaicite:14]{index=14}  
8. **Completion & Merge**  
   - Efter diff-only output: kør ESLint/Prettier, Jest & E2E-tests → automatisk merge på `main`, tag evt. version.  

---

## Tool Mapping

| Regel                                    | MCP-værktøj                                             |
|------------------------------------------|---------------------------------------------------------|
| 1. Sprint Kick-off & Task Planning       | TaskManager (`request_planning`, `add_tasks_to_request`) |
| 2. Environment Setup & Context Alignment | Code-Index (`set_project_path`, `refresh_index`), Memory |
| 3. Task Execution Loop                   | TaskManager (`get_next_task`), Filesystem MCP           |
| 4. Continuous Monitoring                 | Desktop-Commander (`read_file`), Memory (`add_observations`) |
| 5. Cost Monitoring                       | TaskManager (“Budget Sentinel”), Memory                 |
| 6. Meta-Learning & Prompt Optimization   | Memory (`add_observations`, `search_nodes`), TaskManager|
| 7. Safety & Exception Handling           | All MCPs + global `MCPErrorHandler`                     |
| 8. Completion & Merge                    | Filesystem MCP (git_diff), TaskManager (`approve_task_completion`) |

