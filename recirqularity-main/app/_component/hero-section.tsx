"use client";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const duration = 12;
  const intervalSpeed = (duration * 1000) / 100;
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Image arrays for mobile and desktop
  const desktopImages = [
    "/images/banner_silde1.jpeg",
    "/images/banner_silde2.jpeg",
  ];
  const mobileImages = [
    "/images/banner_silde1.jpeg",
    "/images/banner_mob2.jpg",
  ];

  const [images, setImages] = useState<string[]>(desktopImages);

  // Detect screen width
  useEffect(() => {
    const updateScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setImages(mobile ? mobileImages : desktopImages);
    };

    updateScreenSize(); // Run on mount
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setProgress(0);
          if (sliderRef.current) {
            sliderRef.current.slickNext();
          }
        }
        return prev + 2;
      });
    }, intervalSpeed);

    return () => clearInterval(progressInterval);
  }, [intervalSpeed, images.length]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    arrows: false,
  };

  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const arrowRotation = (progress / 100) * 360 - 20;

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden text-white"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-screen">
        <Slider ref={sliderRef} {...settings} className="w-full h-screen">
          {images.map((img, index) => (
            <div key={index} className="w-full h-screen">
              <div
                className="w-full h-screen bg-center bg-cover"
                style={{ backgroundImage: `url('${img}')` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-2xl font-bold md:text-4xl">
          Welcome to ReC{" "}
          <span>
            <svg
              className="absolute w-44 md:w-auto h-44 md:h-auto right-[1px] top-[-70px] md:right-[-66px] md:top-[-100px] "
              width="250"
              height="250"
              viewBox="0 0 80 80"
            >
              {/* Background Circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="#ffffff40"
                strokeWidth="0.5"
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="#ffffff"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-170 40 40)"
              />
              {/* Arrow Indicator */}
              <g
                transform={`rotate(${arrowRotation} 40 40) translate(13, 20) rotate(20)`}
              >
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4469 15.2632C19.9105 15.2632 20.3852 15.1087 20.7716 14.7885C21.6548 14.0599 21.7873 12.7462 21.0587 11.863L11.9287 0.790039L0.855811 9.91997C-0.0273739 10.6486 -0.159854 11.9623 0.568774 12.8455C0.977247 13.3423 1.5734 13.6073 2.18059 13.6073C2.64426 13.6073 3.11897 13.4527 3.50537 13.1326L11.3657 6.65218L17.8461 14.5125C18.2546 15.0093 18.8507 15.2743 19.4579 15.2743L19.4469 15.2632Z"
                    fill="white"
                  />
                </svg>
              </g>
            </svg>
          </span>{" "}
          rqularity
        </h1>

        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Transforming today into a sustainable tomorrow
        </p>
      </div>
    </section>
  );
}
