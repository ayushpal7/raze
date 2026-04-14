"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

export const CyberPanel = ({ children, className, borderColor = "border-indigo-500/20" }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-8 bg-zinc-900/40 backdrop-blur-xl border ${borderColor} ${className}`}
      style={{
        clipPath: "polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)"
      }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
