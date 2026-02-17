import { useRef } from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// ── Shared mouse parallax hook ────────────────────────────────────
const useMouseParallax = (strength: number = 1) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cfg = { damping: 25, stiffness: 150 };
  const sx = useSpring(mx, cfg);
  const sy = useSpring(my, cfg);
  const x = useTransform(sx, [-0.5, 0.5], [-12 * strength, 12 * strength]);
  const y = useTransform(sy, [-0.5, 0.5], [-12 * strength, 12 * strength]);
  return { mx, my, x, y, sx, sy };
};

// ── Form Card with inner-element parallax ─────────────────────────
const FormCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cfg = { damping: 25, stiffness: 150 };
  const sx = useSpring(mx, cfg);
  const sy = useSpring(my, cfg);

  // Different depth layers for inner elements
  const nameX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const nameY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const emailX = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const emailY = useTransform(sy, [-0.5, 0.5], [-5, 5]);
  const msgX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const msgY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const btnX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const btnY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  // Glow tracking
  const glowX = useTransform(sx, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(sy, [-0.5, 0.5], ['20%', '80%']);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mx.set((e.clientX - left) / width - 0.5);
    my.set((e.clientY - top) / height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const staggerForm = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const fadeUpItem = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="flex flex-col justify-center bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden hover:border-white/20 transition-all duration-500"
      style={{ perspective: 800 }}
    >
      {/* Mouse-following inner glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: useTransform(
            [glowX, glowY] as any,
            ([x, y]: string[]) => `radial-gradient(350px circle at ${x} ${y}, rgba(249,115,22,0.08), transparent 70%)`
          ),
        }}
      />
      {/* Corner glows */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none" />

      <motion.form
        action="https://formspree.io/f/mvgrqgyk"
        method="POST"
        className="space-y-12 relative z-10"
        variants={staggerForm}
        initial="hidden"
        animate="visible"
      >
        {/* Name Field — depth layer 1 */}
        <motion.div className="group" variants={fadeUpItem} style={{ x: nameX, y: nameY, transformStyle: 'preserve-3d' }}>
          <label
            htmlFor="fullname"
            className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-orange-400 transition-colors"
          >
            FULL NAME
          </label>
          <div className="relative">
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-orange-400 transition-colors placeholder-white/40 peer"
              placeholder="Surya"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-500 peer-focus:w-full transition-all duration-500" />
          </div>
        </motion.div>

        {/* Email Field — depth layer 2 (subtler) */}
        <motion.div className="group" variants={fadeUpItem} style={{ x: emailX, y: emailY, transformStyle: 'preserve-3d' }}>
          <label
            htmlFor="email"
            className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-orange-400 transition-colors"
          >
            EMAIL ADDRESS
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-orange-400 transition-colors placeholder-white/40 peer"
              placeholder="jadamsuryateja@gmail.com"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-500 peer-focus:w-full transition-all duration-500" />
          </div>
        </motion.div>

        {/* Message Field — depth layer 3 (deeper) */}
        <motion.div className="group" variants={fadeUpItem} style={{ x: msgX, y: msgY, transformStyle: 'preserve-3d' }}>
          <label
            htmlFor="message"
            className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-orange-400 transition-colors"
          >
            MESSAGE
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-orange-400 transition-colors placeholder-white/40 resize-none peer"
              placeholder="Tell me about your project..."
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-500 peer-focus:w-full transition-all duration-500" />
          </div>
        </motion.div>

        {/* Submit Button — deepest layer (most movement) */}
        <motion.div variants={fadeUpItem} style={{ x: btnX, y: btnY, transformStyle: 'preserve-3d' }}>
          <motion.button
            type="submit"
            className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-400 transition-colors w-fit relative"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute -inset-4 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-2xl transition-colors duration-300 blur-sm" />
            <span className="relative z-10">SEND MESSAGE</span>
            <motion.span
              className="relative z-10 inline-flex"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={32}
              />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

// ── Floating Particle ─────────────────────────────────────────────
const FloatingDot = ({ delay, x, dur }: { delay: number; x: string; dur: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-orange-500/30 pointer-events-none"
    style={{ left: x, bottom: '-2%' }}
    animate={{ y: [0, -600], opacity: [0, 0.8, 0.8, 0] }}
    transition={{ duration: dur, delay, repeat: Infinity, ease: 'linear' }}
  />
);

// ── Floating decorative ring ──────────────────────────────────────
const FloatingRing = ({ size, top, left, delay }: { size: number; top: string; left: string; delay: number }) => (
  <motion.div
    className="absolute border border-orange-500/15 rounded-full pointer-events-none"
    style={{ width: size, height: size, top, left }}
    animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

function ContactPage() {
  // Mouse parallax for the left side — different strengths = different depths
  const heading = useMouseParallax(1.5);
  const desc = useMouseParallax(0.8);
  const socials = useMouseParallax(1.2);
  const loc = useMouseParallax(0.5);

  const trackMouse = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - left) / width - 0.5;
    const ny = (e.clientY - top) / height - 0.5;
    heading.mx.set(nx); heading.my.set(ny);
    desc.mx.set(nx); desc.my.set(ny);
    socials.mx.set(nx); socials.my.set(ny);
    loc.mx.set(nx); loc.my.set(ny);
  };
  const resetMouse = () => {
    [heading, desc, socials, loc].forEach(p => { p.mx.set(0); p.my.set(0); });
  };

  return (
    <div
      className="min-h-screen pt-24 px-6 md:px-20 pb-20 overflow-hidden relative"
      onMouseMove={trackMouse}
      onMouseLeave={resetMouse}
    >

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingDot delay={0} x="15%" dur={9} />
        <FloatingDot delay={2} x="35%" dur={7} />
        <FloatingDot delay={4} x="55%" dur={10} />
        <FloatingDot delay={1} x="75%" dur={8} />
        <FloatingDot delay={3} x="90%" dur={11} />
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative z-10">
        {/* Left Side: Typography & Socials — with parallax depth layers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex flex-col justify-between relative"
          style={{ perspective: 800 }}
        >
          {/* Decorative floating rings */}
          <FloatingRing size={60} top="20%" left="70%" delay={0} />
          <FloatingRing size={35} top="55%" left="80%" delay={2} />
          <FloatingRing size={45} top="75%" left="15%" delay={4} />

          <div>
            {/* 3D Parallax heading — deepest layer */}
            <motion.h1
              className="text-[15vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-white mb-10 select-none"
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: heading.x, y: heading.y, transformPerspective: 600, transformStyle: 'preserve-3d' }}
            >
              LET'S<br />TALK
            </motion.h1>

            {/* Description — medium depth */}
            <motion.p
              className="text-xl text-gray-400 font-mono max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ x: desc.x, y: desc.y }}
            >
              Have a project in mind? Let's build something extraordinary together.
            </motion.p>
          </div>

          <motion.div
            className="mt-12 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Social icons — their own parallax depth */}
            <motion.div className="flex gap-6" style={{ x: socials.x, y: socials.y }}>
              {[
                { href: 'https://github.com/jadamsuryateja', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/jadamsurya', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:jadamsuryateja123456@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors relative"
                  whileHover={{ scale: 1.25, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {/* icon glow on hover */}
                  <div className="absolute inset-0 bg-orange-500/0 hover:bg-orange-500/10 rounded-full blur-lg transition-colors duration-300 scale-[2]" />
                  <Icon size={32} className="relative z-10" />
                </motion.a>
              ))}
            </motion.div>

            {/* Location — shallowest parallax layer */}
            <motion.div
              className="text-gray-500 font-mono text-sm leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{ x: loc.x, y: loc.y }}
            >
              <p>BASED IN INDIA</p>
              <p>AVAILABLE FOR FREELANCE</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side: Form Card with inner-element parallax */}
        <FormCard />
      </div>
    </div>
  );
}

export default ContactPage;
