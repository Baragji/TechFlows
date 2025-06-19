Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
      <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} forbidden={undefined} ...>
        <RedirectBoundary>
          <RedirectErrorBoundary router={{...}}>
            <Head>
            <link>
            <script>
            <script>
            <script>
            <RootLayout>
              <html lang="da" className="bg-obsidia...">
                <body className="inter_787a...">
                  <PerformanceMonitor>
                  <ServiceWorkerRegistration>
                  <Layout>
                    <div className={"min-h-sc..."}>
                      ...
                        <nav className="fixed top-..." style={{...}} ref={function useMotionRef.useCallback}>
                          <div className="max-w-[128...">
                            <motion.div className="flex items..." initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} ...>
                              <div
+                               className="flex items-center gap-6 px-6 py-2.5 rounded-full border border-white/10 bg-..."
-                               className="flex items-center gap-6 px-6 py-2.5 rounded-full backdrop-blur-[20px] bg-wh..."
                                style={{opacity:0,transform:"translateX..."}}
                                ref={function useMotionRef.useCallback}
                              >
                            <motion.div className="hidden lg:..." initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} ...>
                              <div
+                               className="hidden lg:flex items-center gap-6 px-6 py-2.5 rounded-full border border-wh..."
-                               className="hidden lg:flex items-center gap-6 px-6 py-2.5 rounded-full backdrop-blur-[2..."
                                style={{opacity:0,transform:"translateX..."}}
                                ref={function useMotionRef.useCallback}
                              >
                      ...
                        <Home>
                          <main>
                            <StructuredData>
                            <StructuredData>
                            <StructuredData>
                            ...
                              <div className="container ...">
                                <motion.div className="w-1/2 text..." variants={{hidden:{...}, ...}} initial="hidden" ...>
                                  <div
+                                   className="w-1/2 text-left glass-hero p-6 rounded-xl"
-                                   className="w-1/2 text-left backdrop-blur-[20px] bg-white/10 border border-white/10..."
                                    style={{opacity:0}}
                                    ref={function useMotionRef.useCallback}
                                  >
                            ...
                              <div className="fixed bott..." style={{opacity:0, ...}} ...>
                                <div className="backdrop-b...">
                                  <img
+                                   src="/images/case-studies/digital-transformation-hero/hero.jpg"
-                                   src={"/_next/image?url=%2Fimages%2Fcase-studies%2Fdigital-transformation-hero%2Fh..."}
                                    alt="Featured Case Study"
                                    className="w-16 h-16 rounded-lg object-cover"
-                                   loading="lazy"
-                                   width="64"
-                                   height="64"
-                                   decoding="async"
-                                   data-nimg="1"
-                                   style={{color:"transparent"}}
-                                   sizes="64px"
-                                   srcset={"/_next/image?url=%2Fimages%2Fcase-studies%2Fdigital-transformation-hero%..."}
                                  >
                                  ...
                            <AIIdeas>
                            <Services>
                            ...
                              <div className="grid md:gr...">
                                ...
                                  <div className="relative h...">
                                    <img
                                      alt="E-commerce Platform for Sustainable Fashion"
                                      fetchPriority={undefined}
+                                     loading="lazy"
-                                     loading={null}
                                      width={undefined}
                                      height={undefined}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                                     sizes="100vw"
-                                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=640&q=7..."}
-                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=256&q=7..."}
                                      src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=3840&q=75"}
                                      ref={function}
                                      onLoad={function onLoad}
                                      onError={function onError}
                                    >
                                    ...
                                ...
                                  <div className="relative h...">
                                    <img
                                      alt="AI-Powered Warehouse Management"
                                      fetchPriority={undefined}
+                                     loading="lazy"
-                                     loading={null}
                                      width={undefined}
                                      height={undefined}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                                     sizes="100vw"
-                                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=640&q=7..."}
-                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=256&q=7..."}
                                      src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=3840&q=75"}
                                      ref={function}
                                      onLoad={function onLoad}
                                      onError={function onError}
                                    >
                                    ...
                                ...
                                  <div className="relative h...">
                                    <img
                                      alt="Next-Gen Mobile Banking App"
                                      fetchPriority={undefined}
+                                     loading="lazy"
-                                     loading={null}
                                      width={undefined}
                                      height={undefined}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                                     sizes="100vw"
-                                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=640&q=7..."}
-                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=256&q=7..."}
                                      src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=3840&q=75"}
                                      ref={function}
                                      onLoad={function onLoad}
                                      onError={function onError}
                                    >
                                    ...
                                ...
                                  <div className="relative h...">
                                    <img
                                      alt="Smart Fitness Ecosystem"
                                      fetchPriority={undefined}
                                      loading="lazy"
                                      width={undefined}
                                      height={undefined}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                                     sizes="100vw"
-                                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=640&q=7..."}
-                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=256&q=7..."}
                                      src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=3840&q=75"}
                                      ref={function}
                                      onLoad={function onLoad}
                                      onError={function onError}
                                    >
                                    ...
                                ...
                                  <div className="relative h...">
                                    <img
                                      alt="AR Furniture Visualization"
                                      fetchPriority={undefined}
                                      loading="lazy"
                                      width={undefined}
                                      height={undefined}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                                     sizes="100vw"
-                                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=640&q=7..."}
-                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=256&q=7..."}
                                      src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=3840&q=75"}
                                      ref={function}
                                      onLoad={function onLoad}
                                      onError={function onError}
                                    >
                                    ...
                                ...
                                  <div className="relative h...">
                                    <img
                                      alt="Digital Transformation Platform"
                                      fetchPriority={undefined}
                                      loading="lazy"
                                      width={undefined}
                                      height={undefined}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                                     sizes="100vw"
-                                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=640&q=7..."}
-                                     srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=256&q=7..."}
                                      src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=3840&q=75"}
                                      ref={function}
                                      onLoad={function onLoad}
                                      onError={function onError}
                                    >
                                    ...
                            ...
                      ...
            ...

    at createConsoleError (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_8f19e6fb._.js:882:71)
    at handleConsoleError (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_8f19e6fb._.js:1058:54)
    at console.error (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_8f19e6fb._.js:1223:57)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:5153:25
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:3073:74)
    at emitPendingHydrationWarnings (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:5152:13)
    at completeWork (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:8331:102)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:3073:131)
    at completeUnitOfWork (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:10308:23)
    at performUnitOfWork (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:10245:28)
    at workLoopConcurrentByScheduler (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:10239:58)
    at renderRootConcurrent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:10221:71)
    at performWorkOnRoot (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:9853:176)
    at performWorkOnRootViaSchedulerTask (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:10826:9)
    at MessagePort.performWorkUntilDeadline (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:1982:64)
    at div (<anonymous>)
    at useRender (http://localhost:3000/_next/static/chunks/node_modules_3750b30c._.js:12249:195)
    at MotionComponent (http://localhost:3000/_next/static/chunks/node_modules_3750b30c._.js:11455:17)
    at Navigation (http://localhost:3000/_next/static/chunks/src_77d9615d._.js:877:219)
    at Layout (rsc://React/Server/file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/server/chunks/ssr/%5Broot-of-the-server%5D__6519c3ce._.js?3:128:264)
    at RootLayout (rsc://React/Server/file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/server/chunks/ssr/%5Broot-of-the-server%5D__6519c3ce._.js?0:321:268)