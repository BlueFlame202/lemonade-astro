"use client"

import '../bstyles.css'
import Navbar from '@components/Navbar';
import { Montserrat } from 'next/font/google'
import React, { useEffect } from 'react';

const font = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

export default function Page() {

    useEffect(() => {
        if (typeof window !== 'undefined' && window.MathJax) {
          // Tell MathJax to typeset the page again
          window.MathJax.typeset();
        }
      });
    
    const text_content = {
        __html: String.raw`Certainly a nice proof. But I was just thinking... is there a nicer way to do this? For example, what if we just squish all of the ordered pairs with invariant \(S\) together? This could be done with an equivalence relation and a quotient. Write \((a_1,b_1) \sim (a_2,b_2)\) if and only if \(S(a_1,b_1) = S(a_2,b_2)\). It is fairly easy to show that \(\sim\) is an equivalence relation. Then we can consider \((\mathbb{Z} \times \mathbb{Z})/\sim\). Notice that then, \(f_1\) and \(f_2\) become identity functions, and the result seems much more obvious.`  
    };

    return (
        <div className={font.className}>
        <main>
        <Navbar active="blog" />
            <div className="main-body">
        <h1 className="display-1">Two Day</h1>
        <p id="date"><b>February 22, 2023</b></p>
        
        <p>Today is two day! Happy Two day!</p>

        <p>If you still haven&apos;t figured it out, today is 2/22. Since 2 is such an amazing number (and happens to be my favorite), every year I like to celebrate the occassion. This year, I&apos;ll use this blog post to dicuss some nice facts about 2 as well as another idea I had when thinking about a CS 70 problem.</p>

        <h2 className="display-4">Table of Contents</h2>
            <ul className="toc-list" role="list">
                <li>
                    <a href="#two-facts">
                        <span className="title">This Year&apos;s Facts</span>
                    </a>
                </li>
              <li>
                <a href="#cs70">
                  <span className="title">The CS 70 Glitch</span>
                </a>
              </li>
            </ul>

        <h2 className="display-4" id="two-facts">This Year&apos;s Facts</h2>

        <p>Here are \(2^2 = 2 \times 2 = 2 + 2\) facts about 2!</p>

        <div className="theorem">
            <b>Fact.</b> \(2\) is the smallest prime.
        </div>

        <div className="theorem">
            <b>Fact.</b> \(2\) is the largest \(n\) such that \(S_n\) is an abelian group.
        </div>
        <i>Proof follows from </i>

        <div className="theorem">
            <b>Fact.</b> Every positive integer, based on the axioms of Zermelo-Frankel (ZF) Set Theory, contains two elements.
        </div>
        <i>Based on ZF, each positive integer is the union of the previous integer and the empty set, so it has two elements.</i>

        <div className="theorem">
            <b>Fact.</b> The only two distinct metrics (up to equivalence) on the rationals are the \(p\)-adic metric and the traditional \(|a - b|\) metric.
        </div>
        <i>Ostrowski&apos;s Theorem, which has a pretty nice proof.</i>

        <h2 className="display-4" id="cs70">The CS 70 Glitch</h2>

        <div className="problem"><b>Problem.</b> Suppose \(f_1((a,b)) = (a-1,b+1)\) and \(f_2((a,b)) = (0,a+b)\) for integers \(a,b\). Show that repeated composition of \(f_1\) and \(f_2\) applied to \((1,1)\) will never yield \((1,2)\).</div>

        <p>At first, my solution was the following (a post I made in our Ed Discussion):</p>
        <i>Proof.</i>

        <p>To piggy back off of this, here&apos;s a nice but possibly long way to show that 1/2 cannot be obtained: let \(S((a,b)) = a + b\) for ordered pairs \((a,b)\). The &quot;next rational&quot; functions in the problem can be represented by \(f_1((a,b)) = (a+1,b-1)\) and \(f_2((a,b)) = (0,a+b)\). Notice that 
            \[S(f_1((a,b))) = S((a+1,b-1)) = a+1+b-1 = a + b = S((a,b))\]
            \[S(f_2((a,b))) = S((0,a+b)) = 0 + a + b = a + b = S((a,b))\]
            Essentially, the point is that the sum of the numerator and denominator is invariant under these two maps. Since \(S((1,1)) = 2\), \(S((a,b))\) for any \((a,b)\) the result of composing \(f_1\) and \(f_2\) and applying to \((1,1)\) should yield \(S((a,b)) = 2\) (can be shown via induction or well-ordering principle or &quot;left to the reader&quot;) and so since \(S((1,2)) = 3 \neq 2\), there is no composition of \(f_1\) and \(f_2\) applied to \((1,1)\) that yields \((1,2)\). Then again you could just use induction to show that the sequence repeats like \((1,1) \rightarrow (0,2) \rightarrow (1,1) \rightarrow ...\) but I thought this was pretty cool.</p>
            <p className="end-of-proof">\(\blacksquare\)</p>

            <p dangerouslySetInnerHTML={text_content}></p>
          
            </div>
        </main>
        </div>
    );
}
