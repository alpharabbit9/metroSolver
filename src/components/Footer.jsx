import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import logo1 from '../assets/Frame_1.gif';

const Footer = () => {
  const [email, setEmail] = useState('');

  // ✅ Move currencies outside so they can be used in state
  const currencies = [
    { code: "GBP", name: "British Pound", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "USD", name: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
    { code: "EUR", name: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
    { code: "BDT", name: "Bangladeshi Taka", flag: "https://flagcdn.com/w20/bd.png" },
  ];

  const [selected, setSelected] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

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
      {/* ✅ Newsletter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[350px] bg-gradient-to-br from-[#1a0f2e]/80 to-[#2a1a3e]/60 rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-purple-500/20 shadow-2xl"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <img className="w-16" src={logo1} alt="Logo" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">METRO SOLVER</h3>
              <p className="text-xs sm:text-sm text-gray-400">your IT partner</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-sm text-gray-400">Join the 25000+ client in our company</p>
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

      {/* ✅ Main Footer Links */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact + Currency */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Got Questions?<br />Call us!</h3>
            <div className="space-y-4 mb-8 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Head office: Metro Solver Limited</p>
                  <p>Grantham Road, London E12</p>
                  <p>5LX, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>+447936 455446</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>official@metrosolver.com</span>
              </div>
            </div>

            {/* ✅ Currency Dropdown */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Country Currency</label>
              <div className="relative w-72">
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between bg-[#1a0f2e] border border-purple-500/30 rounded-lg px-4 py-3 text-sm cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <img src={selected.flag} alt={selected.code} className="w-5 h-5 rounded-full" />
                    {selected.code} - {selected.name}
                  </span>
                  <span className="text-gray-400">▼</span>
                </button>

                {open && (
                  <ul className="absolute left-0 mt-2 w-full bg-[#1a0f2e] border border-purple-500/30 rounded-lg shadow-lg z-50">
                    {currencies.map((currency) => (
                      <li
                        key={currency.code}
                        onClick={() => {
                          setSelected(currency);
                          setOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-purple-500/20 cursor-pointer transition-colors"
                      >
                        <img src={currency.flag} alt={currency.code} className="w-5 h-5 rounded-full" />
                        {currency.code} - {currency.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
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
              {aboutLinks.map((link, i) => (
                <li key={i}>
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
              {supportLinks.map((link, i) => (
                <li key={i}>
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
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Section */}
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

      {/* ✅ Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
