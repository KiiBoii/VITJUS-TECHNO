import { FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LocationPage = () => {
    return (
        <main className="bg-[#fafbf7] overflow-hidden">
            <Navbar />

            {/* STORE INFO + GOOGLE MAPS */}
            <section className="relative min-h-screen bg-[#91c642] py-30 px-6 md:px-16 overflow-hidden">

                {/* Mascot kiri */}
                <div className="hidden md:block absolute top-[6%] left-[4%] animate-float opacity-90 z-0">
                    <img src="/images/raspberry.png" alt="Raspberry Mascot" className="w-[130px] h-[130px] md:w-[170px] md:h-[170px] object-contain rotate-[-12deg]" />
                </div>

                {/* Mascot kanan */}
                <div className="hidden md:block absolute top-[8%] right-[5%] animate-float opacity-90 z-0">
                    <img src="/images/mango.png" alt="Mango Mascot" className="w-[130px] h-[130px] md:w-[160px] md:h-[160px] object-contain rotate-[12deg]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 pb-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="font-black text-[#fafbf7] leading-tight" style={{ fontSize: "clamp(42px, 5vw, 68px)", }}>
                            Visit Our Store
                        </h2>

                        <p className="text-[#194126]/80 text-[16px] mt-4 max-w-[580px] mx-auto leading-relaxed">
                            Temukan lokasi VitJus dengan mudah dan nikmati kesegaran langsung
                            dari store kami setiap hari.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT — GOOGLE MAPS */}
                        <div className="bg-white rounded-[30px] overflow-hidden shadow-md border border-[#194126]/5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.621542422883!2d101.4375534!3d0.5690507999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ad1b15ba46e3%3A0x1979e1415264516b!2sVit%20Jus!5e0!3m2!1sen!2sid!4v1777292993070!5m2!1sen!2sid"
                                width="100%" height="520" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="VitJus Map" />

                            <div className="p-6 text-center">
                                <a href="https://maps.app.goo.gl/7TAU5NDGWsULBEBh8" target="_blank" rel="noopener noreferrer"
                                    className="inline-block bg-[#f9a519] text-white px-8 py-4 rounded-full font-bold no-underline hover:scale-105 transition-all duration-300">
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — STORE INFO */}
                        <div className="space-y-6">

                            {/* Location */}
                            <div className="bg-white rounded-[28px] p-8 shadow-sm border border-[#194126]/5">
                                <div className="flex items-start gap-4 mb-8">
                                    <MdLocationOn className="text-[32px] text-[#f9a519]" />
                                    <div>
                                        <h3 className="font-bold text-[#194126] text-[20px] mb-2">
                                            Location
                                        </h3>
                                        <p className="text-[#194126]/75 leading-relaxed">
                                            Jl. Paus, Limbungan Baru,
                                            <br />
                                            Kec. Rumbai Pesisir,
                                            <br />
                                            Kota Pekanbaru, Riau 28261
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4 mb-8">
                                    <MdAccessTime className="text-[30px] text-[#f9a519]" />
                                    <div>
                                        <h3 className="font-bold text-[#194126] text-[20px] mb-2">
                                            Open Hours
                                        </h3>
                                        <p className="text-[#194126]/75">
                                            Everyday — 09:00 AM – 10:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Online Order */}
                            <div className="bg-white rounded-[28px] p-8 shadow-sm border border-[#194126]/5">
                                <div>
                                    <h3 className="font-bold text-[#194126] text-[20px] mb-4">
                                        Available On
                                    </h3>

                                    <div className="flex flex-wrap gap-4">

                                        <div className="bg-[#fafbf7] px-5 py-3 rounded-full border">
                                            GoFood
                                        </div>

                                        <div className="bg-[#fafbf7] px-5 py-3 rounded-full border">
                                            GrabFood
                                        </div>
                                        <div className="bg-[#fafbf7] px-5 py-3 rounded-full border">
                                            ShopeeFood
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default LocationPage;