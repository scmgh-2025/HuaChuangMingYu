/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { Landmark, ArrowUpRight, Cpu } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "company", label: "企业介绍与核心业务" },
    { id: "infra", label: "AI原生基础设施协同再造" },
    { id: "matrix", label: "丰富的AI智能体能力矩阵" },
    { id: "roadmap", label: "合作模式与落地规划" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo Brand Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 shadow-sm">
              <Cpu className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-sans font-bold text-sm sm:text-base text-slate-800 tracking-wide">
                  华创云信
                </span>
                <span className="text-slate-300 text-xs font-light">×</span>
                <span className="font-sans font-bold text-sm sm:text-base text-indigo-600 tracking-wide">
                  明宇集团
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider">
                HOTEL INTELLIGENT AGENT
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50/50"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to action */}
          <div className="flex items-center space-x-3">
          </div>
        </div>
      </div>

      {/* Progress Bar indicator */}
      <div className="w-full h-1 bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
