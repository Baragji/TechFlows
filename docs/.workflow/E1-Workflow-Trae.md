# TechFlow Migration Workflow Rules

Operationelle regler for TechFlow Solutions hjemmeside-migration baseret på Autonomous Pipeline.

## Bekræftet - De 8 Kerneprincipper:

1. **Sprint Kick-off & Task Planning** - Automatisk opgaveopdeling og godkendelse før kodning
2. **Environment Setup & Context Alignment** - Projektkontext, videnbase og versionskontrol setup
3. **Task Execution Loop** - Iterativ opgaveudførelse med test og commit per opgave
4. **Feature Integration & Verification** - Fuld systemtest og verifikation mod krav
5. **Final User Approval & Deployment** - Brugergennemgang og deployment til produktion
6. **Continuous Monitoring & Anomaly Detection** - Løbende overvågning efter deployment
7. **Weekly Meta-Learning & Prompt Optimization** - Ugentlig evaluering og forbedring
8. **Safety & Exception Handling** - Indbyggede sikkerhedsforanstaltninger gennem alle trin

---

## TechFlow Migration Workflow Rules

### 1. PlanførAct
- **Original:** Sprint Kick-off & Task Planning med automatisk opgaveopdeling
- **TechFlow Tilpasning:** Alle hjemmeside-migrationsopgaver skal planlægges og godkendes før implementation
- **Regel:** Ingen kodning før eksplicit plan-godkendelse fra bruger

### 2. KontekstFirst
- **Original:** Environment Setup & Context Alignment med projektindeksering
- **TechFlow Tilpasning:** Indlæs eksisterende TechFlow hjemmeside-struktur og tidligere migrationsviden
- **Regel:** Altid set_project_path og refresh_index før opgavestart

### 3. TaskByTask
- **Original:** Task Execution Loop med iterativ udførelse
- **TechFlow Tilpasning:** Hver migrationskomponent (header, footer, prisberegner) behandles som separat opgave
- **Regel:** En opgave ad gangen, test og commit efter hver

### 4. FullVerify
- **Original:** Feature Integration & Verification med systemtest
- **TechFlow Tilpasning:** Komplet test af migreret hjemmeside inkl. performance og SEO metrics
- **Regel:** npm run build + lighthouse audit før brugergennemgang

### 5. UserApproval
- **Original:** Final User Approval & Deployment med brugergennemgang
- **TechFlow Tilpasning:** Bruger skal godkende hver migreret sektion før deployment til Vercel
- **Regel:** Vis diff og demo før merge til main branch

### 6. MonitorLive
- **Original:** Continuous Monitoring & Anomaly Detection
- **TechFlow Tilpasning:** Overvåg TechFlow hjemmeside performance og brugeroplevelse efter migration
- **Regel:** Automatisk alerting ved performance-drop eller fejl

### 7. WeeklyLearn
- **Original:** Weekly Meta-Learning & Prompt Optimization
- **TechFlow Tilpasning:** Ugentlig evaluering af migrationssucces og workflow-forbedringer
- **Regel:** Dokumenter læringer i Memory MCP for fremtidige migrationer

### 8. SafetyFirst
- **Original:** Safety & Exception Handling med indbyggede sikkerhedsforanstaltninger
- **TechFlow Tilpasning:** Beskyt eksisterende TechFlow data og konfiguration under migration
- **Regel:** STOP AGENT kommando + protected paths enforcement

---

## Specifikke TechFlow Regler

### Diff-Only Regel
- Vis kun ændringer, ikke hele filer
- Brug git_diff før hver commit
- Maksimalt 50 linjer diff per præsentation

### Kill-Switch Regel
- "STOP AGENT" stopper øjeblikkeligt alle operationer
- Beskyttede stier: `/config/**`, `.env*`, `/migrations/**`
- Ingen automatisk sletning af eksisterende TechFlow filer

### Performance Regel
- Lighthouse score >95 for alle sider
- First Contentful Paint <1.5s
- Cumulative Layout Shift <0.1

---

## Tool Mapping

### TaskManager MCP
- **PlanførAct** → `request_planning`, `get_next_task`
- **TaskByTask** → `mark_task_done`, `approve_task_completion`
- **UserApproval** → `approve_request_completion`

### Memory MCP
- **KontekstFirst** → `read_graph`, `search_nodes`
- **WeeklyLearn** → `add_observations`, `create_entities`
- **MonitorLive** → `create_relations` (fejl-tracking)

### Code-Index MCP
- **KontekstFirst** → `set_project_path`, `refresh_index`
- **TaskByTask** → `search_code`, `find_files`
- **FullVerify** → `get_file_summary`

### Desktop-Commander MCP
- **TaskByTask** → `write_file`, `read_file`
- **FullVerify** → `execute_command` (npm run build/test)
- **Diff-Only** → `read_file` (git diff output)

### Git Integration
- **TaskByTask** → Feature branch per migration
- **UserApproval** → Merge til main efter godkendelse
- **SafetyFirst** → Rollback via branch isolation

---

*Disse regler sikrer kontrolleret og sikker migration af TechFlow Solutions hjemmeside med fuld sporbarhed og brugerinvolvering.*