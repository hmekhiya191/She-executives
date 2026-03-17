import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const StatCounter = ({ end, suffix = "", prefix = "", label, duration = 2 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center"
>
  <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight mb-2 text-[rgba(95,211,255,0.6)] drop-shadow-[0_0_12px_rgba(95,211,255,0.45)]">
    {prefix}{count}{suffix}
  </div>

  <div className="font-body text-xs md:text-sm tracking-[3px] uppercase text-white/50">
    {label}
  </div>
</motion.div>
  );
};

export default StatCounter;
