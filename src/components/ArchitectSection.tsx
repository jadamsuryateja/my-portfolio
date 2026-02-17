import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Code2, Cpu, Globe, Layers, Server } from 'lucide-react';

const ArchitectSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Mouse tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse values
    const springConfig = { damping: 20, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };



    // Parallax effects for inner content
    const headerX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
    const headerY = useTransform(springY, [-0.5, 0.5], [-25, 25]);

    const contentX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
    const contentY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

    return (
        <section
            ref={targetRef}
            className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                    }}
                />
            </div>

            {/* Floating abstract shapes */}
            <motion.div style={{ y: y }} className="absolute inset-0 pointer-events-none z-0">
                <FloatingIcon icon={Code2} className="top-1/4 left-1/4 text-orange-500/10" size={120} delay={0} />
                <FloatingIcon icon={Server} className="bottom-1/3 right-1/4 text-purple-500/10" size={160} delay={1} />
                <FloatingIcon icon={Globe} className="top-1/3 right-10 text-blue-500/10" size={80} delay={2} />
                <FloatingIcon icon={Cpu} className="bottom-10 left-10 text-green-500/10" size={100} delay={3} />
            </motion.div>

            {/* Main Content Card */}
            <motion.div
                style={{
                    opacity,
                    scale,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative z-10 max-w-5xl w-full mx-4"
            >
                <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">

                    {/* Glossy reflection effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

                    {/* Header */}
                    <motion.div
                        style={{ x: headerX, y: headerY }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 relative z-10"
                    >
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm font-mono text-orange-500 tracking-wider mb-2"
                            >
                                // 01_IDENTITY
                            </motion.h2>
                            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mix-blend-difference glitched-text" data-text="THE ARCHITECT">
                                THE ARCHITECT
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Description Content */}
                    <motion.div
                        style={{ x: contentX, y: contentY }}
                        className="grid md:grid-cols-2 gap-12 relative z-10"
                    >
                        <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                            <p>
                                I don&#39;t just write code; I <span className="text-white font-medium">engineer digital ecosystems</span>.
                                My approach blends <span className="text-orange-400">systemic thinking</span> with creative problem-solving.
                            </p>
                            <p>
                                From <span className="text-blue-400">pixel-perfect user interfaces</span> to <span className="text-green-400">scalable backend architectures</span>, I build comprehensive solutions that stand the test of time and traffic.
                            </p>
                        </div>

                        {/* Visual sidebar / stat block */}
                        <div className="bg-black/30 rounded-lg p-6 font-mono text-sm border border-white/5 shadow-inner">
                            <div className="flex justify-between border-b border-white/10 pb-2 mb-4 text-gray-500">
                                <span>SYSTEM_STATUS</span>
                                <span className="text-green-400">ONLINE</span>
                            </div>
                            <div className="space-y-3">
                                <StatRow label="CREATIVITY" value={98} color="bg-purple-500" />
                                <StatRow label="LOGIC" value={100} color="bg-blue-500" />
                                <StatRow label="EFFICIENCY" value={95} color="bg-green-500" />
                                <StatRow label="ADAPTABILITY" value={92} color="bg-orange-500" />
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-600">
                                &gt; INITIALIZING NEURAL LINK... <br />
                                &gt; OPTIMIZING ALGORITHMS... <br />
                                &gt; READY FOR DEPLOYMENT.
                            </div>
                        </div>
                    </motion.div>

                    {/* Decode/Glitch Decorations */}
                    <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none" style={{ transform: "translateZ(10px)" }}>
                        <Layers size={96} strokeWidth={0.5} />
                    </div>
                </div>
            </motion.div>


        </section>
    );
};

// Helper Components

const FloatingIcon = ({ icon: Icon, className, size, delay }: any) => (
    <motion.div
        className={`absolute ${className}`}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
            duration: 5,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <Icon size={size} />
    </motion.div>
);

const StatRow = ({ label, value, color }: any) => (
    <div className="flex items-center gap-4">
        <span className="w-24 text-gray-400 text-xs">{label}</span>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${color}`}
            />
        </div>
    </div>
);

// Add this CSS to your index.css or tailored styling
/*
.glitched-text {
    position: relative;
}
.glitched-text::before,
.glitched-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
}
.glitched-text::before {
    left: 2px;
    text-shadow: -1px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitched-text::after {
    left: -2px;
    text-shadow: -1px 0 #00fff9;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
}
*/

export default ArchitectSection;
