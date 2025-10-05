import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown, Sparkles } from 'lucide-react';
import logo1 from '../assets/Frame_1.gif'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('GBP - British Pound');

  const companyLinks = [
    { label: 'Home', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Our Team', href: '#' },
    { label: 'User Profile', href: '#' },
    { label: 'White Labelling', href: '#' },
  ];

  const aboutLinks = [
    { label: 'Our Stories', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'Send Message', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Start Earning', href: '#' },
  ];

  const servicesLinks = [
    { label: 'Digital Marketing', href: '#' },
    { label: 'Creative Writing Solution', href: '#' },
    { label: 'Web & Software Development', href: '#' },
    { label: 'E-Commerce Solution', href: '#' },
    { label: 'Graphic Design', href: '#' },
    { label: 'Multimedia & Video Editing', href: '#' },
    { label: 'Merchandise', href: '#' },
    { label: 'Premium Website', href: '#' },
    { label: 'Premium Domains', href: '#' },
    { label: 'Special Combo', href: '#' },
  ];

  const handleSubscribe = () => {
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0515] to-[#050208] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[250px] flex justify-center bg-gradient-to-br from-[#1a0f2e]/80 to-[#2a1a3e]/60 rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-purple-500/20 shadow-2xl"
        >
          <div className="flex flex-col  lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
               <img className='w-14' src={logo1} alt="" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">METRO SOLVER</h3>
                  <p className="text-xs sm:text-sm text-gray-400">your IT partner</p>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
                <p className="text-sm text-gray-400">Join the 25000+ client in our company</p>
              </div>
            </div>

            <div className="w-full sm:w-auto">
              <div className="relative flex items-center bg-white rounded-full overflow-hidden shadow-lg min-w-[300px] sm:min-w-[350px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 sm:py-4 text-gray-800 focus:outline-none text-sm sm:text-base"
                />
                <motion.button
                  onClick={handleSubscribe}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm sm:text-base">Subscribe</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Got Questions?<br />Call us!
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Head office: Metro Solver Limited</p>
                  <p>Grantham Road, London E12</p>
                  <p>5LX, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>+447936 455446</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>official@metrosolver.com</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Country Currency</label>
              <div className="relative">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="w-full bg-[#1a0f2e] border border-purple-500/30 rounded-lg px-4 py-3 text-sm appearance-none cursor-pointer focus:outline-none focus:border-purple-500/50 transition-colors"
                >
                  <option>GBP - British Pound</option>
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>BDT - Bangladeshi Taka</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">About Us</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-sm text-gray-500 mb-6">Our Future Partners</h4>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-blue-400">M</div>
              <span className="text-xs text-gray-400">Business Partner</span>
            </div>

            <div className="flex items-center gap-2 bg-[#1a0f2e]/50 px-4 py-2 rounded-lg border border-purple-500/20">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div>
                <p className="text-sm font-semibold">Google Marketing Platform</p>
                <p className="text-xs text-gray-400">Sales Partner</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#1a0f2e]/50 px-4 py-2 rounded-lg border border-purple-500/20">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                <div className="bg-red-500"></div>
                <div className="bg-green-500"></div>
                <div className="bg-blue-500"></div>
                <div className="bg-yellow-500"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">Microsoft</p>
                <p className="text-xs text-gray-400">Partner</p>
              </div>
            </div>

            <div className="bg-[#1a0f2e]/50 px-4 py-2 rounded-lg border border-orange-500/30">
              <p className="text-sm font-bold text-orange-500">aws</p>
              <p className="text-xs text-gray-400">Partner</p>
            </div>

            <div className="bg-[#1a0f2e]/50 px-4 py-2 rounded-lg border border-red-500/30">
              <p className="text-sm font-bold text-red-500">Oracle</p>
              <p className="text-xs text-gray-400">Partner</p>
            </div>

            <div className="bg-[#1a0f2e]/50 px-4 py-2 rounded-lg border border-purple-500/20">
              <p className="text-sm font-bold">amazon spn</p>
            </div>

            <div className="bg-[#1a0f2e]/50 px-4 py-2 rounded-lg border border-purple-500/20">
              <p className="text-sm font-bold">TikTok</p>
              <p className="text-xs text-gray-400">Marketing Partners</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© Metro Solver. All Rights Reserved 2024</p>
            <p className="text-xs sm:text-sm text-center sm:text-right">
              Metro Solver Ltd incorporated in England & Wales Registration No.15276189
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;