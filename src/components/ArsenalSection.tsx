import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Code2, Globe, Server, Terminal, Cpu, Braces,
    Layers, Command
} from 'lucide-react';

const ArsenalSection = () => {
    // Data from ResumePage.tsx, adapted for this display
    const Categories = [
        {
            name: "MERN STACK",
            icon: Layers,
            skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
            color: "text-green-400",
            borderColor: "border-green-500/30",
            bgGradient: "from-green-500/10"
        },
        {
            name: "FRONTEND",
            icon: Globe,
            skills: ["HTML5", "CSS3", "Tailwind CSS", "Angular", "Bootstrap"],
            color: "text-blue-400",
            borderColor: "border-blue-500/30",
            bgGradient: "from-blue-500/10"
        },
        {
            name: "BACKEND",
            icon: Server,
            skills: ["Java (Spring Boot)", "Flask", "Python", "RESTful APIs"],
            color: "text-purple-400",
            borderColor: "border-purple-500/30",
            bgGradient: "from-purple-500/10"
        },
        {
            name: "LANGUAGES",
            icon: Braces,
            skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
            color: "text-yellow-400",
            borderColor: "border-yellow-500/30",
            bgGradient: "from-yellow-500/10"
        },
        {
            name: "AI / ML",
            icon: Cpu,
            skills: ["Python", "TensorFlow", "Pandas", "NumPy", "OpenCV"],
            color: "text-red-400",
            borderColor: "border-red-500/30",
            bgGradient: "from-red-500/10"
        },
        {
            name: "TOOLS",
            icon: Command,
            skills: ["Git", "GitHub", "AWS", "Docker", "VS Code"],
            color: "text-orange-400",
            borderColor: "border-orange-500/30",
            bgGradient: "from-orange-500/10"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };



    return (
        <section className="min-h-screen py-24 px-4 md:px-8 bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-mono mb-4"
                >
                    <Terminal size={12} />
                    <span>SYSTEM_AMMUNITION</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 glitched-text"
                    data-text="THE ARSENAL"
                >
                    THE ARSENAL
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl font-light"
                >
                    My weapon of choice is <span className="text-white font-medium">code</span>.
                </motion.p>
            </div>

            {/* Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full relative z-10"
            >
                {Categories.map((cat, index) => (
                    <ArsenalCard key={index} cat={cat} index={index} />
                ))}
            </motion.div>

        </section>
    );
};

// -------------------------------------------------------------------------
// 3D Arsenal Card Component with Macro Interactions
// -------------------------------------------------------------------------

const ArsenalCard = ({ cat, index }: { cat: any, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { damping: 20, stiffness: 200 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { damping: 20, stiffness: 200 });

    const iconX = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), { damping: 15, stiffness: 150 });
    const iconY = useSpring(useTransform(y, [-0.5, 0.5], [-20, 20]), { damping: 15, stiffness: 150 });

    const titleX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 15, stiffness: 150 });
    const titleY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { damping: 15, stiffness: 150 });

    const skillsX = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { damping: 15, stiffness: 150 });
    const skillsY = useSpring(useTransform(y, [-0.5, 0.5], [-5, 5]), { damping: 15, stiffness: 150 });

    const decorX = useSpring(useTransform(x, [-0.5, 0.5], [30, -30]), { damping: 20, stiffness: 100 });
    const decorY = useSpring(useTransform(y, [-0.5, 0.5], [30, -30]), { damping: 20, stiffness: 100 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
            }}
            style={{ perspective: 1000 }}
            className="w-full h-full min-h-[300px]"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className={`group relative h-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-${cat.borderColor.split('-')[1]}-500/50 transition-colors duration-500 shadow-xl`}
            >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Inner Content Container */}
                <div className="relative z-10 flex flex-col h-full" style={{ transformStyle: "preserve-3d" }}>

                    {/* Header: Icon & Dots */}
                    <div className="flex items-center justify-between mb-8">
                        <motion.div
                            style={{ x: iconX, y: iconY, translateZ: 50 }}
                            className={`p-4 rounded-2xl bg-white/5 ${cat.color} border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                        >
                            <cat.icon size={32} />
                        </motion.div>
                        <motion.div
                            style={{ translateZ: 20 }}
                            className="flex gap-1.5"
                        >
                            <div className={`w-1.5 h-1.5 rounded-full ${cat.color} opacity-40`} />
                            <div className={`w-1.5 h-1.5 rounded-full ${cat.color} opacity-40`} />
                            <div className={`w-1.5 h-1.5 rounded-full ${cat.color} opacity-40`} />
                        </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                        style={{ x: titleX, y: titleY, translateZ: 40 }}
                        className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300"
                    >
                        {cat.name}
                    </motion.h3>

                    {/* Skills List */}
                    <motion.div
                        style={{ x: skillsX, y: skillsY, translateZ: 30 }}
                        className="flex flex-wrap gap-2.5 mt-auto"
                    >
                        {cat.skills.map((skill: string, i: number) => (
                            <div
                                key={i}
                                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 font-mono group-hover:border-white/20 group-hover:text-white transition-colors duration-300 shadow-sm hover:translate-y-[-2px]"
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                    style={{ x: decorX, y: decorY, translateZ: 10 }}
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cat.bgGradient} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-[100px] pointer-events-none`}
                />
                <motion.div
                    style={{ x: decorX, y: decorY, rotate: -15, translateZ: 15 }}
                    className="absolute bottom-4 right-4 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                >
                    <Code2 className="text-white w-24 h-24" />
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default ArsenalSection;
