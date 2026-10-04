"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Trophy, GraduationCap, MapPin } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const themeBg = isDark ? "bg-[#0f0a0a] text-white" : "bg-[#FFFBF7] text-zinc-900";
  const cardBg = isDark ? "bg-[#1d1212] border-white/10" : "bg-white border-zinc-100";

  return (
    <main className={`min-h-screen ${themeBg} transition-colors duration-500 overflow-x-hidden selection:bg-[#9B1B30] selection:text-white`}>
      {/* 1. Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[4px] bg-[#9B1B30] origin-left z-[9999]" />

      {/* 2. Custom Cursor */}
      <motion.div animate={{ x: mouse.x - 20, y: mouse.y - 20, scale: hover ? 1.8 : 1 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="hidden lg:block fixed w-10 h-10 border border-[#9B1B30] rounded-full pointer-events-none z-[9998]" />
      <motion.div animate={{ x: mouse.x - 4, y: mouse.y - 4, scale: hover ? 0 : 1 }} transition={{ type: "spring", damping: 30, stiffness: 500 }} className="hidden lg:block fixed w-2 h-2 bg-[#9B1B30] rounded-full pointer-events-none z-[9999]" />

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-xl border-b ${isDark ? "bg-black/50" : "bg-white/70"}`}>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#9B1B30] rounded-xl grid place-items-center text-white font-black">T</div>
          <div><p className="font-black tracking-tighter leading-none">TULAS</p><p className="text-[9px] tracking-[0.2em] opacity-60">INTERNATIONAL SCHOOL</p></div>
        </div>
        <div className="hidden md:flex gap-8 text-[13px] font-medium opacity-60">
          <a href="#about">About</a><a href="#academics">Academics</a><a href="#sports">Sports</a><a href="#campus">Campus</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDark(!isDark)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`w-10 h-10 rounded-full grid place-items-center border ${cardBg}`}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#apply" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="bg-[#9B1B30] text-white px-6 py-2.5 rounded-full text-sm font-bold">Apply Now</a>
        </div>
      </nav>

      {/* HERO - LET'S DO it With Tulas - From your video */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9B1B30]/10 text-[#9B1B30] text-xs font-bold tracking-widest border border-[#9B1B30]/20">● ADMISSIONS OPEN 2026-27 • DEHRADUN</div>
          <h1 className="mt-6 text-[54px] md:text-[84px] font-black leading-[0.85] tracking-tighter">LET'S DO it <br /><span className="text-[#9B1B30]">With Tulas</span></h1>
          <p className="mt-6 text-lg opacity-60 leading-relaxed max-w-md">Ranked #6 Top Boarding School in India. 22-acre lush green campus at Selaqui, Dehradun. CBSE + Co-curricular Excellence.</p>
          <div className="mt-8 flex gap-4">
            <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="bg-[#9B1B30] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2">Virtual Tour <ArrowUpRight size={18} /></button>
            <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`px-8 py-4 rounded-full font-bold border ${cardBg}`}>Enquire</button>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="relative">
          <div className="bg-[#9B1B30] rounded-[40px] p-3 h-[560px]">
            <div className={`h-full w-full rounded-[32px] ${cardBg} p-6 flex flex-col justify-between relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B1B30]/10 to-transparent" />
              <div className="relative flex justify-between items-center"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-xs">LIVE CAMPUS VIEW</span><span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Online</span></div>
              <div className="relative space-y-3">
                <div className={`${isDark ? "bg-white/10" : "bg-[#FFF2EE]"} p-4 rounded-2xl flex items-center gap-3`}><div className="w-10 h-10 bg-[#9B1B30] rounded-full grid place-items-center text-white"><GraduationCap size={18} /></div><div><p className="font-bold text-sm">Modern Gurukul Philosophy</p><p className="text-xs opacity-60">Knowledge is the supreme wealth</p></div></div>
                <div className="grid grid-cols-2 gap-3"><div className="bg-[#9B1B30] text-white p-4 rounded-2xl"><p className="text-2xl font-black">15+</p><p className="text-[11px]">Olympic Sports</p></div><div className={`${isDark ? "bg-white/10" : "bg-zinc-900 text-white"} p-4 rounded-2xl`}><p className="text-2xl font-black">96.8%</p><p className="text-[11px] opacity-60">Boarding Happiness</p></div></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Made For Future Section - Your screenshot */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {[
            { title: "TULA'S IS... MADE FOR THE future", desc: "22 acres, CBSE, International collaborations & home away from home." },
            { title: "10 Sports curated to bring out your passion", desc: "Horse Riding, Swimming, Shooting, Football, Tennis, Archery & more." },
            { title: "Aiming to develop Global Citizens", desc: "Holistic development with 9+ clubs, music, dance & leadership." },
          ].map((c, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }} className={`${cardBg} p-8 rounded-[28px] border shadow-sm`}>
              <div className="w-12 h-12 rounded-full bg-[#9B1B30] text-white grid place-items-center mb-6">{i + 1}</div>
              <h3 className="text-xl font-black leading-tight">{c.title}</h3>
              <p className="mt-3 text-sm opacity-60 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Awards / Sports / Life */}
      <section id="sports" className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className={`${cardBg} rounded-[32px] border p-8`}>
            <div className="flex items-center gap-2 text-[#9B1B30] font-bold text-sm"><Trophy size={16} /> Awards</div>
            <h3 className="mt-4 text-3xl font-black tracking-tighter">A legacy of excellence, year after year.</h3>
            <div className="mt-6 space-y-3"><div className="p-4 rounded-xl bg-[#9B1B30]/10 flex justify-between"><span className="text-sm font-bold">Ranked #1 Co-ed in Dehradun</span><span>🏆</span></div><div className="p-4 rounded-xl bg-[#9B1B30]/10 flex justify-between"><span className="text-sm font-bold">Top 6 Boarding Schools India</span><span>⭐</span></div></div>
          </motion.div>
          <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="rounded-[32px] bg-[#9B1B30] p-8 text-white">
            <h3 className="text-3xl font-black">DIVE INTO OUR VIRTUAL TOUR</h3>
            <p className="mt-3 opacity-70 text-sm">Experience 22-acre campus, labs, dorms & sports arena from home.</p>
            <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="mt-6 bg-white text-[#9B1B30] px-6 py-3 rounded-full font-bold">Start Tour →</button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="px-6 py-20">
        <div className="max-w-7xl mx-auto bg-zinc-900 text-white rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row justify-between gap-8 items-center relative overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-[#9B1B30]/30 rounded-full blur-3xl -right-20 -top-20" />
          <div className="relative"><h2 className="text-4xl md:text-5xl font-black tracking-tighter">IS FULLY... <br /> BUT TIS IS FULLY YOURS</h2><p className="mt-4 opacity-60 flex items-center gap-2"><MapPin size={16} /> Dhoolkot, Selaqui, Dehradun • info@tis.edu.in</p></div>
          <div className="relative flex flex-col gap-3 w-full md:w-auto"><a href="https://tis.edu.in" target="_blank" className="bg-white text-black px-8 py-4 rounded-full font-bold text-center">Apply via Official Site</a><button className="bg-white/10 border border-white/20 px-8 py-4 rounded-full font-bold">Download Prospectus</button></div>
        </div>
      </section>

      <footer className="py-10 text-center text-[11px] tracking-[0.2em] opacity-40">TULAS INTERNATIONAL SCHOOL • BUILT WITH NEXT.JS 14 + FRAMER MOTION • REDESIGNED BY PREETHI • DEHRADUN</footer>
    </main>
  );
}