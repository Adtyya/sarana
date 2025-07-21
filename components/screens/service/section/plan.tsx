import SimpleTable, {
  TableColumn,
  TableRow,
} from "@/components/table/responsivetable";
import Accordion, { AccordionItem } from "@/components/accordion";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";

const tableColumn: TableColumn[] = [
  {
    key: "services",
    label: "Services",
  },
  {
    key: "economy_standard",
    label: "Economy Standard",
  },
  {
    key: "economy_plus",
    label: "Economy Plus",
  },
  {
    key: "premium_package",
    label: "Premium Package",
  },
  {
    key: "express",
    label: "Express***",
  },
];

const tableColumn2: TableColumn[] = [
  {
    key: "fee",
    label: "*** Insurance Fee",
  },
  {
    key: "declared",
    label: "Declared Value",
  },
];

const tableRow: TableRow[] = [
  {
    services: "Estimated Delivery",
    economy_standard: "10-25 Business days *",
    economy_plus: "10-15 Business days *",
    premium_package: "5-10 Business days",
    express: "4-8 Business days",
  },
  {
    services: "Ship Worldwide",
    economy_standard: "Ship Worldwide",
    economy_plus: "Ship Worldwide",
    premium_package: "United States only",
    express: "Ship Worldwide",
  },
  {
    services: "Tracking Service",
    economy_standard: "Limited Tracking Service (Acceptance Scan only)",
    economy_plus: "Full Tracking Service",
    premium_package: "Full Tracking Service",
    express: "Full Tracking Service",
  },
  {
    services: "Max Actual Weight",
    economy_standard: "2 Kg",
    economy_plus: "2 Kg",
    premium_package: "3 Kg",
    express: "30 Kg **",
  },
  {
    services: "Maximum Package Size",
    economy_standard:
      "Length + Width + Depth = 50cm The longest side should not exceed 45 cm",
    economy_plus:
      "Length + Width + Depth = 50cm The longest side should not exceed 45 cm",
    premium_package:
      "Length + Width + Depth = 50cm The longest side should not exceed 45 cm",
    express:
      "Length x Width X Depth : 5000 = 30 kg ** There will be additional fee if the package length starts from 120 cm",
  },
  {
    services: "Claim",
    economy_standard:
      "Enquiries could not be raised to start the investigation.  (No Claim Available)",
    economy_plus:
      "Enquiries could be raised to start the investigation.  (Max Claim Up To 50 USD)",
    premium_package:
      "Enquiries could be raised to start the investigation (Max Claim Up To 20 USD)",
    express:
      "Enquiries could be raised to start the investigation. (No Claim Available Without Insurance) ***",
  },
];

const tableRow2: TableRow[] = [
  {
    fee: "IDR 171.870",
    declared: "450 USD and under",
  },
  {
    fee: "2% of Declare Value",
    declared: "Above 450 USD",
  },
];

const accordionData: AccordionItem[] = [
  {
    title: "1. Economy Plus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor velit quis magna consequat, a cursus felis fringilla. In interdum ipsum vitae diam tempor dapibus. Donec bibendum, tellus lobortis volutpat semper, nisi leo aliquam enim, eget rhoncus nunc est a libero. Vestibulum convallis est ac massa sodales semper quis at ante. Aliquam sit amet ornare neque. Vestibulum et lacinia eros. Donec ultricies, velit vestibulum iaculis pulvinar, sapien lorem consequat est, vel sagittis nunc eros ac ipsum. Maecenas consequat justo vehicula varius elementum. Phasellus ornare, tellus et feugiat suscipit, tortor elit rhoncus arcu, nec varius ligula nibh id arcu.",
  },
  {
    title: "2. Premium Package",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor velit quis magna consequat, a cursus felis fringilla. In interdum ipsum vitae diam tempor dapibus. Donec bibendum, tellus lobortis volutpat semper, nisi leo aliquam enim, eget rhoncus nunc est a libero. Vestibulum convallis est ac massa sodales semper quis at ante. Aliquam sit amet ornare neque. Vestibulum et lacinia eros. Donec ultricies, velit vestibulum iaculis pulvinar, sapien lorem consequat est, vel sagittis nunc eros ac ipsum. Maecenas consequat justo vehicula varius elementum. Phasellus ornare, tellus et feugiat suscipit, tortor elit rhoncus arcu, nec varius ligula nibh id arcu.",
  },
  {
    title: "3. Express",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor velit quis magna consequat, a cursus felis fringilla. In interdum ipsum vitae diam tempor dapibus. Donec bibendum, tellus lobortis volutpat semper, nisi leo aliquam enim, eget rhoncus nunc est a libero. Vestibulum convallis est ac massa sodales semper quis at ante. Aliquam sit amet ornare neque. Vestibulum et lacinia eros. Donec ultricies, velit vestibulum iaculis pulvinar, sapien lorem consequat est, vel sagittis nunc eros ac ipsum. Maecenas consequat justo vehicula varius elementum. Phasellus ornare, tellus et feugiat suscipit, tortor elit rhoncus arcu, nec varius ligula nibh id arcu.",
  },
];

export default function Plan() {
  return (
    <Container>
      <div className="py-12">
        <Paragraph size="lg">
          Today, Kurasi is proud to offer a suite of premium shipping service to
          Indonesian businesses and individuals.  These services are previously
          only available to big businesses in certain countries.
        </Paragraph>
        <div className="my-3.5">
          <SimpleTable columns={tableColumn} data={tableRow} />
        </div>
        <Paragraph>
          {`** Please contact us if your package weigh more than 30 kg`}
        </Paragraph>
        <Paragraph>{`*** Insurance fee`}</Paragraph>
        <div className="my-3.5">
          <SimpleTable columns={tableColumn2} data={tableRow2} />
        </div>
        <Paragraph>
          Please contact us for adding insurance service. <br /> <br /> The
          shipping history can be tracked within 90 days since departing from
          the warehouse (no claim available after). <br /> <br /> For express
          service, with or without insurance, shipping inquiry can only be made
          30 (thirty) calendar days after the package has left KURASI warehouse.
          No inquiry can be made after that
        </Paragraph>
        <div className="my-3.5">
          <Accordion items={accordionData} />
        </div>
      </div>
    </Container>
  );
}
