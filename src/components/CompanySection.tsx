/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HUACHUANG_INTRO, BUSINESS_UNITS } from "../data";
import { 
  Briefcase, 
  Cpu, 
  Coins, 
  MapPin, 
  TrendingUp, 
  Search, 
  CheckCircle2, 
  Utensils, 
  Bed, 
  Car, 
  Compass, 
  ShoppingBag, 
  Tv 
} from "lucide-react";

export function CompanySection() {
  // Icons matching the business units
  const getUnitIcon = (id: number) => {
    switch (id) {
      case 1:
        return <TrendingUp className="w-5 h-5 text-indigo-555" />;
      case 2:
        return <Cpu className="w-5 h-5 text-purple-555" />;
      case 3:
        return <Coins className="w-5 h-5 text-amber-555" />;
      default:
        return <Briefcase className="w-5 h-5 text-slate-555" />;
    }
  };

  // Badges color schemas
  const getBadgeClass = (id: number) => {
    switch (id) {
      case 1:
        return "bg-indigo-50 text-indigo-600 border-indigo-100";
      case 2:
        return "bg-purple-50 text-purple-600 border-purple-100";
      case 3:
        return "bg-amber-50 text-amber-700 border-amber-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  // Yellow-Xixi categories helper
  const travelCapabilities = [
    { label: "吃", cn: "餐饮美食", icon: <Utensils className="w-4 h-4 text-emerald-500" /> },
    { label: "住", cn: "精品酒店", icon: <Bed className="w-4 h-4 text-sky-500" /> },
    { label: "行", cn: "交通出行", icon: <Car className="w-4 h-4 text-indigo-500" /> },
    { label: "游", cn: "景区游玩", icon: <Compass className="w-4 h-4 text-purple-500" /> },
    { label: "购", cn: "特产购物", icon: <ShoppingBag className="w-4 h-4 text-pink-500" /> },
    { label: "娱", cn: "文娱演出", icon: <Tv className="w-4 h-4 text-rose-500" /> },
  ];

  return (
    <section
      id="company"
      className="relative py-24 bg-white overflow-hidden border-y border-slate-100"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-[5%] w-[350px] h-[350px] rounded-full bg-indigo-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-mono tracking-widest text-indigo-600 uppercase font-semibold mb-2">
            01 / ENTERPRISE PROFILE
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-800 tracking-tight">
            一、华创云信企业介绍与核心业务
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-4" />
        </div>

        {/* Introduction Text Block - Full Row */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-12 space-y-3">
              <span className="font-mono text-sm text-slate-400 tracking-wider">
                STOCK CODE: {HUACHUANG_INTRO.stockCode}
              </span>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-800">
                {HUACHUANG_INTRO.name}
              </h3>
              <p className="font-sans font-normal text-base text-slate-600 leading-relaxed">
                {HUACHUANG_INTRO.overview}
              </p>
            </div>
          </div>
        </div>

        {/* Core Businesses Heading */}
        <div className="mb-6 mt-12 text-left">
          <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800 tracking-tight flex items-center gap-2">
            <span className="h-5 w-1 bg-indigo-600 rounded-full" />
            核心业务
          </h3>
        </div>

        {/* Core Businesses Showcase - 3-Column Grid without transition switching */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS_UNITS.map((unit) => (
            <div
              key={unit.id}
              className="relative rounded-2xl bg-white border border-slate-150 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-slate-800 flex items-center space-x-2">
                  <span>{unit.title}</span>
                </h3>

                <p className="font-sans font-normal text-sm sm:text-base text-slate-500 leading-relaxed mt-3.5">
                  {unit.description}
                </p>
              </div>

              {/* Display metric indicators or default fallback bottom panel */}
              {unit.metrics ? (
                <div className="pt-4 mt-6 border-t border-slate-100 space-y-3">
                  <p className="text-sm text-slate-400 font-sans font-bold tracking-wide">
                    截至2025年末
                  </p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {unit.metrics.map((m, i) => (
                      <div key={i} className="text-left">
                        <p className="text-[13px] text-slate-400 tracking-wider font-mono uppercase font-semibold whitespace-nowrap">
                          {m.label}
                        </p>
                        <div className="flex items-baseline mt-1 flex-nowrap whitespace-nowrap">
                          <span className="font-mono font-extrabold text-indigo-600 text-[20px] sm:text-2xl shrink-0">
                            {m.value}
                          </span>
                          <span className="text-sm text-slate-400 ml-1 font-sans shrink-0">
                            {m.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>TECHNOLOGY CAPABILITY</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Breakthrough highlight card - formatted as a full-width line/row ("一整行") */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-slate-100 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <h4 className="font-sans font-bold text-xl sm:text-2xl text-slate-800">
                  旅游智能体生态
                </h4>
              </div>
              <p className="font-sans font-normal text-sm sm:text-base text-slate-650 leading-relaxed">
                2024年，由<span className="font-bold text-slate-800">贵州旅游产业发展集团</span>与<span className="font-bold text-slate-800">华创云信</span>组建<span className="font-bold text-slate-800">贵旅数网公司</span>，按照贵州省委、省政府指导要求，紧扣大数据赋能文旅产业高质量发展的战略部署，推动建设了覆盖"吃、住、行、游、购、娱"全链条的全省一站式<span className="font-bold text-slate-800">旅游智能服务总入口"多彩黄小西"</span>，形成涵盖景区、酒店、餐饮、个人、游客等涉旅场景的智能体体系。
              </p>
            </div>
          </div>
        </div>

        {/* Hotel Agent Scale and Impact Card or DuoCaihuangxiaoxi Embedded Portal */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-150 shadow-sm bg-slate-50">
          <div className="p-1.5 bg-white border-b border-slate-150"></div>
          <div className="relative w-full h-[2200px] md:h-[1800px] lg:h-[1600px] bg-white overflow-hidden">
            <iframe 
              src="https://scmgh-2025.github.io/DuoCaihuangxiaoxiSenTai/" 
              className="absolute inset-0 w-full h-full border-none overflow-hidden"
              title="多彩黄小西智能体服务生态"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              scrolling="no"
              style={{ overflow: 'hidden' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
