"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AnimatedLogo() {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    if (!arrow) return;

    // Animation setup
    let rotation = 0;
    let animationId: number;
    let isAnimating = true;

    const animate = () => {
      if (!isAnimating) return;

      rotation += 2;
      if (rotation >= 360) {
        rotation = 0;
        isAnimating = false;
        return;
      }

      arrow.style.transform = `rotate(${rotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RECIIRCULARITY_FINAL%20LOGO_02-02-PhkGGnXSdn5xXi4cGe0WtdSLIZsBzz.png"
        alt="ReCirqularity Logo"
        width={250}
        height={250}
        className="w-full h-full"
      />
      <svg
        ref={arrowRef}
        className="absolute top-[30%] left-[48%] w-6 h-6 text-[#024242]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transformOrigin: "center" }}
      >
        <path
          d="M12 5L12 19M12 5L6 11M12 5L18 11"
          stroke="#024242"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
