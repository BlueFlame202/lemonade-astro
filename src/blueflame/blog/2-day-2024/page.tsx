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
                <h1 className="display-1">Two Day and a Glass of Lemonade</h1>
                <p id="date"><b>April 25, 2024</b></p>

                <p>Admittedly, I made this post a lot later than I meant to. For a while I got a bit distracted from having fun, and ended up missing quite a lot of blog posts. I want to get back into it now. It is a bit too late for this to be a post about two day, though, so I&apos;ll just mention that two day was quite nice this year.</p>

                <p>I&apos;m currently wrapping up my second year of college, and it&apos;s been a great experience. I&apos;ve made amazing friends and learned cool things. I&apos;ve also managed to actually narrow my interests a bit, which is something I thought I could never do.</p>
                <ol>
                    <li><b>Graphics/ML:</b> Since I love game engines but am not good at generating 3D models or using blender, I would of course love a machine learning model to do all of that for me, given some kind of textual prompt or maybe a sketch for inspiration. Combining this with what people seem to be hyped about, I think I want to start off by fully understanding NeRFs.</li>
                    <li><b>Machine Learning/AI:</b> Who isn&apos;t interested in this? But recently I&apos;ve been hearing a bit about learning theory, and on another note, LLMs are just so cool. I get to see LLMs from a practical standpoint in my project at SAAS, but I&apos;m interested in some theoretical questions, so I found some papers I want to read:
                    <ol>
                        <li><a href="https://api.repository.cam.ac.uk/server/api/core/bitstreams/a08c1cf8-ff28-45c7-984c-9820e20caf9d/content#:~:text=Are%20All%20Good%20Word%20Vector%20Spaces%20Isomorphic%3F,-Ivan%20Vulic1%E2%88%97&text=Existing%20algorithms%20for%20aligning%20cross,completely%20on%20non%2D%20isomorphic%20spaces.">Are All Good Word Vector Spaces Isomorphic?</a></li>
                        <li><a href="https://aclanthology.org/P18-1072.pdf">On the Limitations of Unsupervised Bilingual Dictionary Induction</a></li>
                        <li><a href="https://arxiv.org/pdf/2203.14632.pdf">Isomorphic Cross-lingual Embeddings for Low-Resource Languages</a></li>
                    </ol>
                    Eventually I think ML could be useful in conjunction with ideas from neuroscience and biology. I&apos;m not sure. I just think learning is super cool, considering I myself am a student.</li>
                    <li><b>Stochastic PDEs:</b> I was lucky to be invited by one of my math professors (Professor Weber) to attend a stochastic PDEs reading group here at Berkeley, and I&apos;m really enjoying it. I think I&apos;m starting to finally understand Brownian motion and Ito/Stratonovich calculus a bit more, although I have a ways to go. I&apos;ve definitely learned a lot, and it&apos;s helping me understand my measure theory more tangibly and experimentally, which I love. I hope to try out some of the numerics things via code later, which I&apos;ll make some blog posts about.</li>
                    <li><b>Geometry/Toplogy:</b> I took a differential geometry class this semester. Initially, I was a bit arrogant and didn&apos;t attend lectures enough (instead I was fully preoccupied by commutative algebra, so in some sense I didn&apos;t have a choice), thinking that the material wasn&apos;t new. After all, it just seemed like repeated application of calculus. I was wrong though, this class has really opened my eyes. I feel like I have a better understanding of tangent spaces as well as intrinsic and extrinsic properties, and why all of it is meaningful. It has also gotten me into cosmology and relativity a bit, because how can you study geometry or topolgoy without thinking about the shape of space? I can&apos;t wait to take the graduate differential topology course next semester, and I plan to finish Lee&apos;s GTM books. Eventually, I also want to master algebraic geometry and topology, but it seems I need to work on my understanding of algebra first. The abstract ideas from category theory and advanced commutative algebra proved difficult for me, I think because I haven&apos;t had enough practice thinking so abstractly. I&apos;ll be working on improving this by reading MacLane&apos;s book as well as a number theoretic introduction to algebra, so that I can capitalize on my number theoretic intuition.</li>
                </ol>
                <p>This is what I currently feel like I like, although I still have to solidfy my interests, and there&apos;s a lot more to explore. Hopefully I&apos;ll be able to make a lot of posts on these topics in the coming months.</p>
                </div>
            </main>
            <Footbar />
        </div>
    );
}
