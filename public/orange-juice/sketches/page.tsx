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
            <Link href="/orange-juice/"><i>Back to Orange Juice</i></Link>
            <h1 className="title">Strawberry Milk</h1>
                <p><b>Aathreya&apos;s Sketches</b></p>
                <hr/>
                <h2>Huh...</h2>
                <p>it seems like <i>sketching</i> is really the best way to understand how things look. On this page I hope I can sketch things out enough that one day I can paint vivid pictures of the things I&apos;ve come to understand.</p>
                
                <dl>
                    <dd><Link href="/orange-juice/sketches/sketch-1">Sketch 1: Examples of groups and their properties</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-2">Sketch 2: Examples of rings and their properties</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-3">Sketch 3: Princeton SGQ Fall 2013 Algebra Q1.1</Link></dd>
                    {/* <dd><Link href="/orange-juice/sketches/sketch-3">[Coming Soon] Sketch 3: Examples of fields and their properties</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-4">[Coming Soon] Sketch 4: Investigation of residues mod \(n\), their inverses, orders, etc.</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-5">[Coming Soon] Sketch 5: Is the difference between two units nilpotent?</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-5">[Coming Soon] Sketch 6: A sketch about prime and maximal ideals, the difference, and uses</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-5">[Coming Soon] Sketch 7: Examples of reduced rings which are (not) integral domains and vice versa?</Link></dd>
                    <dd><Link href="/orange-juice/sketches/sketch-5">[Coming Soon] Sketch 8: Is there a distinction between the radical of an ideal \(\sqrt I\) and the Jacobson radical \(\text r \text a \text d (I)\)?</Link></dd> */}
                </dl>
        </main>
    );
}
