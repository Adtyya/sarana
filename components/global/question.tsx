import { Button } from "@/components/button/button";
import { Heading } from "@/components/text/heading";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import Link from "next/link";

export default function Question() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-12">
        <div className="flex-1">
          <Heading level={2}>
            Still Have Question?{" "}
            <span className="text-sunflower">Contact Us</span>
          </Heading>
          <br />
          <Paragraph size="lg" className="font-semibold">
            {`We’re always ready to help—reach out anytime via phone, email, or our social media channels. No question is too small, and your comfort is our priority.`}
          </Paragraph>
        </div>
        <div className="w-full md:w-auto">
          <Button className="w-fit md:w-auto" type="button">
            <Link href={"#"}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
