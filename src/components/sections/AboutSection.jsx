import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#fafbf7] py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* ===== BACKGROUND DECORATION ===== */}

            {/* Circle kiri atas */}
            <div className="absolute -top-24 -left-12 w-[280px] h-[280px] rounded-full bg-[#91c642]/30 blur-[40px] z-0" />

            {/* Circle kanan bawah */}
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-[#f9a519]/25 blur-[30px] z-0" />

            <div className="relative z-10 animate-fade-up">
                <p className="flex items-center gap-3 text-[11px] font-bold tracking-[3px] uppercase text-[#91c642] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#91c642]">
                    Our Story
                </p>

                <h2 className="font-black text-[#194126] leading-[1.05] tracking-[-1.5px] mb-6" style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
                    Made Fresh,{" "}
                    <span className="text-[#f9a519]">Every Sip.</span>
                </h2>

                <p className="text-[#194126]/75 text-[16px] leading-[1.8] mb-4">
                    VitJus hadir untuk memberikan pengalaman minum jus yang lebih sehat,
                    segar, dan berkualitas. Setiap minuman dibuat dari buah pilihan
                    terbaik dengan rasa alami yang tetap nikat dan menyegarkan.
                </p>

                <p className="text-[#194126] font-semibold text-[16px]">
                    Bukan sekadar minuman — ini gaya hidup sehat setiap hari.
                </p>

                <Link to="/about" className="mt-8 inline-block text-[13px] font-bold bg-[#f9a519] text-[#194126] px-9 py-4 rounded-full no-underline hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(249,165,25,0.35)] transition-all duration-300">
                    Learn More
                </Link>
            </div>

            {/* ===== IMAGE SECTION ===== */}
            <div className="relative z-10 flex justify-center items-center">
                {/* Circle blur belakang image */}
                <div className="absolute w-[350px] h-[350px] rounded-full bg-[#91c642]/40 blur-[120px] z-0" />

                {/* Main image */}
                <img src="/images/menu/mixberry.png" alt="VitJus"
                    className="relative z-10 w-full max-w-md object-contain hover:scale-105 transition-transform duration-500 animate-float"/>

                {/* Floating badge */}
               <div className="absolute bottom-[-20px] right-[-20px] z-20">

  {/* Outer Glow */}
  <div className="absolute inset-0 rounded-full bg-[#f9a519]/30 blur-[25px] scale-110 animate-pulse" />

  {/* Main Badge */}
  <div className="relative w-[130px] h-[130px] rounded-full bg-gradient-to-br from-[#ffd36a] via-[#f9a519] to-[#f28c00] border-[4px] border-[#194126] flex flex-col items-center justify-center text-[#194126] shadow-[0_12px_30px_rgba(249,165,25,0.35)] hover:scale-105 transition-all duration-500 animate-float">

    {/* Small decorative circle */}
    <div className="absolute top-3 right-4 w-[12px] h-[12px] rounded-full bg-[#fafbf7]/70" />

    {/* Percentage */}
    <span className="text-[28px] font-black leading-none">
      100%
    </span>

    {/* Text */}
    <span className="text-[9px] font-bold tracking-[1px] uppercase text-center mt-2 leading-tight">
      Natural
      <br />
      Ingredients
    </span>
  </div>
</div>
            </div>
        </section>
    );
};

export default AboutSection;