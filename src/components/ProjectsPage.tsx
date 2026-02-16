import { useState, useRef } from 'react';
import {
  ExternalLink,
  X,
  Globe,
  Clock,
  MessageSquare,
  Brain,
  Cloud,
  FileSpreadsheet,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';
import LazyImage from './LazyImage';

function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const projects: (Project & { id: string })[] = [
    {
      id: 'exam-browser',
      title: 'Exam Browser',
      url: 'https://exam-frontend-delta.vercel.app/',
      description:
        'Secure online examination platform with advanced proctoring. Features include secure exam environment and result viewing. Secure • Reliable • Comprehensive.',
      icon: Globe,
      image: '/images/exam-preview.webp',
      tags: ['React', 'Flask', 'MongoDB Atlas', 'Cloudinary']
    },
    {
      id: 'late-att',
      title: 'LATE-ATT Attendance Tracker',
      url: 'https://student-att.vercel.app/',
      description:
        'Automated latecomer logging and WhatsApp-based reporting using JavaScript. Reduced manual tracking efforts.',
      icon: Clock,
      image: '/images/hostel-preview.webp',
      tags: ['JavaScript', 'Face Rec', 'Geofencing']
    },
    {
      id: 'feedback-sys',
      title: 'Feedback Management System (V3)',
      url: 'https://feedbackuserface.vercel.app/feedback',
      description:
        'Secure feedback platform with authentication, role-based access control, and analytics. Migrated from SQL to MERN stack for scalability. received faculty appreciation.',
      icon: MessageSquare,
      image: '/images/feedback-preview.webp',
      tags: ['MERN Stack', 'Authentication', 'Analytics']
    },
    {
      id: 'hostel-portal',
      title: 'Hostel Attendance Portal',
      url: 'https://jadamsuryateja.github.io/LATE-ATT/index.html',
      description:
        'Smart attendance tracking with face recognition integration and geofencing. Features role-based dashboards for admins and staff.',
      icon: Clock,
      image: '/images/lateatt-preview.webp',
      tags: ['JavaScript', 'Face Rec', 'Geofencing']
    },
    {
      id: 'image-captioning',
      title: 'Image Captioning AI',
      url: 'https://jadamsuryateja.github.io/DEEPLERNING/index.html',
      description:
        'Advanced encoder-decoder model using BLIP and Kosmos for real-time image captioning. detailed Flask backend implementation.',
      icon: Brain,
      image: '/images/deeplearning-preview.webp',
      tags: ['Python', 'Flask', 'Deep Learning']
    },
    {
      id: 'weather-app',
      title: 'Weather Application',
      url: 'https://weatherapp-kappa-jade.vercel.app/',
      description:
        'Cross-platform weather app deployed on Web and Android. Built with React.js and Capacitor using OpenWeather API.',
      icon: Cloud,
      image: '/images/Weather.webp',
      tags: ['React', 'Capacitor', 'API']
    },
    {
      id: 'excel-processor',
      title: 'Excel Processor',
      url: 'https://excel-processor-peach.vercel.app/',
      description:
        'Web-based Excel file processor for efficient data manipulation and analysis.',
      icon: FileSpreadsheet,
      image: '/images/excel-preview.webp',
      tags: ['Web Technologies', 'Data Processing']
    },
    {
      id: 'chat-app',
      title: 'Real-time Chat App',
      url: 'https://chat-app-six-omega-35.vercel.app/',
      description:
        'Instant messaging application with live updates, built using React.js and Socket.io.',
      icon: MessageCircle,
      image: '/images/chat.webp',
      tags: ['React', 'Socket.io', 'Real-time']
    },
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-zinc-950">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-white"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore my latest work in web development, AI, and system architecture.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>

        {/* Full Screen Detail Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">

              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              />

              {/* Modal Card */}
              <motion.div
                layoutId={`card-${selectedId}`}
                className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                {/* Left: Image Area */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                      <selectedProject.icon size={80} className="text-white/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:hidden" />
                </div>

                {/* Right: Content Area */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                  <div className="mb-6">
                    <motion.h2
                      layoutId={`title-${selectedId}`}
                      className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight"
                    >
                      {selectedProject.title}
                    </motion.h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags?.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-orange-300 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold text-center rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={20} />
                      View Live Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// -------------------------------------------------------------------------
// 3D Parallax Card Component
// -------------------------------------------------------------------------
const ProjectCard = ({ project, onClick }: { project: any, onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5%", "5%"]);
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], ["-5%", "5%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

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
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      layoutId={`card-${project.id}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/5"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-black"
      >
        {project.image ? (
          <motion.div
            style={{ x: imageX, y: imageY, scale: 1.15 }}
            className="w-full h-full"
          >
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-800">
            <project.icon size={64} className="text-white/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      {/* Content Floating Above */}
      <div
        style={{ transform: "translateZ(150px)" }}
        className="absolute bottom-10 left-10 pointer-events-none"
      >
        <motion.h3
          layoutId={`title-${project.id}`}
          className="text-2xl font-black text-white drop-shadow-lg"
        >
          {project.title}
        </motion.h3>
        <div className="flex gap-2 mt-2">
          {project.tags?.slice(0, 2).map((tag: string, i: number) => (
            <span key={i} className="text-[10px] font-bold bg-white/90 text-black px-2 py-0.5 rounded shadow-lg">{tag}</span>
          ))}
        </div>
      </div>

      {/* Border Glow/Reflection */}
      <motion.div
        style={{
          transform: "translateZ(60px)",
          opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.3])
        }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none border border-white/10"
      />

    </motion.div>
  );
};

export default ProjectsPage;
