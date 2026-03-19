import { motion } from "framer-motion";
import { ArrowRight, Heart, Award, TrendingUp, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import MissionSection from "./MissionSection";
import { Footer } from "react-day-picker";
import FooterSection from "./FooterSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

const milestones = [
  { year: "2017", title: "Founded", desc: "SHE Executives launches with a mission to redefine HR consulting for women leaders." },
  { year: "2018", title: "Growing Our Reach", desc: "Debuted at the Wonder Women Tech Conference in Long Beach, connecting with diverse women innovators and launching custom eLearning & LMS solutions for corporate clients." },
  { year: "2019", title: "National Reach", desc: "Expanded to serve all 50 US states, securing major partnerships with a national multi-state retail chain and Fortune 500 companies, including the financial services industry." },
  { year: "2021", title: "Going Global", desc: "Extended operations into Canada, broadening our talent pool internationally while deepening commitment to workforce development through nonprofit education partnerships." },
  { year: "2023", title: "Industry Leader", desc: "Established as a go-to HR and DEI consultancy, growing our talent pipeline and expanding lines of business across multiple industries nationwide." },
  { year: "2026", title: "She’s Hired Campaign", desc: "A career re-entry campaign empowering Black women and women of color to return to the workforce." },
];

const About = () => {
  return (
    <div className=" bg-white">

  
      <section className="  py-24 gradient-hero relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
            <p className="pt-5font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Driven by Impact
            </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className=" text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-sky-400">Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg  max-w-2xl mx-auto text-base leading-relaxed text-baby-blue/70"
          >
            Our core principles shape our efforts. She Executives aims to lead the evolution of how women are represented in every company in the world. We are dedicated to our clients, and they benefit from our success.
          </motion.p>
        </div>
      </section>

 <section className="bg-background py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
      What <span className="text-accent italic">SHE</span> Stands For
    </h2>

    {/* Intro */}
    <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed mb-16">
      SHE stands for Successful High Earners, and that’s exactly what we champion.
      Paid equitably for the work you do. Recognized for the value you bring.
      Leading organizations that are intentional about building cultures of inclusion,
      belonging, and real change.
    </p>

    {/* Items */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Successful */}
      <div className="text-center">
        <Award className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Successful
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
          On your own terms, not a standard someone else set for you.
        </p>
      </div>

      {/* High */}
      <div className="text-center">
        <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          High
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
          Reaching the level you’ve earned and paid every dollar of it.
        </p>
      </div>

      {/* Earners */}
      <div className="text-center">
        <Wallet className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Earners
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
          Closing the wage gap because equal work demands equal pay.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* MISSION */}
      <MissionSection />

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-16 h-[2px] bg-sky-400 mx-auto mb-6 opacity-70"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                From 2017 to 2026 Impact
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">

            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-300"></div>

            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                  {/* Year (Desktop) */}
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className=" font-display text-5xl font-bold text-sky-500">{m.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 w-4 h-4 rounded-full bg-sky-500 border-4 border-white mt-2"></div>

                  {/* Content */}
                  <div className="flex-1 pl-4 md:pl-0">
                    <span className="text-2xl font-bold text-sky-500 md:hidden">{m.year}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>

                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>


{/* SHE CARES */}
{/* <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-[#f8fbff]">
<div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-sky-300 opacity-20 rounded-full blur-3xl"></div>

<div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

 <div className="max-w-5xl mx-auto text-center px-4">

    <ScrollReveal>

      
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-200 bg-sky-100/70 backdrop-blur-sm mb-8">
        <Heart size={16} className="text-sky-500" />
        <span className="text-xs tracking-[0.2em] uppercase text-sky-600 font-medium">
          Nonprofit Initiative
        </span>
      </div>

      
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
        SHE <span className="text-sky-500 italic">Cares</span>
      </h2>

      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
        Providing resume support, mental health resources, mentoring cohorts, and community support for women at every stage.
      </p>

     
<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-14 text-center">

  {[
    { title: "Resume Building", desc: "Professional resume reviews and rebuilds" },
    { title: "Mental Health", desc: "Wellness resources and support networks" },
    { title: "Mentoring Cohorts", desc: "Peer groups for career growth" },
  ].map((item, i) => (

    <div
      key={item.title}
      className="group px-4"
      style={{ transitionDelay: `${i * 100}ms` }}
    >

      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-500 transition">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {item.desc}
      </p>

      
      <div className="mx-auto h-[2px] w-12 bg-sky-300 group-hover:w-20 transition-all duration-300"></div>

    </div>

  ))}

</div>

      
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 text-white rounded-xl shadow-md hover:bg-sky-600 hover:shadow-lg transition-all duration-300"
      >
        Get Involved
        <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
      </Link>

    </ScrollReveal>
  </div>

  
  <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-sky-200 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 bg-sky-300 opacity-20 rounded-full blur-3xl"></div>

</section> */}






      <section className="  py-24 gradient-hero relative overflow-hidden section-padding">
  <div className="max-w-2xl mx-auto text-center px-6">
    <AnimatedSection>

<h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
  Ready to <span className="text-accent italic">Partner</span> ?
</h2>
      <p className="mt-4 text-baby-blue/80 font-body text-sm md:text-base leading-relaxed">
        Whether you’re a Fortune 500 company, a growing business, or a leader
        seeking your next opportunity, let’s connect.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        
        {/* Primary Button */}
        <Button
          size="lg"
          className="bg-accent text-white hover:bg-accent/90 transition-all"
          asChild
        >
          <Link to="/contact">
            Contact Us <ArrowRight size={16} />
          </Link>
        </Button>

        {/* Outline Button */}
<Button
  size="lg"
  variant="outline"
  className="
    border-white text-white bg-white/5 backdrop-blur-sm
    hover:border-accent hover:text-accent hover:bg-white/10
    transition-all duration-300
  "
  asChild
>
  <Link to="/shes-hired">She's Hired Campaign</Link>
</Button>

      </div>

    </AnimatedSection>
  </div>
</section>

      <FooterSection />

    </div>
  );
};

export default About;