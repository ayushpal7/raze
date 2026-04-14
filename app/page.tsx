"use client";

import { motion } from "framer-motion";
import { CyberPanel } from "@/components/CyberPanel";
import { Shield, Gift, Zap, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const razeEmoji = "https://cdn.discordapp.com/emojis/1452185851370147880.gif";
  const dotEmoji = "https://cdn.discordapp.com/emojis/1488139920294936707.gif";

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-indigo-500">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,transparent)] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        <div className="flex items-center gap-3 font-black text-2xl tracking-tighter">
          <img src={razeEmoji} alt="R" className="w-8 h-8" />
          RAZE
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="https://ayush-pal.me" className="hover:text-white transition">Developer</Link>
        </div>
        <button className="bg-indigo-600 px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-colors"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}>
          Invite Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-indigo-500/30 text-[9px] font-bold tracking-[0.3em] uppercase text-indigo-400 mb-8">
            <img src={dotEmoji} className="w-3 h-3" /> System v2.0 Live
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
            CYBER <br /> <span className="text-indigo-500">DEFENSE.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-md mb-12 leading-relaxed">
            RaZe is an autonomous Discord entity specialized in high-speed 
            Giveaways and unbreakable Antinuke protocols.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-transform"
                    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}>
              Add to Server
            </button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CyberPanel className="border-t-4 border-t-indigo-500">
            <div className="flex justify-between items-center mb-10">
              <Terminal size={18} className="text-zinc-600" />
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <StatusItem label="Antinuke Security" status="Active" icon={<Shield size={16} />} color="text-green-500" />
              <StatusItem label="Giveaway Engine" status="Synced" icon={<Gift size={16} />} color="text-indigo-400" />
              <StatusItem label="Automod Core" status="Running" icon={<Zap size={16} />} color="text-indigo-400" />
            </div>
          </CyberPanel>
        </motion.div>
      </section>
    </main>
  );
}

function StatusItem({ label, status, icon, color }: any) {
  return (
    <div className="flex items-center justify-between group cursor-default">
      <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
        {icon}
        <span className="text-sm font-medium uppercase tracking-widest">{label}</span>
      </div>
      <span className={`text-[9px] font-bold uppercase tracking-tighter ${color} bg-white/5 px-2 py-1`}>
        {status}
      </span>
    </div>
  );
}
