/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CompanySection } from "./components/CompanySection";
import { InfraSection } from "./components/InfraSection";
import { MatrixSection } from "./components/MatrixSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ClosingSection } from "./components/ClosingSection";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Scroll handler to detect which section is active in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "company", "infra", "matrix", "roadmap", "closing"];
      const scrollPos = window.scrollY + 200; // Offset for trigger point

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly for our sticky header
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Premium Header Nav Bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main className="w-full">
        {/* Cover / Hero Page */}
        <HeroSection onNextSection={() => handleNavigate("company")} />

        {/* Company profile & core business units */}
        <CompanySection />

        {/* AI native infrastructure and successful stories */}
        <InfraSection />

        {/* Dynamic Hotel AI Agent capability matrix */}
        <MatrixSection />

        {/* Custom co-operation modes & 3 stages implementation roadmap */}
        <RoadmapSection />

        {/* Final Epic centers statement "携手并进，共创智慧酒店新纪元" and feedback board */}
        <ClosingSection />
      </main>
    </div>
  );
}
