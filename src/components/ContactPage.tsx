import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 pb-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Side: Typography & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex flex-col justify-between"
        >
          <div>
            <h1 className="text-[15vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-white mb-10 select-none">
              LET'S<br />TALK
            </h1>
            <p className="text-xl text-gray-400 font-mono max-w-md">
              Have a project in mind? Let's build something extraordinary together.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="flex gap-6">
              {/* Social Icons */}
              <a
                href="https://github.com/jadamsuryateja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/jadamsurya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:jadamsuryateja123456@gmail.com"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Mail size={32} />
              </a>
            </div>
            <div className="text-gray-500 font-mono text-sm leading-relaxed">
              <p>BASED IN INDIA</p>
              <p>AVAILABLE FOR FREELANCE</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <form
            action="https://formspree.io/f/mvgrqgyk"
            method="POST"
            className="space-y-12"
          >
            <div className="group">
              <label
                htmlFor="fullname"
                className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-orange-400 transition-colors"
              >
                FULL NAME
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-orange-400 transition-colors placeholder-white/40"
                placeholder="John Doe"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-orange-400 transition-colors"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-orange-400 transition-colors placeholder-white/40"
                placeholder="john@example.com"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-orange-400 transition-colors"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-orange-400 transition-colors placeholder-white/40 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-400 transition-colors w-fit"
            >
              SEND MESSAGE
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={32}
              />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
