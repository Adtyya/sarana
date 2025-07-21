import { Heading } from "@/components/text/heading";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import { Star, ChartLine, HeartHandshake } from "lucide-react";
import React from "react";

const featureList = [
  {
    title: "Efficient and User Friendly",
    subtitle:
      "Even though we have now developed an efficient and user-friendly online booking system, our ethos is to keep the small business mentality and treat each customer with the time and care they deserve.",
    icon: <Star className="fill-black" size={36} />,
  },
  {
    title: "Affordable Rate",
    subtitle:
      "Our platform allows you to book for delivery from multiple established courier companies and provide hassle free international shipment service at an affordable rate. <br /> <br /> Sarana understands the pain points of Indonesian businesses and individuals looking for a reliable and speedy but cost effective and no hassle way to send their documents and parcels.",
    icon: <ChartLine size={36} />,
  },
  {
    title: "Reliance",
    subtitle:
      "With many years of experience in shipping and Ecommerce, the Kurasi team has formulate a better yet cost effective way to ship. <br /> <br /> Over the years, many friends and businesses has unofficially leverage our shipping methods. The team felt it is time for us to open our doors to extend our shipping services to more businesses and individuals.",
    icon: <HeartHandshake size={36} />,
  },
];

export default function Features() {
  return (
    <Container>
      <div className="py-12">
        <div className="block lg:hidden">
          <Heading level={1} className="text-center">
            International eCommerce Shipping Solutions Provider
          </Heading>
          <br />
          <Paragraph size="lg">
            {`"Sarana is your one-stop platform for easy and reliable delivery
            service bookings. We specialize in consolidating parcels and
            providing seamless cross-border shipping solutions for E-commerce —
            all through a simple, web-based system designed to make shipping
            faster, easier, and stress-free."`}
          </Paragraph>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featureList.map((a, b) => {
            return (
              <Card
                key={b}
                title={a.title}
                icon={a.icon}
                subtitle={a.subtitle}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

function Card(props: CardProps) {
  return (
    <div className="bg-reverse-golden-gradient lg:bg-golden-gradient p-5 rounded-3xl">
      <Heading level={3} className="flex gap-2.5 items-star justify-center">
        <span>{props.icon}</span>
        <span className="font-normal">{props.title}</span>
      </Heading>
      <br />
      <Paragraph
        className="!text-black leading-relaxed whitespace-pre-line"
        size="lg"
        dangerouslySetInnerHTML={{ __html: props.subtitle }}
      />
    </div>
  );
}
