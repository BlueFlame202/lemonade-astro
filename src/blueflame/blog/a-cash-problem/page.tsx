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
        __html: String.raw`<article id="post-114" class="post-114 post type-post status-publish format-standard hentry">
	
        <div class="entry-meta"><span class="posted-on"><a href="http://redflame.rf.gd/blog/2022/03/21/a-cash-problem/" rel="bookmark"><time class="entry-date published" datetime="2022-03-21T18:40:14+00:00">March 21, 2022</time></div>
            <h1 class="entry-title">
            A Cash Problem	</h1>
    
        <div class="entry-content">
            <p>Everyone uses credit cards now, but here’s an interesting question about cash: what multiset of bills should you carry to pay for the largest number of costs?</p>
    <p>Well, that’s a really vague question and doesn’t have a clear/practical answer. Let’s make things more realistic. When we go to the store with cash, we usually don’t bring the exact amount of money we need for the transaction. If we want to buy something that costs $7, we’re usually fine with carrying a $10 bill and receiving some change. Also, in real life, there is actually a discrete set of all possible values over all possible transactions in a store. For example, a store might only sell things of values $2, $5, and $8. Here are several a few problems that seem interesting based on this question:</p>
    <p><strong>Problem 1 (The Well-Known Chicken McNugget Problem).</strong> If one has an infinite supply of bills worth \(x\) and \(y\), what values can I not obtain?</p>
    <p>This problem is related, but not exactly the one we want to solve. Here are some closer ones:</p>
    <p>For the problems below, let \(k\) be a constant between 0 and 1, denoting what percent of the total cost you would like the transaction to be worth at a minimum (you wouldn’t pay for a $3 drink with a $50 bill).</p>
    <p><strong>Problem 2.</strong> Suppose we have a stock of bills worth some distinct values, \(v_n\). Assume that the store we go to has items with costs forming a uniform distribution from \(a\) to \(b\). What combination \((\lambda_0, \lambda_1, ..., \lambda_n)\) of bills should we take such that for all \(p\) with \(a < k\sum_{j=0}^n \mu_j v_j\), \(\exists (\mu_0, \mu_1, ..., \mu_n), \mu_j \le \lambda_j \forall j\) with \(p \in [k\sum_{j=0}^n \mu_j v_j, \sum_{j=0}^n \mu_j v_j]\) and \(\sum_{j=0}^n \lambda_j\) is minimized?</p>
    <p>For the next two problems, suppose we have a stock of bills worth some distinct values, \(v_0, v_1, ..., v_n\). Suppose the prices of the items in a store are \(p_1, p_2, ..., p_m\).</p>
    <p><strong>Problem 3.</strong> Let \(N\) be the number of ordered tuples \((q_1, q_2, ..., q_m)\) such that \(\exists (\mu_0, \mu_1, ..., \mu_n), \mu_j \le \lambda_j \forall j\) with \(\sum_{j=0}^m q_j p_j \in [k\sum_{j=0}^n \mu_j v_j, \sum_{j=0}^n \mu_j v_j]\). What combination \((\lambda_0, \lambda_1, ..., \lambda_n)\) of bills should we take such that \(N\) is maximized and \(\sum_{j=0}^n \lambda_j\) is minimized? For simplicity, find the combination that minimizes \(\dfrac{\sum_{j=0}^n \lambda_j}{N}\)>.</p>
    <p>In the above problem, \(N\) measures the number of collections of items in the store within our price range,</p>
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
            <div class="nav-links"><div class="nav-previous"><a href="http://redflame.rf.gd/blog/2022/03/20/zero-a-fresh-start/" rel="prev"><span class="meta-nav">Previous</span> Zero: A Fresh Start</a></div><div class="nav-next"><a href="http://redflame.rf.gd/blog/2022/05/07/generalized-modular-arithmetic/" rel="next"><span class="meta-nav">Next</span> Generalized Modular Arithmetic</a></div></div>
        </nav>	</footer><!-- .entry-footer -->
    
    </article>`  
    };

    return (
        <div className={font.className}>
        <main>
            <Navbar active="blog" />
            <div className="main-body" dangerouslySetInnerHTML={content}></div>
        </main>
        </div>
    );
}