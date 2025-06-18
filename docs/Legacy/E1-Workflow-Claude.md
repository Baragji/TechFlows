# TechFlow Migration Workflow Rules

Projekt-specifikke workflow regler for TechFlow Solutions hjemmeside migration fra vanilla HTML/CSS/JS til Next.js stack.

## TechFlow Migration Workflow Rules

1. **PlanførAct** - Ingen kode før migration plan er user-approved
2. **Komponent-Først** - Migrer HTML til React komponenter før styling
3. **Lighthouse-Gate** - Hver komponent skal score 90+ før næste task
4. **Diff-Only** - Vis kun git diff ved user checkpoints
5. **Rollback-Ready** - Bevar vanilla backup ved kritiske fejl
6. **SEO-Preserve** - Verify meta tags og structured data efter migration
7. **Performance-First** - Core Web Vitals grønne før deployment
8. **Kill-Switch** - "STOP MIGRATION" stopper alt og bevarer current state
9. **TypeScript-Strict** - Alle komponenter skal have type definitions
10. **Responsive-Test** - Test mobile/desktop på hver komponent
11. **API-Isolate** - Migrer API routes separat fra frontend komponenter
12. **Vercel-Deploy** - Staging deployment før production merge

## Tool Mapping

- **PlanførAct** → TaskManager (request_planning, get_next_task)
- **Komponent-Først** → Code-Index (search_code, find_files)
- **Lighthouse-Gate** → Desktop-Commander (lighthouse audit commands)
- **Diff-Only** → Git MCP (git_diff, git_status)
- **Rollback-Ready** → Git MCP (git_checkout, git_reset)
- **SEO-Preserve** → Code-Index (search meta tags, structured data)
- **Performance-First** → Desktop-Commander (npm run audit, build commands)
- **Kill-Switch** → TaskManager (emergency stop, state preservation)
- **TypeScript-Strict** → Filesystem MCP (write_file with .d.ts)
- **Responsive-Test** → Desktop-Commander (responsive testing tools)
- **API-Isolate** → Code-Index (api routes separation)
- **Vercel-Deploy** → Git MCP (deployment branch management)