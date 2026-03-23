import { motion } from "framer-motion";
import logo from "@/assets/white_logo_transparent_background.png";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f203c]"
      
      // 👇 ENTER FROM TOP
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}

      // 👇 EXIT TO TOP
      exit={{ y: "-100%" }}

      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="She's Executives"
          className="w-28 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        />

        {/* LOADING BAR */}
        <div className="w-40 h-[2px] bg-white/20 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* TEXT */}
        <motion.p
          className="text-white/70 text-xs tracking-[3px] uppercase mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Experience
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;