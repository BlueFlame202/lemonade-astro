"use client"

import '../bstyles.css'
import Navbar from '@components/Navbar';
import Footbar from '@components/Footbar';
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

    return (
        <div className={font.className}>
            <main>
                <Navbar active='blog' />

                <div className="pb-8 main-body">
                <div className="cover-image bg-[url('/img/pics/IMG_3880.jpg')]"></div>
                <h1 className="display-1">Where is the Classical in the Quantum?</h1>
                <p id="date"><b>July 25, 2024</b></p>
                
                <p>In quantum mechanics, Ehrenfest&apos;s theorem tells us that expectations of the respective quantum mechanical observables obey Newton&apos;s laws. I&apos;ve also heard that nonrelativistic quantum mechanics reduces to classical mechanics as Plank&apos;s constant approaches zero.</p>

                <h2 className="display-3">Experimentation</h2>

                <p>I wanted to construct a few experiments. Firstly, what does quantum mechanics predict for a system that is under extremely frequent measurement? For the same initial setups, can we </p>

                <h2 className="display-3">Theory</h2>
                
                
                </div>
            </main>
            <Footbar />
        </div>
    );
}
