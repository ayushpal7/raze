import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const CyberPanel = ({ children, className }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-8 bg-zinc-900/50 backdrop-blur-xl border border-indigo-500/20 ${className}`}
      style={{
        clipPath: "polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)"
      }}
    >
      {children}
    </motion.div>
  );
};
