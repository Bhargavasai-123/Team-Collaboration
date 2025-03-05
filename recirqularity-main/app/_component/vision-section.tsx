"use client";
import { useState } from "react";
import Image from "next/image";

export default function VisionSection() {
  const [showMore, setShowMore] = useState(false);

  const visionItems = [
    {
      icon: "/images/Waste_Management.png",
      title: "Waste Management",
      description: "Divert 32,000 tons of waste from landfills in first year.",
    },
    {
      icon: "/images/Emission_Reduction.png",
      title: "Emission Reduction",
      description:
        "Reduce 15,000 tons of CO₂-equivalent emissions in first year.",
    },
    {
      icon: "/images/Employment_nclusion.png",
      title: "Employment & Inclusion",
      description:
        "Create 370+ direct jobs (targeting 75% women workforce) and indirectly benefit 2,000+ livelihoods.",
    },
    {
      icon: "/images/Behavioral_Change.png",
      title: "Behavioral Change",
      description:
        "Engaging over citizens and society through behvaiour change campaigns to segregate waste.",
    },
    {
      icon: "/images/Zero-Waste_Model.png",
      title: "Zero-Waste to Landfill Circular Model",
      description:
        "Implement 100% traceability and transparency across the value chain.",
    },

  ];

  return (
    <section id="vision" className="py-12 bg-[#F0F5F5] px-12">
      <h2 className="text-2xl font-bold text-[#024242] mb-6 underline">
        Our Vision
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {visionItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#e6f0f0] p-4 rounded-md flex flex-col items-center text-center"
          >
            <div className="mb-3">
              <Image
                src={item.icon}
                alt={item.title}
                height={50}
                width={50}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#024242] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#024242] hover:underline text-sm"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
      {showMore && (
        <div className="p-4 mt-6 text-gray-700 rounded-md">
          <p className="text-gray-700">
            ReCirqularity aims to set new benchmarks in recycled polymer quality
            in India by producing international-grade recycled polymers at a
            cost competitive with virgin plastics. It is also building
            capabilities to manufacture food-grade recycled polymers in line
            with European standards, a milestone no Indian entity has yet
            achieved. ReCirqularity will also aim to achieve brand to brand
            circularity of plastic waste for HDPE and PP polymers in India.
          </p>

          {/* <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Our Estimated Social and Environmental Impact
          </h3>
          <p className="text-gray-700">
            In its first year of operations, ReCirqularity will:{" "}
          </p>
          <ul className="pl-6 text-gray-700 list-disc">
            <li>
              <strong>Waste Management:</strong> Divert 32,000 tons of waste
              from landfills.
            </li>
            <li>
              <strong>Emission Reduction:</strong> Reduce 15,000 tons of
              CO₂-equivalent emissions.
            </li>
            <li>
              <strong>Employment & Inclusion:</strong> Create 370+ direct jobs
              (targeting 75% women workforce) and indirectly benefit 2,000+
              livelihoods.
            </li>
            <li>
              <strong>Behavioral Change:</strong> Engaging citizens and society
              through behavior change campaigns to segregate waste.
            </li>
            <li>
              <strong>Zero-Waste to Landfill Circular Model:</strong> Implement
              100% traceability and transparency across the value chain.
            </li>
          </ul> */}

          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Our Future Plans
          </h3>
          <p className="text-gray-700">
            After our initial success in Hyderabad, ReCirqularity aims to expand
            its operations to 20 Indian cities with a focus on sustainability,
            scalability, and innovation.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Our Right to Win
          </h3>
          <p className="text-gray-700">
            With assured waste procurement, advanced technology deployment,
            social and community integration, and industry mentorship,
            ReCirqularity is positioned to redefine waste management and lead
            the plastics circularity market in India.
          </p>

          <p className="text-gray-700">
            ReCirqularity is shaping a sustainable future by fostering
            innovation, environmental stewardship, and social responsibility in
            the waste management sector.
          </p>
        </div>
      )}
    </section>
  );
}
