import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/Footer";

const MENU_ITEMS = {
    smoothies: [
        { name: "Mix Berry", image: "/images/menu/mixberry.png", price: "Rp 25.000", bestSeller: true, description: "Kaya antioksidan untuk menangkal radikal bebas dan menjaga imun." },
        { name: "Berry Banana Boost", image: "/images/menu/berrybananabost.png", price: "Rp 25.000", bestSeller: true, description: "Energi instan dan serat alami untuk dukung aktivitas harianmu." },
        { name: "Mango Bliss", image: "/images/menu/mangobliss.png", price: "Rp 25.000", description: "Vitamin C tinggi untuk kesehatan kulit dan kesegaran tubuh." },
        { name: "Dragon Berry", image: "/images/menu/dragonberry.png", price: "Rp 25.000", description: "Membantu detoksifikasi alami dan melancarkan pencernaan." },
        { name: "Avocado Dream", image: "/images/menu/avocadodream.png", price: "Rp 25.000", description: "Sumber lemak sehat untuk kesehatan jantung dan otak." },
        { name: "Choco Banana", image: "/images/menu/chocobanana.png", price: "Rp 25.000", description: "Mood booster alami untuk mengurangi stres dan menambah stamina." },
    ],
    freshJuices: [
        { name: "Apel", image: "/images/menu/apel.png", price: "Rp 18.000", bestSeller: true, description: "Menjaga kesehatan paru-paru dan menurunkan kolesterol." },
        { name: "Semangka", image: "/images/menu/semangka.png", price: "Rp 18.000", description: "Hidrasi tubuh maksimal dan baik untuk kesehatan ginjal." },
        { name: "Pir", image: "/images/menu/pir.png", price: "Rp 18.000", description: "Membantu meredakan panas dalam dan tenggorokan kering." },
        { name: "Melon", image: "/images/menu/melon.png", price: "Rp 18.000", description: "Menjaga kesehatan mata dan mengatur tekanan darah." },
    ],
    mixedJuices: [
        { name: "Semangka & Nenas", image: "/images/menu/semangkanenas.png", price: "Rp 24.000", bestSeller: true, description: "Membantu pemulihan otot dan metabolisme tubuh." },
        { name: "Strawberry, Mangga & Pisang", image: "/images/menu/strawmanggapisang.png", price: "Rp 24.000", bestSeller: true, description: "Kombinasi vitamin lengkap untuk kesegaran sepanjang hari." },
        { name: "Pir, Apel & Lemon", image: "/images/menu/pirapellemon.png", price: "Rp 24.000", bestSeller: true, description: "Powerful detoks untuk membersihkan racun dalam tubuh." },
        { name: "Strawberry & Semangka", image: "/images/menu/strawberrysemangka.png", price: "Rp 24.000", description: "Menjaga kesehatan jantung dan pembuluh darah." },
        { name: "Melon, Apel, Susu", image: "/images/menu/melonapelsusu.png", price: "Rp 24.000", description: "Asupan kalsium tinggi dengan rasa yang lembut di mulut." },
    ],
    fruitSalad: [
        { name: "Sop Buah", image: "/images/menu/salad1.png", price: "Rp 20.000", description: "Aneka potongan buah segar dalam kuah madu yang ringan." },
        { name: "Salad Buah", image: "/images/menu/salad2.png", price: "Rp 25.000", description: "Serat harian lengkap dengan saus yogurt rendah kalori." },
    ],
};

const NEW_ARRIVALS = [
    {
        name: "Matcha Vit",
        image: "/images/menu/matcha.png",
        price: "Rp 20.000",
        description: "Antioksidan tinggi untuk fokus dan konsentrasi lebih tajam."
    },
    {
        name: "Triple C",
        image: "/images/menu/triplec.png",
        price: "Rp 28.000",
        description: "Gabungan Jeruk, Kiwi, dan Lemon untuk benteng imun tubuh."
    },
];

