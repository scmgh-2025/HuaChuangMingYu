/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Server, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm gap-6">
        {/* Left Side: Branding and copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className="font-sans font-medium text-slate-700">
            华创云信与明宇集团联合项目工作组
          </p>
          <p className="text-slate-400 text-xs">
            © {currentYear} Huachuang Yunxin & Mingyu Group. All rights reserved.
          </p>
        </div>

        {/* Center Side: Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-500">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>电信级安全防护</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Server className="w-4 h-4 text-indigo-600" />
            <span>AI原生高并发集群</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Globe className="w-4 h-4 text-purple-600" />
            <span>全栈文旅数联生态</span>
          </div>
        </div>

        {/* Right Side: Stock numbers info & guidelines compliance */}
        <div className="text-center md:text-right space-y-1">
          <p className="font-mono text-xs text-slate-400 tracking-tight">
            华创云信代码：SH.600155 | 明宇集团
          </p>
          <p className="text-xs text-indigo-600 font-sans font-medium">
            赋能文旅酒店，重塑数智底座
          </p>
        </div>
      </div>
    </footer>
  );
}
