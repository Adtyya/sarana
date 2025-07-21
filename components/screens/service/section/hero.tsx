import Image from "next/image";
import { servicePageHero } from "@/components/constant/image";
import { Heading } from "@/components/text/heading";
import { Paragraph } from "@/components/text/paragraph";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-5.5rem)] w-full overflow-hidden">
      {/* Layer background image */}
      <Image
        src={servicePageHero}
        fill
        alt="homepagehero"
        quality={100}
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-center text-center bg-black/30">
        <Heading level={1} className="text-sunflower">
          Our Services
        </Heading>
        <Paragraph size="lg" className="text-white">
          Sarana Shipping
        </Paragraph>
      </div>
    </div>
  );
}
