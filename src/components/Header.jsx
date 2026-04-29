import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, LogOut } from 'lucide-react';
import { FaBell } from "react-icons/fa";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter(x => x);

  const [greeting, setGreeting] = useState('');

  // Penentuan Nama Halaman berdasarkan Path
  let currentPageName = 'Dashboard';
  if (pathnames.length > 0) {
    const lastPathSegment = pathnames[pathnames.length - 1].toLowerCase();
    
    // Mapping Manual agar lebih rapi
    const pageTitles = {
      'dashboard': 'Dashboard',
      'produk': 'Product Management',
      'sales': 'Sales Management',
      'laporan': 'Sales Report',
      'customer': 'Customer Data',
      'faq': 'FAQ Management',
      'feedback': 'User Feedback',
      'shift': 'Shift Management',
      'branch': 'Branch Outlet',
      'user': 'User Management',
      'karyawan': 'Employee Management',
      'faqform': 'FAQ Form',
      'salesform': 'Sales Form',
      'homeuser': 'Home User'
    };

    currentPageName = pageTitles[lastPathSegment] || 'Dashboard';
  }

  // Fungsi Greeting berdasarkan waktu
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) return 'Selamat Pagi';
    if (currentHour >= 12 && currentHour < 18) return 'Selamat Siang';
    if (currentHour >= 18 && currentHour < 22) return 'Selamat Sore';
    return 'Selamat Malam';
  };

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Apa kamu yakin?',
      text: 'Anda akan keluar dan sesi Anda akan berakhir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, Keluar!',
      cancelButtonText: 'Batal',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Hapus data Auth dari LocalStorage agar sinkron dengan App.jsx
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
        localStorage.removeItem('loggedInUserEmail');
        
        Swal.fire({
          title: 'Berhasil!',
          text: 'Anda telah keluar.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          navigate('/Login'); // Arahkan ke Login (Sesuaikan huruf besar/kecilnya)
        });
      }
    });
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-20 border-b border-orange-50">
      {/* Left Side: Greeting */}
      <div>
        <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider">
          {greeting}, Admin
        </p>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          {currentPageName}
        </h1>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-4">
        {/* Tombol Bell */}
        <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors">
          <FaBell className="w-5 h-5" />
        </button>
        
        {/* Tombol Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:block">Keluar</span>
        </button>
      </div>
    </header>
  );
};

export default Header;