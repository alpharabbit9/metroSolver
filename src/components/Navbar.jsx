import { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown, User, Settings, LogOut, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import logo from '../../public/Lottie Files/Logo.json'
import { NavLink } from 'react-router-dom';
import { label } from 'framer-motion/client';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const navLinks = [
        { id: '/', label: 'Home' },
        { id: '/about', label: 'About us' },
        { id: '/services', label: 'Services', hasDropdown: true },
        { id: '/whiteLabel', label: 'White label' },
        { id: '/contact', label: 'Contact us' },
    ];

    const cartItemCount = 8;
    const cartTotal = 999;

    return (
        <nav className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  inset-0 bg-gradient-to-r from-[#0a0515]/80 via-transparent to-transparent ">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <div className="w-20 h-9">
                                <Lottie animationData={logo} />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2  px-4 py-1 rounded-3xl bg-[#150D1C]">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} to={link.id}>
                                <button
                                    onClick={() => setActiveLink(link.label)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeLink === link.label
                                        ? 'bg-white/10 text-white border border-white/20'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        } ${link.hasDropdown ? 'flex items-center gap-1' : ''}`}
                                >
                                    {link.label}
                                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </button>
                            </NavLink>
                        ))}

                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Shopping Cart */}
                        <div className="relative hidden md:block object-cover">
                            <button
                                onClick={() => setIsCartOpen(!isCartOpen)}
                                className="relative p-3 rounded-full bg-purple-900/30 text-white hover:bg-purple-900/50 transition-colors"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>

                            {/* Cart Dropdown */}
                            <AnimatePresence>
                                {isCartOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setIsCartOpen(false)}
                                        />

                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* signin */}
                        <div className="relative hidden md:block object-cover">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-8 py-4 bg-gradient-to-b from-[#6331F1] via-[#8B57F4] to-[#8C57F5] rounded-full text-white font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <Sparkles className="w-5 h-5" />
                                </motion.div>
                                <span>Sign in</span>
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2a1a3e]/60 to-[#1a0f2e]/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                />
                            </motion.button>

                            {/* Profile Dropdown */}
                            <AnimatePresence>
                                {isProfileOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setIsProfileOpen(false)}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute right-0 mt-3 w-56 bg-[#1a0f2e] border border-purple-900/30 rounded-2xl shadow-2xl z-50"
                                        >
                                            <div className="p-2">
                                                <button className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-white/5 rounded-xl transition-colors">
                                                    <span className="flex items-center gap-3">
                                                        <User className="w-4 h-4" />
                                                        Profile
                                                    </span>
                                                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">New</span>
                                                </button>
                                                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 rounded-xl transition-colors">
                                                    <Settings className="w-4 h-4" />
                                                    Settings
                                                </button>
                                                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 rounded-xl transition-colors">
                                                    <LogOut className="w-4 h-4" />
                                                    Logout
                                                </button>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-3 rounded-full bg-purple-900/30 text-white hover:bg-purple-900/50 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-purple-900/20"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <NavLink key={link.id} to={link.id}>
                                    <button
                                        onClick={() => setActiveLink(link.label)}
                                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeLink === link.label
                                            ? 'bg-white/10 text-white border border-white/20'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            } ${link.hasDropdown ? 'flex items-center gap-1' : ''}`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                    </button>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;