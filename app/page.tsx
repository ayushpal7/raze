"use client";

import { motion } from "framer-motion";
import { CyberPanel } from "@/components/CyberPanel";
import { Shield, Gift, Zap, Terminal, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const razeEmoji = "https://cdn.discordapp.com/emojis/1452185851370147880.gif";
  const dotEmoji = "https://cdn.discordapp.com/emojis/1488139920294936707.gif";

  return (
    <main className="min-h-screen cyber-grid">
      <div className="scanline" />
      
      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-10 py-10 flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold text-2xl tracking-[0.2em] glow-text">
          <img src={razeEmoji} alt="R" className="w-8 h-8" /> RAZE
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
          <Link href="https://discord.gg/razebot" className="hover:text-white transition">Support</Link>
          <Link href="https://ayush-pal.me" className="hover:text-white transition">Developer</Link>
        </div>

        <Link 
          href="https://discord.com/oauth2/authorize?client_id=1298287126290501732"
          className="bg-indigo-600 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}
        >
          Invite RaZe
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-10 pt-20 pb-40 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-indigo-500/30 text-[9px] font-bold tracking-[0.4em] uppercase text-indigo-400 mb-8 bg-indigo-500/5">
            <img src={dotEmoji} className="w-3 h-3" /> System Operational
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.8] mb-10 tracking-tighter">
            NEXT-GEN <br /> <span className="text-indigo-500 glow-text">UTILITY.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-md mb-12 leading-relaxed font-medium">
            RaZe is a high-performance Discord entity. Engineered for complex giveaway logic and absolute server sovereignty.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              href="https://discord.com/oauth2/authorize?client_id=1298287126290501732"
              className="bg-white text-black px-12 py-5 font-black uppercase text-xs tracking-widest hover:invert transition-all"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyberPanel className="border-t-4 border-t-indigo-500 shadow-2xl shadow-indigo-500/10">
            <div className="flex justify-between items-center mb-12">
              <Terminal size={18} className="text-indigo-500" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-10">
              <StatItem icon={<Shield size={18}/>} label="Security" val="Active" />
              <StatItem icon={<Gift size={18}/>} label="Giveaways" val="Ready" />
              <StatItem icon={<Zap size={18}/>} label="Latency" val="14ms" />
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center text-[10px] font-bold text-zinc-600 tracking-widest uppercase">
              <span>Shard_001</span>
              <span>Uptime: 99.9%</span>
            </div>
          </CyberPanel>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-10 py-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-zinc-600 tracking-[0.3em] uppercase">
          &copy; 2026 Developed by <Link href="https://ayush-pal.me" className="text-white hover:glow-text transition-all">Ayush Pal</Link>
        </p>
        <div className="flex gap-8">
           <Link href="https://github.com/ayushpal7" className="text-zinc-600 hover:text-white transition-colors"><ExternalLink size={16}/></Link>
        </div>
      </footer>
    </main>
  );
}

function StatItem({ icon, label, val }: any) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-6 text-zinc-500 group-hover:text-indigo-400 transition-colors">
        {icon}
        <span className="text-xs font-black uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-[10px] font-black uppercase text-indigo-500 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1">
        {val}
      </span>
    </div>
  );
}
