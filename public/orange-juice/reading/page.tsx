import Image from 'next/image'
import './styles.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main>
            <Link href="/orange-juice/"><i>Back to Orange Juice</i></Link>
            <h1 className="title">Hot Chocolate</h1>
                <p><b>Aathreya&apos;s Reading List</b></p>
                <hr/>
                <h2 className="books">Books I&apos;m Reading</h2>
                <p>Here are some books I&apos;m reading right now. I&apos;d love any recommendations!</p>

                <table>
                <tr>
                    <td><p className="h-full pl-[10%] pr-[10%]">After reading selected chapters for my measure theory/topology class, I&apos;ve decided that I really want to finish this book; it&apos;s really good! It covers so many topics and is super readable!</p></td>
                    <td><figure id="book-cover-right">
                    <Image
                        src="/img/book-covers/bass-real-analysis.png"
                        alt=""
                        className="w-[15vw] max-w-full max-h-[80%] mx-auto block"
                        priority
                    />
                    <figcaption><i>Real Analysis for Graduate Students</i> by Richard F. Bass</figcaption>
                    </figure></td>
                </tr>
                <tr>
                    <td><figure id="book-cover-left">
                    <Image
                        src="/img/book-covers/hartshorne-geometry-euclid-and-beyond.jpeg"
                        alt=""
                        className="w-[15vw] max-w-full max-h-[80%] mx-auto block"
                        priority
                    />
                    <figcaption><i>Geometry: Euclid and Beyond</i> by Robin Hartshorne</figcaption>
                    </figure></td>
                    <td><p className="h-full pl-[10%] pr-[10%]">Following a clear and enlightening explanation of the development and relationship between the classical and algebraic approaches to geometry, Hartshorne promises to cover lots of interesting topics like mass-point geometry, Hilbert&apos;s problems, inversion, and neutral geometry. Who <i>wouldn&apos;t</i> want to read? It even contains <i>550 illustrations</i>, and reading assignments for Euclid&apos;s Elements (another must-read)!</p></td>
                </tr>
                <tr>
                    <td><p className="h-full pl-[10%] pr-[10%]">A nice book covering many optimization techniques, this book seems like a perfect introduction to some of the topics I&apos;ll be looking at next semester in COMPSCI 170 at Berkeley! Since it&apos;s on my reading list for such a long time, it&apos;s time to finish it!</p></td>
                    <td><figure id="book-cover-right">
                    <Image
                        src="/img/book-covers/foulds-combinatorial-optimization-for-undergrads.png"
                        alt=""
                        className="w-[15vw] max-w-full max-h-[80%] mx-auto block"
                        priority
                    />
                    <figcaption><i>Combinatorial Optimization for Undergraduates</i> by L. R. Foulds</figcaption>
                    </figure></td>
                </tr>
                <tr>
                    <td><figure id="book-cover-left">
                    <Image
                        src="/img/book-covers/bourbaki-algebra-i.jpg"
                        alt=""
                        className="w-[15vw] max-w-full max-h-[80%] mx-auto block"
                        priority
                    />
                    <figcaption><i>Algebra I</i> by Bourbaki</figcaption>
                    </figure></td>
                    <td><p className="h-full pl-[10%] pr-[10%]">Last semester I took up too many responsibilities, and didn&apos;t up doing justice to my algebra class. As such, I now plan to become a master of algebra, and everyone knows that to do so a prerequisite is that you must read Bourbaki.</p></td>
                </tr>
                </table>
                <hr/>
                <h2 className="papers">Selected Papers I&apos;ve Been Reading</h2>
                <ul>
                <li><i>Strength and Hartshorne&apos;s Conjecture in High Degree</i> by Daniel Erman, Steven V Sam, and Andrew Snowden</li>
                </ul>
                <hr />
                <p><b>The Springer GTM Test Results:</b></p>
                <p>My answers:</p>
                <ol>
                    <li>You are lost in a forest. What do you do? <i>Keep wandering -- you&apos;ll find your way out eventually!</i></li>
                    <li>At the grocery store, do you: <i>try to get in and get out as quickly as possible.</i></li>
                    <li>What sort of colours do you prefer? <i>Pastel shades.</i></li>
                    <li>Which of the following historic sites would you most like to visit? <i>The Great Pyramid of Giza</i></li>
                    <li>In my morning newspaper, I always take a look at: <i>The comics</i></li>
                </ol>
            <table><tr><td><Image src="/img/book-covers/harris.jpg" width="86" alt="" /></td><td><p>If I were a Springer-Verlag Graduate Text in Mathematics, I would be Joe Harris&apos;s <b><i>Algebraic Geometry: A First Course</i></b>.</p><p>I am intended to introduce students to algebraic geometry; to give them a sense of the basic objects considered, the questions asked about them,  and the sort of answers one can expect to obtain. I thus emphasize the classical roots of the subject. For readers interested in simply seeing what the subject is about, I avoid the more technical details better treated with the most recent methods. For readers interested in pursuing the subject further, I will provide a  basis for understanding the developments of the last half century, which have put the subject on a radically new footing. Based on lectures given at Brown and Harvard Universities, I retain the informal style of the lectures and stresses examples throughout; the theory is developed as needed. My first part is concerned with introducing basic varieties and constructions; I describe, for example, affine and projective varieties, regular and rational maps, and particular classes of varieties such as determinantal varieties and algebraic groups. My second part discusses attributes of varieties, including dimension, smoothness, tangent spaces and cones,  degree, and parameter and moduli spaces. </p><p>Which Springer GTM would <i>you</i> be? <a href="http://math.jhu.edu/~savitt/GTM.html">The Springer GTM Test</a></p></td></tr></table>
            <p>To be honest for the grocery store question I felt equally good about the first three, and for the color question I felt equally good about bright colors and pastel shades, so I could also be:</p>
            <ul>
                <li>Frank Warner&apos;s <i>Foundations of Differentiable Manifolds and Lie Groups</i></li>
                <li>William S. Massey&apos;s <i>A Basic Course in Algebraic Topology</i></li>
                <li>Robin Hartshorne&apos;s <i>Algebraic Geometry</i></li>
            </ul>
            I think this feels pretty accurate. ;)

            I think it&apos;s not a bad goal to have to try and finish all of the Springer GTM books. B-) So <a href="reading/gtm-tour">here is a list, see my progress!</a>
            <hr />
        </main>
    );
}
