'use client'
import '../../main-light.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@components/Navbar';
import Footbar from '@components/Footbar';
import NewsWidget from '@components/NewsWidget';
import BlogPage from '@components/BlogPost';

const font = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

// remember to change https://www.ocf.berkeley.edu/~aathreyak/ links below when I update the URL!
export default function Blog() {
    const blogPosts = [
      { title: 'It Turns Out Measure Theory Actually Is Useful', content: 'Warning! This will take you to another world!', link: 'https://www.ocf.berkeley.edu/~aathreyak/orange-juice/sketches/sketch-7/', date: 'June 20, 2024', backgroundImage: '/img/pics/sketch.jpeg' },
      { title: 'Paradoxical Areas I', content: 'Resolving a confusion I had when thinking about areas.', link: './rlog/paradoxical-areas.html', date: 'June 4, 2024', backgroundImage: '/img/pics/paradoxical-areas-i.png' },
      { title: 'Grafting and GPUs', content: 'The coolest planting technique and some interesting articles I saw.', link: './blog/grafting-and-gpus', date: 'May 18, 2024', backgroundImage: '/img/pics/IMG_3880.jpg' },
      { title: 'Roses and Radiance Fields', content: 'Visiting Berkeley Hort and reading the NeRF paper.', link: './blog/roses-and-radiance-fields', date: 'April 27, 2024', backgroundImage: '/img/pics/20240427-berkeley-hort.jpg' },
      // { title: 'Two Day and a Glass of Lemonade', content: 'It\'s two day again!', link: './blog/2-day-2024', date: 'February 22, 2024' },
        { title: 'The Coolest Proof', content: 'The euphoria from getting this proof is amazing.', link: './blog/the-coolest-proof', date: 'July 9, 2023' },
        { title: 'Two Day', content: 'February 22nd: Two Day. A day dedicated to my favorite number.', link: './blog/2-day-2023', date: 'February 22, 2023' },
        { title: 'Cuts and the Well-Ordering Principle', content: 'Interesting Mathematical Self-Similarities that I need to figure out one day...', link: './blog/well-ordering-i', date: 'February 13, 2023' },
        { title: 'P.E.K.K.A.s and Determinants', content: 'What do a P.E.K.K.A. and a Determinant have in common? What is Linear Algebra Done Right', link: './blog/determinants-i', date: 'January 15, 2023' },
        { title: 'Investigating the Fast Inverse Square Root', content: 'Benchmarking one of my favorite algorithms.', link: './blog/investigating-the-fast-inverse-square-root', date: 'December 27, 2022' },
        { title: 'Elementary', content: 'A first blog post for my 2023 Blog Update.', link: './blog/elementary', date: 'December 26, 2022' },
        { title: 'Inductive Discomfort: Generalized Uber Seating Theorem', content: 'Sitting in an Uber.', link: './blog/inductive-discomfort/', date: 'June 20, 2022' },
        { title: 'A Cash Problem', content: 'Theorems like Chicken McNuggets.', link: './blog/a-cash-problem', date: 'March 21, 2022' },
        { title: 'Zero: A Fresh Start', content: 'Back into blogging...', link: './blog/zero-2022', date: 'December 4, 2021' }, 
        { title: 'SoTW 0', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2021/12/04/sotw-0/', date: 'December 4, 2021' },  
        { title: 'Finally… An Update', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2021/11/07/finally-an-update/', date: 'November 7, 2021' },  
        { title: 'Cones', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2021/03/05/cones/', date: 'March 4, 2021' },
        { title: 'A Strategy for Similar Triangles', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2021/03/04/a-strategy-for-similar-triangles/', date: 'March 4, 2021' },
        { title: 'Polynomials: An Interesting Problem', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2021/02/12/polynomials-an-interesting-problem/', date: 'February 12, 2021' },
        { title: 'Constructing Circles', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/12/30/constructing-circles/', date: 'December 30, 2020' },
        { title: 'USAMTS Round 1', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/10/23/usamts-round-1/', date: 'October 23, 2020' },
        { title: 'Complex Numbers and Trig from the AIME', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/08/27/complex-numbers-and-trig-from-the-aime/', date: 'August 27, 2020' },
        { title: 'Weighted Sums of Contact Points: Packing', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2020/08/26/weighted-sums-of-contact-points-packing/', date: 'August 26, 2020' },  
        { title: 'Packing in Equilateral Triangles', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2020/08/26/packing-in-equilateral-triangles/', date: 'August 26, 2020' },  
        { title: 'Factorization', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/07/04/factorization/', date: 'July 4, 2020' },
        { title: 'Weird Functions', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/06/24/weird-functions/', date: 'June 24, 2020' },
        { title: 'Interesting Idea', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/04/21/interesting-idea/', date: 'April 21, 2020' },
        { title: 'My New Goal', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/04/14/my-new-goal/', date: 'April 14, 2020' },
        { title: 'On Volumetric Analysis', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/04/02/on-volumetric-analysis/', date: 'April 2, 2020' },
        { title: 'Basics of Microeconomics', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/03/28/basics-of-microeconomics/', date: 'March 28, 2020' },
        { title: 'Analyzing the Interesting Problem', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2020/03/22/analyzing-the-interesting-problem/', date: 'March 22, 2020' },  
        { title: 'Another Potentially Interesting Experiment', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/03/18/another-potentially-interesting-experiment/', date: 'March 18, 2020' },
        { title: 'Potentially Interesting Experiment', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/03/17/potentially-interesting-experiment/', date: 'March 17, 2020' },
        { title: 'Notes on Combinatorics', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/03/14/notes-on-combinatorics-to-be-updated/', date: 'March 14, 2020' },
        { title: 'Double Slit Experiment', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/03/07/double-slit-experiment/', date: 'February 17, 2020' },
        { title: 'Update on Absorption Speeds', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/02/17/update-on-absorption-speeds/', date: 'February 17, 2020' },
        { title: 'In The Solved AoPS', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2020/02/17/an-interesting-problem/', date: 'February 17, 2020' },  
        { title: 'Speeds of Absorption for Powder ID', content: 'Redirect to my older blog, The Solved.', link: 'https://inthesolved.wordpress.com/2020/02/10/speeds-of-absorption-for-powder-id/', date: 'February 10, 2020' },
        { title: 'In The Solved AoPS', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2020/02/08/in-the-solved-aops/', date: 'February 8, 2020' },  
        { title: '250 Algebra Problems from Various Competitions', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2020/01/20/250-algebra-problems-from-various-competitions/', date: 'January 20, 2020' },  
        { title: 'Cauchy Equations', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/11/09/cauchy-equations/', date: 'November 9, 2019' }, 
        { title: 'The Cauchy-Schwarz Inequality', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/11/09/the-cauchy-schwarz-inequality/', date: 'November 9, 2019' },  
        { title: 'USAMTS Round 1', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/10/20/usamts-round-1/', date: 'October 20, 2019' },  
        { title: '[FAILED] No Odd Perfect Numbers Exist!', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/07/04/no-odd-perfect-numbers-exist/', date: 'July 4, 2019' },  
        { title: 'Points And Squares', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/07/02/points-and-squares/', date: 'July 2, 2019' },  
        { title: 'Project: Problem History Bank', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/06/28/project-problem-history-bank/', date: 'June 28, 2019' },  
        { title: 'Algorithms to Equations: The if/else statements of Mathematics', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/06/11/algorithms-to-equations-the-if-else-statements-of-mathematics/', date: 'June 11, 2019' },  
        { title: 'Mersenne Primes', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/01/12/mersenne-primes/', date: 'January 12, 2019' },  
        { title: 'On The Base b Representation of A Natural Number: UPDATE', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2019/01/05/on-the-base-b-representation-of-a-natural-number-update/', date: 'January 5, 2019' },  
        { title: 'Perfect Numbers: A Different View', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/28/perfect-numbers-a-different-view/', date: 'December 28, 2018' },  
        { title: 'More on Odd Perfect Numbers', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/25/more-on-odd-perfect-numbers/', date: 'December 25, 2018' },  
        { title: 'Data Encription', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/24/data-encription/', date: 'December 24, 2018' },  
        { title: 'Associative Memory and AI', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/24/associative-memory-and-ai/', date: 'December 24, 2018' },  
        { title: 'Deriving Euler’s Results on Perfect Numbers', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/24/deriving-eulers-results-on-perfect-numbers/', date: 'December 24, 2018' },  
        { title: 'A Failed Proof on Odd Perfect Numbers', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/23/a-failed-proof-on-odd-perfect-numbers/', date: 'December 23, 2018' },  
        { title: 'On the Base b Representation of a Natural Number', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/23/on-the-base-b-representation-of-a-natural-number/', date: 'December 23, 2018' },  
        { title: 'A Cooler Proof of the Finite Geometric Series Formula', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/22/a-cooler-proof-of-the-finite-geometric-series-formula/', date: 'December 22, 2018' },        
        { title: 'Programming for Mathematics', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/22/programming-for-mathematics/', date: 'December 22, 2018' },
        { title: 'Prime Numbers', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/08/prime-numbers/', date: 'December 8, 2018' },
        { title: 'The Sum of the Fibonacci numbers is -1', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/12/02/the-sum-of-the-fibonacci-numbers-is-1/', date: 'November 26, 2018' },
        { title: 'Twin Prime Conjecture', content: 'Redirect to my older blog, The Unsolved.', link: 'https://intheunsolved.wordpress.com/2018/11/26/twin-prime-conjecture/', date: 'November 26, 2018' }
    ];

    return (
        <div className={font.className}>
        <main>
        <Navbar active="blog" />
        <div className="container-fluid flex flex-wrap bg-white pb-8">
          <div className="w-full md:w-1/4 gx-5 hidden md:block">
            <NewsWidget></NewsWidget>
          </div>
          <div className="w-full md:w-3/4 gx-5">
            <div className="mx-4">
            <h1 className="text-3xl font-bold mb-4">My Blog</h1>
            <BlogPage posts={blogPosts} />
            </div>
          </div>
          <br />
      </div>
        </main>
        <Footbar></Footbar>
        </div>
    );
}
