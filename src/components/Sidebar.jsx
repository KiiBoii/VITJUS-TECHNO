import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import {
  LayoutDashboard,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Sales', icon: <ShoppingCart />, path: '/sales' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Customer', icon: <BsPeopleFill />, path: '/customer' },
  { name: 'FAQ', icon: <FaQuestionCircle />, path: '/faq' },
  { name: 'Feedback', icon: <MdFeedback />, path: '/feedback' },
  { name: 'Shift', icon: <AiFillSchedule />, path: '/shift' },
  { name: 'Outlet', icon: <FaMapLocationDot />, path: '/branch' },
  { name: 'User', icon: <FaUser />, path: '/user' },
  { name: 'Karyawan', icon: <FaUser />, path: '/karyawan' },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 min-h-screen shadow-lg px-4 py-6 hidden md:block border-r border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-8">
        <Link to="/">
          <img 
            src="https://images.seeklogo.com/logo-png/51/1/tomoro-coffee-logo-png_seeklogo-513701.png" 
            alt="Tomoro Coffee Logo" 
            className="h-12 object-contain px-4"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
              ${isActive(item.path)
                ? 'bg-orange-100 text-orange-800 font-semibold border-l-4 border-orange-500 pl-2'
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }
            `}
          >
            <span className={`w-5 h-5 ${isActive(item.path) ? 'text-orange-600' : 'text-gray-500'}`}>
              {item.icon}
            </span>
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bagian bawah (Optional: Logout button bisa ditaruh di sini) */}
      <div className="mt-auto pt-10">
         <p className="text-[10px] text-gray-400 text-center">VitJus Techno © 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;