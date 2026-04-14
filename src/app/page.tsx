"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  CircleGauge,
  ClipboardList,
  Code2,
  Crown,
  Shield,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: CircleGauge },
  { id: "antinuke", label: "Antinuke", icon: Shield },
  { id: "giveaways", label: "Giveaways", icon: Sparkles },
  { id: "automod", label: "Automod", icon: Bot },
  { id: "commands", label: "Commands", icon: Terminal },
  { id: "developer", label: "Developer Info", icon: Code2 },
];

const commandSections = [
  {
    id: "giveaway",
    title: "Giveaway Module",
    icon: Sparkles,
    items: [
      {
        name: "gstart <time> <winners> <prize>",
        description: "Supports s, m, h, d, w, mo. Strict 2-month maximum duration.",
      },
      { name: "gend", description: "Ends an active giveaway instantly." },
      { name: "greroll", description: "Selects fresh winners for a finished giveaway." },
      { name: "glist", description: "Lists all active giveaways in the server." },
      { name: "gconfig", description: "Opens giveaway configuration controls." },
    ],
  },
  {
    id: "security",
    title: "Antinuke & Security",
    icon: Shield,
    items: [
      { name: "antinuke <enable/disable/status>", description: "Real-time protection against nuking." },
      { name: "whitelist <add/remove/show>", description: "Manage trusted users and protected roles." },
      { name: "extraowner", description: "Specialized permissions for bot secondary owners." },
    ],
  },
  {
    id: "logging",
    title: "Automod & Logging",
    icon: Bot,
    items: [
      { name: "automod", description: "Core moderation automation controls." },
      { name: "amsetup", description: "Creates the automod baseline for the server." },
      { name: "amfilter", description: "Manages filters for spam, links, and risky content." },
      { name: "logging <enable/setup>", description: "Configure audit logging for 2026 server events." },
    ],
  },
  {
    id: "fun",
    title: "Fun & Roleplay (Anime GIF Integration)",
    icon: Crown,
    items: [
      { name: "gay", description: "Rate command with dynamic anime GIF response." },
      { name: "lesbian", description: "Rate command with dynamic anime GIF response." },
      { name: "cute", description: "Rate command with dynamic anime GIF response." },
      { name: "chutiya", description: "Rate command with dynamic anime GIF response." },
      { name: "horny", description: "Rate command with dynamic anime GIF response." },
      { name: "tharki", description: "Rate command with dynamic anime GIF response." },
      { name: "kiss", description: "Roleplay action that triggers a dynamic anime GIF." },
      { name: "pat", description: "Roleplay action that triggers a dynamic anime GIF." },
      { name: "kill", description: "Roleplay action that triggers a dynamic anime GIF." },
      { name: "bite", description: "Roleplay action that triggers a dynamic anime GIF." },
      { name: "punch", description: "Roleplay action that triggers a dynamic anime GIF." },
    ],
  },
  {
    id: "info",
    title: "Information",
    icon: ClipboardList,
    items: [
      { name: "botinfo", description: "Showcases bot stats and Developer Info (Ayush Pal)." },
      { name: "ping", description: "Measures bot latency and connection health." },
      { name: "uptime", description: "Displays total bot uptime." },
      { name: "invite", description: "Generates the invite link for RaZe." },
    ],
  },
];

