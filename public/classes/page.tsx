import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <main>
            <Link href="/orange-juice/"><i>Back to Orange Juice</i></Link>
            <h1 className="title">Jasmine Tea</h1>
                <p><b>Aathreya&apos;s Classes</b></p>
        </main>
    );
}
