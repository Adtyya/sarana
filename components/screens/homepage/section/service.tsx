import { Heading } from "@/components/text/heading";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { serviceBox } from "@/components/constant/image";

export default function Servive() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-12 w-full max-w-4xl mx-auto">
        <Image
          src={serviceBox}
          width={225}
          height={225}
          alt="service_box"
          quality={100}
          fetchPriority="low"
          className="w-[120] h-[120] lg:w-[255] lg:h-[255]"
        />
        <br />
        <Heading level={3} className="capitalize !font-normal">
          Our Service
        </Heading>
        <br />
        <Paragraph className="text-center">
          {`At Sarana, we proudly bring premium shipping services—once exclusive
          to large global businesses—into the hands of all Indonesians. Whether
          you're a company or an individual, your goods are our top priority,
          and every shipment is backed by our commitment to security, speed, and
          service excellence.`}
        </Paragraph>
        <br />
        <div className="flex items-center justify-center">
          <Link href={"#"}>
            <Paragraph
              size="lg"
              className="text-sunflower w-fit flex items-center"
            >
              <span>Read More</span>{" "}
              <span>
                <ChevronRight size={20} />
              </span>
            </Paragraph>
          </Link>
        </div>
      </div>
    </Container>
  );
}
