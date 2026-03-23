import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index.tsx";
import ShesHired from "./pages/ShesHired.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./components/Contact.tsx";
import ELearningSection from "./components/ELearningSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";

import ScrollToTop from "./components/ui/ScrollToTop";
import Loader from "./components/Loader.tsx";
import preloadImages from "@/components/ui/preloadImages";

// ✅ ALL IMPORTANT IMAGES
import img1 from "@/assets/hero1.jpg";
import img2 from "@/assets/hero2.jpg";
import img3 from "@/assets/hero3.png";
import img4 from "@/assets/hero4.jpg";
import img5 from "@/assets/hero5.jpg";

import elearningImg from "@/assets/elearning.png";
import mentorshipImg from "@/assets/mentorship.png";
import shesHiredHero from "@/assets/hero-diversity.jpg";

import executivePlacement from "@/assets/executive-placement.jpg";
import directHire from "@/assets/direct-hire.jpg";
import hrConsulting from "@/assets/hr-consulting.jpg";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const images = [
          img1,
          img2,
          img3,
          img4,
          img5,
          elearningImg,
          mentorshipImg,
          shesHiredHero,
          executivePlacement,
          directHire,
          hrConsulting,
        ];

        // ✅ PRELOAD ALL IMAGES
        await preloadImages(images);

        // ✅ MINIMUM LOADER TIME (smooth UX)
        setTimeout(() => {
          setLoading(false);
        }, 2500);

      } catch (err) {
        console.error("Image preload error:", err);
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* ✅ SMOOTH LOADER (ENTRY + EXIT) */}
          <AnimatePresence mode="wait">
            {loading && <Loader key="loader" />}
          </AnimatePresence>

          {/* ✅ SHOW APP AFTER LOADING */}
          {!loading && (
            <>
              <ScrollToTop />
              <Navbar />

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shes-hired" element={<ShesHired />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/elearning" element={<ELearningSection />} />
                <Route path="/service" element={<ServicesSection />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )}

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;