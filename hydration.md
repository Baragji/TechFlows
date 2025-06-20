1/1

Next.js 15.3.3 (stale)
Turbopack
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
    <Home>
      <main>
        <StructuredData>
        <StructuredData>
        <StructuredData>
        <Hero>
        <FloatingCard>
        <AIIdeas>
        <Services>
        ...
          <div className="container ...">
            <motion.div>
            <div className="grid md:gr...">
              <motion.div className="group rela..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                <div className="group rela..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                  <LinkComponent href="/case-stud..." className="block">
                    <a className="block" ref={function} onClick={function onClick} onMouseEnter={function onMouseEnter} ...>
                      <div className="relative h...">
                        <div className="relative h...">
                          <img
                            alt="E-commerce Platform for Sustainable Fashion"
                            fetchPriority={undefined}
+                           loading="lazy"
-                           loading={null}
                            width={undefined}
                            height={undefined}
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                           sizes="100vw"
-                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=640&q=75 640w, /_..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=256&q=75 256w, /_..."}
                            src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies1.png&w=3840&q=75"}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                        ...
              <motion.div className="group rela..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                <div className="group rela..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                  <LinkComponent href="/case-stud..." className="block">
                    <a className="block" ref={function} onClick={function onClick} onMouseEnter={function onMouseEnter} ...>
                      <div className="relative h...">
                        <div className="relative h...">
                          <img
                            alt="AI-Powered Warehouse Management"
                            fetchPriority={undefined}
+                           loading="lazy"
-                           loading={null}
                            width={undefined}
                            height={undefined}
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                           sizes="100vw"
-                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=640&q=75 640w, /_..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=256&q=75 256w, /_..."}
                            src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies2.png&w=3840&q=75"}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                        ...
              <motion.div className="group rela..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                <div className="group rela..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                  <LinkComponent href="/case-stud..." className="block">
                    <a className="block" ref={function} onClick={function onClick} onMouseEnter={function onMouseEnter} ...>
                      <div className="relative h...">
                        <div className="relative h...">
                          <img
                            alt="Next-Gen Mobile Banking App"
                            fetchPriority={undefined}
+                           loading="lazy"
-                           loading={null}
                            width={undefined}
                            height={undefined}
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:undefined, ...}}
+                           sizes="100vw"
-                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=640&q=75 640w, /_..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=256&q=75 256w, /_..."}
                            src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies3.png&w=3840&q=75"}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                        ...
              <motion.div className="group rela..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                <div className="group rela..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                  <LinkComponent href="/case-stud..." className="block">
                    <a className="block" ref={function} onClick={function onClick} onMouseEnter={function onMouseEnter} ...>
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
+                           sizes="100vw"
-                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=640&q=75 640w, /_..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=256&q=75 256w, /_..."}
                            src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies4.png&w=3840&q=75"}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                        ...
              <motion.div className="group rela..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                <div className="group rela..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                  <LinkComponent href="/case-stud..." className="block">
                    <a className="block" ref={function} onClick={function onClick} onMouseEnter={function onMouseEnter} ...>
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
+                           sizes="100vw"
-                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=640&q=75 640w, /_..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=256&q=75 256w, /_..."}
                            src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies5.jpg&w=3840&q=75"}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                        ...
              <motion.div className="group rela..." initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} ...>
                <div className="group rela..." style={{opacity:0, ...}} ref={function useMotionRef.useCallback}>
                  <LinkComponent href="/case-stud..." className="block">
                    <a className="block" ref={function} onClick={function onClick} onMouseEnter={function onMouseEnter} ...>
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
+                           sizes="100vw"
-                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
+                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=640&q=75 640w, /_..."}
-                           srcSet={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=256&q=75 256w, /_..."}
                            src={"/_next/image?url=%2Fimages%2Fcase-studies%2FCasestudies6.png&w=3840&q=75"}
                            ref={function}
                            onLoad={function onLoad}
                            onError={function onError}
                          >
                          ...
                        ...
            ...
        ...
