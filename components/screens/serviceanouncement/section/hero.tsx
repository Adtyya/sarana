import Image from "next/image";
import { anouncPageHero } from "@/components/constant/image";
import { Heading } from "@/components/text/heading";
import { Paragraph } from "@/components/text/paragraph";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-5.5rem)] w-full overflow-hidden">
      {/* Layer background image */}
      <Image
        src={anouncPageHero}
        fill
        alt="homepagehero"
        quality={100}
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 z-10 hidden lg:flex flex-col justify-center text-start bg-black/30">
        <div className="grid grid-cols-2 h-full w-full">
          <div></div>
          <div className="w-full h-full bg-white rounded-l-[120px] flex flex-col justify-center px-10">
            <Heading
              level={1}
              className="font-normal text-midnight leading-snug"
            >
              Sarana Shipping Service to United Kingdom
            </Heading>
            <br />
            <Paragraph className="text-midnight" size="lg">
              {`KURASI as a whole is a web-based parcel consolidator and E-commerce cross-border shipping solutions provider, or to put it into simple words, we provide an easy-access solution for delivery service bookings.`}
            </Paragraph>
            <br />
            <Paragraph className="text-midnight" size="lg">
              {` Established in 2018, this company was formed with a mission in mind; that is to provide a simplified shipping platform where businesses could book any manner of consignment for delivery at prices they could not achieve themselves, backed up with the knowledge and expertise of an industry veteran.`}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex lg:hidden flex-col justify-center text-center bg-black/30 px-1.5">
        <Heading level={1} className="text-sunflower">
          Sarana Shipping Service to United Kingdom
        </Heading>
        <Paragraph size="lg" className="text-white">
          Your Goods, Our Guarantee
        </Paragraph>
      </div>
    </div>
  );
}
