import { Montserrat } from 'next/font/google'
import '../bstyles.css'
import Navbar from '@components/Navbar';

const font = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

export default function Page() {

    const content = {
        __html: String.raw`<h1 class="display-1">Elementary</h1>
        <p id="date"><b>December 26, 2022</b></p>
        <div class="problem">
            <i>"Excellent!" I cried.<br><br>"Elementary," said he. "It is one of those instances where the reasoner can produce an effect which seems remarkable to his neighbour, because the latter has missed the one little point which is the basis of the deduction."</i>
            <div align="right">- Sherlock Holmes</div>
        </div>
        <p>Recently, something particularly interesting about zero was brought back to the forefront of my attention. Consider a prime \(p\). There is a certain function, called \(v_p(n)\), which maps a number \(n\) to the largest natural number \(k\) such that \(p^k\) divides \(n\). Consider any natural number \(n\). Naturally (haha), \(v_p(n)\) must be finite. Why? Well, one reason is that \(v_p(n)\) is simply a map from \(\mathbb{N}\) to \(\mathbb{N}\) and any element in \(\mathbb{N}\) must be finite. But why is the image of \(v_p(n)\) where \(n \in \mathbb{N}\) the set of natural numbers? This is because \(n \in \mathbb{N}\) is finite, \(p^{v_p(n)}\) must be finite as well (since it divides \(n\)), and therefore \(v_p(n)\) must be finite.</p>
        <p>Things become more interesting when we ponder, although quite illegally, what \(v_p(0)\) must be. Of course, any power of \(p\) could divide zero. Does this make \(v_p(0) = \infty\)? Well, we must remind ourselves that we chose to restrict \(v_p(n)\) to the natural numbers, so \(v_p(0)\) does not technically exist.</p>
        <p>But... I argue that this idea makes zero infinitely powerful. (Puns fully intended)</p>
        <p>Perhaps I'll elaborate on this further in a future post. But that's enough about zero for now. I already had an <a href="http://redflame.ml/blog/2022/03/20/zero-a-fresh-start/">entire post on zero on RedFlame.</a> Rather than discuss identity elements, I wanted to discuss the identity of this blog.</p> 
        <p>This blog is meant to serve as an organized collection of my thoughts and developments from "professional" experiences I gain from this moment onward.</p>
        <p>In that sense, one might imagine that this blog might be more serious than my past ones. And that would be right. While I hope my sense of humor continues to leak into all of my blog posts, I hope to keep this blog as a collection of ideas more directly tied to projects I'm working on rather than simply stray ideas that collect in my brain over time.</p>
        <p>To summarize, this post marks a shift that I've been working on for a while from my last two blogs, The Unsolved and The Solved, to my latest blogs, RedFlame and BlueFlame. RedFlame is built on The Unsolved and will soon effectively annex all blog posts from The Solved. My goal is to merge The Solved and The Unsolved into one project and start a fresh idea: BlueFlame.</p>
        <p>Finally, one other thing will differentiate BlueFlame from my previous blogs. As my "professional" blog, I plan to post all future blog posts on my LinkedIn and Medium as well. I hope this will help me meet people with similar interests and allow me to build a stronger identity as a person.</p>
        <p>And that's pretty much it for this post. Quite elementary; I can't wait to begin!</p>`  
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
