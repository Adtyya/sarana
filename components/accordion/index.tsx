// components/ui/accordion.tsx
import React from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { Paragraph } from "@/components/text/paragraph";

export type AccordionItem = {
  title: string;
  content: string;
  open?: boolean;
};

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  return (
    <section
      className={clsx("w-full divide-y divide-midnight/30 rounded", className)}
    >
      {items.map((item, index) => (
        <details key={index} className="p-4 group" open={item.open}>
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-black transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
            <Paragraph size="lg">{item.title}</Paragraph>
            <Plus className="absolute right-0 top-1 w-4 h-4 stroke-black transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <Paragraph className="mt-4">{item.content}</Paragraph>
        </details>
      ))}
    </section>
  );
};

export default Accordion;
