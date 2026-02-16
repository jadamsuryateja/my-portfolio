import { motion } from 'framer-motion';
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
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
                    className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4"
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
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`group relative bg-zinc-900/50 backdrop-blur-sm border ${cat.borderColor} rounded-2xl p-6 overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                    >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className={`p-3 rounded-lg bg-white/5 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                <cat.icon size={24} />
                            </div>
                            <div className="flex gap-1">
                                <div className={`w-1 h-1 rounded-full ${cat.color} opacity-40`} />
                                <div className={`w-1 h-1 rounded-full ${cat.color} opacity-40`} />
                                <div className={`w-1 h-1 rounded-full ${cat.color} opacity-40`} />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{cat.name}</h3>

                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-gray-300 font-mono group-hover:border-white/20 group-hover:text-white transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>

                        {/* Decorative Corner */}
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${cat.bgGradient} to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-3xl`} />
                        <Code2 className={`absolute bottom-4 right-4 text-white/5 group-hover:text-white/10 transition-colors duration-300`} size={48} />
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default ArsenalSection;
