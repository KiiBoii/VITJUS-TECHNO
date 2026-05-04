import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative bg-[#fafbf7] py-[100px] md:py-[130px] px-6 md:px-20 text-center overflow-hidden border-t border-[#194126]/10">

      {/* Background Decorative */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] md:w-[280px] h-[220px] md:h-[280px] rounded-full bg-[#f6ead7]" />
      <div className="absolute bottom-[-90px] right-[-90px] w-[280px] md:w-[320px] h-[280px] md:h-[320px] rounded-full bg-[#f3dfc5]" />
      <div className="hidden md:block absolute top-[18%] right-[15%] w-[140px] h-[140px] rounded-full bg-[#dfe8d3]" />

      {/* Small Fruit Decorations - Re-positioned */}
      <img
        src="/images/strawberryslice.png"
        alt=""
        className="absolute top-[3%] md:top-[12%] left-[4%] md:left-[8%] w-[75px] md:w-[120px] object-contain pointer-events-none animate-slow-rotate"
      />

      <img
        src="/images/mint.png"
        alt=""
        className="absolute top-[18%] md:top-[22%] right-[4%] md:right-[10%] w-[45px] md:w-[70px] object-contain pointer-events-none animate-slow-rotate-reverse"
      />

      <img
        src="/images/blueberry1.png"
        alt=""
        className="absolute bottom-[4%] md:bottom-[18%] left-[8%] md:left-[12%] w-[65px] md:w-[90px] object-contain pointer-events-none animate-slow-rotate"
      />

      {/* Main Product Image - Mobile Optimized */}
      <img
        src="/images/menu/berrybananabost.png"
        alt="VitJus Product"
        className="absolute right-[-30px] md:right-[6%] bottom-[-40px] md:bottom-[8%] w-[190px] md:w-[320px] lg:w-[380px] object-contain pointer-events-none z-10 opacity-30 md:opacity-100 transition-all duration-500"
      />

      {/* Ghost Text */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[#194126]/5 whitespace-nowrap pointer-events-none select-none leading-none tracking-[-4px] md:tracking-[-8px] uppercase italic"
        style={{ fontSize: "clamp(80px, 20vw, 180px)" }}
        aria-hidden="true"
      >
        VITJUS
      </span>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <h2
          className="font-black text-[#194126] leading-[1.1] tracking-[-1px] md:tracking-[-2px] mb-6"
          style={{ fontSize: "clamp(38px, 8vw, 78px)" }}
        >
          Ready to
          <span className="text-[#f9a519] block italic">
            Feel Fresh?
          </span>
        </h2>

        <p className="text-[#194126]/70 text-[16px] md:text-[20px] leading-relaxed mb-10 md:mb-12 max-w-[550px] mx-auto font-medium">
          Kunjungi outlet VitJus terdekat dan rasakan kesegaran buah asli yang diolah langsung untukmu hari ini.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            to="/menu"
            className="w-full md:w-auto inline-block text-[14px] md:text-[16px] font-bold border-2 border-[#194126] text-[#194126] px-12 py-4 md:py-5 rounded-full no-underline hover:bg-[#194126] hover:text-white transition-all duration-300 uppercase tracking-wider"
          >
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;