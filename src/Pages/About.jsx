import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/Footer";

const DIFFERENT_POINTS = [
    {
        title: "Not Just Juice",
        desc: "VitJus hadir sebagai gaya hidup sehat, bukan sekadar minuman biasa.",
    },
    {
        title: "Simple & Honest",
        desc: "Bahan yang digunakan jelas, segar, dan tanpa proses berlebihan.",
    },
    {
        title: "Built for Everyday",
        desc: "Cocok untuk rutinitas harian, bukan hanya saat ingin minum manis.",
    },
    {
        title: "Healthy Can Be Fun",
        desc: "Kami percaya hidup sehat bisa tetap terasa menyenangkan dan nikmat.",
    },
];

const AboutPage = () => {
    return (
        <main className="bg-[#fafbf7] pt-[100px] overflow-hidden">
            <Navbar />
            <section className="relative py-24 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="text-[#f9a519] font-bold tracking-[4px] uppercase text-[15px] mb-5">
                            About VitJus
                        </p>

                        <h1 className="font-black text-[#194126] leading-[1.05] mb-6" style={{ fontSize: "clamp(42px, 6vw, 78px)",}}>
                            Freshness Starts
                            <span className="text-[#91c642] block">
                                From Better Choices
                            </span>
                        </h1>

                        <p className="text-[#194126]/75 text-[18px] leading-relaxed max-w-[560px]">
                            VitJus hadir untuk sehat nggak harus ribet,
                            cukup dari langkah kecil yaitu memilih yang lebih baik.
                            Smoothies dan jus segar yang membantu tubuh tetap fit
                            setiap hari.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">

                        {/* background decor */}
                        <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-[#f6ead7]" />
                        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full bg-[#dfe8d3]" />

                        {/* mascot image */}
                        <img src="/images/greenapple.png" alt="VitJus Mascot" className="relative z-10 w-[320px] md:w-[420px] object-contain"/>
                    </div>
                </div>
            </section>

            <section className="relative py-24 px-6 md:px-16 bg-[#91c642] overflow-hidden">

                {/* fruit decoration */}
                <img src="/images/strawberryslice.png" alt="" className="absolute top-[10%] left-[5%] w-[110px] object-contain"/>

                <img src="/images/blueberry1.png" alt="" className="absolute bottom-[12%] right-[8%] w-[90px] object-contain"/>

                <img src="/images/mint.png" alt="" className="absolute top-[20%] right-[10%] w-[60px] object-contain"/>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <img src="/images/menu/chocobanana.png" alt="VitJus Drink" className="w-[320px] md:w-[430px] object-contain" />
                    </div>

                    {/* RIGHT TEXT */}
                    <div>
                        <p className="text-[#194126] font-bold tracking-[4px] uppercase text-[15px] mb-5">
                            Our Story
                        </p>

                        <h2 className="font-black text-[#fafbf7] leading-tight mb-6" style={{ fontSize: "clamp(38px, 5vw, 64px)",}}>
                            Small Steps,
                            <span className="block text-[#f9a519]">
                                Better Living
                            </span>
                        </h2>

                        <p className="text-[#194126] text-[18px] leading-relaxed mb-5">
                            VitJus berdiri pada Februari 2025 dengan satu tujuan sederhana:
                            menghadirkan pilihan minuman sehat yang praktis,
                            segar, dan tetap nikmat untuk dinikmati setiap hari.
                        </p>

                        <p className="text-[#194126] text-[18px] leading-relaxed">
                            Kami percaya bahwa hidup sehat dimulai
                            dari kebiasaan kecil yang konsisten.
                            Melalui jus segar dan smoothies berkualitas,
                            VitJus ingin menjadi bagian dari gaya hidup sehat
                            masyarakat modern.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section */}
            <section className="relative bg-[#fafbf7] py-28 px-6 md:px-12 overflow-hidden">
                {/* kiri atas blur orange */}
                <div className="absolute top-0 left-0 w-[280px] h-[280px] rounded-full bg-[#f9a519]/12 blur-[100px]" />

                {/* kanan bawah blur green */}
                <div className="absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full bg-[#91c642]/14 blur-[120px]" />

                {/* blur kecil tengah */}
                <div className="absolute top-[30%] right-[18%] w-[140px] h-[140px] rounded-full bg-[#194126]/5 blur-[80px]" />

                {/* floating fruit kecil */}
                <img src="/images/strawberryslice.png" alt="" className="absolute top-[10%] left-[4%] w-[80px] opacity-80 pointer-events-none animate-slow-rotate"/>

                <img src="/images/mint.png" alt="" className="absolute bottom-[18%] right-[6%] w-[70px] opacity-80 pointer-events-none animate-slow-rotate-reverse"/>

                <img src="/images/bananaslice.png" alt="" className="absolute bottom-[12%] right-[8%] w-[90px] object-contain"/>

                <img src="/images/blueberry1.png" alt="" className="absolute top-[45%] left-[8%] w-[60px] opacity-80 pointer-events-none animate-slow-rotate"/>

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-[#f9a519] font-bold tracking-[4px] uppercase text-[15px] mb-4">
                            What Makes VitJus Different
                        </p>

                        <h2 className="font-black text-[#194126]" style={{ fontSize: "clamp(38px, 5vw, 64px)", }}>
                            More Than Juice,
                            <span className="text-[#91c642] block">
                                A Better Lifestyle
                            </span>
                        </h2>

                        <p className="text-[#194126]/75 max-w-[620px] mx-auto mt-6 leading-relaxed text-[16px]">
                            VitJus bukan hanya tentang minuman segar, tetapi tentang
                            pilihan hidup yang lebih sehat, lebih sederhana, dan lebih baik
                            untuk setiap hari.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {DIFFERENT_POINTS.map((item, index) => (
                            <div key={index} className=" bg-white rounded-[24px] p-8 border border-[#194126]/10 border-t-[4px] border-t-[#f9a519]
                                shadow-[0_12px_30px_rgba(25,65,38,0.05)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(25,65,38,0.08)] transition-all duration-300">
                                <p className="text-[#f9a519] font-bold text-[14px] mb-4">
                                    0{index + 1}
                                </p>

                                {/* Title */}
                                <h3 className="text-[#194126] text-[22px] font-black mb-4 leading-tight">
                                    {item.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-[#194126]/75 leading-relaxed text-[15px]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="bg-[#194126] py-8 overflow-hidden">
                <TickerBar text="Freshness in Every Sip - VitJus, Your Daily Dose of Natural Goodness!" />
            </section>

            <CTASection />
            <Footer />
        </main>
    );
};

export default AboutPage;