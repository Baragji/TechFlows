# 1 Konsoloutput

[Log] 🔍 Axe-core accessibility monitoring enabled (src_6b2a6cf3._.js, line 2006)
[Log] New axe issues (node_modules_134746b6._.js, line 464)
[Log] moderate: Document should have one main landmark https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=axeAPI (node_modules_134746b6._.js, line 484)
[Log] moderate: All page content should be contained by landmarks https://dequeuniversity.com/rules/axe/4.10/region?application=axeAPI (node_modules_134746b6._.js, line 484)
[Log] Element:  (node_modules_134746b6._.js, line 346)
<div class="grow bg-obsidian-dark">…</div>

[Log] HTML: <div class="grow bg-obsidian-dark"> (node_modules_134746b6._.js, line 350)
[Error] Fix any of the following:
  Some page content is not contained by landmarks
	error (node_modules_next_dist_client_8f19e6fb._.js:1226)
	logFailureMessage (node_modules_134746b6._.js:354)
	failureSummary (node_modules_134746b6._.js:360)
	(anonym funktion) (node_modules_134746b6._.js:486)
	forEach
	(anonym funktion) (node_modules_134746b6._.js:485)
	forEach
	logToConsole (node_modules_134746b6._.js:465)
	(anonym funktion) (node_modules_134746b6._.js:413)
	resolve (node_modules_axe-core_axe_bc1a5162.js:50651)
	respond (node_modules_axe-core_axe_bc1a5162.js:50608)
	v2Reporter (node_modules_axe-core_axe_bc1a5162.js:50874)
	createReport (node_modules_axe-core_axe_bc1a5162.js:50665)
	handleRunRules (node_modules_axe-core_axe_bc1a5162.js:50626)
	(anonym funktion) (node_modules_axe-core_axe_bc1a5162.js:50411)
	(anonym funktion) (node_modules_axe-core_axe_bc1a5162.js:8343)
	(anonym funktion) (node_modules_axe-core_axe_bc1a5162.js:50033)
	(anonym funktion) (node_modules_axe-core_axe_bc1a5162.js:8343)
	(anonym funktion) (node_modules_axe-core_axe_bc1a5162.js:50304)
	(anonym funktion) (node_modules_axe-core_axe_bc1a5162.js:49522)

# 2 Terminal output
 GET /favicon.ico?favicon.45db1c09.ico 200 in 1258ms
 ✓ Compiled /favicon.ico in 2.1s
 GET /apple-touch-icon-precomposed.png 404 in 2249ms
 ○ Compiling /events/[slug] ...
 ✓ Compiled /events/[slug] in 1345ms
 GET /events/ai-integration-webudvikling-2024 200 in 1917ms
 GET /services/webdesign 404 in 49ms
 GET /services/webdesign 404 in 114ms

 # 3 prisberegner
 layout/Design/ui/Farver matcher ikke resten af siden

# 4 Fix de resterende sider, som mangler, så der ikke er 404 mere.
