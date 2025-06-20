Her er et **præcist “værktøjs-arsenal”**, du kan wire direkte ind i din AI-agent (MCP-style). Hvert værktøj/kommando dækker én af de seks fejlklasser fra listen ovenfor og kan kaldes non-interaktivt (CI-job, Docker-sidecar eller node-child-process). Til sidst får du et minimalistisk JSON-eksempel på, hvordan agenten kan orkestrere dem sekventielt.

---

## 1 Runtime-/OS- og native-module-mismatch

| Værktøj                  | Hvad det gør                                                                                                                                                             | Kald, som agenten kan fyre af                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| **`check-node-version`** | Slår buildet ihjel, hvis host-Node, npm, pnpm m.fl. ikke matcher semver-krav i `package.json` ➜ spotter “works-on-my-machine” bugs før build ([npmjs.com][1])            | `npx check-node-version --node 18.18.0 --npm 10` |
| **`npm doctor`**         | Helbredstjek af OpenSSL ABI, Python, git, disk-permission osv. – fanger native module problemer, der dukker op i CI/Vercel ([docs.npmjs.com][2], [geeksforgeeks.org][3]) | `npm doctor --json` → parse & fail on non-OK     |

---

## 2 Dependency-graph & build-time traps

| Værktøj          | Funktion                                                                                                                          | Agent-kald                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **`madge`**      | Statisk AST-analyse der finder *circular* og *orphans* (i både `.ts` & `.tsx`) ([npmjs.com][4], [github.com][5])                  | `npx madge src --circular --extensions ts,tsx --json`                                 |
| **`size-limit`** | Breaker CI hvis et import, en lib eller en hele bundle overskrider x kB ➜ stopper 300 MB-Vercel-error før deploy ([npmjs.com][6]) | `"size-limit": [ { "path": "build/**/*.js", "limit": "300 KB" } ]` + `npx size-limit` |

---

## 3 Case-sensitive path-fejl

| Værktøj                                                                                     | Funktion                                                                                                                             | Agent-kald                                           |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **`case-sensitive-paths-webpack-plugin`** eller CLI-pendant `dependency-cruiser --validate` | Failer hvis import-stien ikke matcher cAsE på disk – macOS-tryghed inden den rammer Linux / Vercel ([npmjs.com][7], [github.com][8]) | `npx depcruise --validate .dependencycruiser.js src` |

---

## 4 Miljø-variabler & secrets

| Værktøj                                                   | Funktion                                                                                                                      | Agent-kald                     |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **`dotenv-linter`**                                       | Scanner `.env*` for manglende, duplikerede, eller tomme keys – kan auto-fixe ([github.com][9], [dotenv-linter.github.io][10]) | `dotenv-linter . --skip=Unset` |
| **`git-secrets`** (AWS Labs) / GitHub Secret-Scanning API | Blokerer commit/push med tokens, eller kører fuld repo-scan offline i CI ([docs.aws.amazon.com][11], [docs.github.com][12])   | `git secrets --scan-history`   |

---

## 5 Bundle-størrelse & platform-kvoter

| Værktøj                     | Funktion                                                                                                         | Agent-kald                           |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **`@next/bundle-analyzer`** | Viser – og kan gate – Webpack-chunks; nyttigt til Vercels 250 MB unzip-limit ([npmjs.com][13], [nextjs.org][14]) | `ANALYZE=true next build` → læs JSON |
| **`size-limit`**            | (jf. ovenfor) sætter hård grænse, så CI fejler inden Vercel gør det                                              |                                      |

---

## 6 Dockerfile-/Image-permissions & CIS-hardening

| Værktøj        | Funktion                                                                                                                                                                                          | Agent-kald                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **`hadolint`** | Linter Dockerfile (best-practice + ShellCheck) – afslører root-user, missing `COPY` checksums osv. ([github.com][15], [hadolint.github.io][16])                                                   | `hadolint Dockerfile`                 |
| **`dockle`**   | Scanner *færdige* images mod CIS-benchmarks & file-perms, kan køre uden Docker-daemon – perfekt til GitHub Action ([github.com][17], [shrihariharidas73.medium.com][18], [thorsten-hans.com][19]) | `dockle --exit-code 1 myimage:latest` |

---

## Minimal MCP-style job-beskrivelse (eksempel)

