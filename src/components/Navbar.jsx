import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About Us", to: "/about" },
  { label: "Location", to: "/location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-[18px] transition-all duration-300 ${
        scrolled
          ? "bg-[#194126]/95 backdrop-blur-md shadow-lg border-b border-[#f9a519]/20"
          : "bg-[#194126]/90 backdrop-blur-md border-b border-[#f9a519]/10"}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="VitJus" className="h-10 md:h-12 object-contain"/>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 list-none mb-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.label}>
                <Link to={link.to} className={`relative text-sm font-medium tracking-wide no-underline transition-all duration-300 pb-1 ${
                    isActive ? "text-[#f9a519]" : "text-[#fafbf7]/75 hover:text-[#f9a519]"
                  }`}>
                  {link.label}
                  <span className={`absolute left-0 -bottom-[4px] h-[2px] bg-[#f9a519] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0" }`}/>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Admin Login Button */}
        <div className="hidden md:block">
          <Link to="/login" className="bg-[#f9a519] text-[#194126] px-6 py-2 rounded-full font-black text-xs uppercase shadow-[4px_4px_0px_0px_#112e1a] hover:translate-y-1 hover:shadow-none transition-all no-underline inline-block">
            Login Admin
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#f9a519] text-3xl focus:outline-none p-2 bg-[#194126] rounded-xl border border-[#f9a519]/20">
          <HiMenuAlt3 />
        </button>
      </nav>

      {/* --- SIDEBAR MOBILE --- */}
      {/* Overlay Backdrop */}
      <div className={`fixed inset-0 bg-[#194126]/60 backdrop-blur-sm z-[59] transition-opacity duration-300 md:hidden ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-[#194126] border-l-4 border-[#f9a519] z-[60] shadow-2xl p-8 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header Sidebar: Logo & Close Icon */}
        <div className="flex items-center justify-between mb-16">
          <img src="/images/logo.png" alt="VitJus" className="h-10 object-contain"/>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[#f9a519] text-3xl transition-transform duration-200 hover:scale-125">
            <IoClose />
          </button>
        </div>

        {/* Navigation Links Mobile */}
        <div className="space-y-8 flex-grow">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link 
                key={link.label}
                to={link.to} 
                className={`block text-2xl font-black no-underline transition-all ${
                  isActive ? "text-[#f9a519] translate-x-2" : "text-[#fafbf7]/80 hover:text-[#f9a519]"
                }`}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Login Admin Button  */}
        <div className="mb-10">
          <Link to="/login" className="w-full flex items-center justify-center bg-[#f9a519] text-[#194126] font-black py-4 rounded-2xl shadow-[4px_4px_0px_0px_#112e1a] active:translate-y-1 active:shadow-none transition-all no-underline uppercase text-sm">
            Login Admin
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;