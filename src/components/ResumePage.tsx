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
} from 'lucide-react';
import { motion } from 'framer-motion';

function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = {
    "Full Stack": ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
    "Languages": ["Java", "JavaScript", "Python", "SQL", "TypeScript"],
    "Frontend": ["HTML5", "CSS3", "React.js", "Angular", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Java (Spring Boot)", "Node.js", "Express.js", "Flask"],
    "Tools": ["Git", "GitHub", "VS Code", "ChatGPT", "Lovable", "Antigravity", "GitHub Copilot", "Render", "AWS"],
    "Database": ["MySQL", "MongoDB"],
  };

  return (
    <div className="min-h-screen pt-20 pb-10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-white/10 pb-8"
        >
          <div>
            <h1 className="text-5xl font-bold mb-2 tracking-tight text-white">
              Resume
            </h1>
            <p className="text-gray-400 text-lg">My professional journey & milestones</p>
          </div>

          <motion.a
            href="/Jadamsuryateja-FullStackDevloper.pdf"
            download="Jadam_Surya_Teja_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-extrabold rounded-full hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all duration-300 group"
          >
            <Download className="group-hover:animate-bounce" size={20} />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-12 gap-10"
        >
          {/* Main Content Column (Left) */}
          <div className="md:col-span-8 space-y-12">

            {/* Experience Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-orange-400" size={32} />
                <h2 className="text-3xl font-bold text-white">Experience</h2>
              </div>

              <div className="relative border-l border-white/10 pl-8 ml-3 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] border-4 border-black" />
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-xl font-bold text-white">Full Stack Development Intern</h3>
                      <span className="text-orange-400 font-mono text-sm bg-orange-500/10 px-3 py-1 rounded-full">3 Months</span>
                    </div>
                    <p className="text-gray-400 mb-4">Koderspark, Mangalagiri</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                      <li>Designed and implemented scalable frontend and backend components using the <span className="text-white font-semibold">MERN Stack</span>.</li>
                      <li>Developed secure RESTful APIs with Node.js & Express.js, ensuring robust data handling.</li>
                      <li>Collaborated with cross-functional teams to integrate databases and optimize application performance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Code className="text-yellow-400" size={32} />
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Feedback Management System",
                    subtitle: "Full Stack Platform",
                    desc: "Secure feedback platform with authentication, RBAC, and analytics. Migrated from SQL to MERN for scalability.",
                    tags: ["MERN", "Authentication", "Analytics"]
                  },
                  {
                    title: "Hostel Attendance Portal",
                    subtitle: "Smart Management",
                    desc: "Attendance tracking with face recognition & geofencing. Dashboards for admins and staff.",
                    tags: ["React", "Face Rec", "Geofencing"]
                  },
                  {
                    title: "Image Captioning AI",
                    subtitle: "Deep Learning",
                    desc: "Encoder-decoder model (BLIP/Kosmos) for generating real-time image captions.",
                    tags: ["Python", "Flask", "AI/ML"]
                  },
                  {
                    title: "Weather Application",
                    subtitle: "Cross-Platform",
                    desc: "Responsive app deployed on Web & Android using React.js and Capacitor with OpenWeather API.",
                    tags: ["React", "Capacitor", "API"]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute w-[2px] h-[60%] bg-gradient-to-b from-orange-400 to-transparent left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-orange-200 bg-orange-500/10 px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-orange-400" size={32} />
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>

              <div className="relative border-l border-white/10 pl-8 ml-3 space-y-10">
                {[
                  {
                    degree: "B.Tech – Computer Science & Engineering",
                    school: "Narasaraopeta Engineering College",
                    year: "2022 – 2026"
                  },
                  {
                    degree: "Intermediate (MPC)",
                    school: "Sri Chaitanya Junior College",
                    year: "2020 – 2022"
                  },
                  {
                    degree: "Secondary School Certificate",
                    school: "Thrividha English Medium School",
                    year: "2019"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <div className={`absolute -left-[39px] top-1 w-4 h-4 rounded-full border-2 border-white/30 bg-black group-hover:border-orange-400 group-hover:bg-orange-400 transition-all duration-300`} />
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{edu.degree}</h3>
                    <p className="text-gray-400 text-sm">{edu.school}</p>
                    <p className="text-orange-500/60 text-xs font-mono mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="md:col-span-4 space-y-10">

            {/* Skills Widget */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 border border-white/10 sticky top-24"
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-orange-400" size={24} />
                <h3 className="text-xl font-bold text-white">Expertise</h3>
              </div>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span key={skill} className="text-xs font-medium text-white bg-white/10 hover:bg-orange-500/20 hover:text-orange-300 border border-white/5 hover:border-orange-500/30 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Widget */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-orange-500/10 to-yellow-500/5 backdrop-blur-md rounded-3xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
              <div className="space-y-4">
                <a href="mailto:jadamsuryateja123456@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-orange-500/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm truncate">jadamsuryateja123456@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-white/5 rounded-full">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm">+91 7995205435</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href="https://github.com/jadamsuryateja" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all">
                    <Github size={20} className="text-white" />
                  </a>
                  <a href="https://linkedin.com/in/jadamsurya" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all">
                    <Linkedin size={20} className="text-blue-400" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResumePage;
