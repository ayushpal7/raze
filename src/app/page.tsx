"use client";

import type { ComponentType } from "react";
import razePfp from "../../raze-pfp.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Crown,
  ListTree,
  Sparkles,
  Globe2,
  ShieldCheck,
  Stars,
  Terminal,
  Users,
} from "lucide-react";

const stats = [
  { label: "Latency", value: "12ms" },
  { label: "Uptime", value: "99.99%" },
  { label: "Core Modules", value: "4" },
  { label: "Status", value: "Online" },
];

const commandGroups = [
  {
    title: "Antinuke",
    icon: ShieldCheck,
    description: "Core anti-nuke protection and status controls.",
    commands: [".antinuke", ".antinuke enable", ".antinuke disable", ".antinuke status"],
  },
  {
    title: "Whitelist",
    icon: Users,
    description: "Trusted-user management for protected server operations.",
    commands: [".whitelist", ".whitelist add <@user>", ".whitelist remove <@user>", ".whitelist show"],
  },
  {
    title: "Antiraid",
    icon: ShieldCheck,
    description: "Anti-raid setup and protection utilities.",
    commands: [".antiraid", ".arsetup"],
  },
  {
    title: "Automod",
    icon: Bot,
    description: "Automated moderation and configuration controls.",
    commands: [".automod", ".automod enable", ".automod disable", ".amsetup"],
  },
  {
    title: "Fun & Roleplay",
    icon: Crown,
    description: "Rate commands and anime GIF roleplay actions.",
    commands: [
      "Rates: gay, lesbian, cute, chutiya, horny, tharki",
      "Roleplay: kiss, pat, kill, bite, punch",
    ],
  },
  {
    title: "Giveaway",
    icon: Sparkles,
    description: "Giveaway lifecycle controls and configuration.",
    commands: [".gconfig", ".gend", ".glist", ".greroll", ".gstart"],
  },
  {
    title: "Information",
    icon: ListTree,
    description: "General bot and server information commands.",
    commands: [".help", ".botinfo", ".invite", ".ping", ".uptime"],
  },
  {
    title: "Logging",
    icon: Terminal,
    description: "Event logging configuration and status controls.",
    commands: [
      ".logging enable - Enable logging",
      ".logging disable - Disable logging",
      ".logging status - View current configuration",
      ".logging setup - Configure channels per event group",
    ],
  },
  {
    title: "Moderation",
    icon: ShieldCheck,
    description: "Full moderation toolkit for active server management.",
    commands: [
      ".ban",
      ".hide",
      ".hideall",
      ".kick",
      ".list",
      ".lock",
      ".lockall",
      ".timeout",
      ".nickname",
      ".purge",
      ".purgebots",
      ".role",
      ".rrole",
      ".steal",
      ".unban",
      ".unhide",
      ".unhideall",
      ".unlock",
      ".unlockall",
      ".untimeout",
    ],
  },
  {
    title: "Premium",
    icon: Stars,
    description: "Premium access and server enhancement utilities.",
    commands: [".antialt", ".autorole", ".massrole", ".resetserveravatar", ".setserveravatar"],
  },
  {
    title: "Util",
    icon: Globe2,
    description: "Utility commands for profiles, reporting, and stats.",
    commands: [".avatar", ".banner", ".prefix", ".report", ".serverinfo", ".stats", ".userinfo"],
  },
  {
    title: "Verification",
    icon: Terminal,
    description: "Verification system setup and status controls.",
    commands: [
      ".verification setup - Set up verification",
      ".verification disable - Remove verification system",
      ".verification status - View current status",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="scanline-bar" />

      <section className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col gap-6 px-4 py-4 md:px-6 lg:px-8 lg:py-8">
        <motion.section
          id="hero"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]"
        >
          <motion.div variants={fadeUp} className="panel neon-border cut-corner rounded-[32px] p-6 md:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">
              <Stars className="h-3.5 w-3.5" />
              Discord bot landing page
            </div>

            <div className="mt-6 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white md:text-7xl neon-text">
                  RAZE
                  <br />
                  DISCORD BOT
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                  A futuristic Discord automation bot built for protection, giveaways, moderation, utility, verification, and clean roleplay interactions.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://ayush-pal.me"
                    target="_blank"
                    rel="noreferrer"
                    className="cut-corner-sm border border-cyan-300/35 bg-cyan-300/12 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
                  >
                    Meet the Developer
                  </a>
                  <a
                    href="#overview"
                    className="cut-corner-sm border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    Explore Features
                  </a>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto w-full max-w-sm"
              >
                <div className="panel-strong neon-border cut-corner rounded-[30px] p-5 md:p-6">
                  <div className="flex items-center gap-4 border-b border-cyan-300/10 pb-4">
                    <Image
                      src={razePfp}
                      alt="RaZe logo"
                      className="h-16 w-16 rounded-2xl border border-cyan-300/30 bg-black/60 object-cover p-1"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Official bot identity</p>
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
                <Bot className="h-5 w-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Bot Snapshot</p>
                <h2 className="text-2xl font-semibold text-white">Built to keep servers fast, safe, and entertaining</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <InfoTile icon={ShieldCheck} title="Protection" text="Antinuke and whitelist controls for secure moderation." />
              <InfoTile icon={Sparkles} title="Giveaways" text="Clean giveaway flow with strict duration handling." />
              <InfoTile icon={Globe2} title="Automation" text="Automod, verification, and logging designed for modern Discord servers." />
              </p>
            </div>
          </div>
        </section>

        <section className="panel neon-border cut-corner rounded-[32px] p-6 md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Featured developer</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">Ayush Pal, Lead Architect</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                The person behind RaZe. Focused on making Discord automation feel secure, intentional, and visually distinctive.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-[24px] border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 text-sm text-cyan-100">
              <Code2 className="h-4 w-4" />
              <span>Developer info is included for context, not as a separate dashboard.</span>
            </div>
          </div>
        </section>

        <section className="space-y-6" id="commands">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
              <Terminal className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Command list</p>
              <h3 className="text-3xl font-semibold text-white">Every command, grouped by module</h3>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {commandGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="panel neon-border cut-corner rounded-[30px] p-6 md:p-7">
                  <div className="flex items-center gap-3 border-b border-cyan-300/10 pb-4">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-white">{group.title}</h4>
                      <p className="mt-1 text-sm text-slate-400">{group.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {group.commands.map((command) => (
                      <div key={command} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-200 transition hover:border-cyan-300/25 hover:bg-cyan-300/5">
                        <span className="font-mono text-cyan-100">{command}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

function InfoTile({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
  );
}

function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-cyan-300/10 bg-white/5 px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
