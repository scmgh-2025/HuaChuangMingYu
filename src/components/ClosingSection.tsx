/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative py-28 bg-white overflow-hidden flex flex-col items-center justify-center text-center border-t border-slate-100"
    >
      {/* Dynamic Background visual highlights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-50/50 blur-[160px] animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-50/40 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Gaint Grand centered slogans */}
        <div className="space-y-6 pt-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 rounded-full text-sm font-semibold tracking-widest text-indigo-700 font-sans"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HUACHUANG YUNXIN × MINGYU GROUP CO-OP VISION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-slate-800 py-2 leading-tight whitespace-nowrap"
          >
            “携手并进，共创智慧酒店新纪元”
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
