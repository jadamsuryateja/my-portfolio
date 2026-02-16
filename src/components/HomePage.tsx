import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyImage from './LazyImage';
import ArchitectSection from './ArchitectSection';
import ArsenalSection from './ArsenalSection';

gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
    onNavigate: (page: string) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
    const mainRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Scroll Trigger Animations for Sections


            // Section 1: The Architect (Text Reveal) - REPLACED WITH NEW COMPONENT

            // Section 2: The Arsenal (Skills Stagger) - REPLACED WITH NEW COMPONENT

            // Section 3: Philosophy (Parallax Text)
            gsap.to('.philosophy-text-1', {
                scrollTrigger: {
                    trigger: '.philosophy-section',
                    scrub: 1,
                },
                x: -200,
            });
            gsap.to('.philosophy-text-2', {
                scrollTrigger: {
                    trigger: '.philosophy-section',
                    scrub: 1,
                },
                x: 200,
            });



        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="min-h-screen text-white overflow-hidden">

            {/* NEW HERO SECTION */}
            <section className="h-[100svh] w-full relative flex flex-col justify-center md:justify-end items-start px-4 pb-safe md:px-6 md:pb-6 overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <div className="block md:hidden w-full h-full">
                        <LazyImage
                            src="/mobile.webp"
                            alt="Surya Teja Mobile Background"
                            className="w-full h-full"
                            priority={true}
                        />
                    </div>
                    <div className="hidden md:block w-full h-full">
                        <LazyImage
                            src="/desktop.webp"
                            alt="Surya Teja Desktop Background"
                            className="w-full h-full"
                            priority={true}
                        />
                    </div>
                </div>
                {/* Optional Overlay to ensure text pop */}
                <div className="absolute inset-0 bg-black/10" />

                <div className="z-10 relative leading-[0.85] mt-auto mb-4 md:mb-0">
                    <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tight text-white uppercase select-none">
                        SURYA
                    </h1>
                    <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tight text-white uppercase select-none -mt-1 md:-mt-4">
                        TEJA
                    </h1>
                </div>

                {/* Bottom Right Thumbnail */}
                <div className="absolute bottom-6 right-6 z-10 hidden md:flex items-end gap-4">
                    <div className="text-right text-[10px] leading-tight font-mono text-gray-300 opacity-80 mb-1">
                        <p>FULL STACK DEVELOPER</p>
                        <p>SPECIALIZING IN MERN</p>
                        <p>AGENTIC CODER</p>
                    </div>
                    <div className="w-24 h-32 border-2 border-white/20 p-1">
                        <LazyImage
                            src="/mobile.webp"
                            alt="Thumbnail"
                            className="w-full h-full grayscale"
                            priority={true}
                        />
                    </div>
                </div>
            </section>





            {/* SECTION 1: THE ARCHITECT (About) */}
            <ArchitectSection />



            <ArsenalSection />


            {/* SECTION 3: PHILOSOPHY (Parallax) */}
            <section className="philosophy-section py-40 overflow-hidden relative flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900 opacity-50" />
                <h2 className="philosophy-text-1 text-[10vw] font-black leading-none text-white/10 whitespace-nowrap">
                    BUILD RELIABLE
                </h2>
                <h2 className="philosophy-text-2 text-[10vw] font-black leading-none text-orange-500/20 whitespace-nowrap">
                    SCALE INFINITE
                </h2>
                <div className="absolute z-10 text-center max-w-2xl px-6">
                    <p className="text-2xl md:text-3xl font-light italic text-white/80">
                        "Code is poetry written for machines to perform miracles."
                    </p>
                </div>
            </section>




        </div>
    );
}

export default HomePage;
