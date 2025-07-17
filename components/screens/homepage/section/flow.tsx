import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import {
  User,
  CalendarRange,
  CreditCard,
  MapPinCheck,
  ArrowRight,
} from "lucide-react";

const flowList = [
  {
    name: "Registration",
    icon: User,
  },
  {
    name: "Book Shipment",
    icon: CalendarRange,
  },
  {
    name: "Payment",
    icon: CreditCard,
  },
  {
    name: "Tracking",
    icon: MapPinCheck,
  },
];

export default function Flow() {
  return (
    <Container>
      <div className="flex flex-wrap justify-center py-12 gap-x-5 gap-y-8">
        {flowList?.map((a, b) => {
          const getColor = (b: number) => {
            return b % 2 === 0 ? "bg-peach" : "bg-sunflower";
          };

          const Icon = a.icon;

          return (
            <div key={b} className="flex items-center gap-3 flex-wrap">
              <div
                className={`${getColor(
                  b + 1
                )} flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full drop-shadow-sm drop-shadow-black`}
              >
                <span className="mb-2.5">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-black" />
                </span>
                <Paragraph className="!text-black font-semibold text-center text-sm md:text-base">
                  {a.name}
                </Paragraph>
              </div>
              {flowList.length !== b + 1 && (
                <span className="hidden md:inline">
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
