/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { COOP_MODES, ROADMAP_STAGES } from "../data";
import { 
  Handshake, 
  Milestone, 
  ArrowRight, 
  Calendar, 
  Compass, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  Check,
  Zap,
  RefreshCw,
  TrendingUp
} from "lucide-react";

export function RoadmapSection() {
  
  // Icon finder for Stage
  const getStageIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Zap className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <RefreshCw className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: "12s" }} />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Milestone className="w-5 h-5 text-slate-400" />;
    }
  };

  // Color mapper for stages
  const getStageColorStyle = (id: number) => {
    switch (id) {
      case 1:
        return {
          border: "border-indigo-100",
          glow: "bg-indigo-50 text-indigo-600",
          text: "text-indigo-600",
          progressLine: "from-indigo-100 to-indigo-50"
        };
      case 2:
        return {
          border: "border-purple-100",
          glow: "bg-purple-50 text-purple-600",
          text: "text-purple-600",
          progressLine: "from-purple-100 to-purple-50"
        };
      case 3:
        return {
          border: "border-amber-100",
          glow: "bg-amber-50 text-amber-700",
          text: "text-amber-700",
          progressLine: "from-amber-100 to-amber-50"
        };
      default:
        return {
          border: "border-slate-100",
          glow: "bg-slate-50 text-slate-600",
          text: "text-slate-600",
          progressLine: "from-slate-100 to-slate-50"
        };
    }
  };

  return (
    <section
      id="roadmap"
      className="relative py-24 bg-[#f8fafc] overflow-hidden border-b border-slate-100"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-purple-50/40 blur-[120px]" />
        <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-mono tracking-widest text-indigo-600 uppercase font-semibold mb-2">
            04 / COOPERATION MODES & ROADMAP
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-800 tracking-tight">
            四、合作模式与落地规划
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-4" />
        </div>

        {/* Part 1: Cooperative Modes */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 mb-8 text-left">
            <Handshake className="w-5 h-5 text-indigo-600" />
            <h3 className="font-sans font-bold text-lg text-slate-800">
              双赢运行：定制化合作模式
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COOP_MODES.map((mode) => (
              <div
                key={mode.id}
                className="relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-300 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                {/* Visual active border-glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500">
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/30 to-purple-500/30" />
                  <div className="absolute inset-y-0 right-0 w-[1.5px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest block">
                    COOP PATTERN 0{mode.id}
                  </span>
                  
                  <h4 className="font-sans font-extrabold text-xl text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {mode.title}
                  </h4>
                  
                  <p className="font-sans font-normal text-sm sm:text-base text-slate-500 leading-relaxed pt-2">
                    {mode.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Implementation Timeline Roadmap */}
        <div>
          <div className="flex items-center space-x-2 mb-10 text-left">
            <Milestone className="w-5 h-5 text-indigo-600" />
            <h3 className="font-sans font-bold text-lg text-slate-800">
              三阶段梯级推进路线图
            </h3>
          </div>

          <div className="relative">
            {/* Timeline connector thread (hidden on mobile, styled nicely on md+) */}
            <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[1.5px] bg-indigo-100/55" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ROADMAP_STAGES.map((stage) => {
                const styles = getStageColorStyle(stage.id);
                return (
                  <div
                    key={stage.id}
                    className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group"
                  >
                    {/* Top corner stage number */}
                    <div className="absolute right-4 top-4 font-mono text-5xl font-black text-slate-100/60 group-hover:text-indigo-100/40 transition-colors pointer-events-none select-none">
                      0{stage.id}
                    </div>

                    <div className="space-y-4">
                      {/* Timeline Header Badge */}
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold font-sans ${styles.glow}`}>
                          {stage.phase}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold font-sans bg-slate-100 text-slate-600">
                          {stage.duration}
                        </span>
                      </div>

                      <h4 className="font-sans font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {stage.title}
                      </h4>

                      {/* Summary explanation */}
                      <p className="font-sans font-normal text-sm sm:text-base text-slate-500 leading-relaxed pt-1">
                        {stage.description}
                      </p>
                    </div>

                    {/* Accent glow line on the bottom of the card on hover */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
