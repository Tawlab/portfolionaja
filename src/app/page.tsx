import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ShortBio from "@/components/sections/ShortBio";
import Activities from "@/components/sections/Activities";
import Works from "@/components/sections/Works";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="relative">
            <Hero />
            <About />
            <ShortBio />
            <Activities />
            <Works />
            <Experience />
            <Contact />
        </main>
    );
}
