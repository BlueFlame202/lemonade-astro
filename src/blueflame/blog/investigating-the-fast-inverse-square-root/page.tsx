'use client'

import Image from 'next/image'
import Link from 'next/link'
import '../bstyles.css'
import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import { Montserrat } from 'next/font/google'

const font = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleButtonClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    const content = {
        __html: String.raw`

        <h2 class="display-4" id="motivations">The Motivations</h2>
        <p>As someone interested in game programming, I became obsessed with Quake's Fast Inverse Square Root a few years ago. Why didn't everyone use it if it was so fast? But a quick search on Stack Exchange told me that modern CPUs could compute inverse square roots much faster than Quake's algorithm. Ever since then, I've been curious to find out what exactly these methods are, how to implement them, and how to show that these methods really are faster.</p>

        <p>As it turns out, there are several implementations of the inverse square root. Here is a list of the ones I could find (let me know in the comments if you know any others for me to benchmark):</p>
        <ul>
          <li>Using <code>1/sqrt(x)</code> with <code>sqrt(x)</code> from the <code>cmath</code> include header</li>
          <li>Using <code>sqrtf(x)</code> or <code>sqrtl(x)</code> instead of <code>sqrt(x)</code> above</li>
          <li>Quake's Fast Inverse Square Root</li>
          <li>Using <code>pow(x,-0.5)</code></li>
          <li>Using RSQRTSS or RSQRTPS (implemented in inline assembler)</li>
          <li>Using <code>_mm_rsqrt_ss</code> intrinsic from <code>immintrin.h</code></li>
        </ul>
        <p>My desktop computer runs on an Intel Core i5-3450 CPU. To make things interesting, my final product was two .exe files that can be run on other Intel CPUs (booting Windows) so that in future posts, I might be able to do comparisons across different CPUs. For now, I don't know much about CPUs, so I can't say whether the above idea is actually a good one, but it'll be an interesting experiment. I'd love to hear ideas in the comments!</p>

        <h2 class="display-4" id="implementations">Implementations of the Above Methods</h2>

        <h3 class="display-6" id="implementations-fisr">Quake's Fast Inverse Square Root Algorithm</h3>
        <p>The implementation of the Fast Inverse Square Root from Quake was a bit modified from the original, but still kept the important parts:</p>
        <pre>
            float fastInvSqrt(float x)
            { // brackets lining up nicely ;)
              float xhalf = 0.5f * x;
              i = 0x5f3759df - (i >> 1);
              x = *(float*)&i;
              x = x * (1.5f - (xhalf*x*x));
              return x;
            }
        </pre>
        <p>Nothing much to say here, other than that this algorithm is awesome.</p>

        <h3 class="display-6" id="implementations-rsqrtss">Implementing RSQRTSS: A Story of Problems and Solutions</h3>

        <p>Implementing RSQRTSS was fairly difficult for me, considering I had not really worked with assembly code or intrnisics. In the end, I had three implementations:</p>

        <pre>
          inline float rsqrt(float f)
          {
            __asm pxor xmm1, xmm1
            __asm rsqrtss xmm1, f
            __asm movss f, xmm1
            return f;
          }

          inline float rsqrt_imp2(float f)
          {
            return _mm_cvtss_f32(_mm_rsqrt_ss(_mm_set_ss(f)));
          }

          inline float rsqrt_imp3(float f)
          {
            __asm pxor xmm1, xmm1
            __asm rsqrtps xmm1, f
            __asm movss f, xmm1
            return f;
          }
        </pre>
        <p>Looking back right now, I'm not sure why I used <code>xmm1</code>, I believe <code>xmm0</code> would have worked just as well.</p>

        <p>I encountered several issues when working with assembly, mainly stemming from the fact that assembly language is so specific to the exact system being used. Overall though, I think I've begun to get the hang of it. Alas, the results of this project might show that all of this assembly struggle is useless in the face of intrinsics.</p>

        <p>One other thing to note is that I was forced to use the x86 architecture only since I recieved complaints when using x64 that <code>__asm</code> did not exist. I am unsure if this means inline assembly is only possible in x86 or if I am simply unaware of the proper way to use assembly. In the future, I'm also interested in how to use .s assembly files which I spent a while trying to use but ultimately failed. Part of the reason is that I use Visual C++ with Visual Studio, and I'm unsure exactly how to link the .s file to the rest of the code. In particular, I consistently get a linker error when declaring an <code>extern</code> method <code>rsqrt</code> and then placing the assembler code in rsqrt.s. I initially thought the issue might be something platform-related, but the fixes I found online and tried did not work. I also considered attempting to compile the assembly code myself into a .obj file and somehow figuring out how to link that, but in the end I decided to skip the extra work and simply do everything inline (since I managed to get that to work). In the future, I will definitely try to investigate assembler code much more deeply, and maybe even do some more profiling on the different methods of writing assembler code (although I imagine it wouldn't make a difference)! Also, if anyone has any suggestions or ideas for the above issues, I'd love advice! </p>

        <h3 class="display-6" id="implementations-benchmarking">Implementing Benchmarking Tests</h3>

        <p>This is going to be a long length of code, so heads up! Each method of computing the reciprocal square root was run in a method as well as a lambda expression to calculate the reciprocal square roots of all integers from <code>1</code> to <code>MAX</code> where <code>MAX</code> was defined to be <code>16777217</code>. This <code>MAX</code> value was actually discovered empirically, as I forgot about floating-point representation and only came to realize later that incrementing <code>i</code> by one in a for loop where <code>i</code> is a <code>float</code> cannot be done past the point where the precision of a <code>float</code> is worse than 1.</p>`
    };

    return (
        <div className={font.className}>
        <main>
        <Navbar active="blog" />
            <div className="main-body">
            <h1 className="display-1">Investigating the Fast Inverse Square Root</h1>
        <p id="date"><b>December 27, 2022</b></p>

        <p>This is going to be a pretty long journey, documenting my entire process of learning how to profile various implementations of the inverse square root in C++. I&apos;ll include a table of contents, so if you want the TL;DR, you can skip to the end. But for those of you interested in a long roller-coaster ride through assembly code, intrinsics, floating-point representations, and errors, buckle your seat belts and let&apos;s get started!</p>

        <h2 className="display-4">Table of Contents</h2>
        <ul className="toc-list" role="list">
          <li>
            <Link href="#motivations">
              <span className="title">The Motivations</span>
            </Link>
          </li>
          <li>
            <Link href="#implementations">
              <span className="title">Implementations of the Above Methods</span>
            </Link>
            <ul>
              <li>
                <Link href="#implementations-fisr">
                  <span className="title">Quake&apos;s Fast Inverse Square Root Algorithm</span>
                </Link>
              </li>
              <li>
                <Link href="#implementations-rsqrtss">
                  <span className="title">Implementing RSQRTSS: A Story of Problems and Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="#implementations-benchmarking">
                  <span className="title">Implementing Benchmarking Tests</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="#results">
              <span className="title">Results</span>
            </Link>
          </li>
          <li>
            <Link href="#links">
              <span className="title">Useful Links</span>
            </Link>
          </li>
        </ul>
            <div className="part-one" dangerouslySetInnerHTML={content}></div>
            <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleButtonClick}
            >
            {isCollapsed ? 'Show Code' : 'Hide Code'}
            </button>
            <div className={`${isCollapsed ? 'collapse' : ''}`} dangerouslySetInnerHTML={{
            __html: `<pre id="benchmarks-code" card card-body">

            // TESTS
  
            void fisrTest()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = fastInvSqrt(i);
              //std::cout << res;
            }
  
            void sqrtTest()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = 1/sqrt(i);
              //std::cout << res;
            }
  
            void sqrtfTest()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = 1 / sqrtf(i);
              //std::cout << res;
            }
  
            void sqrtlTest()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = 1 / sqrtl(i);
              //std::cout << res;
            }
  
            void powTest()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = pow(i, -0.5);
              //std::cout << res;
            }
  
            void rsqrtTest()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = rsqrt(i);
              //std::cout << res;
            }
  
            void rsqrtimp2Test()
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = rsqrt_imp2(i);
              //std::cout << res;
            }
  
            auto invsqrtTest = [](auto func)
            {
              CHERNO_PROFILE_FUNCTION();
              float res = 0;
              for (float i = 0; i < MAX; i += 1)
                res = func(i);
              //std::cout << res;
            };
  
            int main()
            {
              //unsigned int numThreads = std::thread::hardware_concurrency();
              //std::cout << numThreads << '\n';
  
              //std::cout << fastInvSqrt(4) << '\n';
  
              //std::cout << "Running Tests!\n";
              Instrumentor::Get().BeginSession("FISR_Profile", "results.json");
  
              std::thread fisrt([]() { fisrTest(); });
              std::thread sqrtt([]() { sqrtTest(); });
              std::thread sqrtlt([]() { sqrtlTest(); });
              std::thread sqrtft([]() { sqrtfTest(); });
              std::thread powt([]() { powTest(); });
              std::thread rsqrtt([]() { rsqrtTest(); });
              std::thread rsqrtimp2t([]() { rsqrtimp2Test(); });
              /*
              std::thread fisrt2([]() { invsqrtTest(fastInvSqrt); });
              std::thread sqrtt2([]() { invsqrtTest([](float x) { return 1 / sqrt(x); }); });
              std::thread sqrtft2([]() { invsqrtTest([](float x) { return 1 / sqrtf(x); }); });
              std::thread sqrtlt2([]() { invsqrtTest([](float x) { return 1 / sqrtl(x); }); });
              std::thread powt2([]() { invsqrtTest([](float x) { return pow(x, -0.5); }); });
              std::thread rsqrtt2([]() { invsqrtTest(rsqrt); });
              std::thread rsqrtimp2t2([]() { invsqrtTest(rsqrt_imp2); });
              */
              fisrt.join();
              //fisrt2.join();
              sqrtt.join();
              //sqrtt2.join();
              sqrtlt.join();
              //sqrtlt2.join();
              sqrtft.join();
              //sqrtft2.join();
              powt.join();
              //powt2.join();
              rsqrtt.join();
              //rsqrtt2.join();
              rsqrtimp2t.join();
              //rsqrtimp2t2.join();
              Instrumentor::Get().EndSession();
              return 0;
            }
          </pre>`
        }}></div>
        
        <p>You may notice the <code>CHERNO_PROFILE_FUNCTION()</code> preprocessor directive throughout the above code as well as a class known as Instrumentor. To learn how to benchmark and profile code, I mainly used the videos of my favorite C++ guru, <Link href="https://www.youtube.com/@TheCherno">TheCherno</Link>. He&apos;s an excellent YouTuber who makes amazing videos on Game Programming, many of which I&apos;ve watched and enjoyed. His original Instrumentor.h file (which I used for the profiling) can be found <Link href="https://gist.github.com/TheCherno/31f135eea6ee729ab5f26a6908eb3a5e">this page on GitHub.</Link> The preprocessor directives which I defined at the top of Instrumentor.h based on his videos are:</p>
        <pre>
          #define CHERNO_PROFILING 1
          #if CHERNO_PROFILING
          #define CHERNO_PROFILE_SCOPE(name) InstrumentationTimer timer##__LINE__(name)
          #define CHERNO_PROFILE_FUNCTION() CHERNO_PROFILE_SCOPE(__FUNCSIG__)
          #else
          #define CHERNO_PROFILE_SCOPE(name)
          #endif
        </pre>
        <p>I still have a lot more to learn about benchmarking and profiling, and I haven&apos;t yet even finished TheCherno&apos;s videos on the subject. As a result, I may update these methods and redo this project in the future. For now though, I wanted to try everything out for fun!</p>

        <h2 className="display-4" id="results">Results</h2>

        <p>TheCherno&apos;s <code>Instrumentor</code> class creates .json files which can be read by <Link href="chrome://tracing">chrome://tracing</Link>, an application that allows you to visualize benchmarking! All result files are available at <Link href="/blog/investigating-the-fast-inverse-square-root/results/">this directory listing!</Link> If I ever remove directory listing from this website, let me know so that I can repost the results elsewhere! Please note that opt-disabled stands for Visual Studio&apos;s Optimization Disabled flag being enabled. The files in these folders can be dragged onto <Link href="chrome://tracing">chrome://tracing</Link> for a visual on performance! In particular, here are the results compiled with C++ 17 with the Maximum Optimization (Favor Speed) (/O2) flag enabled in Visual Studio:</p>
        <Image src="/img/res-cpp-17.JPG" className="img-fluid" alt='results-cpp-17' />
        <p>and similarly for C++ 20:</p>
        <Image src="/img/res-cpp-20.JPG" className="img-fluid" alt='results-cpp-20' />
        <p>In both cases, the implementation with intrinsics (<code>rsqrt_imp2</code>) was the fastest.</p>
        <p>Interestingly, <code>powTest</code> performs well in the optimized case, but when not optimized, <code>powTest</code> is much slower than any of the other methods. A similar thing occurs with all of the methods; <code>rsqrt</code> performs best without optimization, but with optimization, the intrinsics method wins out. In any case, though, the results with the Optimization flag enabled are what really matter, considering that I cannot see why someone would ever release code that wasn&apos;t fully optimized. I might be wrong though, so let me know if I should consider more deeply the results with the Optimization flag turned off!</p>

        <p>How much better is RSQRTSS compared to the Fast Inverse Square Root? According to <Link href="https://onestepcode.com/benchmarking-fast-inverse-square-root/">another person&apos;s benchmarking,</Link> it should be around 30% faster. In my results with C++ 17, <code>rsqrtimp2Test</code> took roughly 47.110 ms and <code>fisrTest</code> took roughly 75.945 ms. This is roughly 40% less time! With C++ 20, <code>rsqrtimp2Test</code> took roughly 44.738 ms and <code>fisrTest</code> took roughly 78.425 ms, which is again roughly a 40% increase in speed! Since my CPU was a Core i5-3450 and the person who made the above post used a Core i5-2500K, the difference in results can likely be attributed to the processor. See <Link href="https://cpu.userbenchmark.com/Compare/Intel-Core-i5-3450-vs-Intel-Core-i5-2500K/m161vs619">this link</Link> for a comparison of the two CPUs. Some of the difference can also be attributed to randomness in the results.</p>

        <p>Overall, it was a pretty interesting project, and it&apos;s left a ton of questions for me to explore in upcoming blog posts. The resulting .json files for each individual method are provided at the link (somewhere) above. In the end, the intrinsic <code>_mm_rsqrt_ss</code> method turned out to be the fastest implementation of the reciprocal square root, even though the fast inverse square root does not perform badly at all compared to using sqrt. Of course, this is all at the cost of accuracy! The accuracy of each of these methods is something I definitely want to consider in a future post as well. Perhaps a plot of the accuracy versus speed for each of these methods would be quite interesting. In any case, that&apos;s it for now, and I look forward to future investigations! Let me know your thoughts in the comments!</p>

        <h2 className="display-4" id="links">Useful Links</h2>
        <p>Below, I compiled some links I found particularly interesting throughout this project.</p>
        <ul>
          <li><Link href="https://onestepcode.com/benchmarking-fast-inverse-square-root/">One of the posts which inspired me to do this project</Link></li>
          <li><Link href="https://sites.google.com/site/burlachenkok/various_way_to_implement-rsqrtx-in-c">Another benchmark</Link></li>
          <li><Link href="https://stackoverflow.com/questions/59644197/inverse-square-root-intrinsics">Pretty much where I learned to use <code>_mm_sqrt_ss</code>; I&apos;ll have to look more into intrinsics again in the future</Link></li>
          <li><Link href="https://godbolt.org/z/uufv3W">A cool website with a lot of assembler instructions</Link></li>
          <li><Link href="https://stackoverflow.com/questions/71608126/is-it-still-worth-using-the-quake-fast-inverse-square-root-algorithm-nowadays-on">Stack Exchange on whether or not Quake&apos;s Fast Inverse Square Root is still useful</Link></li>
          <li><Link href="https://en.wikipedia.org/wiki/X86_instruction_listings">Wikipedia page I referred to for assembler code</Link></li>
          <li><Link href="http://www.jaist.ac.jp/iscenter-new/mpc/altix/altixdata/opt/intel/vtune/doc/users_guide/mergedProjects/analyzer_ec/mergedProjects/reference_olh/mergedProjects/instructions/instruct32_hh/vc281.htm">A very good reference for RSQRTSS</Link></li>
          <li><Link href="https://www.hpe.com/psnow/resources/ebooks/a00113892en_us_v2/Intrinsic_Functions.html">A resource for learning Intrinsic Functions</Link></li>
          <li><Link href="http://www.lomont.org/papers/2003/InvSqrt.pdf">A very cool paper</Link></li>
          <li><Link href="https://ece.uwaterloo.ca/~dwharder/aads/Algorithms/Inverse_square_root/">A website and information I might consider more deeply in future posts on this topic</Link></li>
          <li><Link href="https://en.wikipedia.org/wiki/Unit_in_the_last_place">Wikipedia page on ulps; I&apos;ll consider when I make that accuracy post eventually (I never heard about ulps in my numerical analysis course but it seems to be useful lingo)</Link></li>
        </ul>
        </div>
        </main>
        </div>
    );
}
