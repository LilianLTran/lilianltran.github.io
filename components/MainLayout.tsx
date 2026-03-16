"use client";

import { ReactNode, useEffect, useState } from "react";
import MyBio from "@/components/MyBio";
import Navbar from "@/components/NavBar";

const getIsNight = () => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 6;
};

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateThemeByTime = () => {
      setIsDark(getIsNight());
    };

    updateThemeByTime();
    setMounted(true);

    const interval = setInterval(updateThemeByTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <main className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="flex min-h-screen flex-col lg:flex-row dark:bg-neutral-900">
        <MyBio/>

        <section
          className={`min-h-screen w-full transition-colors duration-500 lg:ml-[30%] lg:w-[70%]`}
        >
          <Navbar/>

          <div className="px-6 py-12 lg:px-20 lg:pt-24">{children}</div>
        </section>
      </div>
    </main>
  );
}