Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:
- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error


  ...
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
                  <FloatingCard title="Featured C..." subtitle="Digital Tr..." imageUrl="/images/ca..." ...>
                    <motion.div className="fixed bott..." initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} ...>
                      <div className="fixed bott..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                        <div className="backdrop-b...">
                          <img
                            alt="Featured Case Study"
                            fetchPriority={undefined}
                            loading="lazy"
+                           width={800}
-                           width="64"
+                           height={600}
-                           height="64"
                            decoding="async"
                            data-nimg="1"
                            className="w-16 h-16 rounded-lg object-cover"
                            style={{color:"transparent"}}
                            sizes={undefined}
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2Fdigital-transformation-hero%2Fhero.j..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2Fdigital-transformation-hero%2Fhero.j..."}
+                           src={"/_next/image?url=%2Fimages%2Fcase-studies%2Fdigital-transformation-hero%2Fhero.jpg&..."}
-                           src={"/_next/image?url=%2Fimages%2Fcase-studies%2Fdigital-transformation-hero%2Fhero.jpg&..."}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                  <AIIdeas>
                  <Services>
                  ...
                    <div className="grid md:gr...">
                      ...
                        <a className="block" ref={function} onClick={function onClick} ...>
                          <div className="relative h...">
                            <div className="relative h...">
                              <img
                                alt="E-commerce Platform for Sustainable Fashion"
                                fetchPriority={undefined}
                                loading="lazy"
                                width={undefined}
                                height={undefined}
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                               sizes="100vw"
-                               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=640&q=75 640w..."}
-                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=256&q=75 256w..."}
                                src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=3840&q=75"}
                                ref={function}
                                onLoad={function onLoad}
                                onError={function onError}
                              >
                              ...
                            ...
                      ...
                        <a className="block" ref={function} onClick={function onClick} ...>
                          <div className="relative h...">
                            <div className="relative h...">
                              <img
                                alt="AI-Powered Warehouse Management"
                                fetchPriority={undefined}
                                loading="lazy"
                                width={undefined}
                                height={undefined}
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                               sizes="100vw"
-                               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=640&q=75 640w..."}
-                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=256&q=75 256w..."}
                                src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=3840&q=75"}
                                ref={function}
                                onLoad={function onLoad}
                                onError={function onError}
                              >
                              ...
                            ...
                      ...
                        <a className="block" ref={function} onClick={function onClick} ...>
                          <div className="relative h...">
                            <div className="relative h...">
                              <img
                                alt="Next-Gen Mobile Banking App"
                                fetchPriority={undefined}
                                loading="lazy"
                                width={undefined}
                                height={undefined}
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                               sizes="100vw"
-                               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=640&q=75 640w..."}
-                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=256&q=75 256w..."}
                                src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=3840&q=75"}
                                ref={function}
                                onLoad={function onLoad}
                                onError={function onError}
                              >
                              ...
                            ...
                      ...
                        <a className="block" ref={function} onClick={function onClick} ...>
                          <div className="relative h...">
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
+                               sizes="100vw"
-                               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=640&q=75 640w..."}
-                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=256&q=75 256w..."}
                                src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=3840&q=75"}
                                ref={function}
                                onLoad={function onLoad}
                                onError={function onError}
                              >
                              ...
                            ...
                      ...
                        <a className="block" ref={function} onClick={function onClick} ...>
                          <div className="relative h...">
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
+                               sizes="100vw"
-                               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=640&q=75 640w..."}
-                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=256&q=75 256w..."}
                                src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=3840&q=75"}
                                ref={function}
                                onLoad={function onLoad}
                                onError={function onError}
                              >
                              ...
                            ...
                      ...
                        <a className="block" ref={function} onClick={function onClick} ...>
                          <div className="relative h...">
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
+                               sizes="100vw"
-                               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=640&q=75 640w..."}
-                               srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=256&q=75 256w..."}
                                src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=3840&q=75"}
                                ref={function}
                                onLoad={function onLoad}
                                onError={function onError}
                              >
                              ...
                            ...
                  ...
              ...
Call Stack
19
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
img
unknown (0:0)
<unknown>
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_390713b4._.js (3277:46)
<unknown>
file:///Users/Yousef_1/Dokumenter/HjemmesideIT/TechFlow%20Solutions/techflow-nextjs/.next/static/chunks/node_modules_390713b4._.js (3391:47)
FloatingCard

