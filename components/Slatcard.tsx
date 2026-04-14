import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
  delay?: number;
}

export const StatCard = ({ title, value, icon, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-cyan-500/50 transition-colors group"
    >
      <div className="flex justify-between items-center mb-6 text-zinc-600 group-hover:text-cyan-400 transition-colors">
        <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
        {icon}
      </div>
      <div className="text-4xl font-black text-white glow-text tracking-tight group-hover:scale-110 transition-transform origin-left">
        {value}
      </div>
    </motion.div>
  );
};
