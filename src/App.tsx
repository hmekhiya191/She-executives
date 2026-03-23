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

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);

    let loaded = 0;

    const done = () => {
      loaded++;
      if (loaded === images.length) {
        setTimeout(() => setLoading(false), 2500); // 👈 min 2.5s
      }
    };

    if (images.length === 0) {
      setTimeout(() => setLoading(false), 2500);
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        done();
      } else {
        img.onload = done;
        img.onerror = done;
      }
    });

  }, []); // ✅ ONLY RUN ONCE

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* ✅ Loader ONLY FIRST TIME */}
          <AnimatePresence mode="wait">
            {loading && <Loader key="loader" />}
          </AnimatePresence>

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