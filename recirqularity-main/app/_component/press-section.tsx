import PressSlider from "./PressSlider";

export default function PressSection() {
  const pressItems = [
    {
      id: 1,
      image: "/images/slide1.png",
      caption: "Plastics recycling project",
      source: "The Hindu",
      url: "https://www.thehindu.com/news/cities/Hyderabad/plastics-recycling-project-to-be-rolled-out-in-hyderabad-raipur/article68626023.ece",
    },
    {
      id: 2,
      image: "/images/slide2.png",
      caption: "Re Sustainability joint venture",
      source: "Times of India",
      url: "https://timesofindia.indiatimes.com/city/hyderabad/re-sustainability-sharrp-ventures-form-joint-venture/articleshow/113240092.cms",
    },
    {
      id: 3,
      image: "/images/slide3.png",
      caption: "Plastic circularity partnership",
      source: "The Indian Express",
      url: "https://indianexpress.com/article/cities/hyderabad/re-sustainability-sharrp-ventures-plastic-circularity-9560514/#:~:text=The%20joint%20venture%20aims%20to,materials%20for%20various%20FMCG%20applications",
    },
    {
      id: 4,
      image: "/images/slide4.png",
      caption: "Circularity partnership",
      source: "The Indian Express",
      url: "https://www.maricoinnovationfoundation.org/insight/landmark-circular-economy-initiative-recycle-plastic-waste/",
    },
  ];

  return (
    <section id="press" className="py-12">
      <h2 className="text-2xl font-bold text-[#024242] mb-6 underline">
        In the Press
      </h2>
      <PressSlider pressItems={pressItems} />
    </section>
  );
}
