"use client";

import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { ShieldCheck, Gift, Zap, Activity, ExternalLink, Box } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const razeGift = "https://cdn.discordapp.com/emojis/1452669844360134767.png";

  return (
    <main className="min-h-screen cyber-grid pl-20 relative">
      <div className="scanline" />
      <Sidebar />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-12 py-16">
        {/* Header */}
        <header className="flex justify-between items-center mb-16 pb-10 border-b border-zinc-900">
          <div>
            <h1 className="text-4xl font-black text-white glow-text tracking-tighter">
              OPERATIONAL <span className="text-cyan-400">DASHBOARD</span>
            </h1>
            <p className="text-zinc-500 mt-2 text-sm">Welcome back, Operator.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://discord.gg/razebot" className="p-3 bg-zinc-900 rounded-xl text-zinc-500 hover:text-white transition">
              <Box size={18}/>
            </Link>
            <Link 
              href="https://discord.com/oauth2/authorize?client_id=1298287126290501732"
              className="bg-cyan-500 text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)" }}
            >
              Authorize Unit
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Active Servers" value="1.2k+" icon={<Box size={18}/>} delay={0.1}/>
          <StatCard title="Shield Status" value="Online" icon={<ShieldCheck size={18}/>} delay={0.2}/>
          <StatCard title="Synced Giveaways" value="48" icon={<Gift size={18}/>} delay={0.3}/>
          <StatCard title="System Ping" value="14ms" icon={<Activity size={18}/>} delay={0.4}/>
        </section>

        {/* Feature Showcase (Split Panel) */}
        <section className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="bg-[#0A0A0A] p-10 border border-[#1A1A1A]">
              <div className="flex items-center gap-4 mb-8">
                <Gift className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">GIVEAWAY PROTOCOL</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                Deploying high-performance giveaway architecture. Complex logic, requirement syncing, and absolute fairness in winner selection. Max duration 2 months.
              </p>
              <Link href="#giveaways" className="flex items-center gap-3 text-cyan-400 text-xs font-bold uppercase tracking-widest group">
                Configure Module <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <div className="bg-[#0A0A0A] p-10 border border-[#1A1A1A]">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="text-cyan-500" size={24} />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">ANTINUKE DEFENSE</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                Next-generation server sovereignty. Real-time protection against unauthorized deletions, role changes, and channel nuking. Advanced whitelist control.
              </p>
              <Link href="#antinuke" className="flex items-center gap-3 text-cyan-400 text-xs font-bold uppercase tracking-widest group">
                Set Permissions <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-zinc-900 text-center">
            <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em]">
                Developed by <Link href="https://ayush-pal.me" className="text-zinc-500 hover:text-white transition">Ayush Pal</Link> // RAZE CORE 2.0
            </p>
        </footer>
      </div>
    </main>
  );
}
