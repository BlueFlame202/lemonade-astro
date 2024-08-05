"use client"

import { Montserrat } from 'next/font/google'
import '../bstyles.css'
import React, { useEffect } from 'react';
import Navbar from '@components/Navbar';

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
        __html: String.raw`<article id="post-147" class="post-147 post type-post status-publish format-standard hentry">
	
        <div class="entry-meta"><span class="posted-on"><a href="http://redflame.rf.gd/blog/2022/06/20/inductive-discomfort-generalized-uber-seating-theorem/" rel="bookmark"><time class="entry-date published" datetime="2022-06-20T05:53:50+00:00">June 20, 2022</time><time class="updated" datetime="2022-07-09T23:04:08+00:00">July 9, 2022</time></a></span><span class="byline"> <span class="author vcard"><a class="url fn n" href="http://redflame.rf.gd/blog/author/redflame020/">redflame020</a></span></span></div>
            <h1 class="entry-title">
            Inductive Discomfort: Generalized Uber Seating Theorem	</h1>
    
        <div class="entry-content">
            
    <p>The other day, I was in an Uber with some friends, and I was made painfully aware of how cramped the back of an Uber can get, especially when it’s filled with 3 high-schooler-sized high schoolers.</p>
    
    
    
    <p>The main cause of the discomfort is that the three people in the back bump into each other. Specifically, their shoulders overlap, so each person might not have both their left and right shoulders on the back of the seat. I’ve found that the more shoulders you have on the nice, cushioned seat and the less shoulders you have on someone elses shoulder, the more comfortable you are.</p>
    
    
    
    <figure class="wp-block-image size-large"><img decoding="async" width="1024" height="1024" src="http://redflame.ml/wp-content/uploads/2022/06/img_3446-1024x1024.jpg" alt="" class="wp-image-146" srcset="http://redflame.rf.gd/wp-content/uploads/2022/06/img_3446-1024x1024.jpg 1024w, http://redflame.rf.gd/wp-content/uploads/2022/06/img_3446-300x300.jpg 300w, http://redflame.rf.gd/wp-content/uploads/2022/06/img_3446-150x150.jpg 150w, http://redflame.rf.gd/wp-content/uploads/2022/06/img_3446-768x769.jpg 768w, http://redflame.rf.gd/wp-content/uploads/2022/06/img_3446.jpg 1436w" sizes="(max-width: 1024px) 100vw, 1024px"><figcaption>Drawn with the Joy Doodle App for iPad</figcaption></figure>
    
    
    
    <p>Interestingly though, I also noticed the Generalized Uber Seating Theorem.</p>
    
    
    
    <p>Here are the rules:<br>1. If you are sitting next to someone, one of you will have a shoulder on top of the other, so only one of you will be able to put their shoulder closest to you on the seat.<br>2. If you are on an edge, (there is nobody to one side of you), you will be able to put the shoulder to which nobody is adjacent on the seat. <br>3. In equilibrium positions, humans naturally melt into the most comfortable positions possible, so if you are able to put your shoulder on the soft, comfy cushioning of the seat, you will.</p>
    
    
    
    <p>I’ll state a few definitions below for clarity, but wherever a term isn’t defined, its meaning should usually be guessable.</p>
    
    
    
    <p>We call a person <em>perfectly comfortable</em> if both their shoulders are on the seat. We call a person <em>perfectly uncomfortable</em> if neither of their shoulders are on the seat.</p>
    
    
    
    <p>Notice that for any position, we can invert the position by swapping the person that has their shoulder on top for each adjacency (and imagining that the edge people violate Rule 3 and do not place their edge shoulders onto the seats). Note that as a result, inverting a position causes any perfectly comfortable person to become perfectly uncomfortable and vice versa, and anyone who is neither perfectly comfortable or perfectly uncomfortable will simply remain as such. </p>
    
    
    
    <p><strong>Theorem (Generalized Uber Seating Theorem).</strong> Suppose you have $n$ seats satisfying the above rules and in an equilibrium position. Then for all natural numbers $n$ the number of perfectly comfortable people is exactly one more than the number of perfectly uncomfortable people.</p>
    
    
    
    <p><em>A Super Slick Proof.</em></p>
    
    
    
    <p>We prove this theorem via induction. Let $S$ be the set of natural numbers $n$ for which the Generalized Uber Seating Theorem holds. </p>
    
    
    
    <p>Consider 1 person sitting in 1 seat. Then that person has both their left and right shoulder on the seat (they are on both edges so by Rule 2 and Rule 3 both their shoulders will be on the seat). Then they are perfectly comfortable, so there is one perfectly comfortable person and zero perfectly uncomfortable people. Since 1 – 0 = 1, the Generalized Uber Seating Theorem holds for $n = 1$ and $1 \in S$.</p>
    
    
    
    <p>Suppose $k, k-1 \in S$. Now consider $k+1$ people sitting in $k+1$ seats. </p>
    
    
    
    <p>Suppose one of the people on the edges has a shoulder on top of the shoulder of the person adjacent to them. Then they are neitther perfectly comfortable or perfectly uncomfortable, and removing them yields $k$ people sitting in $k$ seats (in equilibrium since the new person on the edge has their shoulder on the seat (because it used to be under the edge person) and the previous seating was in equilibrium) so since $k \in S$, the number of perfectly comfortable people is still exactly one more than the number of perfectly uncomfortable people in our new seating after adding the neither perfectly comfortable or perfectly uncomfortable person, so $k + 1 \in S$.</p>
    
    
    
    <p>Otherwise, both people on the edges are perfectly comfortable. Removing them yields a position where the new people on the edges have both edge shoulders off the seat, however inverting yields a position in equilibrium (left to the reader but fairly simple hehe). Thus we have $k+1 -2 = k-1$ people sitting in $k-1$ seats in equilibrium satisfying the rules, so since $k-1 \in S$, there is exactly one more perfectly comfortable person than perfectly uncomfortable. Inverting again, we go back to having the two people on the edges with edge shoulders off the seat, a position with one more perfectly uncomfortable person than perfectly comfortable (since inverting swaps the perfectly comfortable and perfectly uncomfortable people) and finally adding back the two perfectly comfortable people means that there is exacltly one more perfectly comfortable person than perfectly uncomfortable, so $k+1 \in S$ as desired.</p>
    
    
    
    <p>In both cases, $k, k-1\in S$ implies that $k + 1 \in S$, so since $1 \in S$ and $k-1, k \in S \Rightarrow k+1 \in S$, by principle of strong induction, $S = \mathbb{N}$, so the Generalized Uber Seating Theorem holds for all natural numbers as desired. Q.E.D.</p>
    
    
    
    <p>This proof might have parts that could be worded a bit better; I’ll consider cleaning it up in the future to make it as professional as it should be. Specifically, rather than using words, we could represent a seating arrangement with a binary string. Each sequence of two digits would represent the left and right shoulders of a person, and 0 would represent a shoulder on the seat and a 1 would represent a shoulder off the seat. A 00 would be a perfectly comfortable person and a 11 would be a perfectly uncomfortable person. The rules would translate to:</p>
    
    
    
    <p>Rules:<br>1. Excluding the end digit, every digit in an odd position must be the opposite of the digit in the position to its right.<br>2. The string starts and ends with a 0.<br>3. This is no longer needed.<br>To summarize, the string is of the form 0____0 where the middle is some string of 01s and 10s. Then, the Generalized Uber Seating Theorem states that the number of 00s is exactly one more than the number of 11s.</p>
    
    
    
    <p>The Theorem might seem a bit optimistic since we always have more perfectly comfortable people than perfectly uncomfortable, but unfortunately, a direct corollary is that the number of perfectly comfortable people is bounded above by $\lceil \dfrac{n}{2} \rceil$. Welp, it is what it is.</p>
                </div><!-- .entry-content -->
    
        <footer class="entry-footer">
            <div class="apostrophe-2-tags">Uncategorized</div>	<div class="entry-author">
            <div class="author-avatar">
                <img alt="" src="http://0.gravatar.com/avatar/f2345effc6cc1fb6059cef4fe7d09858?s=125&amp;d=monsterid&amp;r=g" srcset="http://0.gravatar.com/avatar/f2345effc6cc1fb6059cef4fe7d09858?s=250&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-125 photo" height="125" width="125" loading="lazy" decoding="async">		</div><!-- .author-avatar -->
    
            <div class="author-heading">
                <h2 class="author-title">
                    Published by <span class="author-name">redflame020</span>			</h2>
            </div><!-- .author-heading -->
    
            <p class="author-bio">
                            <a class="author-link" href="http://redflame.rf.gd/blog/author/redflame020/" rel="author">
                    View all posts by redflame020			</a>
            </p><!-- .author-bio -->
        </div><!-- .entry-auhtor -->
                
        <nav class="navigation post-navigation" aria-label="Posts">
            <h2 class="screen-reader-text">Post navigation</h2>
            <div class="nav-links"><div class="nav-previous"><a href="http://redflame.rf.gd/blog/2022/06/15/for-the-love-of-two-square-roots/" rel="prev"><span class="meta-nav">Previous</span> For the Love of Two: Square Roots</a></div><div class="nav-next"><a href="http://redflame.rf.gd/blog/2022/07/09/intersections-and-nested-inclusions/" rel="next"><span class="meta-nav">Next</span> Intersections and Nested Inclusions</a></div></div>
        </nav>	</footer><!-- .entry-footer -->
    
    </article>`  
    };

    return (
        <div className={font.className}>
        <main className="bg-white">
            <Navbar active="blog" />
            <div className="main-body" dangerouslySetInnerHTML={content}></div>
        </main>
        </div>
    );
}