import { 
  ExternalLink, 
  Brain, 
  Clock, 
  Cloud, 
  MessageSquare,
  FileSpreadsheet,
  MessageCircle // Add this import for the chat icon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Image Captioning - Deep Learning',
      url: 'https://jadamsuryateja.github.io/DEEPLERNING/index.html',
      description:
        'Built encoder-decoder model with BLIP, Kosmos, and fusion techniques. Flask backend with HTML frontend.',
      icon: Brain,
      image: '/public/images/deeplearning-preview.jpg' // Add the robot image
    },
    {
      title: 'LATE-ATT Attendance Tracker',
      url: 'https://jadamsuryateja.github.io/LATE-ATT/index.html', 
      description:
        'Automated latecomer logging and WhatsApp-based reporting using JavaScript. Reduced manual tracking efforts.',
      icon: Clock,
      image: '/public/images/lateatt-preview.jpg' // Add the attendance tracker UI image
    },
    {
      title: 'Weather App',
      url: 'https://weatherapp-kappa-jade.vercel.app/',
      description:
        'Responsive weather application using React.js, Capacitor, and OpenWeather API. Deployed on web and Android.',
      icon: Cloud,
      image: '/public/images/Weather.jpg' // Add the weather app screenshot
    },
    {
      title: 'College Feedback System',
      url: 'https://collegefeeddback.netlify.app/',
      description:
        'Secure feedback platform with authentication and analytics. MERN stack application appreciated by faculty.',
      icon: MessageSquare,
      image: '/public/images/feedback-preview.jpg' // Add the feedback form image
    },
    {
      title: 'Excel Processor',
      url: 'https://excel-processor-peach.vercel.app/',
      description:
        'Web-based Excel file processor for data manipulation and analysis. Built with modern web technologies.',
      icon: FileSpreadsheet,
      image: '/public/images/excel-preview.jpg' // Add the Excel processor UI image
    },
    {
      title: 'Chat App',
      url: 'https://chat-app-six-omega-35.vercel.app/',
      description:
        'Real-time chat application built with React.js+Socket.io+Superbase. Features instant messaging with live updates.',
      icon: MessageCircle,
      image: '/public/images/chat.png'
    },
  ];

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 50,
      x: index % 2 === 0 ? -50 : 50,
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
          MY PROJECTS
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-400/30 bg-black p-6 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] transition-all duration-300 group rounded-xl"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-400/20 to-yellow-600/20 mb-4 flex items-center justify-center border border-orange-400/50 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all duration-300 rounded-lg overflow-hidden">
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-orange-400/10 group-hover:bg-orange-400/20 transition-colors duration-300"></div>
                    </div>
                  ) : (
                    <Icon className="text-orange-400" size={48} />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                  <span>View Project</span>
                  <ExternalLink className="ml-2 text-orange-400" size={16} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
