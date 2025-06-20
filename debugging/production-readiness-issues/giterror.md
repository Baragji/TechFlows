> git -c user.useConfigOnly=true commit --quiet --allow-empty-message --file -
[STARTED] Backing up original state...
[COMPLETED] Backed up original state in git stash (1c926b7)
[STARTED] Running tasks for staged files...
[STARTED] .lintstagedrc.json — 12 files
[STARTED] *.{js,jsx,ts,tsx} — 9 files
[STARTED] *.{json,md,yml,yaml} — 2 files
[STARTED] *.{css,scss,sass} — 0 files
[STARTED] *.{ts,tsx} — 9 files
[SKIPPED] *.{css,scss,sass} — no files
[STARTED] eslint --fix
[STARTED] prettier --write
[STARTED] tsc --noEmit --skipLibCheck
[COMPLETED] prettier --write
[COMPLETED] *.{json,md,yml,yaml} — 2 files
[FAILED] tsc --noEmit --skipLibCheck [FAILED]
[FAILED] tsc --noEmit --skipLibCheck [FAILED]
[COMPLETED] Running tasks for staged files...
[STARTED] Applying modifications from tasks...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[FAILED] eslint --fix [KILLED]
[FAILED] eslint --fix [KILLED]
[COMPLETED] Reverting to original state because of errors...
[STARTED] Cleaning up temporary files...
[COMPLETED] Cleaning up temporary files...

✖ tsc --noEmit --skipLibCheck:
src/app/about/page.tsx(1,26): error TS2307: Cannot find module '@/components/sections/AboutContent' or its corresponding type declarations.
src/app/about/page.tsx(2,23): error TS2307: Cannot find module '@/components/sections/AboutHero' or its corresponding type declarations.
src/app/about/page.tsx(3,25): error TS2307: Cannot find module '@/components/sections/TeamSection' or its corresponding type declarations.
src/app/about/page.tsx(13,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/about/page.tsx(14,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/about/page.tsx(15,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/about/page.tsx(16,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/blog/page.tsx(1,30): error TS2307: Cannot find module '@/components/lazy/LazyComponents' or its corresponding type declarations.
src/app/blog/page.tsx(2,22): error TS2307: Cannot find module '@/components/sections/BlogHero' or its corresponding type declarations.
src/app/blog/page.tsx(3,24): error TS2307: Cannot find module '@/components/sections/Newsletter' or its corresponding type declarations.
src/app/blog/page.tsx(15,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/blog/page.tsx(16,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/blog/page.tsx(17,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/blog/page.tsx(18,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(1,27): error TS2307: Cannot find module '@/components/sections/ClientMarquee' or its corresponding type declarations.
src/app/case-studies/page.tsx(2,27): error TS2307: Cannot find module '@/components/sections/PortfolioGrid' or its corresponding type declarations.
src/app/case-studies/page.tsx(3,26): error TS2307: Cannot find module '@/components/sections/StatsSection' or its corresponding type declarations.
src/app/case-studies/page.tsx(14,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(16,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(18,9): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(19,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(20,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(23,9): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(24,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(25,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(28,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(31,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(40,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(43,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/case-studies/page.tsx(46,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/contact/page.tsx(1,21): error TS2307: Cannot find module '@/components/sections/Contact' or its corresponding type declarations.
src/app/contact/page.tsx(17,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/contact/page.tsx(18,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/events/page.tsx(1,32): error TS2307: Cannot find module '@/components/lazy/LazyComponents' or its corresponding type declarations.
src/app/events/page.tsx(2,24): error TS2307: Cannot find module '@/components/sections/EventsHero' or its corresponding type declarations.
src/app/events/page.tsx(3,24): error TS2307: Cannot find module '@/components/sections/Newsletter' or its corresponding type declarations.
src/app/events/page.tsx(27,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/events/page.tsx(28,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/events/page.tsx(29,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/events/page.tsx(30,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(6,8): error TS2307: Cannot find module '@/components/lazy/LazyComponents' or its corresponding type declarations.
src/app/page.tsx(7,21): error TS2307: Cannot find module '@/components/sections/AIIdeas' or its corresponding type declarations.
src/app/page.tsx(8,33): error TS2307: Cannot find module '@/components/sections/CaseStudiesShowcase' or its corresponding type declarations.
src/app/page.tsx(9,21): error TS2307: Cannot find module '@/components/sections/Contact' or its corresponding type declarations.
src/app/page.tsx(10,18): error TS2307: Cannot find module '@/components/sections/Hero' or its corresponding type declarations.
src/app/page.tsx(11,22): error TS2307: Cannot find module '@/components/sections/Services' or its corresponding type declarations.
src/app/page.tsx(12,28): error TS2307: Cannot find module '@/components/seo/StructuredData' or its corresponding type declarations.
src/app/page.tsx(23,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(24,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(25,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(26,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(28,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(29,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(30,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(31,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(32,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(33,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(34,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(35,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/page.tsx(36,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/prisberegner/page.tsx(1,24): error TS2307: Cannot find module '@/components/sections/ContactCTA' or its corresponding type declarations.
src/app/prisberegner/page.tsx(2,29): error TS2307: Cannot find module '@/components/sections/PriceCalculator' or its corresponding type declarations.
src/app/prisberegner/page.tsx(3,33): error TS2307: Cannot find module '@/components/sections/PriceCalculatorHero' or its corresponding type declarations.
src/app/prisberegner/page.tsx(16,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/prisberegner/page.tsx(17,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/prisberegner/page.tsx(18,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/prisberegner/page.tsx(19,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/testimonials/page.tsx(1,29): error TS2307: Cannot find module '@/components/sections/TestimonialsCTA' or its corresponding type declarations.
src/app/testimonials/page.tsx(2,30): error TS2307: Cannot find module '@/components/sections/TestimonialsGrid' or its corresponding type declarations.
src/app/testimonials/page.tsx(3,30): error TS2307: Cannot find module '@/components/sections/TestimonialsHero' or its corresponding type declarations.
src/app/testimonials/page.tsx(4,31): error TS2307: Cannot find module '@/components/sections/TestimonialsStats' or its corresponding type declarations.
src/app/testimonials/page.tsx(16,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/testimonials/page.tsx(17,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/testimonials/page.tsx(18,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/testimonials/page.tsx(19,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/app/testimonials/page.tsx(20,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(3,22): error TS2307: Cannot find module '@/components/ui' or its corresponding type declarations.
src/components/Navigation.tsx(4,55): error TS2307: Cannot find module '@/types/navigation' or its corresponding type declarations.
src/components/Navigation.tsx(110,5): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(118,7): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(120,9): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(122,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(127,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(132,15): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(137,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(140,15): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(154,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(155,15): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(167,17): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(172,19): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(177,15): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(179,19): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(187,21): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(188,23): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(190,27): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(196,29): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(201,31): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(202,33): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(204,31): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(205,33): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(208,33): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(224,15): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(240,9): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(242,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(243,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(244,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(248,11): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
src/components/Navigation.tsx(252,13): error TS17004: Cannot use JSX unless the '--jsx' flag is provided.

✖ eslint --fix failed without output (KILLED).
husky - pre-commit script failed (code 1)
