import { Heading } from "@/components/text/heading";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { aboutUsCar } from "@/components/constant/image";

export default function AboutUs() {
  return (
    <Container>
      <div className="grid grid-cols-7 gap-2.5 items-center py-12">
        <div className="hidden lg:col-span-2 lg:flex items-center justify-center">
          <Image
            src={aboutUsCar}
            alt="about_us_car"
            width={272}
            height={262}
            quality={100}
            fetchPriority="low"
          />
        </div>
        <div className="col-span-full lg:col-span-5 text-center">
          <Heading level={3} className="capitalize !font-normal">
            About Us
          </Heading>
          <br />
          <Paragraph size="lg">
            {`"Sarana is your one-stop platform for easy and reliable delivery
            service bookings. We specialize in consolidating parcels and
            providing seamless cross-border shipping solutions for E-commerce —
            all through a simple, web-based system designed to make shipping
            faster, easier, and stress-free."`}
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
      </div>
    </Container>
  );
}
