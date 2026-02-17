import { useRef } from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  Terminal,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';




// ── Floating Particle ─────────────────────────────────────────────
const FloatingParticle = ({ delay, x, size, duration }: { delay: number; x: string; size: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full bg-orange-500/20 pointer-events-none"
    style={{ width: size, height: size, left: x, bottom: '-5%' }}
    animate={{
      y: [0, -800],
      opacity: [0, 0.6, 0.6, 0],
      scale: [0.5, 1, 1, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

// ── Parallax Experience Card ──────────────────────────────────────
const ExperienceCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 25, stiffness: 150 };
  const sx = useSpring(mouseX, springCfg);
  const sy = useSpring(mouseY, springCfg);
  const tX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const tY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(sx, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(sy, [-0.5, 0.5], ['20%', '80%']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };
  const onLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative group"
    >
      {/* Glow that follows mouse */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [glowX, glowY] as any,
            ([x, y]: string[]) => `radial-gradient(400px circle at ${x} ${y}, rgba(249,115,22,0.12), transparent 70%)`
          ),
        }}
      />

      <div className="bg-white/[0.03] backdrop-blur-xl p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden">
        {/* animated top border */}
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 transition-all duration-1000" />
        {/* animated bottom border */}
        <div className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-l from-orange-500 via-yellow-500 to-orange-500 transition-all duration-1000 delay-200" />

        <motion.div style={{ x: tX, y: tY }}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <h3 className="text-xl font-bold text-white resume-shimmer-text">Full Stack Developer</h3>
            <span className="text-orange-400 font-mono text-xs bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mt-2 sm:mt-0 resume-glow-pulse-subtle">3 Months</span>
          </div>
          <p className="text-gray-400 mb-5 text-sm font-mono">Koderspark, Mangalagiri</p>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            {[
              <>Architected and built scalable frontend and backend solutions using the <span className="text-white font-semibold">MERN Stack</span>.</>,
              'Engineered secure RESTful APIs with Node.js & Express.js for robust and efficient data handling.',
              'Delivered end-to-end web services tailored to client requirements.',
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="flex gap-3 group/li"
              >
                <span className="text-orange-500 mt-1 shrink-0 group-hover/li:text-yellow-400 transition-colors">▸</span>
                <span className="group-hover/li:text-white transition-colors duration-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ── Main Resume Page ───────────────────────────────────────────────
function ResumePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const skills = {
    "Full Stack": { items: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"], color: "orange" },
    "Languages": { items: ["Java", "JavaScript", "Python", "SQL", "TypeScript"], color: "blue" },
    "Frontend": { items: ["HTML5", "CSS3", "React.js", "Angular", "Bootstrap", "Tailwind CSS"], color: "purple" },
    "Backend": { items: ["Java (Spring Boot)", "Node.js", "Express.js", "Flask"], color: "green" },
    "Tools": { items: ["Git", "GitHub", "VS Code", "ChatGPT", "Lovable", "Antigravity", "GitHub Copilot", "Render", "AWS"], color: "yellow" },
    "Database": { items: ["MySQL", "MongoDB"], color: "cyan" },
  };

  const projectTitles = [
    "Exam Browser",
    "LATE-ATT Attendance Tracker",
    "Feedback Management System (V3)",
    "Hostel Attendance Portal",
    "Image Captioning AI",
    "Weather Application",
    "Excel Processor",
    "Real-time Chat App",
  ];

  const education = [
    { degree: "B.Tech – Computer Science & Engineering", school: "Narasaraopeta Engineering College", year: "2022 – 2026" },
    { degree: "Intermediate (MPC)", school: "Sri Chaitanya Junior College", year: "2020 – 2022" },
    { degree: "Secondary School Certificate", school: "Thrividha English Medium School", year: "2019" },
  ];

  const skillColor: Record<string, string> = {
    orange: 'hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/40 hover:shadow-[0_0_12px_rgba(249,115,22,0.25)]',
    blue: 'hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]',
    purple: 'hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/40 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]',
    green: 'hover:bg-green-500/20 hover:text-green-300 hover:border-green-500/40 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)]',
    yellow: 'hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-500/40 hover:shadow-[0_0_12px_rgba(234,179,8,0.25)]',
    cyan: 'hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]',
  };


  return (
    <div ref={sectionRef} className="min-h-screen pt-20 pb-20 relative overflow-hidden">

      {/* ── Ambient Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-orange-500/8 rounded-full blur-[100px] md:blur-[180px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-15%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-500/8 rounded-full blur-[100px] md:blur-[180px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[30%] left-[60%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-500/5 rounded-full blur-[80px] md:blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[60%] left-[20%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-cyan-500/5 rounded-full blur-[60px] md:blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" size={4} duration={8} />
        <FloatingParticle delay={2} x="25%" size={3} duration={10} />
        <FloatingParticle delay={4} x="45%" size={5} duration={7} />
        <FloatingParticle delay={1} x="65%" size={3} duration={9} />
        <FloatingParticle delay={3} x="80%" size={4} duration={11} />
        <FloatingParticle delay={5} x="90%" size={3} duration={8} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════
            HERO HEADER
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-mono text-orange-500 tracking-widest mb-3"
              >
                // PROFESSIONAL_JOURNEY
              </motion.p>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter">
                <span className="glitched-text" data-text="RESUME">
                  RESUME
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-base sm:text-lg mt-2 sm:mt-3 font-light"
              >
                My professional journey & milestones
              </motion.p>
            </div>

            <motion.a
              href="/Jadamsuryateja-FullStackDevloper.pdf"
              download="Jadam_Surya_Teja_Resume.pdf"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-5 sm:px-8 py-3 sm:py-3.5 rounded-full overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 resume-gradient-rotate" />
              {/* Inner fill */}
              <div className="absolute inset-[2px] rounded-full bg-black/90 group-hover:bg-black/70 transition-colors duration-500" />
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-shadow duration-500" />
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-white font-bold text-sm sm:text-base tracking-wide">
                <Download className="group-hover:animate-bounce" size={18} />
                <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">Download CV</span>
              </span>
            </motion.a>
          </div>

          {/* decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-orange-500/50 via-white/10 to-transparent origin-left"
          />
        </motion.div>


        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-14">

          {/* ══════════════════════════════════════════════════════
              MAIN CONTENT (Left 8 cols)
          ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-8 space-y-12 md:space-y-20">

            {/* ── EXPERIENCE ── */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-10">
                <div className="p-2.5 bg-orange-500/10 rounded-xl border border-orange-500/20">
                  <Briefcase className="text-orange-400" size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
              </div>

              <div className="relative border-l-2 border-white/5 pl-4 sm:pl-8 ml-3 sm:ml-5">
                {/* Animated glowing timeline line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent"
                />

                {/* timeline dot */}
                <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)] border-[3px] border-black" />

                <ExperienceCard />
              </div>
            </motion.section>

            {/* ── PROJECTS ── */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-10">
                <div className="p-2.5 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <Code className="text-yellow-400" size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTitles.map((title, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="group flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-500/30 px-4 py-3.5 transition-all duration-300 hover:bg-white/[0.06] relative overflow-hidden cursor-default"
                  >
                    {/* hover sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    <span className="relative z-10 text-yellow-500/40 font-mono text-xs group-hover:text-yellow-400 transition-colors">{String(index + 1).padStart(2, '0')}</span>
                    <span className="relative z-10 text-white text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300 flex-1">{title}</span>
                    <ArrowUpRight size={14} className="relative z-10 text-white/20 group-hover:text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ── EDUCATION ── */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-10">
                <div className="p-2.5 bg-green-500/10 rounded-xl border border-green-500/20">
                  <GraduationCap className="text-green-400" size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
              </div>

              {/* Terminal Window */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group/term hover:border-green-500/20 transition-colors duration-500"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 bg-white/[0.03] border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70 group-hover/term:bg-red-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70 group-hover/term:bg-yellow-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70 group-hover/term:bg-green-500 transition-colors" />
                  <span className="ml-3 text-xs font-mono text-gray-500 flex items-center gap-1.5">
                    <Terminal size={12} /> education.log
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 sm:space-y-5">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-green-400/60"
                  >
                    <span className="hidden sm:inline">{'>'} cat ~/.education/academic_history.log</span>
                    <span className="sm:hidden">{'>'} cat ~/education.log</span>
                  </motion.p>

                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.15 }}
                      className="group/edu pl-4 border-l-2 border-white/5 hover:border-green-500/40 transition-colors duration-300 relative"
                    >
                      {/* hover glow line */}
                      <div className="absolute left-[-1px] top-0 h-0 group-hover/edu:h-full w-[2px] bg-green-500/60 transition-all duration-500" />
                      <p className="text-gray-500 text-xs mb-1">
                        <span className="text-green-400/50">[{edu.year}]</span>
                      </p>
                      <p className="text-white group-hover/edu:text-green-400 transition-colors duration-300 font-semibold text-base">{edu.degree}</p>
                      <p className="text-gray-500 text-xs mt-0.5"># {edu.school}</p>
                    </motion.div>
                  ))}

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-600 pt-2"
                  >
                    {'>'} <span className="resume-terminal-cursor">_</span>
                  </motion.p>
                </div>
              </motion.div>
            </motion.section>

          </div>

          {/* ══════════════════════════════════════════════════════
              SIDEBAR (Right 4 cols)
          ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-4 space-y-8">

            {/* ── Skills Widget ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl md:sticky md:top-24 overflow-hidden"
            >
              {/* animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/30 via-purple-500/20 to-cyan-500/30 resume-gradient-rotate" />
              <div className="absolute inset-[1px] rounded-2xl bg-zinc-950/95 backdrop-blur-xl" />

              <div className="relative z-10 p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <Award className="text-orange-400" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Skills</h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                    {Object.values(skills).reduce((acc, { items }) => acc + items.length, 0)} skills
                  </span>
                </div>

                {/* Skill categories */}
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, { items, color }], catIdx) => {
                    const dotColor: Record<string, string> = {
                      orange: 'bg-orange-400', blue: 'bg-blue-400', purple: 'bg-purple-400',
                      green: 'bg-green-400', yellow: 'bg-yellow-400', cyan: 'bg-cyan-400',
                    };
                    const barColor: Record<string, string> = {
                      orange: 'from-orange-500/40 to-orange-500/0',
                      blue: 'from-blue-500/40 to-blue-500/0',
                      purple: 'from-purple-500/40 to-purple-500/0',
                      green: 'from-green-500/40 to-green-500/0',
                      yellow: 'from-yellow-500/40 to-yellow-500/0',
                      cyan: 'from-cyan-500/40 to-cyan-500/0',
                    };

                    return (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.08, duration: 0.4 }}
                        className="group/cat"
                      >
                        {/* Category header */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${dotColor[color]} group-hover/cat:scale-[2] transition-transform duration-300`} />
                          <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.15em] group-hover/cat:text-gray-300 transition-colors duration-300">{category}</h4>
                          <div className={`flex-1 h-px bg-gradient-to-r ${barColor[color]} opacity-0 group-hover/cat:opacity-100 transition-opacity duration-500`} />
                        </div>

                        {/* Skill chips */}
                        <div className="flex flex-wrap gap-1.5 pl-3.5">
                          {items.map((skill, i) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: catIdx * 0.08 + i * 0.03, duration: 0.3 }}
                              whileHover={{ scale: 1.12, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              className={`text-[11px] font-medium text-white/70 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1.5 rounded-lg cursor-default transition-all duration-300 ${skillColor[color]}`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* ── Contact Widget ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl p-6 overflow-hidden group"
            >
              {/* animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 via-yellow-500/10 to-orange-500/20 resume-gradient-rotate" />
              <div className="absolute inset-[1px] rounded-2xl bg-zinc-950/90 backdrop-blur-xl" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <Sparkles size={16} className="text-orange-400" />
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <a href="mailto:jadamsuryateja123456@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/link">
                    <div className="p-2 bg-white/5 rounded-full group-hover/link:bg-orange-500/20 group-hover/link:shadow-[0_0_12px_rgba(249,115,22,0.2)] transition-all duration-300">
                      <Mail size={16} />
                    </div>
                    <span className="text-xs sm:text-sm truncate">jadamsuryateja123456@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-white/5 rounded-full">
                      <Phone size={16} />
                    </div>
                    <span className="text-sm">+91 7995205435</span>
                  </div>
                  <div className="flex gap-3 mt-5 pt-4 border-t border-white/5">
                    <motion.a
                      href="https://github.com/jadamsuryateja"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                      <Github size={18} className="text-white" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/jadamsurya"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/5 rounded-xl hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
                    >
                      <Linkedin size={18} className="text-blue-400" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
