import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative bg-[#fafbf7] py-[130px] px-6 md:px-20 text-center overflow-hidden border-t border-[#194126]/10">

      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] rounded-full bg-[#f6ead7]" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-[#f3dfc5]" />
      <div className="absolute top-[18%] right-[15%] w-[140px] h-[140px] rounded-full bg-[#dfe8d3]" />

      {/* Small Fruit Decorations */}
      <img
        src="/images/strawberryslice.png"
        alt=""
        className="absolute top-[12%] left-[8%] w-[90px] md:w-[120px] object-contain pointer-events-none animate-slow-rotate"
      />

      <img
        src="/images/mint.png"
        alt=""
        className="absolute top-[22%] right-[10%] w-[55px] md:w-[70px] object-contain pointer-events-none animate-slow-rotate-reverse"
      />

      <img
        src="/images/blueberry1.png"
        alt=""
        className="absolute bottom-[18%] left-[12%] w-[70px] md:w-[90px] object-contain pointer-events-none animate-slow-rotate"
      />

      {/* Main Product Image */}
      <img
        src="/images/menu/berrybananabost.png"
        alt="VitJus Product"
        className="absolute right-[6%] bottom-[8%] w-[220px] md:w-[320px] lg:w-[380px] object-contain pointer-events-none z-10 hover:scale-105 transition-all duration-500"
      />

      {/* Ghost Text */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-unbounded font-black text-[#194126]/5 whitespace-nowrap pointer-events-none select-none leading-none tracking-[-8px]"
        style={{ fontSize: "clamp(90px, 18vw, 180px)" }}
        aria-hidden="true"
      >
        VITJUS
      </span>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <h2
          className="font-unbounded font-black text-[#194126] leading-[1] tracking-[-2px] mb-6"
          style={{ fontSize: "clamp(44px, 6vw, 78px)" }}
        >
          Ready to
          <span className="text-[#f9a519] block">
            Feel Fresh?
          </span>
        </h2>

        <p className="text-[#194126]/70 text-[18px] md:text-[20px] leading-relaxed mb-12 max-w-[620px] mx-auto">
          Nikmati kesegaran alami dari VitJus sekarang juga.
          Pilihan jus sehat, segar, dan penuh energi untuk
          menemani harimu setiap hari.
        </p>

        <Link
          to="/menu"
          className="inline-block font-unbounded text-[15px] font-bold bg-[#194126] text-[#fafbf7] px-12 py-[18px] rounded-full no-underline hover:bg-[#0f2a18] hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300"
        >
          Pesan Sekarang →
        </Link>
      </div>
    </section>
  );
};

export default CTASection;