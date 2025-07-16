import Image from "next/image";
import { appLogoYellow, homePageHero } from "@/components/constant/image";
import { Heading } from "@/components/text/heading";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-5.5rem)] w-full overflow-hidden">
      {/* Layer background image */}
      <Image
        src={homePageHero}
        fill
        alt="homepagehero"
        quality={100}
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-center text-start bg-black/30">
        <div className="bg-sunflower w-fit px-10 py-5 rounded-tr-3xl rounded-br-3xl flex items-center">
          <Image
            src={appLogoYellow}
            alt="app_logo_yellow"
            width={149}
            height={128}
          />
          <Heading className="uppercase text-midnight" level={1}>
            sarana shipping
          </Heading>
        </div>

        <br />

        <div className="bg-midnight w-fit px-10 py-5 rounded-tr-3xl rounded-br-3xl">
          <Heading className="capitalize text-sunflower !font-normal" level={3}>
            Your Goods, Our Guarantee
          </Heading>
        </div>
      </div>
    </div>
  );
}
