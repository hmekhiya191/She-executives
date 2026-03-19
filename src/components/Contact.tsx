import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Paperclip, Instagram, Facebook, Linkedin  } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Contact = () => {
  const [fileName, setFileName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className=" bg-white">


      {/* <section className="py-24 bg-gradient-to-br from-[#0f172a] to-[#164e63]"> */}
      <section className="py-24 gradient-hero relative overflow-hidden">   
        <div className="pt-10 max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let's <span className="text-sky-400">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80"
          >
            Ready to transform your team? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">

          {/* LEFT INFO */}
          {/* LEFT INFO */}
<ScrollReveal direction="left">
  <div>
    
    {/* Premium faded divider */}
    <div className="w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80"></div>

    <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
      Get in Touch
    </h2>

    <p className="text-gray-600 leading-relaxed mb-10">
      Whether you're looking for executive talent, need HR consulting, 
      or want to join the She's Hired movement—reach out today.
    </p>

    {/* CONTACT INFO */}
    <div className="space-y-6 mb-10">

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500">
          <MapPin size={20} />
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
            Address
          </p>
          <p className="text-gray-800 font-medium">
            El Segundo, California, United States
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500">
          <Mail size={20} />
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
            Email
          </p>
          <p className="text-gray-800 font-medium">
            hrsolutions@sheexecutives.com
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-sky-100 flex items-center justify-center text-sky-500">
          <Phone size={20} />
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
            Phone
          </p>
          <p className="text-gray-800 font-medium">
            866-568-0773
          </p>
        </div>
      </div>

    </div>

    {/* COVERAGE */}
    <div className="mb-10">
      <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">
        Coverage
      </p>
      <p className="text-gray-800 font-medium">
        All US States & Canada
      </p>
    </div>

    {/* BUSINESS HOURS */}
    <div className="mb-10">
      <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-3">
        Business Hours
      </p>

      <div className="text-sm text-gray-800 space-y-1">
        <p>
          Monday – Friday: <span className="font-medium">9:00 AM – 5:00 PM</span>
        </p>
        <p>
          Saturday – Sunday: <span className="text-gray-500">Closed</span>
        </p>
      </div>
    </div>

    {/* BOOKING */}
    <a
      href="https://sheexecutives.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sky-500 font-medium text-sm hover:underline mb-10"
    >
      Schedule a free consultation →
    </a>

    {/* SOCIAL */}
    <div>
      <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-4">
        Connect With Us
      </p>

      <div className="flex gap-5">
        
        <a href="https://www.instagram.com/sheexecutives/" target="_blank" className="text-gray-500 hover:text-sky-500 transition">
          <Instagram size={24} />
        </a>

        <a href="https://www.facebook.com/Sheexecutives/#" target="_blank" className="text-gray-500 hover:text-sky-500 transition">
          <Facebook size={24} />
        </a>

        <a href="https://www.linkedin.com/company/she-executives/" target="_blank" className="text-gray-500 hover:text-sky-500 transition">
          <Linkedin size={24} />
        </a>

      </div>
    </div>

  </div>
</ScrollReveal>

          {/* RIGHT FORM */}
<ScrollReveal direction="right">
  <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-sky-100 shadow-xl p-8">

    {/* STATE */}
    {(() => {
      const [service, setService] = useState("");
      const [fileName, setFileName] = useState("");

      const handleFileChange = (e: any) => {
        if (e.target.files[0]) {
          setFileName(e.target.files[0].name);
        }
      };

      return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

          {/* Row */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>

            {/* Company (optional) */}
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Company <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Select */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              How Can We Help?
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
            >
              <option value="">Select an option</option>
              <option>Executive Placement</option>
              <option>Direct Hire</option>
              <option>HR Consulting</option>
              <option>She's Hired Campaign</option>
              <option>SHE Cares</option>
              <option>Other</option>
            </select>
          </div>

          {/* 👇 SHOW ONLY WHEN "OTHER" */}
          {service === "Other" && (
            <div className="animate-fadeIn">
              <label className="text-sm text-gray-700 mb-2 block">
                Subject / Details
              </label>
              <input
                type="text"
                placeholder="Please specify your request..."
                className="w-full px-4 py-3 rounded-lg border border-sky-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition"
              />
            </div>
          )}

          {/* Message */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your needs..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-sky-400 outline-none transition resize-none"
            />
          </div>

          {/* FILE UPLOAD */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Attachment (optional)
            </label>

            <label className="flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-sky-300 rounded-lg cursor-pointer hover:bg-sky-50 transition">
              <Paperclip size={16} className="text-sky-500" />
              <span className="text-sm text-gray-600">
                {fileName || "Upload file"}
              </span>

              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
          >
            Send Message <Send size={16} />
          </button>

        </form>
      );
    })()}
  </div>
</ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;