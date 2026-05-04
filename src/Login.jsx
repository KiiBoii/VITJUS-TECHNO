import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, userRole } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); 

    const success = login(email, password); 

    if (success) {
      if (userRole === 'admin') {
        navigate('/dashboard'); 
      } else {
        navigate('/HomeUser'); 
      }
    } else {
      setError('Email atau password salah. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbf7] p-4 md:p-6 font-dm">
      <div className="w-full max-w-[420px]">
        
        <div className="bg-white p-6 md:p-10 rounded-[30px] md:rounded-[40px] border-[4px] md:border-[6px] border-[#194126] shadow-[8px_8px_0px_0px_#194126] md:shadow-[12px_12px_0px_0px_#194126]">
          
          <div className="flex justify-center mb-6 md:mb-8">
            <Link to="/" className="hover:scale-110 transition-transform duration-300">
              <img src="/images/logo.png" alt="VitJus Logo" className="h-12 md:h-16 object-contain" />
            </Link>
          </div>

          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-black text-[#194126] uppercase italic leading-none">
              Selamat <span className="text-[#f9a519]">Datang!</span>
            </h2>
            <p className="text-[#91c642] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mt-2">
              Silakan masuk ke akun Anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Input Email */}
            <div className="group">
              <label className="block text-[#194126] text-[10px] md:text-xs font-black uppercase mb-1.5 md:mb-2 ml-4">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-full border-2 border-[#194126]/10 focus:border-[#91c642] outline-none transition-all font-medium placeholder:text-gray-300 text-sm md:text-base"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Input Password */}
            <div className="group">
              <label className="block text-[#194126] text-[10px] md:text-xs font-black uppercase mb-1.5 md:mb-2 ml-4">
                Password
              </label>
              <input
                type="password"
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-full border-2 border-[#194126]/10 focus:border-[#91c642] outline-none transition-all font-medium placeholder:text-gray-300 text-sm md:text-base"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-right mt-2">
                {/* <Link to="/forgot-password" size="sm" className="text-[10px] md:text-[11px] font-bold text-[#194126]/50 hover:text-[#f9a519] transition-colors uppercase">
                  Lupa Password?
                </Link> */}
              </div>
            </div>

            {/* Pesan Error */}
            {error && (
              <div className="bg-red-50 border-2 border-red-500 text-red-600 text-[10px] md:text-xs font-bold p-2 md:p-3 rounded-2xl text-center">
                {error}
              </div>
            )}

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-[#f9a519] text-[#194126] font-black uppercase py-3.5 md:py-4 rounded-full shadow-[4px_4px_0px_0px_#194126] hover:translate-y-1 hover:shadow-none transition-all active:scale-95 text-sm md:text-base"
            >
              Login Sekarang
            </button>
          </form>

          {/* Footer Link: Padding dan margin disesuaikan */}
          {/* <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t-2 border-dashed border-[#194126]/10 text-center">
            <p className="text-[#194126]/60 text-xs md:text-sm font-medium">
              Belum punya akun?{' '}
              <Link to="/CreateAccount" className="font-black text-[#91c642] hover:text-[#194126] transition-colors underline decoration-2 underline-offset-4">
                Daftar Disini
              </Link>
            </p>
          </div> */}
        </div>

        <div className="text-center mt-6">
           <p className="text-[#194126]/30 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">
            VitJus System v1.0
           </p>
        </div>
      </div>
    </div>
  );
};

export default Login;