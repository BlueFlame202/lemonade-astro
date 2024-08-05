"use client"

import { Montserrat } from 'next/font/google'
import '../bstyles.css'
import Navbar from '@components/Navbar';
import Footbar from '@components/Footbar';
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

    const content = {
        __html: String.raw`<h1 class="display-1 mt-0 pt-0">The Coolest Proof</h1>
        <p id="date"><b>July 9, 2023</b></p>

        <p>I was trying to solve Problem 5 from Chapter 1 of Rudin's <i>Rudin and Complex Analysis</i>. The problem is as follows: consider measurable functions \(f\) and \(g\) from some measurable space to the extended real numbers. Show that the set \(\{x : f(x) < g(x)\}\) is measurable.</p>

        <p>My first proof came from considering the difference \(f - g\) which is measurable, and then using the definition of a measurable function which gives that the preimage of any open set is a measurable set. However, this proof wasn't super satisfying to me since it basically relied on the previous theorem that \(f - g\) is measurable, and doesn't rely only on the definitions of sigma algebras and measurable spaces (and the respective continuous/measurable functions). Overall, for a while I held onto this strong inkling that there must be a better, more set-union-intersectiony topology-esque proof. But I thought about it, and for some reason I couldn't find it.</p>

        <p>Today I was talking to my dad about it, and I finally suddenly discovered this proof: notice that 
            \[\{x : f(x) < g(x)\} = \bigcup_{r \in \mathbb{Q}} (f^{-1}(A) \cap g^{-1}(B))\]
            where \(A\) is the interval \([-\infty,r)\) and \(B\) in the interval \((r,\infty]\). \(f^{-1}\) and \(g^{-1}\) denote getting preimages. Since \(A\) and \(B\) are open, their preimages are measurable, and the rest follows from from the properties of sigma algebras.
        </p>

        <p>I really like this proof a lot more because it doesn't use anything about the field structure of the real numbers, and only uses stuff about the topology of \(\mathbb{R}\). Overall, I was also really proud of myself for coming up with this type of set-based topology-esque proof, since I haven't really made my own before and generally always just read them in textbooks.</p>`  
    };

    return (
        <div className={font.className}>
        <main>
            <Navbar active="blog" />
            <div className="main-body" dangerouslySetInnerHTML={content}></div>
        </main>
        <Footbar />
        </div>
    );
}
