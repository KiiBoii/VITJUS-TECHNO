import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // DATA DUMMY UNTUK LOGIN
    const DUMMY_ADMIN = {
        email: "admin@vitjus.com",
        password: "password123"
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        // Validasi Sederhana
        if (email === DUMMY_ADMIN.email && password === DUMMY_ADMIN.password) {
            // Simpan status login (sementara)
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", "admin");

            navigate("/dashboard");
        } else {
            setError("Email atau Password salah! Coba lagi.");
        }
    };

    return (
        <div className="min-h-screen bg-[#91c642] flex items-center justify-center p-6 font-dm">
            <div className="w-full max-w-[450px]">

                <div className="bg-white rounded-[40px] p-10 border-[6px] border-[#194126] shadow-[12px_12px_0px_0px_#194126]">
                    <div className="flex justify-center mb-6">
                        <Link to="/">
                            <img src="/images/logo.png" alt="VitJus" className="h-12 md:h-16 object-contain hover:scale-110 transition-transform"/>
                        </Link>
                    </div>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black text-[#194126] uppercase italic">
                            Admin <span className="text-[#f9a519]">Login</span>
                        </h2>
                    </div>

                    {/* Pesan Error jika login gagal */}
                    {error && (
                        <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-2 rounded-xl text-sm font-bold mb-6 animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[#194126] font-bold text-xs uppercase ml-4">Email Address</label>
                            <input type="email" required className="w-full px-6 py-4 rounded-full border-2 border-[#194126]/10 focus:border-[#91c642] outline-none transition-all font-medium"
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#194126] font-bold text-xs uppercase ml-4">Password</label>
                            <input type="password" required className="w-full px-6 py-4 rounded-full border-2 border-[#194126]/10 focus:border-[#91c642] outline-none transition-all font-medium" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button type="submit" className="w-full bg-[#91c642] text-[#194126] font-black uppercase py-4 rounded-full shadow-[4px_4px_0px_0px_#194126] hover:translate-y-1 hover:shadow-none transition-all active:scale-95 mt-4">
                            Masuk Sekarang
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <p className="text-[#194126]/40 text-xs mb-4">Demo: admin@vitjus.com | password123</p>
                    <Link to="/" className="text-[#194126] font-bold text-sm hover:text-[#194126]">
                        ← Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;