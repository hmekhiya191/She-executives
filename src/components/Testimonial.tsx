import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/components/Hero.css";

const testimonials = [
  {
    text: "SHE Executives transformed our leadership pipeline. Their commitment to diversity isn't just talk, it's measurable impact.",
    author: "Fortune 400 HR Director"
  },
  {
    text: "A truly strategic partner. They understand both people and business outcomes.",
    author: "VP Talent, Global Manufacturing"
  },
//     {
//     text: "They rewrote my resume, coached me through interviews, and supported me when I needed it most. I don’t think I’d have gotten the job without them, they didn’t just place me, they prepared me..",
//     author: "Placed Candidate · Director of Supply Chain"
//   },
  {
    text: "We saw immediate improvement in leadership diversity and culture.",
    author: "CHRO, Consumer Goods"
  },
  {
    text: "Professional, insightful, and deeply committed to inclusion.",
    author: "HR Head, Tech Company"
  },
//     {
//     text: "When I lost my job, I was devastated. She Executives helped me negotiate my severance, and I walked away with more than expected,but more importantly, they reminded me I’m more than my job title.",
//     author: "Severance Client · Returned as Placed Candidate"
//   },
  {
    text: "Their network and approach are unmatched in the industry.",
    author: "Director, Supply Chain"
  },
  {
    text: "They don’t just fill roles—they elevate organizations.",
    author: "Female Founder & CEO, Mid-size Enterprise"
  },
  {
    text: "Exceptional results with a human-first approach.",
    author: "Talent Leader, Fortune 500"
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
<section className="testimonial-section">
  <div className="testimonial-container">

    {/* Divider */}
    <div className="testimonial-divider"></div>

    {/* Main Row */}
    <div className="testimonial-row">

      {/* Left Arrow */}
      <button onClick={prevSlide} className="arrow-btn">
        <ChevronLeft size={20} />
      </button>

      {/* Content */}
      <div className="testimonial-content">
        <blockquote key={index} className="testimonial-text fade">
          "{testimonials[index].text}"
        </blockquote>

        <p className="testimonial-author fade">
          — {testimonials[index].author}
        </p>
      </div>

      {/* Right Arrow */}
      <button onClick={nextSlide} className="arrow-btn">
        <ChevronRight size={20} />
      </button>

    </div>

  </div>
</section>
  );
};

export default TestimonialSection;