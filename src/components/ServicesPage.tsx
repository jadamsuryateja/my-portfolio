import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Zap,
  Cpu,
  Server,
  Layout,
  Terminal,
  Cpu as Chip
} from 'lucide-react';
import { Service } from '../types';

function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: (Service & { color: string, icon: any })[] = [
    {
      title: 'Full Stack Web Development',
      description:
        'Building secure, scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with responsive design.',
      color: 'from-green-400 to-emerald-600',
      icon: Layout
    },
    {
      title: 'Frontend Development',
      description:
        'Creating interactive and responsive user interfaces with React.js, Angular, HTML5, CSS3, and Responsive Design, focusing on performance.',
      color: 'from-blue-400 to-cyan-600',
      icon: Globe
    },
    {
      title: 'Backend Development',
      description:
        'Developing robust server-side applications using Node.js and Express.js with secure RESTful APIs to ensure efficient data handling.',
      color: 'from-purple-400 to-indigo-600',
      icon: Server
    },
    {
      title: 'Database Management',
      description:
        'Designing and managing databases using MongoDB (Atlas) and MySQL, ensuring optimized queries and data integrity.',
      color: 'from-amber-400 to-orange-600',
      icon: Database
    },
    {
      title: 'Mobile App Development',
      description:
        'Building responsive cross-platform applications for Web and Android using React.js and Capacitor.',
      color: 'from-pink-400 to-rose-600',
      icon: Smartphone
    },
    {
      title: 'Cloud & Deployment',
      description:
        'Deploying applications on platforms like Vercel and Render, ensuring high availability, reliability, and performance.',
      color: 'from-teal-400 to-cyan-600',
      icon: Cloud
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-zinc-950 perspective-2000">

      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-900/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-900/20 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-mono mb-6 backdrop-blur-md"
          >
            <Chip size={14} />
            <span>SERVICES_CORE_V2</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl"
          >
            <span className="glitched-text" data-text="MY SERVICES">
              MY SERVICES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
          >
            Designing future-proof digital experiences with <span className="text-white font-medium">precision</span> and <span className="text-white font-medium">passion</span>.
          </motion.p>
        </div>

        {/* Services Grid with 3D Tilt Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard3D key={index} service={service} index={index} />
          ))}
        </div>

        {/* Tech Stack Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 border-t border-white/5 pt-20 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 px-4">
            <Zap className="text-yellow-400 animate-pulse" size={32} />
          </div>

          <h2 className="text-4xl font-bold text-center text-white tracking-tight mb-16">
            Technology Matrix
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <TechColumn
              title="Development"
              items={['VS Code', 'Git', 'GitHub', 'Antigravity']}
              icon={Code2}
              color="text-blue-400"
              gradient="from-blue-500/20 to-cyan-500/20"
            />
            <TechColumn
              title="AI Tools"
              items={['ChatGPT', 'GitHub Copilot', 'Claude', 'Midjourney']}
              icon={Cpu}
              color="text-purple-400"
              gradient="from-purple-500/20 to-pink-500/20"
            />
            <TechColumn
              title="Cloud"
              items={['Vercel', 'Render', 'AWS', 'Netlify']}
              icon={Cloud}
              color="text-orange-400"
              gradient="from-orange-500/20 to-red-500/20"
            />
            <TechColumn
              title="Languages"
              items={['Java', 'TypeScript', 'Python', 'SQL']}
              icon={Terminal}
              color="text-green-400"
              gradient="from-green-500/20 to-emerald-500/20"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// -------------------------------------------------------------------------
// 3D Tilt Service Card Component
// -------------------------------------------------------------------------

const ServiceCard3D = ({ service, index }: { service: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Parallax transforms - moving layers at different speeds
  const iconX = useTransform(mouseXSpring, [-0.5, 0.5], ["15px", "-15px"]);
  const iconY = useTransform(mouseYSpring, [-0.5, 0.5], ["15px", "-15px"]);

  const titleX = useTransform(mouseXSpring, [-0.5, 0.5], ["10px", "-10px"]);
  const titleY = useTransform(mouseYSpring, [-0.5, 0.5], ["10px", "-10px"]);

  const descX = useTransform(mouseXSpring, [-0.5, 0.5], ["5px", "-5px"]);
  const descY = useTransform(mouseYSpring, [-0.5, 0.5], ["5px", "-5px"]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[400px] w-full"
    >
      <div
        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-500"
      >
        {/* Neon Gradient Border Glow */}
        <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

        {/* Inner Content Container */}
        <div className="relative h-full p-8 flex flex-col z-10">

          {/* Icon Floating */}
          <motion.div
            style={{ x: iconX, y: iconY }}
            className={`mb-8 p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 w-fit backdrop-blur-md border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500`}
          >
            <service.icon size={32} className="text-white drop-shadow-md" />
          </motion.div>

          {/* Title */}
          <motion.h3
            style={{ x: titleX, y: titleY }}
            className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            style={{ x: descX, y: descY }}
            className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors"
          >
            {service.description}
          </motion.p>

          {/* Bottom Action Area */}
          <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5 group-hover:border-white/20 transition-colors duration-500">
            <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">0{index + 1}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const TechColumn = ({ title, items, icon: Icon, color, gradient }: any) => (
  <div className={`relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 overflow-hidden group hover:border-white/20 transition-all duration-500`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg bg-black/50 ${color} shadow-inner`}>
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-lg text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item: string, i: number) => (
          <div key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors text-sm">
            <div className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')} shadow-[0_0_8px_currentColor]`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesPage;
