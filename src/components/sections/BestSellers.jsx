import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const MENU_ITEMS = [
  {
    id: 1,
    image: "/images/menu/mixberry.png",
    name: "Mix Berry",

  },
  {
    id: 2,
    image: "/images/menu/apel.png",
    name: "Apel Fresh",
  },
  {
    id: 3,
    image: "/images/menu/semangkanenas.png",
    name: "Semangka & Nanas",
  },
  {
    id: 4,
    image: "/images/menu/berrybananabost.png",
    name: "Berry Banana Boost",
  },
  {
    id: 5,
    image: "/images/menu/pirapellemon.png",
    name: "Pir, Apel & Melon",
  },
  {
    id: 6,
    image: "/images/menu/strawmanggapisang.png",
    name: "Strawberry, Mangga & Pisang",
  },
];

const BestSellers = () => {
  return (
    <section className="relative bg-[#fafbf7] py-28 overflow-hidden">
      {/* Background Decorative */}
      {/* kiri atas — solid soft orange */}
      <div className="absolute -top-[100px]-left-[100px] w-[360px] h-[360px] rounded-full bg-[#f3dfc5] blur-[90px]" />

      {/* kiri bawah — solid cream */}
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[#f6ead7] blur-[20px]" />

       {/* kanan bawah — solid green */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[#dfe8d3] blur-[40px]" />

      {/* kanan atas — soft green */}
      <div className="absolute top-[10%] right-[8%] w-[200px] h-[200px] rounded-full bg-[#dfe8d3] blur-[40px]" />

      {/* titik kecil tengah */}
      <div className="absolute top-[14%] left-[34%] w-[80px] h-[80px] rounded-full bg-[#f6d6a8] blur-[90px] " />

      {/* blur glow tengah belakang produk utama */}
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#f9e8b5] blur-[90px] opacity-70 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#f9a519] font-bold tracking-[4px] uppercase text-[30px] mb-5">
            Signature Products
          </p>

          <h2 className="font-black text-[#194126] leading-tight" style={{fontSize: "clamp(52px, 6vw, 78px)",}}>
            Best Seller Menu
          </h2>

          <p className="text-[#194126]/75 max-w-[720px] mx-auto mt-6 text-[20px] leading-relaxed font-medium">
            Pilihan menu favorit pelanggan yang paling sering dipesan
            setiap harinya dengan rasa segar dan kualitas terbaik.
          </p>
        </div>

        {/* Swiper Coverflow */}
        <div className="relative">
          <Swiper modules={[Navigation, Autoplay]} centeredSlides={true} loop={true} slidesPerView={3}
            speed={800} spaceBetween={0} grabCursor={true} autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-20">
            {MENU_ITEMS.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive, isPrev, isNext }) => (
                  <div className="flex flex-col items-center justify-center min-h-[620px]">

                    {/* Product */}
                    <div className={` transition-all duration-700
                ${isActive
                        ? "scale-100 opacity-100 rotate-0"
                        : isPrev
                          ? "scale-75 opacity-60 rotate-[8deg]"
                          : isNext
                            ? "scale-75 opacity-60 -rotate-[8deg]"
                            : "scale-50 opacity-0"
                      }`}>
                      <img src={item.image} alt={item.name} className={` object-contain
                  ${isActive
                          ? "w-[420px] h-[420px]"
                          : "w-[240px] h-[240px]"
                        }`} />
                    </div>

                    {/* Nama  */}
                    <div className="h-[90px] flex items-start justify-center mt-6">
                      <div className={` transition-all duration-500
                  ${isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                        }`}>
                        <h3 className="text-[#194126] text-[28px] font-black text-center">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button className="custom-prev absolute left-0 top-[42%] z-20 w-[56px] h-[56px] rounded-full border border-[#f9a519] text-[#f9a519] text-2xl font-black hover:bg-[#f9a519] hover:text-white transition-all duration-300">
            ←
          </button>

          <button className="custom-next absolute right-0 top-[42%] z-20 w-[56px] h-[56px] rounded-full border border-[#f9a519] text-[#f9a519] text-2xl font-black hover:bg-[#f9a519] hover:text-white transition-all duration-300">
            →
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-[-20px]">
          <Link to="/menu"
            className="inline-block bg-[#f9a519] text-white px-8 py-4 rounded-full font-bold no-underline hover:scale-105 transition-all duration-300" >
            Lihat Semua Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;