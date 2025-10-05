import { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import logo from '../../public/Lottie Files/Logo.json'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About us' },
        { id: 'services', label: 'Services', hasDropdown: true },
        { id: 'white-label', label: 'White label' },
        { id: 'contact', label: 'Contact us' },
    ];

    const cartItemCount = 8;
    const cartTotal = 999;

    return (
        <nav className="bg-gradient-to-br from-[#0a0515] via-[#130a24] to-[#1a0f2e]">
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
                            <button
                                key={link.id}
                                onClick={() => setActiveLink(link.label)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeLink === link.label
                                    ? 'bg-white/10 text-white border border-white/20'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    } ${link.hasDropdown ? 'flex items-center gap-1' : ''}`}
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Shopping Cart */}
                        <div className="relative">
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
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute right-0 mt-3 w-72 bg-[#1a0f2e] border border-purple-900/30 rounded-2xl shadow-2xl z-50"
                                        >
                                            <div className="p-5">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-lg font-bold text-white">{cartItemCount} Items</h3>
                                                    <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white">
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <p className="text-purple-400 mb-4">Subtotal: ${cartTotal}</p>
                                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-full transition-colors">
                                                    View cart
                                                </button>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* User Profile */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-11 h-11 rounded-full border-2 border-purple-600 overflow-hidden hover:border-purple-500 transition-colors"
                            >
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </button>

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
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        setActiveLink(link.label);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-6 py-3 rounded-full text-sm font-medium transition-all ${activeLink === link.label
                                        ? 'bg-white/10 text-white border border-white/20'
                                        : 'text-gray-300 hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <ChevronDown className="inline-block w-4 h-4 ml-1" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;