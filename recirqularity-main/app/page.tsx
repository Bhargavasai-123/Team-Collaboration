import Header from "@/app/_component/header";
import HeroSection from "@/app/_component/hero-section";
import AboutSection from "@/app/_component/about-section";
import JointVentureSection from "@/app/_component/joint-venture-section";
import VisionSection from "@/app/_component/vision-section";
import PressSection from "@/app/_component/press-section";
import ContactSection from "@/app/_component/contact-section";
import Footer from "@/app/_component/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
      <Header />
      <HeroSection />
      <div className="px-4 pb-16 mx-auto md:px-6 lg:px-8">
        <AboutSection />
        <JointVentureSection />
      </div>
      <VisionSection />
      <div className="px-4 pb-16 mx-auto md:px-6 lg:px-8">
        <PressSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
