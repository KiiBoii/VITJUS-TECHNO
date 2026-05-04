const VALUES = [
    {
        image: "/images/greenapple.png",
        title: "Fresh Ingredients",
        desc: "Menggunakan buah pilihan terbaik dengan kualitas segar yang dijamin setiap hari.",
    },
    {
        image: "/images/banana.png",
        title: "Vitamin Boost",
        desc: "Memberikan energi alami dan membantu menjaga daya tahan tubuh sepanjang hari.",
    },
    {
        image: "/images/raspberry.png",
        title: "Custom Sweetness",
        desc: "Bisa disesuaikan dengan gula atau tanpa gula sesuai selera dan kebutuhan kamu.",
    },
    {
        image: "/images/mango.png",
        title: "Healthy Lifestyle",
        desc: "VitJus adalah pilihan gaya hidup sehat setiap hari.",
    },
];

const ValueCard = ({ item }) => {
    return (
        <div className="group relative bg-[#fafbf7] rounded-[28px] p-6 md:p-8 border border-[#194126]/10 shadow-md overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(25,65,38,0.12)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-[#f9a519]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="mb-6 relative z-10">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
            </div>

            <h3 className="relative z-10 text-[#194126] text-[18px] md:text-[20px] font-black leading-tight mb-3 group-hover:text-[#f9a519] transition-colors duration-300">
                {item.title}
            </h3>

            <p className="relative z-10 text-[#194126]/75 text-[14px] md:text-[15px] leading-relaxed">
                {item.desc}
            </p>

            <div className="relative z-10 mt-6 w-0 h-[3px] bg-[#f9a519] rounded-full group-hover:w-full transition-all duration-500" />
        </div>
    );
};

const WhyVitJus = () => {
    return (
        <section className="relative overflow-hidden bg-[#91c642] py-20 md:py-28 px-6 md:px-12">
            
            {/* --- DECORATIVE ELEMENTS (OPTIMIZED FOR MOBILE) --- */}
            
            {/* TOP LEFT — Product  */}
            <img src="/images/menu/dragonberry.png" alt="" className="absolute top-[2%] left-[-5%] md:top-[6%] md:left-[4%] w-[120px] md:w-[180px] opacity-0 md:opacity-100 pointer-events-none animate-slow-rotate-reverse z-0"/>

            {/* TOP RIGHT — Strawberry Slice  */}
            <img src="/images/strawberryslice.png" alt="" className="absolute top-[5%] right-[-5%] md:top-[8%] md:right-[6%] w-[80px] md:w-[120px] pointer-events-none animate-slow-rotate-reverse z-0"/>

            {/* BOTTOM LEFT — Blueberry  */}
            <img src="/images/blueberry1.png" alt="" className="hidden md:block absolute bottom-[18%] left-[8%] w-[95px] pointer-events-none animate-slow-rotate-reverse z-0"/>

            {/* BOTTOM RIGHT — Product */}
            <img src="/images/menu/pirapellemon.png" alt="" className="absolute bottom-[-5%] right-[-5%] md:bottom-[6%] md:right-[4%] w-[130px] md:w-[190px] md:opacity-100 pointer-events-none animate-slow-rotate-reverse z-0"/>

            {/* MINT DECORATION  */}
            <img src="/images/mint.png" alt="" className="absolute top-[40%] right-[2%] w-[40px] md:w-[50px] opacity-60 md:opacity-100 pointer-events-none animate-slow-rotate-reverse z-0"/>
            <img src="/images/mint.png" alt="" className="hidden md:block absolute top-[42%] left-[2%] w-[55px] pointer-events-none z-0"/>

            {/* --- CONTENT --- */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="font-black leading-tight"
                        style={{
                            fontSize: "clamp(36px, 8vw, 72px)", // Sedikit lebih kecil di layar terkecil
                            textShadow: `-2px -2px 0 #194126, 2px -2px 0 #194126, -2px 2px 0 #194126, 2px 2px 0 #194126`,
                        }}>
                        <span className="text-[#fafbf7]">Why</span>
                        <span className="text-[#f9a519]"> VitJus</span>
                    </h2>

                    <p className="text-[#194126]/85 mx-auto leading-relaxed mt-4 md:mt-6 font-bold"
                        style={{
                            fontSize: "clamp(14px, 4vw, 20px)",
                            maxWidth: "600px",
                        }}>
                        Kebaikan alami dalam setiap tegukan, dibuat khusus untuk
                        kesehatan dan kesegaran harianmu.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {VALUES.map((item, index) => (
                        <ValueCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyVitJus;