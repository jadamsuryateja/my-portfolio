import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactPage() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-orange-400 mb-12 text-center tracking-wider">
          CONTACT
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through the contact form or connect with me on social media.
              </p>

              <div className="space-y-6">
                <motion.div
                  variants={cardVariants}
                  className="flex items-start border border-orange-400/30 p-4 bg-orange-400/5 rounded-xl mb-6"
                >
                  <Mail className="text-orange-400 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:jadamsuryateja123456@gmail.com"
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                    >
                      jadamsuryateja123456@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="flex items-start border border-orange-400/30 p-4 bg-orange-400/5 rounded-xl mb-6"
                >
                  <Phone className="text-orange-400 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+917995205435"
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                    >
                      +91 7995205435
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="flex items-start border border-orange-400/30 p-4 bg-orange-400/5 rounded-xl mb-6"
                >
                  <MapPin className="text-orange-400 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-300 text-sm">
                      Narasaraopeta, Andhra Pradesh, India
                    </p>
                  </div>
                </motion.div>

                <div className="border border-orange-400/30 p-4 bg-orange-400/5 rounded-xl">
                  <h3 className="text-white font-semibold mb-3">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/jadamsuryateja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-orange-400/50 p-3 hover:bg-orange-400 hover:text-black transition-all duration-300 group"
                    >
                      <Github
                        className="text-orange-400 group-hover:text-black"
                        size={24}
                      />
                    </a>
                    <a
                      href="https://linkedin.com/in/jadamsurya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-orange-400/50 p-3 hover:bg-orange-400 hover:text-black transition-all duration-300 group"
                    >
                      <Linkedin
                        className="text-orange-400 group-hover:text-black"
                        size={24}
                      />
                    </a>
                    <a
                      href="mailto:jadamsuryateja123456@gmail.com"
                      className="border border-orange-400/50 p-3 hover:bg-orange-400 hover:text-black transition-all duration-300 group"
                    >
                      <Mail
                        className="text-orange-400 group-hover:text-black"
                        size={24}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-orange-400/30 p-8 bg-black shadow-[0_0_30px_rgba(251,146,60,0.3)] rounded-xl"
          >
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                Send Message
              </h2>

              <form
                action="https://formspree.io/f/mvgrqgyk"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    required
                    className="w-full bg-black border border-orange-400/50 p-3 text-white focus:border-orange-400 focus:outline-none focus:shadow-[0_0_10px_rgba(251,146,60,0.3)] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-black border border-orange-400/50 p-3 text-white focus:border-orange-400 focus:outline-none focus:shadow-[0_0_10px_rgba(251,146,60,0.3)] transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Message Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-black border border-orange-400/50 p-3 text-white focus:border-orange-400 focus:outline-none focus:shadow-[0_0_10px_rgba(251,146,60,0.3)] transition-all duration-300 resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black border-2 border-orange-400 text-orange-400 py-3 px-6 font-bold hover:bg-orange-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_40px_rgba(251,146,60,0.5)] flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
