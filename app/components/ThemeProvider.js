"use client";
import { useEffect } from "react";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const hour = new Date().getHours();
    const isDark = hour < 6 || hour >= 18;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);
  return children;
} 