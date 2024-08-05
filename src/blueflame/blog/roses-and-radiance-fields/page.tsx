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
                <div className="cover-image bg-[url('/img/pics/20240427-berkeley-hort.jpg')]"></div>
                <h1 className="display-1">Roses and Radiance Fields</h1>
                <p id="date"><b>April 27, 2024</b></p>
                
                <p>On Thursday, I happened to get 3 stems (two from a rose, and one from some other unrecognizable flower) because of an event on the glade at Berkeley. Since I&apos;ve adopted so many succulents recently, I decided it couldn&apos;t hurt to try re-planting them also, to give my plant collection a bit more variety. But after consulting my mom and the internet, I found that actually, I probably needed a &quot;root hormone&quot;, so today, I went to the Berkeley Horticultural Nursery for the first time to get some.</p>

                <h2 className="display-3">Berkeley Hort</h2>

                <p>Walking down the straight road to Berkeley Hort, I was at first uninterested in my surroundings and instead had my face buried in <i>System Theory</i> by Zadeh and Polak (and other authors). After all, every road looked the same: a residential house encircled by a colorful assortment of succulents and flowering plants, and the ocassional toys sprawled across a small patch of grass. But as I got closer and closer to the nursery, I started to notice a change in scenery. Elderly people walked down the sidewalks, smiling and greeting me despite being strangers. A couple eagerly discussed what plants to take cuttings of. I started to see more vibrant plants, although perhaps I just hadn&apos;t noticed them before.</p>

                <p>The Berkeley Hort was full of people when I arrived. Walking through the paths between plants, I paid special attention to an amazing collection of <i>Echeveria</i>s and <i>Aloe</i>s (the only plants I could identify at a glance) until I arrived the section for food. There, I found fairly inexpensive basil plants, as well as tomatoes, blueberries, cilantro, and anything else one could think of.</p>

                <p>Walking through the section of edible plants, I heard the sound of a band playing, and at first I thought it was probably just a radio. But as I got closer, I stood in awe as I saw a group of kids playing music together, with a large crowd of children and their parents watching. I loved the music, and I thought it was pretty cool that this garden wasn&apos;t just a nursery for plants; it also fosters an amazing community.</p>

                <p>After enjoying the music and the plants, I went to the front desk. Despite stumbling on my sentences to the point where I thought the lady at the front desk would never be able to understand me, I managed to procure my root hormone. Leaving the nursery, even with my irritating pollen and grass allergies, I felt refreshed. Walking back to the nearest bus stop, I took the 52 line back to Victory Point Cafe.</p>

                <h2 className="display-3">NeRFs</h2>

                <p>Like I said in the last post, I&apos;ve been meaning to get into some graphics/ML research, since I imagine it would naturally have a very geometric flavor. As such, I decided to finally figure out what the recent buzzword among my fellow undergraduate ML-obsessed friends, &quot;NeRF&quot;, really meant. What is a &quot;radiance field&quot;? Actually, I couldn&apos;t get this from the paper (oops). Instead, I looked at reference 16: a paper on ray tracing by Kajiya and Herzen, as well as <a href="https://www.reedbeta.com/blog/the-radiance-field/">a blog post by <i>Nathan Reed</i></a>.</p>

                <p>It seems that a radiance field is a description of the radiance or light energy passing through a given point in space in a certain direction. In other words, we can describe it with a map from a five dimensional space (three for position, two two specify the angle) to an RGB value at each point and a volume density (with the volume density representing the chance that the light ray would simply stop at that point). In the paper behind NeRFs, they essentially used a multi-layered perceptron to approximate this map, and then approximated another integral to obtain the expected color of a ray passing through the frustum imposed by a camera viewing the scene. With two other optimizations (positional encoding and hierarchical volume sampling), they were able to get amazing results. I was especially intrigued by the positional encoding; it&apos;s pretty cool how the encoding function which just has a bunch of different sine and cosine transformations of various frequencies allows one to capture more &quot;high-frequency variation&quot; in the image.</p>

                <p>That&apos;s a good summary of some of the major things I did today. Before I go to bed, I have to finish up some computer science homework (approximating metric TSP), do some differential geometry, and a lot of grading. So that&apos;s a wrap.</p>

                </div>
            </main>
            <Footbar />
        </div>
    );
}