```jsonc
{
  "jobs": [
    { "id": "node-version", "cmd": "npx check-node-version --node 18.18.0", "onFail": "abort" },
    { "id": "env-lint",     "cmd": "dotenv-linter .",                   "onFail": "abort" },
    { "id": "deps",         "cmd": "npx madge src --circular --json",   "onFail": "report" },
    { "id": "case",         "cmd": "npx depcruise --validate cfg.js",   "onFail": "report" },
    { "id": "bundle",       "cmd": "ANALYZE=true next build",           "onFail": "abort" },
    { "id": "size-limit",   "cmd": "npx size-limit",                    "onFail": "abort" },
    { "id": "dockerfile",   "cmd": "hadolint Dockerfile",               "onFail": "report" },
    { "id": "image",        "cmd": "dockle --exit-code 1 myimg:latest", "onFail": "abort" },
    { "id": "secrets",      "cmd": "git secrets --scan",                "onFail": "abort" }
  ]
}
```

> **Sådan bruges:** AI-agenten løber listen sekventielt; hvis et trin returnerer *non-zero exit-code*, stopper den (eller skriver et patch-PR). Alle værktøjer er MIT/BSD/apache eller GPL, ergo gratis at embedde i MCP-servers, GitHub Actions eller din lokale Trae IDE-pipeline.

Med det her sæt — og **ingen deployment-runde** — kan agenten spotte stort set alle klassiske Next.js → Vercel/Docker fejl, før kunden nogensinde ser dem.

[1]: https://www.npmjs.com/package/check-node-version?utm_source=chatgpt.com "check-node-version - NPM"
[2]: https://docs.npmjs.com/cli/v7/commands/npm-doctor/?utm_source=chatgpt.com "npm-doctor - npm Docs"
[3]: https://www.geeksforgeeks.org/npm-doctor-command/?utm_source=chatgpt.com "npm doctor command | GeeksforGeeks"
[4]: https://www.npmjs.com/package/madge?utm_source=chatgpt.com "madge - NPM"
[5]: https://github.com/pahen/madge/issues/355?utm_source=chatgpt.com "v6.0.0: Circular Dependencies with only one node? #355 - GitHub"
[6]: https://www.npmjs.com/package/size-limit?utm_source=chatgpt.com "size-limit - NPM"
[7]: https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin?utm_source=chatgpt.com "case-sensitive-paths-webpack-plugin - NPM"
[8]: https://github.com/umijs/case-sensitive-paths-webpack-plugin?utm_source=chatgpt.com "umijs/case-sensitive-paths-webpack-plugin - GitHub"
[9]: https://github.com/dotenv-linter/dotenv-linter?utm_source=chatgpt.com "️Lightning-fast linter for .env files. Written in Rust - GitHub"
[10]: https://dotenv-linter.github.io/?utm_source=chatgpt.com "dotenv-linter"
[11]: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/scan-git-repositories-for-sensitive-information-and-security-issues-by-using-git-secrets.html?utm_source=chatgpt.com "Scan Git repositories for sensitive information and security issues by ..."
[12]: https://docs.github.com/code-security/secret-scanning/about-secret-scanning?utm_source=chatgpt.com "About secret scanning - GitHub Docs"
[13]: https://www.npmjs.com/package/%40next/bundle-analyzer?utm_source=chatgpt.com "next/bundle-analyzer - NPM"
[14]: https://nextjs.org/docs/app/guides/package-bundling?utm_source=chatgpt.com "Guides: Package Bundling - Next.js"
[15]: https://github.com/hadolint/hadolint?utm_source=chatgpt.com "Dockerfile linter, validate inline bash, written in Haskell - GitHub"
[16]: https://hadolint.github.io/hadolint/?utm_source=chatgpt.com "Dockerfile Linter"
[17]: https://github.com/goodwithtech/dockle?utm_source=chatgpt.com "goodwithtech/dockle: Container Image Linter for Security ... - GitHub"
[18]: https://shrihariharidas73.medium.com/dockle-container-image-linter-for-security-helping-build-the-best-practice-docker-image-easy-b4853fb3675e?utm_source=chatgpt.com "Dockle — Container Image Linter for Security, Helping build the Best ..."
[19]: https://www.thorsten-hans.com/lint-docker-images-with-dockle/?utm_source=chatgpt.com "How to lint Docker images with Dockle - Thorsten Hans"
