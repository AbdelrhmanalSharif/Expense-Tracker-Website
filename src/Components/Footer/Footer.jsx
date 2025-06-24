import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#e0f7fa] via-[#f8fafc] to-[#f1f8e9] text-[#272343] font-inter">
            {/* Top Section */}
            <div className="border-t border-b border-[#e1e3e5] py-16">
                <div className="lg:container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Logo & About */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Armchair size="2.5rem" color="#029fae" />
                                <span className="text-3xl font-bold text-[#029fae] tracking-wide">comforty</span>
                            </div>
                            <p className="text-base text-[#272343] mb-6 max-w-[320px]">
                                Discover comfort and style with our curated collection of furniture. Transform your space with pieces that inspire and delight.
                            </p>
                            <div className="flex items-center gap-3 mt-4">
                                <Link to="#" className="p-2 rounded-full border border-[#007580] hover:bg-[#007580] hover:text-white transition">
                                    <Facebook size="1.5rem" color="#007580" />
                                </Link>
                                <Link to="#" className="p-2 rounded-full border border-[#007580] hover:bg-[#007580] hover:text-white transition">
                                    <Twitter size="1.5rem" color="#007580" />
                                </Link>
                                <Link to="#" className="p-2 rounded-full border border-[#007580] hover:bg-[#007580] hover:text-white transition">
                                    <Instagram size="1.5rem" color="#007580" />
                                </Link>
                                <Link to="#" className="p-2 rounded-full border border-[#007580] hover:bg-[#007580] hover:text-white transition">
                                    <Youtube size="1.5rem" color="#007580" />
                                </Link>
                            </div>
                        </div>
                        {/* Categories */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#029fae] uppercase mb-4 tracking-wider">Categories</h3>
                            <ul className="space-y-3">
                                <li><Link to="#" className="hover:text-[#007580] transition">Sofa</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Armchair</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Wing Chair</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Desk Chair</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Wooden Chair</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Park Bench</Link></li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#029fae] uppercase mb-4 tracking-wider">Support</h3>
                            <ul className="space-y-3">
                                <li><Link to="#" className="hover:text-[#007580] transition">Help & Support</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Terms & Conditions</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-[#007580] transition">Contact Us</Link></li>
                            </ul>
                        </div>
                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#029fae] uppercase mb-4 tracking-wider">Newsletter</h3>
                            <p className="mb-4 text-[#272343]">Subscribe to get the latest updates and offers.</p>
                            <form className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Your Email..."
                                    className="w-full px-3 py-2 rounded-lg border border-[#e1e3e5] focus:outline-none focus:ring-2 focus:ring-[#029fae] transition"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#007580] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#029fae] transition"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className="w-full py-6 bg-[#f8fafc] border-t border-[#e1e3e5] mt-4">
                <div className="lg:container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#9a9caa] text-base">
                        &copy; 2025 Fire Core <span className="text-[#272343] font-semibold">Abd El Rhman</span>
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-[#9a9caa] text-lg">
                            <Banknote size="1.5rem" /> Bank Note
                        </span>
                        <span className="flex items-center gap-2 text-[#9a9caa] text-lg">
                            <CreditCard size="1.5rem" /> Credit Card
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;