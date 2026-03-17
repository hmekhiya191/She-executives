import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollReveal from "@/components/ui/ScrollReveal.tsx";
import StatCounter from "@/components/ui/StatCounter";

import img1 from "@/assets/hero1.png";
import img2 from "@/assets/hero2.png";
import img3 from "@/assets/hero3.png";
import img4 from "@/assets/hero4.png";
import img5 from "@/assets/hero5.png";

const images = [img1, img2, img3, img4, img5];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const currentRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
  const img = new Image();
  img.src = images[0];
  img.onload = () => setLoaded(true);
}, []);

  // 🔁 Image loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // 🎬 Smooth Crossfade (NO blur, NO zoom)
  useEffect(() => {
    if (!currentRef.current || !prevRef.current) return;

    gsap.killTweensOf([currentRef.current, prevRef.current]);

    // Initial states
    gsap.set(currentRef.current, { opacity: 0 });
    gsap.set(prevRef.current, { opacity: 1 });

    // Animate
    gsap.to(currentRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(prevRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    });
  }, [current]);

return (
  <>
    {/* HERO SECTION */}
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f203c]">

      {/* Background */}
      <div className="absolute inset-0">

        <div
          ref={prevRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[prev]})` }}
        />

        <div
          ref={currentRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f203c]/55 via-[#123a5a]/45 to-[#1b2f55]/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <h1 className="font-poppins text-white font-semibold leading-[1.1] text-[48px] md:text-[72px] lg:text-[86px] mb-6">
            Reinventing the Workplace <br />
            for{" "}
            <span className="text-[#5fd3ff] drop-shadow-[0_0_12px_rgba(95,211,255,0.6)]">
              Greater Gender Diversity
            </span>
          </h1>

          <p className="uppercase tracking-[4px] text-white/60 text-xs md:text-sm">
            HR CONSULTING THAT SUPPORTS AND PARTNERS WITH BUSINESS
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0a1428]/60 backdrop-blur-md py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Fortune 500 Ready","✦","DEIB Strategy","✦","Executive Search","✦",
            "HR Consulting","✦","Talent Pipeline","✦","Leadership Development","✦"
          ].map((item, i) => (
            <span key={i} className="mx-6 text-xs tracking-[3px] uppercase text-white/50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* STATS */}
<section className="relative py-20 bg-gradient-to-br from-[#0f203c] via-[#11294a] to-[#0a1428] overflow-hidden">

  {/* subtle glow background */}
  <div className="absolute inset-0 opacity-20 blur-3xl bg-[radial-gradient(circle_at_20%_30%,#5fd3ff,transparent_40%),radial-gradient(circle_at_80%_70%,#77e3d4,transparent_40%)]"></div>

  <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">

    {[ 
      { end: 8, suffix: "+", label: "Years of Impact" },
      { end: 50, suffix: "+", label: "States & Provinces" },
      { end: 500, suffix: "+", label: "Placements Made" },
      { end: 100, suffix: "", label: "Women to Hire" },
    ].map((item, i) => (

      <div key={i} className="flex flex-col items-center">

        <StatCounter {...item} />

        {/* subtle divider */}
        <div className="w-8 h-[1px] bg-white/20 mt-4"></div>

      </div>

    ))}

  </div>
</section>

    {/* MISSION */}
{/* MISSION */}
<section className="py-24 bg-[#f8f5f0]">

  <div className="max-w-3xl mx-auto px-6 text-center">

 

    <h2 className="font-poppins text-5xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 leading-tight">
      Successful High Earners
    </h2>
       {/* premium divider */}
    <div className="w-20 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"></div>

    <p className="text-lg text-[#555] leading-relaxed">
      SHE Executives redefines HR by championing DEI, wage gap negotiation, and compliance.
      Nearly a decade of results partnering with Fortune 400 firms, business owners, and small businesses
      as their trusted HR extension.
    </p>

  </div>

</section>
  </>
);
};

export default HeroSection;