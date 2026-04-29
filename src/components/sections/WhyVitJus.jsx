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
        <div className="group relative bg-[#fafbf7] rounded-[28px] p-8 border border-[#194126]/10 shadow-md overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(25,65,38,0.12)] hover:-translate-y-1">

            {/* Decorative glow background */}
            <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-[#f9a519]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Mascot */}
            <div className="mb-6 relative z-10">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-[72px] h-[72px] object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-[#194126] text-[20px] font-black leading-tight mb-3 group-hover:text-[#f9a519] transition-colors duration-300">
                {item.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-[#194126]/75 text-[15px] leading-relaxed">
                {item.desc}
            </p>

            {/* Bottom line animation */}
            <div className="relative z-10 mt-6 w-0 h-[3px] bg-[#f9a519] rounded-full group-hover:w-full transition-all duration-500" />
        </div>
    );
};

const WhyVitJus = () => {
    return (
        <section className="relative overflow-hidden bg-[#91c642] py-28 px-6 md:px-12">

            {/* Background Decoration */}

            {/* blur kiri atas */}
            <div className="absolute -top-20 -left-20 w-[280px] h-[280px] rounded-full bg-[#fafbf7]/15 blur-[40px]" />

            {/* blur kanan bawah */}
            <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-[#f9a519]/15 blur-[50px]" />

            {/* outline circle */}
            {/* <div className="absolute top-[18%] right-[8%] w-[180px] h-[180px] rounded-full border border-[#fafbf7]/20" /> */}

            {/* Decorative Product + Fruits */}
            {/* TOP LEFT — Product (besar) */}
            <img src="/images/menu/dragonberry.png" alt="" className="absolute top-[6%] left-[4%] w-[180px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* TOP RIGHT — Fruit (sedang) */}
            <img src="/images/strawberryslice.png" alt="" className="absolute top-[8%] right-[6%] w-[120px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* LEFT CENTER — Mint kecil */}
            <img src="/images/mint.png" alt="" className="absolute top-[42%] left-[2%] w-[55px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* LEFT LOWER — Blueberry sedang */}
            <img src="/images/blueberry1.png" alt="" className="absolute bottom-[18%] left-[8%] w-[95px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* RIGHT BOTTOM — Product besar */}
            <img src="/images/menu/pirapellemon.png" alt="" className="absolute bottom-[6%] right-[4%] w-[190px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* RIGHT CENTER — Mint kecil */}
            <img src="/images/mint.png" alt="" className="absolute top-[58%] right-[8%] w-[50px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* CENTER RIGHT — Mint kecil */}
            <img src="/images/mint.png" alt="" className="absolute top-[32%] right-[18%] w-[45px] pointer-events-none animate-slow-rotate-reverse"/>

            {/* NEAR TITLE — Strawberry kecil sedang */}
            <img src="/images/bananaslice.png" alt="" className="absolute top-[20%] left-[18%] w-[80px] pointer-events-none animate-slow-rotate-reverse" />

            {/* BELOW CARDS — Fruit tambahan */}
            <img src="/images/strawberryslice2.png" alt="" className="absolute bottom-[4%] left-[32%] w-[75px] pointer-events-none animate-slow-rotate-reverse" />

            {/* BELOW CARDS — Mint tambahan */}
            <img src="/images/mint.png" alt="" className="absolute bottom-[8%] right-[32%] w-[42px] pointer-events-none animate-slow-rotate-reverse" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2
                        className="font-black leading-tight"
                        style={{
                            fontSize: "clamp(42px, 6vw, 72px)",
                            textShadow: ` 
                            -2px -2px 0 #194126, 
                            2px -2px 0 #194126, 
                            -2px  2px 0 #194126, 
                            2px  2px 0 #194126`,}}>
                        <span className="text-[#fafbf7]">Why</span>
                        <span className="text-[#f9a519]"> VitJus</span>
                    </h2>

                    <p className="text-[#194126]/85 mx-auto leading-relaxed mt-6 font-medium"
                        style={{
                            fontSize: "clamp(16px, 1.5vw, 22px)",
                            maxWidth: "720px",
                        }}>
                        Kebaikan alami dalam setiap tegukan, dibuat khusus untuk
                        kesehatan dan kesegaran harianmu.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VALUES.map((item, index) => (
                        <ValueCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyVitJus;