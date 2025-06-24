import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="shadow-lg bg-white">

            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#272343] text-white text-xs">
                <div className="flex items-center gap-2">
                    <Check className="text-[#ffd700]" size={16} />
                    <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-4">
                    <select className="bg-[#272343] border border-[#ffd700] rounded px-2 py-1 text-xs">
                        <option>en</option>
                        <option>ar</option>
                    </select>
                    <Link className="hover:underline flex items-center gap-1" to="/faqs">
                        <Info size={16} className="text-[#ffd700]" /> Faqs
                    </Link>
                    <Link className="hover:underline" to="/help">Need Help?</Link>
                </div>
            </div>

            {/* Middle Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-gradient-to-r from-[#f0f2f3] via-[#e0f7fa] to-[#f0f2f3]">
                <Link to='/' className="flex items-center gap-2 text-3xl font-extrabold text-[#029fae] tracking-wide hover:scale-105 transition-transform mb-2 md:mb-0">
                    <Armchair size='2rem' color="#ffd700" /> 3fsh
                </Link>
                <form className="flex w-full max-w-md mx-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 rounded-l-full px-4 py-2 border border-[#029fae] focus:border-[#ffd700] outline-none text-sm"
                    />
                    <button className="bg-[#029fae] hover:bg-[#ffd700] rounded-r-full px-4 flex items-center transition">
                        <Search size={20} color="#fff" />
                    </button>
                </form>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                    <Link to="/cart" className="relative flex items-center bg-[#029fae] hover:bg-[#ffd700] text-white rounded-full px-3 py-2 transition">
                        <ShoppingCart size={20} />
                        <span className="ml-1">Cart</span>
                        <span className="absolute -top-2 -right-2 bg-[#ffd700] text-[#272343] rounded-full px-2 text-xs font-bold">2</span>
                    </Link>
                    <Link to="/wishlist" className="bg-white hover:bg-[#ffe4ec] rounded-full p-2 shadow transition">
                        <Heart className="text-[#ff4d6d]" size={20} />
                    </Link>
                    {/* Dropdown for user */}
                    <div className="relative">
                        <button
                            className="bg-white hover:bg-[#e0f7fa] rounded-full p-2 shadow transition"
                            onClick={e => {
                                e.preventDefault();
                                const dropdown = document.getElementById('user-dropdown');
                                if (dropdown) dropdown.classList.toggle('hidden');
                            }}
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <User className="text-[#029fae]" size={20} />
                        </button>
                        <ul
                            id="user-dropdown"
                            className="hidden absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-20"
                        >
                            <li>
                                <Link to="auth/login" className="block px-4 py-2 hover:bg-[#e0f7fa]">Account</Link>
                            </li>
                            <li>
                                <Link to="/logout" className="block px-4 py-2 hover:bg-[#e0f7fa]">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-6 py-3 border-b bg-white">
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <button className="flex items-center gap-2 bg-[#029fae] hover:bg-[#ffd700] text-white rounded-full px-4 py-2 transition">
                            <Menu /> Categories
                        </button>
                        <ul className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                            <li><a className="block px-4 py-2 hover:bg-[#e0f7fa]">Chair</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#e0f7fa]">Pant</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#e0f7fa]">Shirt</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#e0f7fa]">T-Shirt</a></li>
                            <li><a className="block px-4 py-2 hover:bg-[#e0f7fa]">Sofa</a></li>
                        </ul>
                    </div>
                    <nav className="flex items-center gap-6">
                        <NavLink to='/' className='text-sm text-[#029fae] font-bold capitalize hover:text-[#ffd700] transition'>Home</NavLink>
                        <NavLink to='/shop' className='text-sm text-[#636270] font-medium capitalize hover:text-[#029fae] transition'>Shop</NavLink>
                        <NavLink to='/product' className='text-sm text-[#636270] font-medium capitalize hover:text-[#029fae] transition'>Product</NavLink>
                        <NavLink to='/pages' className='text-sm text-[#636270] font-medium capitalize hover:text-[#029fae] transition'>Pages</NavLink>
                        <NavLink to='/about' className='text-sm text-[#636270] font-medium capitalize hover:text-[#029fae] transition'>About</NavLink>
                    </nav>
                </div>
                <div>
                    <span className="text-sm text-[#636270]">Contact: <span className="text-[#029fae] font-bold">(808)555-0111</span></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
