"use client";

import { motion } from "framer-motion";
import { Home, ShieldCheck, Gift, Zap, BotMessageSquare, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const razeGif = "https://cdn.discordapp.com/emojis/1452185851370147880.gif";

  const navLinks = [
    { name: "Dashboard", href: "/", icon: <Home size={18} /> },
    { name: "Antinuke", href: "#antinuke", icon: <ShieldCheck size={18} /> },
    { name: "Giveaways", href: "#giveaways", icon: <Gift size={18} /> },
    { name: "AutoMod", href: "#automod", icon: <Zap size={18} /> },
    { name: "Commands", href: "#commands", icon: <BotMessageSquare size={18} /> },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-10 bg-[#0A0A0A] border-r border-[#1A1A1A] z-40">
      {/* Logo */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="mb-16"
      >
        <img src={razeGif} alt="R" className="w-10 h-10 glow-box rounded-full" />
      </motion.div>

      {/* Nav Links */}
      <div className="flex-1 flex flex-col gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className="group relative">
              <div className={`p-4 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-cyan-500 text-black glow-box" 
                  : "text-zinc-600 hover:text-white hover:bg-zinc-900"
              }`}>
                {link.icon}
              </div>
              
              {/* Tooltip */}
              <span className="absolute left-24 top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-black border border-zinc-800 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Icon */}
      <div className="text-zinc-700 hover:text-white transition-colors cursor-pointer">
        <Terminal size={18} />
      </div>
    </nav>
  );
};
