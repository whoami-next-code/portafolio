"use client";

import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2030] via-[#161b26] to-[#12151f]" />

      <div className="aurora absolute -left-1/4 top-0 h-[60vh] w-[80vw] rounded-full bg-gradient-to-r from-indigo-600/20 via-violet-600/15 to-transparent blur-3xl" />
      <div className="aurora absolute -right-1/4 top-1/4 h-[50vh] w-[70vw] rounded-full bg-gradient-to-l from-sky-600/15 via-indigo-500/10 to-transparent blur-3xl" />

      <motion.div
        className="orb-animate absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-indigo-600/25 to-violet-600/15 blur-3xl"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb-animate-delayed absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-600/20 to-cyan-600/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="glow-pulse absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-fuchsia-600/15 to-indigo-600/10 blur-3xl"
      />

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(129, 140, 248, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129, 140, 248, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
