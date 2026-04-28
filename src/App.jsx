import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from './Pages/LandingPage'
import AboutPage from './Pages/About';
import MenuPage from './Pages/Menu'
import LocationPage from './Pages/Location';
import LoginPage from './Pages/LoginPage';
// import './App.css'

import Dashboard from './Pages/Dashboard'
import Sidebar from './components/Sidebar'
import MainLayout from './components/MainLayout'
import Customer from './Pages/Customer'
// import { Fa0 } from 'react-icons/fa6'
import Faq from './Pages/FAQ'
import Produk from './Pages/Produk'
import SalesManagement from './Pages/SalesManagement'
import ProdukTerlaris from './Pages/ProdukTerlaris'
import Penjualan from './Pages/Penjualan'
import Branch from './Pages/BranchOutlet'
import Shift from './Pages/ShiftManagement'
import BranchOutlet from './Pages/BranchOutlet'
import Feedback from './Pages/Feedback'
import ShiftManagement from './Pages/ShiftManagement'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />        
        <Route path="/location" element={<LocationPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/customer" element={<Customer />}/>
          <Route path="/laporan" element={<Penjualan />}/>
          <Route path="/produk" element={<Produk />}/>
          <Route path="/produkTerlaris" element={<ProdukTerlaris />}/>
          <Route path="/sales" element={<SalesManagement />}/>
          <Route path="/branch" element={<BranchOutlet />}/>
          <Route path="/shift" element={<ShiftManagement />}/>
          <Route path="/feedback" element={<Feedback />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
