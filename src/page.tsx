'use client'
import './main-light.css'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import Navbar from '@components/Navbar';
import Footbar from '@components/Footbar';
import NewsWidget from '@components/NewsWidget';

const font = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {

    const isMouseDown = useRef(false);
    const mousePosition = useRef({ x: 0, y: 0 });
    const mousePositionPrev = useRef({ x: 0, y: 0 });
    const rotVel = useRef({ x: 0.1, y: 0.1 });

    useEffect(() => {
        let mount = document.getElementById('three-canvas-container');
        if (!mount) return; // Exit if the element is not found

        const mainElement = document.querySelector('main');
        if (!mainElement) return;

        const computedStyles = window.getComputedStyle(mainElement);
        const paddingLeft = parseFloat(computedStyles.paddingLeft);
        const paddingRight = parseFloat(computedStyles.paddingRight);

        // Scene setup
        const maxWidth = mainElement.clientWidth - paddingLeft - paddingRight;
        const maxHeight = window.innerHeight * 2 / 3;

        console.log(maxWidth);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, maxWidth / maxHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(maxWidth, maxHeight);
        camera.aspect = maxWidth / maxHeight;
        renderer.setClearColor(0xffffff, 1);
        mount.appendChild(renderer.domElement);

        const onWindowResize = () => {
            const computedStyles = window.getComputedStyle(mainElement);
            const paddingLeft = parseFloat(computedStyles.paddingLeft);
            const paddingRight = parseFloat(computedStyles.paddingRight);

            // Update camera aspect ratio and renderer size
            const maxWidth = mainElement.clientWidth - paddingLeft - paddingRight;
            renderer.setSize(maxWidth, maxWidth / camera.aspect);
        };

        const onMouseDown = (event: MouseEvent) => {
            isMouseDown.current = true;
            mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
            mousePositionPrev.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mousePositionPrev.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const onMouseUp = () => {
            isMouseDown.current = false;
        };

        const onMouseMove = (event: MouseEvent) => {
            if (isMouseDown.current) {
                mousePositionPrev.current.x = mousePosition.current.x;
                mousePositionPrev.current.y = mousePosition.current.y;
                mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
                mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
            }
        };
        
        const onModeSwitch = () => {
            renderer.setClearColor(0x000000, 1);
        }

        // Add the event listener
        window.addEventListener('resize', onWindowResize);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('modeswitch', onModeSwitch);

        // Add your 3D object here
        const geometry = new THREE.DodecahedronGeometry(1, 0); // 1 is the radius, 0 is the detail level
        const material = new THREE.MeshPhongMaterial({
            color: 0xa2cffe,
            //roughness: 0.3, // Lower roughness for sharper reflections
            //metalness: 1  // Higher metalness for a more metallic look
        });
        const dodecahedron = new THREE.Mesh(geometry, material);
        scene.add(dodecahedron);

        camera.position.z = 5;

        // Lighting setup
        const ambientLight = new THREE.AmbientLight(0xbbbbbb); // soft white light
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x069af3, 7, 100);
        pointLight.position.set(1, 0, 5);
        scene.add(pointLight);

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);

            if (isMouseDown.current) {
                rotVel.current.x = 0.8 * (mousePosition.current.x - mousePositionPrev.current.x);
                rotVel.current.y = -0.8 * (mousePosition.current.y - mousePositionPrev.current.y);
            }

            dodecahedron.rotation.x += rotVel.current.y;
            dodecahedron.rotation.y += rotVel.current.x;

            rotVel.current.x = rotVel.current.x * 0.999;
            rotVel.current.y = rotVel.current.y * 0.999;

            renderer.render(scene, camera);
        };

        const text_element_contents = [
            "Welcome",
            "to Aathreya Kadambi's Website!",
            "(Goals ⇒ Actions, Actions ⇒ Goals) ⇒ Goals ⇔ Actions."
        ];

        // Content:
        // "You've reached my latest website! You might notice the new name: Lemonade. This is to mark a change in perspective. Since this is a relatively new website, there isn't much to see yet, but I'll be periodically pushing updates here, so be on the lookout! Here's some information on some of the pages above:"
        // "Posts related to things that I'm thinking about. Mostly related to notes and observations on problems that I'm working on."
        // "Contains my notes on things that I have learned throughout my life. Notes are still being uploaded."
        // "I'm usually working on some kind of project. While this section currently does not exist, I hope to fill it with interesting things I do soon!"
        // "I want this to be a place where people can find almost any information they wish, and also find information on how to proceed in learning anything they wish to learn. I also hope to one day add functionality such as virtual book clubs and meeting rooms."
        // "As I would like this to be my professional website, please check out my CV if you are interested!"
        // "If you would like to see some of my older blogs, please check out:"
        // (Other most current blog and builds off of The Unsolved, may run slowly due to current hosting)
        // An older blog of mine

        // const blurb_element_contents_pre = [
        //     "Blog:",
        //     "Notes:",
        //     "Projects:",
        //     "🌊:",
        //     "CV:",
        //     "Hi! You've reached my latest website! I'm Aathreya. Who am I? Hopefully we'll both be able to understand the answer a little better through this website! 😃 There isn't too much to see here yet, but I'll be periodically pushing updates here, so be on the lookout! Here's some info on the pages in the navigation:",
        //     "My thoughts on life, math, and anything else I might think about. Once I would've called this my thoughts on the unsolved and solved problems of the world.",
        //     "Contains my notes on things that I have learned throughout my life. Notes are still being uploaded.",
        //     "I'm usually working on some kind of project. While this section currently does not exist, I hope to fill it with interesting things I do soon!",
        //     "I want this to be a place where people can find almost any information they wish, and also find information on how to proceed in learning anything they wish to learn. I also hope to one day add functionality such as virtual book clubs and meeting rooms.",
        //     "Please email me at aathreyakadambi@gmail.com if you would like a copy of my current CV!",
        //     "If you would like to see some of my older blogs, please check out:",
        //     "An older blog of mine",
        //     "An older blog of mine",
        //     "The Unsolved:",
        //     "The Solved:"
        // ]
        // const blurb_element_contents: string[][] = []
        // for (let j = 0; j < blurb_element_contents_pre.length; j++)
        //     blurb_element_contents[j] = blurb_element_contents_pre[j].split("")

        const mounts = [
            document.getElementById('sn')!,
            document.getElementById('quotep1')!,
            document.getElementById('quotep2')!,
        ];

        // const blurb_mounts = [
        //     document.getElementById('blog-bb')!,
        //     document.getElementById('notes-bb')!,
        //     document.getElementById('projects-bb')!,
        //     document.getElementById('sea-bb')!,
        //     document.getElementById('cv-bb')!,
        //     document.getElementById('blurb')!,
        //     document.getElementById('blog-blurb')!,
        //     document.getElementById('notes-blurb')!,
        //     document.getElementById('projects-blurb')!,
        //     document.getElementById('sea-blurb')!,
        //     document.getElementById('cv-blurb')!,
        //     document.getElementById('end-blurb')!,
        //     document.getElementById('list-element-2')!,
        //     document.getElementById('list-element-3')!,
        //     document.getElementById('unsolved-link')!,
        //     document.getElementById('solved-link')!
        // ]

        for (var j = 0; j < mounts.length; j++)
            if (!mounts[j]) return;
        // for (var j = 0; j < blurb_mounts.length; j++)
        //     if (!blurb_mounts[j]) return;

        let i = 0;
        const typingEffect = setInterval(() => {
            let done = true;
            for (var j = 0; j < text_element_contents.length; j++) {
                if (i < text_element_contents[j].length) {
                    mounts[j].innerHTML += text_element_contents[j].charAt(i);
                    done = false;
                }
            }
            // for (var j = 0; j < blurb_element_contents.length; j++) {
            //     console.log(blurb_element_contents[j])
            //     console.log(blurb_element_contents[j].length)
            //     if (i < blurb_element_contents[j].length) {
            //         blurb_mounts[j].innerHTML += blurb_element_contents[j][i];// + ' ';
            //         done = false;
            //     } else if (i == 0) {
            //         console.log(j);
            //     }
            // }
            if (done) {
                clearInterval(typingEffect);
            } else {
                i++;
            }
        }, 20); // Speed of typing


        animate();

        // Clean up on unmount
        return () => {
            window.removeEventListener('modeswitch', onModeSwitch);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
            clearInterval(typingEffect);
        };
    }, []);

    // TODO: fix issues with image, need the maximum width/height or min feature or wtv without distorting image.
    return (
        <div className={font.className}>
            <div className="definitelyNotANotVeryHiddenComment" dangerouslySetInnerHTML={{ __html: '<!-- Oh hey, fancy seeing you here. Hmmm, I wonder, what would you do if I told you that I hid a comment in here? Who knows though, I might be trolling. :P -->' }} />
        <main>
        <Navbar active="home" />
        <div className="container-fluid flex flex-wrap bg-white">

        <div className="flex justify-center items-center w-full md:w-1/4">
            <div className="w-full mx-4 relative pb-[100%] overflow-hidden">
                <Image src="/img/aathreyakadambi-circle.png" alt="A picture of me" className="absolute object-cover w-full h-full top-0 left-0" width={500} height={500} layout="responsive" />
            </div>
        </div>

          <div className="w-full md:w-3/4 gx-5">
                <div className="mx-4 text-container">
                    <p id="sn" className="text-6xl display-4 mb-0"></p>
                    <h1 id="quotep1"></h1>
                </div>
            <blockquote className="mx-4 blockquote text-left">
              <p className="mb-3"><i id="quotep2"></i></p>
            </blockquote>
          </div>
          <div className="w-full md:w-1/4 gx-5">
            <NewsWidget></NewsWidget>
          </div>
          <div className="w-full md:w-3/4 gx-5">
            <div className="mx-4">
            <blockquote className="italic text-lg text-gray-600">
                <p>Lemonade is a sweet homemade drink made in many parts of the world. Different people make their lemonade differently; it&apos;s one of those things that everyone can take and make their own. On hot summer days, it&apos;s not uncommon to see children setting up lemonade stands on the street for some extra change, for fun, or to give to charity. In fact, lemonade is so positively rooted in our culture that it has even become embedded into the common saying: &quot;when life gives you lemons, make lemonade&quot;. Even when life does not give you lemons, it never hurts to make a nice, cold, and refreshing glass of lemonade.</p>
                <footer className="mt-4 text-right text-gray-500">- DNM</footer> 
                <div className="definitelyNotANotVeryHiddenComment" dangerouslySetInnerHTML={{ __html: '<!-- Wow, nice job finding this comment! ;) As a reward, I\'ll tell you what DNM is. Originally, DNM meant "Definitely Not Me". But it also means Deep \'N Meaningful: https://medium.com/@MissGenY/why-you-should-have-ye-old-dnm-24eb7707c98d. Idk. Interestnig perspectives. What do you think? By the way, there aren\'t too many other easter eggs in this HTML, because the HTML is compiled and generated automatically by Next.js. This comment was just something I forcefully injected for fun. :P See you around! Oh... just one more thing. Check this out: https://youtu.be/dQw4w9WgXcQ. -->' }} />
            </blockquote>
            <p id="blurb">Hi! You&apos;ve reached my latest website! I&apos;m Aathreya. Who am I? Hopefully we&apos;ll both be able to understand the answer a little better through this website! 😃 There isn&apos;t too much to see here yet, but I&apos;ll be periodically pushing updates here, so be on the lookout! Here&apos;s some info on the pages in the navigation:</p>
            <p id="blog-blurb"><b id="blog-bb">Blog:</b> Posts related to things that I&apos;m thinking about. Mostly related to notes and observations on problems that I&apos;m working on.</p>
            <p id="notes-blurb"><b id="notes-bb">Notes:</b> Contains my notes on things that I have learned throughout my life. Notes are still being uploaded.</p>
            <p id="projects-blurb"><b id="projects-bb">Projects:</b> I&apos;m usually working on some kind of project. While this section currently does not exist, I hope to fill it with interesting things I do soon!</p>
            <p id="sea-blurb"><b id="sea-bb">🌊:</b> A 3D project I want to eventually build!</p>
            <p id="cv-blurb"><b id="cv-bb">CV:</b> Please email me at <a href="mailto:aathreyakadambi@gmail.com">aathreyakadambi@gmail.com</a> for my CV if you are interested!</p>
            <p id="end-blurb">If you would like to see some of my older blogs, please check out:</p>
            <ul>
                <li><a href="https://inthesolved.wordpress.com/" id="solved-link">The Solved:</a> <span id="list-element-3">An Older Blog of Mine (there&apos;s a part of this blog on AoPS too!)</span></li>
                <li><a href="https://intheunsolved.wordpress.com/" id="unsolved-link">The Unsolved:</a> <span id="list-element-2">An Older Blog of Mine</span></li>
            </ul>
            </div>
          </div>
          <br />
      </div>
            <p>This area is coming uh... eventually!! :D</p>
            <div className="" id="three-canvas-container"></div>
        </main>
        <Footbar></Footbar>
        </div>
    );
}
