import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Location", to: "/location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-[18px] transition-all duration-300 ${
        scrolled
          ? "bg-[#194126]/95 backdrop-blur-md shadow-lg border-b border-[#f9a519]/20"
          : "bg-[#194126]/90 backdrop-blur-md border-b border-[#f9a519]/10"}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/images/logo.png" alt="VitJus" className="h-10 md:h-12 object-contain"/>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10 list-none">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;

          return (
            <li key={link.label}>
              <Link to={link.to} className={`relative text-sm font-medium tracking-wide no-underline transition-all duration-300 pb-1 ${
                  isActive
                    ? "text-[#f9a519]"
                    : "text-[#fafbf7]/75 hover:text-[#f9a519]"
                }`}>
                {link.label}

                {/* Active underline */}
                <span className={`absolute left-0 -bottom-[4px] h-[2px] bg-[#f9a519] rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0" }`}/>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4">
        {/* Admin Login */}
        <Link to="/login"
          className="text-[#fafbf7] text-sm font-medium hover:text-[#f9a519] transition-colors duration-300 no-underline">
          Login Admin
        </Link>

        {/* CTA */}
        {/* <Link to="/menu" className="font-unbounded text-[13px] font-bold bg-[#f9a519] text-[#194126] px-6 py-[10px] rounded-full hover:scale-105 transition-transform duration-200 no-underline">
          Order Now
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;