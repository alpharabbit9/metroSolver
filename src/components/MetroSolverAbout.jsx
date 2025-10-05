import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MetroSolverAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen  py-20 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="max-w-[1400px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Section - Mission and Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 mb-32">
          {/* Left - Image */}
          <motion.div variants={scaleIn} className="relative">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Border gradient */}
              <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-purple-400/40">
                <div className="rounded-[26px] overflow-hidden bg-[#0f0820]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop&q=80"
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Mission and Story Content */}
          <div className="flex flex-col justify-center space-y-12  ">
            <motion.div
            className=' p-5 bg-[#2E2243] rounded-3xl backdrop-blur-sm'
            variants={fadeInUp}>
              <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold text-white mb-3 leading-tight">
                Metro Solver Mission
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Our mission is to cover all your digital needs by providing innovative,
                comprehensive, and affordable solutions tailored to meet your specific
                requirements and exceed your expectations. We are dedicated to
                delivering top-quality services that empower exceptional results in a
                competitive digital landscape.
              </p>
            </motion.div>

            <motion.div
            className='p-5 bg-[#2E2243] rounded-3xl backdrop-blur-sm'
            variants={fadeInUp}>
              <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold text-white mb-6 leading-tight">
                Metro Solver Story
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4">
                In July 2023, a vision took shape that would redefine the landscape of
                digital services. This vision came from Nayemat Karim, the founder and
                director of Metro Solver. The story begins with Nayemat and his co-
                founders, who had previously established a successful digital agency
                to launch their first business in the UK. They encountered a digital services
                market that was not only exorbitantly expensive but also lacked a
                comprehensive, all-in-one solution...
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2 transition-all duration-300 group">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Global Reach, Conclusion, and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left - Global Reach and Conclusion */}
          <div className="space-y-12">
            <motion.div 
            className='p-5 bg-[#2E2243] rounded-3xl backdrop-blur-sm'
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold text-white mb-6 leading-tight">
                Global Reach and Vision
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Today, Metro Solver is striving to extend its services worldwide, aiming to
                meet all digital needs from logo creation and branding to comprehensive
                marketing solutions. With a dedicated team of over 100 employees
                across various sectors ensures continuous improvement in quality and
                customer satisfaction.
              </p>
            </motion.div>

            <motion.div 
            className='p-5 bg-[#2E2243] rounded-3xl backdrop-blur-sm'
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold text-white mb-6 leading-tight">
                Conclusion
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Metro Solver's journey from a simple idea to a thriving digital services firm
                exemplifies resilience, innovation, and a steadfast commitment to solving
                customer problems. The company continues to evolve, driven by a
                talented team and visionary leadership. Its growing success is a
                testament to the power of addressing real market needs with quality
                solutions and integrity.
              </p>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:sticky lg:top-20"
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Border gradient */}
              <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-cyan-400/40 via-blue-400/40 to-purple-400/40">
                <div className="rounded-[26px] overflow-hidden bg-[#0f0820]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=1100&fit=crop&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MetroSolverAbout;