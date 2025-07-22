import { Button } from "@/components/button/button";
import Textarea from "@/components/input/textarea";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import { Phone, Search } from "lucide-react";

export default function TrackingNumber() {
  return (
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <form>
            <Paragraph>
              Enter max 10 tracking numbers and get tracking results
            </Paragraph>
            <br />
            <Textarea
              label="Input your tracking number"
              id="trackingnumber"
              name="trackingnumber"
              rows={5}
              className="mb-3.5"
            />
            <Button
              iconPosition="right"
              icon={<Search size={18} />}
              type="button"
            >
              Search
            </Button>
          </form>
          <div className="grid grid-cols-1 gap-5">
            <div>
              <Paragraph size="xl" className="mb-1.5 font-semibold">
                Rate, Marketing and Partnership
              </Paragraph>
              <a href="mailto:info@sarana.co.id">
                <Paragraph className="underline text-blue-500">
                  info@sarana.co.id
                </Paragraph>
              </a>
            </div>
            <div>
              <Paragraph size="xl" className="mb-1.5 font-semibold">
                Tracking & Customer Support
              </Paragraph>
              <a href="mailto:info@sarana.co.id">
                <Paragraph className="underline text-blue-500">
                  cs@sarana.co.id
                </Paragraph>
              </a>
            </div>
            <div>
              <Paragraph size="xl" className="mb-1.5 font-semibold">
                Our Address
              </Paragraph>
              <Paragraph>
                Jl. Tanjung Duren Raya No. 90A Jakarta Barat 11470
              </Paragraph>
            </div>
            <div className="space-y-1.5">
              <div>
                <a href="tel:+622121199379">
                  <Paragraph className="flex gap-3.5 items-center">
                    <Phone size={18} />
                    <span>+(62) 21 2119 9379</span>
                  </Paragraph>
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/6282122258170"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Paragraph className="flex gap-3.5 items-center">
                    <Phone size={18} />
                    <span>+(62) 821 2225 8170 (WhatsApp)</span>
                  </Paragraph>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
