"use client";

import { useState, useEffect } from "react";
import AnimatedLogo from "./animated-logo";
import Image from "next/image";

const banners = [
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
];

export default function HomeSection() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds (after logo animation completes)
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBanner) return;

    // Change banner every 5 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [showBanner]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      {!showBanner ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <AnimatedLogo />
          <h1 className="text-4xl font-bold text-[#024242] mt-8">
            ReCirqularity
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Recycled polyolefins from mixed municipal waste
          </p>
        </div>
      ) : (
        <div className="w-full h-screen relative overflow-hidden">
          <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
            <Image
              src={banners[currentBanner] || "/placeholder.svg"}
              alt="Recycled polyolefins banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
