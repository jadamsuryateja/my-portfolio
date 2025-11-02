import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../types';

function ServicesPage() {
  const services: Service[] = [
    {
      title: 'Full Stack Web Development',
      description:
        'Building scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with responsive design and modern UI/UX principles.',
    },
    {
      title: 'Frontend Development',
      description:
        'Creating interactive and responsive user interfaces with React.js, Angular, HTML5, CSS3, and Bootstrap with focus on performance and accessibility.',
    },
    {
      title: 'Backend Development',
      description:
        'Developing robust server-side applications using Node.js, Express.js, Spring Boot, and Flask with RESTful APIs and JWT authentication.',
    },
    {
      title: 'Database Design & Management',
      description:
        'Designing and managing databases using MySQL and MongoDB with optimized queries, data modeling, and ensuring data integrity and security.',
    },
    {
      title: 'Mobile App Development',
      description:
        'Building cross-platform mobile applications using React Native and Capacitor, delivering native-like experiences for both iOS and Android.',
    },
    {
      title: 'Cloud Deployment & DevOps',
      description:
        'Deploying applications on AWS and Azure with CI/CD pipelines, containerization, and ensuring high availability and scalability.',
    },
  ];

  const icons = [Code2, Globe, Database, Database, Smartphone, Cloud];

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
      y: 50,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] cursive-text">
          MY SERVICES
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="border border-orange-400/30 bg-black p-6 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] transition-all duration-300 group rounded-xl"
              >
                <div className="bg-gradient-to-br from-orange-400/20 to-yellow-600/20 w-16 h-16 flex items-center justify-center border border-orange-400/50 mb-4 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all duration-300 rounded-lg">
                  <Icon className="text-orange-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] cursive-text">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 border border-orange-400/30 bg-black p-8 shadow-[0_0_30px_rgba(251,146,60,0.1)] rounded-xl"
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="text-orange-400 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] cursive-text">
              Tools & Technologies
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { title: 'Development', content: 'VS Code, Git, GitHub, Bolt.new' },
              { title: 'AI Tools', content: 'ChatGPT, GitHub Copilot' },
              { title: 'Cloud Platforms', content: 'AWS, Azure, Render' },
              { title: 'Languages', content: 'Java, JavaScript, Python, TypeScript' },
            ].map((item, index) => (
              <div key={index} className="border border-orange-400/30 bg-orange-400/5 p-4">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-[length:200%_auto] animate-[shine_3s_linear_infinite] cursive-text">
                  {item.title}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesPage;
