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
        __html: String.raw`<article id="post-63" class="post-63 post type-post status-publish format-standard hentry">
	
        <div class="entry-meta"><span class="posted-on"><a href="http://redflame.rf.gd/blog/2022/03/20/zero-a-fresh-start/" rel="bookmark"><time class="entry-date published" datetime="2022-03-20T04:44:54+00:00">March 20, 2022</time>
            <h1 class="entry-title">
            Zero: A Fresh Start	</h1>
    
        <div class="entry-content">
            <p>Hi!</p>
    <p>This is my first blog post! Now that my birthday ended nearly an hour ago, there isn’t really a special occasion for this post. I guess, then, that I’ll just draft a philosophical rant about beginnings.</p>
    <p>When we first learn to count, we chant: 1, 2, 3,…. But in math and computer science, we generally begin at zero (well… it’s technically a debate). Zero is where everything does and should begin. After all, it’s called the origin. </p>
    <p>Starting at zero, everything is nice. All multiplication tables would start with 0. Starting with zero has another implication. Suppose we have a list of houses along a street. They might be numbered: 320, 322, 324,…, skipping one each time for a house on the opposite side of the street. Now if we number the first house with 0, the second with 1, and so on, we have a way of finding the number of any house on that side of the street:</p>
    <p class="ql-center-displayed-equation" style="line-height: 13px;"><span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span> \[320 + 2n\]</p>
    <p>where \(n\) is the number that we label that house. Now if we had started traditionally with 1, our formula would instead be</p>
    <p class="ql-center-displayed-equation" style="line-height: 17px;"><span class="ql-right-eqno"> &nbsp; </span>\[320 + 2(n-1)\text{ or }318 + 2n\]</p>
    <p>which is clearly not as easy to remember since 318 isn’t even a number on that street, whereas 320 was the first number on that street. For all we know, there might not even be a house with the number 318!! Clearly, starting with 0 is the better choice. This is (probably) why arrays start at zero in computer science. At least in C++, the array itself points to a memory, say corresponding to some numerical address \(M\). If we want to access the \(n\)th element and the size of each element is \(s\), we can access it with the memory address:</p>
    <p class="ql-center-displayed-equation" style="line-height: 14px;"><span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span>\[M + ns\]</p>
    <p>as long as we start with \(n\) being zero at the first element. In other words, zero represents the <em>offset</em> from the start of the array.</p>
    <p>Of course, one might also argue that zero means nothing. How can we start at zero if counting zero intrinsically indicates the presence of something? Take this post for example. How can it be named Zero if Zero means nothing when this blog post is something? Well, it might be an oxymoron, but the number on this post can also be seen as how far I’ve gone from this beginning. Since I’m at the beginning, I have made zero progress. This post is just an embodiment of the beginning.</p>
    <p>Anyway, that’s enough for a Post Zero.</p>
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
            <div class="nav-links"><div class="nav-previous"><a href="http://redflame.rf.gd/blog/2021/12/04/sotw-0/" rel="prev"><span class="meta-nav">Previous</span> SoTW 0</a></div><div class="nav-next"><a href="http://redflame.rf.gd/blog/2022/03/21/a-cash-problem/" rel="next"><span class="meta-nav">Next</span> A Cash Problem</a></div></div>
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