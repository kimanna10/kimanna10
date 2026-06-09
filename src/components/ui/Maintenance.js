"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function Maintenance() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Анимированная шестеренка */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <Settings size={40} strokeWidth={1} className="text-foreground/30" />
        </motion.div>

        {/* Текстовый блок */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Work in progress
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-foreground/30"
          />
        </div>
      </div>
    </main>
  );
}
