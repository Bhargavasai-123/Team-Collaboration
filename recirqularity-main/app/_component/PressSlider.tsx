"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface PressItem {
  id: number;
  image: string;
  caption: string;
  source: string;
  url: string;
}

interface PressSliderProps {
  pressItems: PressItem[];
}

export default function PressSlider({ pressItems }: PressSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {pressItems.map((item) => (
        <div key={item.id} className="px-2">
          <div
            className="relative overflow-hidden border border-gray-200 rounded-md cursor-pointer"
            onClick={() => window.open(item.url, "_blank")}
          >
            <div className="relative w-full aspect-square">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute p-3 text-center text-white rounded-xl bottom-3 left-1 right-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(4,55,50,0.9) 0%, rgba(11,157,143,0.9) 100%)",
              }}
            >
              <p className="text-sm">{item.caption}</p>
              <p className="text-xs opacity-80">{item.source}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
