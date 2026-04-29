import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SLIDES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero1.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#194126]">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#194126]/45" />
    </div>
  ))}
</div>

      {/* Glow kanan */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[#f9a519]/20 blur-[140px] pointer-events-none z-0" />

     {/* Content */}
<div className="relative z-10 pl-16 md:pl-28 lg:pl-36 pr-6 max-w-5xl">
  {/* Badge */}
  <div className="inline-flex items-center gap-3 bg-[#fafbf7]/80 border border-[#f9a519]/40 text-[#f9a519] px-6 py-3 rounded-full text-[15px] font-bold tracking-[2px] uppercase mb-8">
    <span className="w-[8px] h-[8px] rounded-full bg-[#f9a519] animate-pulse inline-block" />
    Freshly Made Daily
  </div>

  {/* Headline */}
  <h1
    className="font-black leading-[0.9] tracking-[-3px] mb-6"
    style={{
      fontSize: "clamp(64px, 9vw, 120px)",
    }}
  >
    <span className="block text-[#f9a519]">VitJus</span>
    <span className="block text-[#fafbf7] text-[28px] md:text-[40px] tracking-normal mt-4">
      #VitaminHarianmu
    </span>
  </h1>

  {/* Subtext */}
  <p className="text-[#fafbf7]/90 text-[20px] md:text-[24px] leading-[1.8] max-w-[650px] mb-8 font-medium">
    Kesegaran alami dari buah pilihan terbaik untuk hidup yang lebih
    sehat, segar, dan penuh energi setiap hari.
  </p>

  {/* CTA */}
  <div className="flex items-center gap-5 -mt-2">
    <Link
      to="/menu"
      className="text-[16px] md:text-[18px] font-bold bg-[#f9a519] text-[#194126] px-10 py-5 rounded-full no-underline hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(249,165,25,0.35)] transition-all duration-300"
    >
      Explore Menu
    </Link>
  </div>
</div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 w-[56px] h-[56px] rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[28px] font-black hover:bg-[#f9a519] hover:border-[#f9a519] transition-all duration-300"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 w-[56px] h-[56px] rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[28px] font-black hover:bg-[#f9a519] hover:border-[#f9a519] transition-all duration-300"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 border-none cursor-pointer ${
              i === current
                ? "w-8 h-[10px] bg-[#f9a519]"
                : "w-[10px] h-[10px] bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;