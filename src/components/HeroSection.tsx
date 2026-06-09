/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import heroBg from "../../assets/1.png";

interface HeroSectionProps {
  onNextSection: () => void;
}

export function HeroSection({ onNextSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50/30 via-white to-[#f8fafc] overflow-hidden pt-20"
    >
      {/* Decorative High-End Background with Building Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroBg}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-[#f8fafc]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Mini Brand Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center space-x-2 bg-indigo-50/80 border border-indigo-100/70 px-4 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" style={{ animationDuration: "6s" }} />
          <span className="text-indigo-700 font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            HUACHUANG YUNXIN × MINGYU GROUP COOPERATION
          </span>
        </motion.div>

        {/* Main Title Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Main heading styled with premium typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-slate-800">
            华创云信与明宇集团
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-indigo-600">
            酒店智能体合作方案
          </h2>
        </motion.div>



        {/* Floating Arrow down indication at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-bounce cursor-pointer flex flex-col items-center text-slate-400 hover:text-indigo-600 transition-colors duration-300" onClick={onNextSection}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
