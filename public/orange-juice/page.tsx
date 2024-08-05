import Image from 'next/image'
import Link from 'next/link'
import './orange-juice.css'

export default function Page() {
    return (
        <main>
            <Link href="/"><i>Back to Lemonade</i></Link>
            <h1 className="title">Aathreya Kadambi</h1>
            <p><b>Email:</b> aathreyakadambi <i>at</i> berkeley <i>dot</i> edu</p>
            <hr />
            <div className="flexy">
                <div className="side1">
                    <p>I&apos;m a student at UC Berkeley learning as much as I can about geometry, machine learning, and graphics.</p>
                    <dl>
                        <dd><Link href="orange-juice/classes">Classes</Link></dd>
                        <dd><Link href="orange-juice/reading">Reading List</Link></dd>
                        <dd><Link href="orange-juice/pictures">Pictures</Link></dd>
                        <dd><Link href="orange-juice/sketches">Sketches</Link></dd>
                        {/* <dd><Link href="projects"></Link></dd> */}
                    </dl>
                </div>

                <figure id="poke-start-screen">
                    <Image
                        src="/img/IMG_0715-cropped.png"
                        alt="Pokemon Soulsilver Start Screen"
                        id="poke-start-screen-img"
                        priority
                    />
                    <figcaption>- Professor Oak</figcaption>
                </figure>
            </div>
            <hr />
        </main>
    );
}
