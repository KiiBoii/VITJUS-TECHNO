import Navbar       from "../components/Navbar";
import TickerBar    from "../components/TickerBar";
import Footer       from "../components/Footer";

import HeroSection  from "../components/sections/HeroSection";
import MarqueeStrip from "../components/sections/MarqueeStrip";
import AboutSection from "../components/sections/AboutSection";
import WhyVitJus    from "../components/sections/WhyVitJus";
import BestSellers  from "../components/sections/BestSellers";
import SocialFeed   from "../components/sections/SocialFeed";
import CTASection   from "../components/sections/CTASection";

const LandingPage = () => {
  return (
    <div className="bg-[#91c642] min-h-screen pt-[80px]">
      <Navbar />
      <TickerBar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <WhyVitJus />
      <BestSellers />
      <SocialFeed />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
