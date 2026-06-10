/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { AGENT_MATRIX } from "../data";
import card2 from "../../assets/2.png";
import card3 from "../../assets/3.png";
import card4 from "../../assets/4.png";
import card6 from "../../assets/6.png";
import card8 from "../../assets/8.png";
import card15 from "../../assets/15.png";
import card9 from "../../assets/9.jpg";
import card11 from "../../assets/11.png";
import card10 from "../../assets/10.png";
import { 
  Users, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Workflow,
  MessageSquare,
  ClipboardList,
  BarChart3
} from "lucide-react";

export function MatrixSection() {
  // Get matching icon for role
  const getRoleIcon = (id: string, size = "w-5 h-5") => {
    switch (id) {
      case "01":
        return <Users className={`${size} text-indigo-400`} />;
      case "02":
        return <Workflow className={`${size} text-purple-400`} />;
      case "03":
        return <TrendingUp className={`${size} text-amber-400`} />;
      default:
        return <Cpu className={`${size} text-slate-400`} />;
    }
  };

  return (
    <section
      id="matrix"
      className="relative py-24 bg-white overflow-hidden border-b border-slate-100"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-50/50 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-purple-50/50 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-mono tracking-widest text-indigo-600 uppercase font-semibold mb-2">
            03 / AI AGENT CAPABILITY MATRIX
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-800 tracking-tight">
            三、丰富的AI智能体能力矩阵
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-4" />
        </div>

        {/* 3 Aligned Flat Rows */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Row 1: 面向住客 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl border border-slate-100 bg-[#f8fafc]/30 shadow-xs hover:border-slate-200/80 hover:shadow-md transition-all duration-300">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-800 tracking-tight">
                  面向住客：全流程智能体验
                </h3>

              </div>

              <div className="space-y-3 mt-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    "智能问答", "客房服务", "吐槽评价", "周边推荐", "订房购物", "天气助手", "酒店管家", "黄小西行程伴侣", "本地推荐官", "健康小妙招", "睡眠助手眠眠", "亲子陪伴", "邀约小管家", "会议邀请助手"
                  ].map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-sans font-medium bg-indigo-50/60 text-indigo-800 border border-indigo-100/50 hover:bg-indigo-100 hover:border-indigo-200 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-3 gap-2 sm:gap-4 justify-center w-full">
              {/* Phone Mockup 1-A */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-indigo-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card2} alt="AI小宇管家" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Phone Mockup 1-B */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-indigo-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card3} alt="智控中心" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Phone Mockup 1-C */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-indigo-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card4} alt="专属权益进度" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 面向员工 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl border border-slate-100 bg-[#f8fafc]/30 shadow-xs hover:border-slate-200/80 hover:shadow-md transition-all duration-300">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-800 tracking-tight">
                  面向员工：运营提质提效
                </h3>

              </div>

              <div className="space-y-3 mt-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    "客房工单处理", "住客吐槽管理", "行李寄存管理", "订单管理与交易管理", "前台记事交班助手", "AI营销"
                  ].map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-sans font-medium bg-purple-50/60 text-purple-800 border border-purple-100/50 hover:bg-purple-100 hover:border-purple-200 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-3 gap-2 sm:gap-4 justify-center w-full">
              {/* Phone Mockup 2-A */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-purple-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card6} alt="AI调度系统" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Phone Mockup 2-B */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-purple-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card8} alt="我的个人工单" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Phone Mockup 2-C */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-purple-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card15} alt="AI 交接日志" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: 面向管理 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl border border-slate-100 bg-[#f8fafc]/30 shadow-xs hover:border-slate-200/80 hover:shadow-md transition-all duration-300">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-800 tracking-tight">
                  面向管理：经营与收益双赢
                </h3>

              </div>

              <div className="space-y-3 mt-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    "运营数据统计", "客户数据统计", "收入数据统计", "房价竞价", "热点活动", "自营商城", "平台商城", "融资匹配", "组织架构管理"
                  ].map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-sans font-medium bg-amber-50/60 text-amber-800 border border-amber-100/50 hover:bg-amber-100 hover:border-amber-200 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-3 gap-2 sm:gap-4 justify-center w-full">
              {/* Phone Mockup 3-A */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-amber-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card9} alt="实时经营大盘" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Phone Mockup 3-B */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-amber-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card11} alt="假日营销与竞价" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Phone Mockup 3-C */}
              <div className="relative w-full max-w-[155px] sm:max-w-[175px] aspect-[9/18.5] border-[4px] border-slate-900 rounded-[22px] shadow-lg bg-slate-950 p-[1px] overflow-hidden select-none shadow-amber-100/30 transition-transform duration-300 hover:scale-125 hover:shadow-xl">


                {/* Screen context */}
                <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden">
                  <img src={card10} alt="可信融信数联" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
