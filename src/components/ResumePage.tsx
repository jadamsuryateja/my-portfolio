import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Languages,
  Mail,
  Phone,
  Github,
  Linkedin,
  FolderGit2,
} from 'lucide-react';
import { motion } from 'framer-motion';

function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: 30,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
          RESUME
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={cardVariants}
            custom={0}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                EDUCATION
              </h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-bold text-white">
                  B.Tech – Computer Science & Engineering
                </h3>
                <p className="text-sm">Narasaraopeta Engineering College</p>
                <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  2022 – 2026
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">Intermediate (MPC)</h3>
                <p className="text-sm">Sri Chaitanya Junior College, Kakinada</p>
                <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  2020 – 2022
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">SSC</h3>
                <p className="text-sm">Thrividha English Medium School, Nuzvid</p>
                <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  2019
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={1}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                EXPERIENCE
              </h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-bold text-white">Python Full Stack Intern</h3>
                <p className="text-sm">SkillDzire (Remote)</p>
                <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  March – May 2024
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={2}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <FolderGit2 className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                PROJECTS
              </h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-bold text-white">
                  Feedback Management System (v1 & v2)
                </h3>
                <p className="text-sm">
                  Secure feedback platform with authentication and analytics. Built
                  with Node.js, Express.js, MySQL; upgraded to MERN stack.
                  Appreciated by faculty.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">
                  LATE-ATT Attendance Tracker
                </h3>
                <p className="text-sm">
                  Automated latecomer logging and WhatsApp-based reporting using
                  JavaScript. Reduced manual tracking.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">
                  Weather App (Web & Mobile)
                </h3>
                <p className="text-sm">
                  Responsive weather app using React.js, Capacitor, OpenWeather
                  API. Deployed on web and Android.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">
                  Image Captioning using Deep Learning
                </h3>
                <p className="text-sm">
                  Built encoder–decoder model with BLIP, Kosmos, fusion
                  techniques. Flask backend with HTML frontend.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">
                  Exam Browser (Online MCQs Platform)
                </h3>
                <p className="text-sm">
                  Secure MERN-based exam browser for MCQ tests. Included
                  authentication, timer, and analytics.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={3}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <Code className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                TECHNICAL SKILLS
              </h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>
                <h3 className="font-bold text-white">Languages</h3>
                <p className="text-sm">
                  Java, JavaScript, Python, SQL, TypeScript
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">Frontend</h3>
                <p className="text-sm">
                  HTML5, CSS3, React.js, Angular, Bootstrap
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">Backend</h3>
                <p className="text-sm">
                  Java (Spring Boot), Node.js, Express.js, Flask
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">Database</h3>
                <p className="text-sm">MySQL, MongoDB</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Tools</h3>
                <p className="text-sm">
                  Git, GitHub, VS Code, Bolt.new, Render, AWS, Azure
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white">Other</h3>
                <p className="text-sm">
                  REST APIs, JWT Authentication, JSON, Responsive Design,
                  Deployment
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={4}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <Award className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                ACHIEVEMENTS
              </h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">
                  Received Appreciation Letter from NEC for Feedback Management
                  System
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">
                  Completed multiple certifications in full-stack and cloud
                  technologies
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={5}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <Award className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                CERTIFICATIONS
              </h2>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">Python – NPTEL</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">MERN Stack – HackerRank</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">MEAN Stack – Infosys Springboard</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">AI and ML – Infosys Springboard</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">AWS Cloud – APSSDC</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">Android Development – APSSDC</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">
                  HTML, CSS, JavaScript – Infosys Springboard
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={6}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <Languages className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                LANGUAGES
              </h2>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">English</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">Hindi</p>
              </div>
              <div className="flex items-start">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] mr-2">
                  •
                </span>
                <p className="text-sm">Telugu</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={7}
            className="border border-orange-400/30 p-6 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div className="flex items-center mb-4">
              <Mail className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]" size={28} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                CONTACT
              </h2>
            </div>
            <div className="grid gap-4 text-gray-300">
              <div className="flex items-center">
                <Mail className="text-orange-400 mr-2" size={20} />
                <a
                  href="mailto:jadamsuryateja123456@gmail.com"
                  className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-[length:200%_auto] hover:animate-[shine_3s_linear_infinite] transition-all"
                >
                  jadamsuryateja123456@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-400 mr-2" size={20} />
                <a
                  href="tel:+917995205435"
                  className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-[length:200%_auto] hover:animate-[shine_3s_linear_infinite] transition-all"
                >
                  +91 7995205435
                </a>
              </div>
              <div className="flex items-center">
                <Github className="text-orange-400 mr-2" size={20} />
                <a
                  href="https://github.com/jadamsuryateja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-[length:200%_auto] hover:animate-[shine_3s_linear_infinite] transition-all"
                >
                  github.com/jadamsuryateja
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-orange-400 mr-2" size={20} />
                <a
                  href="https://linkedin.com/in/jadamsurya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-[length:200%_auto] hover:animate-[shine_3s_linear_infinite] transition-all"
                >
                  linkedin.com/in/jadamsurya
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResumePage;
