'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react';

export default function Page() {

    useEffect(() => {
        if (typeof window !== 'undefined' && window.MathJax) {
          // Tell MathJax to typeset the page again
          window.MathJax.typeset();
        }
      });

    return (
        <main>
            <Link href="/orange-juice/sketches/"><i>See all sketches...</i></Link>
            <h1 className="title">Sketch 2</h1>
                <p><b>Examples of rings and their properties</b></p>
                <hr/>
                <h2>Huh...</h2>
                <p>it seems like <i>rings</i> are super interesting, and I still don&apos;t know them like the back of my hand. That&apos;s why this sketch is dedicated to them.</p>

                <p>
                    <b>Date Started:</b> January 16, 2024<br />
                    <b>Date Finished:</b> <i>Unfinished</i>
                </p>

                <h2>A list of rings to consider...</h2>
                <p>I studied much of what I know about algebra from Dummit and Foote as well as Lang and Matsumura, so many of the examples I will think of were inspired by these sources (and my algebra professors). If anyone has other ideas of useful rings to consider, contact me, I would love to learn to sketch them.</p>
                
                <dl>
                    <dd><Link href="#infinites">Integers, Rational Numbers, Real Numbers</Link></dd>
                    <dd><Link href="#infinities-entire">Ring of Entire Functions</Link></dd>
                    <dd><Link href="#poly">Polynomials</Link></dd>
                    <dd><Link href="#res">Residuals mod \(n\)</Link></dd>
                    <dd><Link href="#matrices">Matrices</Link></dd>
                </dl>

                <h2 id="infinities">Infinite Rings</h2>

                <h3 id="ints-rats-reals">Integers, Rational Numbers, Real Numbers</h3>

                The integers, rationals and reals which I discussed in Sketch 1 as being nice abelian groups are also rings (and in a future sketch I guess I will also mention that they are fields), with multiplication being well known. 

                <h3 id="infinities-entire">Ring of Entire Functions</h3>

                <h3>Integers</h3>


        </main>
    );
}