const stats = [
  { label: "Uptime Core", value: "99.99%" },
  { label: "Latency", value: "12ms" },
  { label: "Protections", value: "Live" },
  { label: "GIF Engine", value: "Anime" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="scanline-bar" />

      <aside className="fixed left-4 top-4 z-30 hidden h-[calc(100vh-2rem)] w-64 flex-col justify-between rounded-[28px] border border-cyan-400/15 bg-black/55 p-4 backdrop-blur-xl lg:flex neon-border cut-corner">
        <div>
          <div className="mb-6 flex items-center gap-3 border-b border-cyan-400/10 pb-5">
            <Image
              src="https://cdn.discordapp.com/emojis/1452185851370147880.gif"
              alt="RaZe logo"
              width={56}
              height={56}
              unoptimized
              className="h-14 w-14 rounded-2xl border border-cyan-300/30 bg-black/70 object-cover p-1 shadow-[0_0_30px_rgba(34,211,238,0.28)]"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/75">RaZe</p>
              <h1 className="text-2xl font-semibold neon-text">Cyber Grid</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="rounded-[24px] border border-cyan-400/15 bg-cyan-300/5 p-4 text-sm text-slate-300 cut-corner-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Lead Architect</p>
          <p className="mt-2 text-lg font-semibold text-white">Ayush Pal</p>
          <p className="mt-1 text-sm text-slate-400">High-performance bot systems and futuristic UI engineering.</p>
        </div>
      </aside>

      <section className="relative mx-auto flex min-h-screen max-w-[1700px] flex-col gap-6 px-4 py-4 lg:pl-[19rem] lg:pr-6 lg:pt-6">
        <motion.section
          id="dashboard"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 xl:grid-cols-[1.55fr_0.95fr]"
        >
          <motion.div variants={fadeUp} className="panel neon-border cut-corner rounded-[32px] p-6 md:p-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">
                  <Zap className="h-3.5 w-3.5" />
                  Next-gen sovereignty
                </div>
                <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl neon-text">
                  NEXT-GEN
                  <br />
                  SOVEREIGNTY
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                  Advanced Antinuke protection and high-performance Giveaway management for the 2026 Discord ecosystem.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#commands"
                    className="cut-corner-sm border border-cyan-300/35 bg-cyan-300/12 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20 hover:shadow-[0_0_26px_rgba(34,211,238,0.25)]"
                  >
                    View Command Matrix
                  </a>
                  <a
                    href="https://ayush-pal.me"
                    target="_blank"
                    rel="noreferrer"
                    className="cut-corner-sm border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    Visit Ayush Pal
                  </a>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto w-full max-w-xs"
              >
                <div className="panel-strong neon-border cut-corner rounded-[30px] p-5">
                  <div className="flex items-center gap-4 border-b border-cyan-300/10 pb-4">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1452185851370147880.gif"
                      alt="RaZe logo"
                      width={64}
                      height={64}
                      unoptimized
                      className="h-16 w-16 rounded-2xl border border-cyan-300/30 bg-black/60 object-cover p-1"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Discord Bot</p>
                      <p className="text-2xl font-semibold text-white neon-text">RaZe</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-cyan-300/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="panel neon-border cut-corner rounded-[32px] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                <Users className="h-5 w-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Developer Profile</p>
                <h3 className="text-2xl font-semibold text-white">Ayush Pal</h3>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Lead Architect behind RaZe. Focused on secure moderation systems, polished UX, and Discord-native automation.
              </p>
              <div className="rounded-2xl border border-cyan-300/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Profile Link</p>
                <a
                  href="https://ayush-pal.me"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-lg font-medium text-cyan-100 underline decoration-cyan-300/50 underline-offset-4"
                >
                  ayush-pal.me
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-cyan-300/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Specialty</p>
                  <p className="mt-2 text-white">System Design</p>
                </div>
                <div className="rounded-2xl border border-cyan-300/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Focus</p>
                  <p className="mt-2 text-white">Security + UX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="commands"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
              <Terminal className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Documentation</p>
              <h3 className="text-3xl font-semibold text-white">Command Matrix</h3>
            </div>
          </motion.div>

          <div className="grid gap-5 xl:grid-cols-2">
            {commandSections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.article key={section.id} variants={fadeUp} id={section.id} className="panel neon-border cut-corner rounded-[30px] p-6 md:p-7">
                  <div className="flex items-center gap-3 border-b border-cyan-300/10 pb-4">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white">{section.title}</h4>
                  </div>
                  <div className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <div key={item.name} className="rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:border-cyan-300/25 hover:bg-cyan-300/5">
                        <p className="font-mono text-sm text-cyan-100">{item.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <section className="grid gap-5 md:grid-cols-3">
          <div id="antinuke" className="panel neon-border cut-corner rounded-[28px] p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-cyan-200" />
              <h4 className="text-xl font-semibold text-white">Antinuke</h4>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Real-time defenses, whitelist control, and secondary owner permissions for high-trust administration.</p>
          </div>
          <div id="giveaways" className="panel neon-border cut-corner rounded-[28px] p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-cyan-200" />
              <h4 className="text-xl font-semibold text-white">Giveaways</h4>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Fast creation, rerolls, configs, and duration enforcement up to two months max.</p>
          </div>
          <div id="automod" className="panel neon-border cut-corner rounded-[28px] p-6">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-cyan-200" />
              <h4 className="text-xl font-semibold text-white">Automod</h4>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Adaptive moderation, filtered content control, and event-ready logging for 2026 server operations.</p>
          </div>
        </section>

        <section id="developer" className="panel neon-border cut-corner rounded-[32px] p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Featured Developer</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">Ayush Pal, Lead Architect</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                RaZe is tuned for secure administration, responsive interactions, and a polished Discord control experience.
              </p>
            </div>
            <a
              href="https://ayush-pal.me"
              target="_blank"
              rel="noreferrer"
              className="cut-corner-sm border border-cyan-300/35 bg-cyan-300/12 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Open Portfolio
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
