Console Error

Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:
- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error


  ...
    <LoadingBoundary loading={null}>
      <HTTPAccessFallbackBoundary notFound={[...]} forbidden={undefined} unauthorized={undefined}>
        <HTTPAccessFallbackErrorBoundary pathname="/" notFound={[...]} forbidden={undefined} unauthorized={undefined} ...>
          <RedirectBoundary>
            <RedirectErrorBoundary router={{...}}>
              <InnerLayoutRouter url="/" tree={[...]} cacheNode={{lazyData:null, ...}} segmentPath={[...]}>
                <Home>
                  <main>
                    <StructuredData>
                    <StructuredData>
                    <StructuredData>
                    <Hero>
                    <AIIdeas>
                    <Services>
                    <CaseStudiesShowcase>
                    <LoadableComponent>
                    <LoadableComponent>
                    <LoadableComponent>
                    <LoadableComponent>
                    <Contact>
                      <section id="contact" className="py-20 bg-w...">
                        <div className="container ...">
                          <motion.div className="text-cente..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                            <div className="text-cente..." style={{opacity:0, ...}} ...>
                              <h2
+                               className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
-                               className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                              >
+                               Lad os tale sammen
                              <p
+                               className="text-lg text-text-light max-w-2xl mx-auto"
-                               className="text-lg text-gray-600 max-w-2xl mx-auto"
                              >
+                               Klar til at tage næste skridt? Kontakt os i dag
                          <div className="grid lg:gr...">
                            <motion.div className="space-y-8" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} ...>
                              <div className="space-y-8" style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                                <div>
                                  <h3
+                                   className="text-2xl font-semibold text-text-dark mb-6"
-                                   className="text-2xl font-semibold text-gray-900 mb-6"
                                  >
+                                   Kontakt information
                                  <div className="space-y-6">
                                    <div className="flex items...">
                                      <div>
                                      <div>
                                        <h4
+                                         className="font-semibold text-text-dark mb-1"
-                                         className="font-semibold text-gray-900 mb-1"
                                        >
+                                         Email
                                        ...
                                    <div className="flex items...">
                                      <div>
                                      <div>
                                        <h4
+                                         className="font-semibold text-text-dark mb-1"
-                                         className="font-semibold text-gray-900 mb-1"
                                        >
+                                         Telefon
                                        ...
                                    <div className="flex items...">
                                      <div>
                                      <div>
                                        <h4
+                                         className="font-semibold text-text-dark mb-1"
-                                         className="font-semibold text-gray-900 mb-1"
                                        >
+                                         Adresse
                                        <p
+                                         className="text-text-light"
-                                         className="text-gray-600"
                                        >
                            ...
                              <div style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                                <form onSubmit={function useForm.useCallback[handleSubmit]} className="space-y-6">
                                  <div className="grid md:gr...">
                                    <div>
                                      <label
                                        htmlFor="name"
+                                       className="block text-sm font-medium text-text-dark mb-2"
-                                       className="block text-sm font-medium text-gray-900 mb-2"
                                      >
+                                       Navn *
                                      ...
                                    <div>
                                      <label
                                        htmlFor="email"
+                                       className="block text-sm font-medium text-text-dark mb-2"
-                                       className="block text-sm font-medium text-gray-900 mb-2"
                                      >
+                                       Email *
                                      ...
                                  <div className="grid md:gr...">
                                    <div>
                                      <label
                                        htmlFor="company"
+                                       className="block text-sm font-medium text-text-dark mb-2"
-                                       className="block text-sm font-medium text-gray-900 mb-2"
                                      >
+                                       Virksomhed
                                      ...
                                    <div>
                                      <label
                                        htmlFor="service"
+                                       className="block text-sm font-medium text-text-dark mb-2"
-                                       className="block text-sm font-medium text-gray-900 mb-2"
                                      >
+                                       Interesseret i
                                      ...
                                  <div>
                                    <label
                                      htmlFor="message"
+                                     className="block text-sm font-medium text-text-dark mb-2"
-                                     className="block text-sm font-medium text-gray-900 mb-2"
                                    >
+                                     Besked *
                                    ...
                                  ...
                                ...
                ...
Call Stack
17
createConsoleError
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_client_8f19e6fb._.js (882:80)
handleConsoleError
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_client_8f19e6fb._.js (1058:54)
error
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_client_8f19e6fb._.js (1223:57)
<unknown>
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (5153:30)
runWithFiberInDEV
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (3073:139)
emitPendingHydrationWarnings
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (5152:30)
completeWork
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (8331:130)
runWithFiberInDEV
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (3073:139)
completeUnitOfWork
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (10308:40)
performUnitOfWork
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (10245:46)
workLoopConcurrentByScheduler
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (10239:75)
renderRootConcurrent
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (10221:100)
performWorkOnRoot
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (9853:196)
performWorkOnRootViaSchedulerTask
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (10826:26)
performWorkUntilDeadline
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js (1982:72)
h2
unknown (0:0)
Contact
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/src_11c29a3f._.js (2301:227)
