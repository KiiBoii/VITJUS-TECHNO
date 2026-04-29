// 1. SEMUA IMPORT HARUS DI BARIS PALING ATAS
import React, { useState, createContext, useContext, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { supabase } from './supabase';

// Swiper & Style Assets
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "./components/ScrollToTop";

// Components & Providers
import MainLayout from './components/MainLayout';
import { CartProvider } from "./USERPAGE/CartContext";

// Admin Pages
import Dashboard from './Pages/Dashboard';
import Customer from './Pages/Customer';
import Faq from './Pages/FAQ';
import FAQForm from './Pages/FAQForm';
import Produk from './Pages/Produk';
import SalesForm from './Pages/SalesForm';
import SalesManagement from './Pages/SalesManagement';
import ProdukTerlaris from './Pages/ProdukTerlaris';
import Penjualan from './Pages/Penjualan';
import BranchOutlet from './Pages/BranchOutlet';
import Feedback from './Pages/Feedback';
import ShiftManagement from './Pages/ShiftManagement';
import User from './Pages/User';
import Karyawan from './Pages/Karyawan';

// Landing & Login Pages
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/About';
import MenuPage from './Pages/Menu';
import LocationPage from './Pages/Location';
import Login from './Login'; 
import CreateAccount from './USERPAGE/CreateAccount';

// User Pages
import HomeUser from './USERPAGE/HomeUser';
import MenuUser from './USERPAGE/MenuUser';
import CartUser from './USERPAGE/CartUser';
import CheckoutUser from './USERPAGE/CheckoutUser';
import NotificationUser from './USERPAGE/NotificationUser';
import ChatUser from './USERPAGE/ChatUser';
import FAQUser from './USERPAGE/FAQUser';
import ProfInfo from './USERPAGE/ProfInfo';
import FeedbackUser from './USERPAGE/FeedbackUser';
import ProfileUser from './USERPAGE/ProfileUser';
import LokasiUser from './USERPAGE/LokasiUser';
import OrderInformation from './USERPAGE/OrderInformation';

// --- Auth Context Setup ---
export const AuthContext = createContext(null);

const DUMMY_ADMIN = { 
  email: 'admin@tomoro.com', 
  password: 'adminpassword', 
  role: 'admin',
  nama: 'Admin Tomoro', // Dummy name for display in profile
  title: 'Gold', // Dummy title for display in profile
  address: 'Tomoro Headquarters, Global', // Dummy address
  Profile_Picture: 'https://placehold.co/150x150/FFD700/000000?text=Admin' // Dummy profile pic
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null); 
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const login = async (email, password) => {
    setIsAuthLoading(true);
    // Cek Dummy Admin
    if (email === DUMMY_ADMIN.email && password === DUMMY_ADMIN.password) {
      const authData = { auth: 'true', role: DUMMY_ADMIN.role, email: DUMMY_ADMIN.email };
      setIsAuthenticated(true);
      setUserRole(authData.role);
      setUserEmail(authData.email);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', authData.role);
      localStorage.setItem('loggedInUserEmail', authData.email);
      setIsAuthLoading(false);
      return true;
    }

    // Cek Supabase
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, email, pass, role')
        .eq('email', email)
        .single();

      if (data && data.pass === password) {
        setIsAuthenticated(true);
        setUserRole(data.role);
        setUserEmail(data.email);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('loggedInUserEmail', data.email);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Auth failed:", err.message);
      return false;
    } finally {
      setIsAuthLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserEmail(null);
    localStorage.clear();
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedRole = localStorage.getItem('userRole');
    const storedEmail = localStorage.getItem('loggedInUserEmail');

    if (storedAuth === 'true' && storedRole && storedEmail) {
      setIsAuthenticated(true);
      setUserRole(storedRole);
      setUserEmail(storedEmail);
    }
    setIsAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, userEmail, login, logout, isAuthLoading }}>
      {!isAuthLoading ? children : <div className="flex items-center justify-center min-h-screen">Loading...</div>}
    </AuthContext.Provider>
  );
};

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, userRole, isAuthLoading } = useContext(AuthContext);
  if (isAuthLoading) return null;
  if (!isAuthenticated) return <Navigate to="/Login" replace />;
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to={userRole === 'customer' ? "/HomeUser" : "/Login"} replace />;
  }
  return <Outlet />;
};

// 2. FUNGSI UTAMA APP
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />

          {/* Admin Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/faqform" element={<FAQForm />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/laporan" element={<Penjualan />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/produkTerlaris" element={<ProdukTerlaris />} />
              <Route path="/sales" element={<SalesManagement />} />
              <Route path="/salesform" element={<SalesForm />} />
              <Route path="/branch" element={<BranchOutlet />} />
              <Route path="/shift" element={<ShiftManagement />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/user" element={<User />} />
              <Route path="/karyawan" element={<Karyawan />} />
            </Route>
          </Route>

          {/* Customer Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={['customer']} />}>
            <Route path="/HomeUser" element={<HomeUser />} />
            <Route path="/MenuUser" element={<MenuUser />} />
            <Route path="/CartUser" element={<CartUser />} />
            <Route path="/CheckoutUser" element={<CheckoutUser />} />
            <Route path="/NotificationUser" element={<NotificationUser />} />
            <Route path="/ChatUser" element={<ChatUser />} />
            <Route path="/FAQUser" element={<FAQUser />} />
            <Route path="/ProfInfo" element={<ProfInfo />} />
            <Route path="/FeedbackUser" element={<FeedbackUser />} />
            <Route path="/ProfileUser" element={<ProfileUser />} />
            <Route path="/lokasi" element={<LokasiUser />} />
            <Route path="/order-information" element={<OrderInformation />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold">404 Not Found</div>} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;