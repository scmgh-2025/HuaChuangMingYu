/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { INFRASTRUCTURE_POINTS, CORE_ACHIEVEMENTS } from "../data";
import { 
  Network, 
  MapPin, 
  Workflow, 
  Target, 
  Map, 
  Hotel, 
  ArrowRight, 
  Activity,
  Layers,
  Sparkles,
  Award
} from "lucide-react";

export function InfraSection() {
  // Get icon for infrastructure points
  const getInfraIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Award className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <Workflow className="w-5 h-5 text-purple-600" />;
      case 3:
        return <Target className="w-5 h-5 text-amber-600" />;
      default:
        return <Activity className="w-5 h-5 text-slate-500" />;
    }
  };

  // Helper to render content with bold headers parsed by colon (Chinese '：')
  const renderContentWithBoldTitles = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      const parts = paragraph.split("：");
      if (parts.length > 1) {
        return (
          <p key={index} className="mb-3 last:mb-0">
            <strong className="font-bold text-slate-800">{parts[0]}：</strong>
            <span>{parts.slice(1).join("：")}</span>
          </p>
        );
      }
      return (
        <p key={index} className="mb-3 last:mb-0">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <section
      id="infra"
      className="relative py-24 bg-[#f8fafc] overflow-hidden border-b border-slate-100"
    >
      {/* Visual Background decorative grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[20%] w-[450px] h-[450px] rounded-full bg-purple-100/40 blur-[120px]" />
        <div className="absolute top-0 right-[25%] w-[350px] h-[350px] rounded-full bg-indigo-100/40 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-4xl mb-16 text-left">
          <p className="text-sm font-mono tracking-widest text-indigo-600 uppercase font-semibold mb-2">
            02 / AI INFRASTRUCTURE & SYNERGY
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-800 tracking-tight">
            二、AI原生基础设施协同再造
          </h2>
          <p className="font-sans font-medium text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-3xl">
            双方共同推动从IT基础设施到组织流程的AI原生重构，实现前端到后端的全面智能化。
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-4" />
        </div>

        {/* 3 Strategy Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 animate-fade-in-up">
          {INFRASTRUCTURE_POINTS.map((pt) => (
            <div
              key={pt.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              {/* Highlight gradient bar */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 group-hover:bg-indigo-100/70 transition-colors duration-300">
                    {getInfraIcon(pt.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                      STRATEGY 0{pt.id}
                    </span>
                    <h3 className="font-sans font-bold text-base text-slate-800">
                      {pt.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans font-bold text-sm text-indigo-600 leading-snug">
                  {pt.subtitle}
                </p>

                <div className="font-sans font-normal text-sm sm:text-base text-slate-500 leading-relaxed pt-2">
                  {renderContentWithBoldTitles(pt.content)}
                </div>
              </div>

              {/* Dynamic decorative line linking at the bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>AI NATIVE PARADIGM</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-indigo-500">→</span>
              </div>
            </div>
          ))}
        </div>




      </div>
    </section>
  );
}
