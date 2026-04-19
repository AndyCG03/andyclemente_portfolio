"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.addEventListener("load", () => {
      setTimeout(() => setIsLoading(false), 300);
    });

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b1326] flex flex-col items-center justify-center">
      {/* Círculo giratorio con logo centrado */}
      <div className="relative mb-8">
        <div className="w-20 h-20 border-4 border-[#2d3449] rounded-full animate-spin border-t-[#4be277]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/icono.png"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </div>

      {/* Texto de carga */}
      <p className="font-mono text-sm text-[#4be277] animate-pulse">
        Loading...
      </p>
    </div>
  );
}