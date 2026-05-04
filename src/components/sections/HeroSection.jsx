import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SLIDES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero1.jpg", 
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#194126]">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Hero Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay - Lebih gelap di mobile agar teks putih terbaca */}
            <div className="absolute inset-0 bg-[#194126]/50 md:bg-[#194126]/40" />
          </div>
        ))}
      </div>

      {/* Glow Decorative */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] md:w-[560px] h-[300px] md:h-[560px] rounded-full bg-[#f9a519]/20 blur-[80px] md:blur-[140px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:pl-28 lg:pl-36 max-w-5xl w-full text-center md:text-left">
        {/* Badge  */}
        <div className="inline-flex items-center gap-2 md:gap-3 bg-[#fafbf7]/10 backdrop-blur-md border border-white/20 text-[#f9a519] px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-[14px] font-black tracking-[2px] uppercase mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f9a519] animate-pulse" />
          Freshly Made Daily
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[0.95] tracking-[-1px] md:tracking-[-3px] mb-4 md:mb-6">
          <span className="block text-[#f9a519] text-[50px] sm:text-[70px] md:text-[100px] lg:text-[120px]">
            VitJus
          </span>
          <span className="block text-[#fafbf7] text-[20px] sm:text-[28px] md:text-[40px] tracking-widest mt-2 uppercase italic">
            #VitaminHarianmu
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[#fafbf7]/90 text-[14px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-[500px] md:max-w-[650px] mb-8 md:mb-10 font-medium mx-auto md:mx-0">
          Kesegaran alami dari buah pilihan terbaik untuk hidup yang lebih
          sehat, segar, dan penuh energi setiap hari.
        </p>

        {/* CTA */}
        <div className="flex justify-center md:justify-start">
          <Link
            to="/menu"
            className="group relative overflow-hidden bg-[#f9a519] text-[#194126] px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-sm md:text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(249,165,25,0.2)] no-underline"
          >
            Explore Menu
          </Link>
        </div>
      </div>

      {/* Arrow Navigation  */}
      <div className="absolute bottom-10 md:bottom-auto md:top-1/2 w-full flex justify-between px-6 md:px-10 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#f9a519] transition-all"
        >
          <span className="text-xl md:text-2xl">←</span>
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#f9a519] transition-all"
        >
          <span className="text-xl md:text-2xl">→</span>
        </button>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full border-none cursor-pointer ${
              i === current
                ? "w-6 md:w-8 h-1.5 md:h-2 bg-[#f9a519]"
                : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;