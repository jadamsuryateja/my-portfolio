import { Code2, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <div className="w-full sm:w-96 h-[24rem] sm:h-[32rem] relative overflow-hidden border-2 border-orange-400 shadow-[0_0_50px_rgba(251,146,60,0.3)] rounded-2xl">
              <img
                src="/images/surya.jpg"
                alt="Surya Teja"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  SURYA TEJA
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mt-2">Full Stack Developer</p>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-row sm:flex-col justify-center items-center gap-4 flex-wrap sm:flex-nowrap"
            >
              {/* Skill cards */}
              <motion.div
                variants={itemVariants}
                className="border border-orange-400/50 p-4 text-center bg-orange-400/5 hover:bg-orange-400/10 transition-all duration-300 rounded-xl w-[calc(50%-0.5rem)] sm:w-48"
              >
                <Globe className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] font-semibold text-sm sm:text-base">Frontend</p>
                <p className="text-xs sm:text-sm text-gray-400">React, Angular</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="border border-orange-400/50 p-4 text-center bg-orange-400/5 hover:bg-orange-400/10 transition-all duration-300 rounded-xl w-[calc(50%-0.5rem)] sm:w-48"
              >
                <Database className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] font-semibold text-sm sm:text-base">Backend</p>
                <p className="text-xs sm:text-sm text-gray-400">Node.js, Express</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="border border-orange-400/50 p-4 text-center bg-orange-400/5 hover:bg-orange-400/10 transition-all duration-300 rounded-xl w-[calc(50%-0.5rem)] sm:w-48"
              >
                <Code2 className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] font-semibold text-sm sm:text-base">Database</p>
                <p className="text-xs sm:text-sm text-gray-400">MySQL, MongoDB</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white px-4 sm:px-0 flex flex-col items-center md:items-start"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] text-center">
              JADAM SURYA TEJA
            </h1>
            <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8 text-gray-300 text-center">
              Full Stack Developer
            </h2>

            <div className="space-y-4 sm:space-y-6 max-w-2xl text-center md:text-left">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Motivated B.Tech Computer Science student specializing in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] font-semibold">
                  {" "}Full Stack Web Development (MERN){" "}
                </span>
                . Skilled in designing and deploying scalable web applications with
                hands-on experience in both frontend and backend technologies.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Proficient in React, Node.js, MySQL, MongoDB. Adept at leveraging
                tools like Bolt.new, VS Code, ChatGPT, and GitHub Copilot to
                accelerate development.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Seeking opportunities to contribute to enterprise projects while
                enhancing technical expertise in modern frameworks and cloud
                platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
