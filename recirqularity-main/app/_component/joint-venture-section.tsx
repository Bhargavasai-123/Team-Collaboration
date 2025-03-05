import Image from "next/image";

export default function JointVentureSection() {
  return (
    <section className="py-6">
      <h3 className="text-xl font-bold text-[#024242] mb-4 text-center">
        Joint Venture Between
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="relative h-12">
          <Image
            src="/images/RE_Susyainability.png"
            alt="Re Sustainability Logo"
            // fill
            height={112}
            width={134}
            className="object-contain"
          />
        </div>
        <div className="relative h-12">
          <Image
            src="/images/sharrp_ventures.png"
            height={112}
            width={236}
            alt="Plastic Energy Logo"
            // fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