const MenuCard = ({ item, category }) => {
    return (
        <div className="relative group bg-white rounded-[32px] p-8 border border-[#194126]/5 shadow-sm hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(25,65,38,0.1)] transition-all duration-500 cursor-pointer flex flex-col h-full">

            {/* Badge Best Seller */}
            {item.bestSeller && (
                <div className="absolute top-5 right-5 z-10 bg-[#f9a519] text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-md uppercase tracking-wide">
                    Best Seller
                </div>
            )}

            <div className="flex justify-center mb-8 overflow-hidden rounded-2xl bg-[#fafbf7]">
                <img src={item.image} alt={item.name} className="w-full h-[220px] object-contain group-hover:scale-110 transition-transform duration-700 ease-out"/>
            </div>

            <div className="flex flex-col flex-grow space-y-3">
                <div>
                    <p className="text-[#91c642] text-xs font-black uppercase tracking-widest mb-1">
                        {category}
                    </p>

                    <h3 className="text-[#194126] text-[24px] font-black leading-tight group-hover:text-[#f9a519] transition-colors">
                        {item.name}
                    </h3>
                    
                    {/* Deskripsi Khasiat */}
                    <p className="text-[#194126]/60 text-sm font-medium leading-relaxed mt-2 line-clamp-2 italic">
                        "{item.description}"
                    </p>
                </div>

                <div className="pt-4 mt-auto">
                    <span className="bg-[#f9a519]/10 text-[#f9a519] px-4 py-1.5 rounded-full text-sm font-bold border border-[#f9a519]/20">
                        {item.price}
                    </span>
                </div>
            </div>
        </div>
    );
};

const MenuPage = () => {
    return (
        <div className="bg-[#fafbf7] min-h-screen">
            <Navbar />

            {/* HERO MINI */}
            <section className="relative pt-32 pb-20 px-6 text-center bg-[#194126] overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-black text-[#fafbf7] uppercase italic leading-none mb-6">
                        Our <span className="text-[#f9a519]">Menu</span>
                    </h1>
                    <p className="text-[#91c642] font-bold text-lg md:text-2xl max-w-2xl mx-auto space-y-2">
                        <span className="block tracking-widest uppercase">Fresh • Healthy • Daily</span>
                        <span className="block text-[#fafbf7]/70 font-medium text-base md:text-lg">
                            Nikmati kesegaran racikan spesial kami dari 100% buah asli.
                        </span>
                    </p>
                </div>

                {/* Floating Elements */}
                <div className="hidden md:block absolute top-[25%] left-[5%] animate-float opacity-80">
                    <img src="/images/raspberry.png" alt="Raspberry" className="w-[100px] h-[100px] object-contain rotate-[-15deg]" />
                </div>
                <div className="hidden md:block absolute bottom-[10%] left-[15%] animate-float opacity-90">
                    <img src="/images/greenapple.png" alt="Green Apple" className="w-[90px] h-[90px] object-contain rotate-[10deg]" />
                </div>
                <div className="hidden md:block absolute top-[35%] right-[8%] animate-float opacity-95">
                    <img src="/images/mango.png" alt="Mango" className="w-[110px] h-[110px] object-contain rotate-[15deg]" />
                </div>
                <div className="hidden md:block absolute bottom-[15%] right-[18%] animate-float opacity-85">
                    <img src="/images/banana.png" alt="Banana" className="w-[100px] h-[100px] object-contain rotate-[-10deg]" />
                </div>
            </section>

            {/* CATEGORY SECTIONS */}
            <main className="max-w-7xl mx-auto py-20 px-6 space-y-24">
                {/* NEW ARRIVALS */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-black text-[#194126] mb-4">
                            New Arrivals
                        </h2>
                        <p className="text-[#194126]/70 max-w-2xl mx-auto text-lg">
                            Menu terbaru VitJus dengan rasa baru yang wajib kamu coba.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEW_ARRIVALS.map((item, idx) => (
                            <MenuCard key={idx} item={item} category="New Arrival"/>
                        ))}
                    </div>
                </section>

                {/* DYNAMIC CATEGORIES */}
                {Object.entries(MENU_ITEMS).map(([key, items]) => (
                    <section key={key}>
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-3xl md:text-4xl font-black text-[#194126] uppercase italic">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h2>
                            <div className="h-[4px] flex-1 bg-[#91c642]/50 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item, idx) => (
                                <MenuCard key={idx} item={item} category={key.replace(/([A-Z])/g, ' $1')} />
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            <TickerBar />
            <CTASection />
            <Footer />
        </div>
    );
};

export default MenuPage;