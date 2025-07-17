import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const menuList = [
  {
    name: "Privacy Policy",
    url: "#",
    icon: null,
  },
  {
    name: "Cookies Policy",
    url: "#",
    icon: null,
  },
  {
    name: "ig",
    url: "#",
    icon: Instagram,
  },
  {
    name: "fb",
    url: "#",
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="bg-sunflower">
      <Container>
        <div className="flex items-center justify-center flex-col py-8">
          <Paragraph
            size="lg"
            className="text-midnight font-semibold text-center"
          >
            &copy;2025 Copyright by Sarana. All right reserved
          </Paragraph>
          <br />
          <div className="flex gap-2.5 items-center justify-center">
            {menuList.map((a, b) => {
              const Icon = a.icon !== null && a.icon;
              return (
                <div key={b}>
                  <Link href={a.url}>
                    {!Icon && (
                      <Paragraph className="font-semibold text-midnight">
                        {a.name}
                      </Paragraph>
                    )}
                    {Icon && (
                      <span>
                        <Icon />
                      </span>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
