import { Heading } from "@/components/text/heading";
import Container from "@/components/wrapper/container";
import Markdown from "react-markdown";

const content = `

Understanding the regulations for shipping goods to and from the United Kingdom is essential for importers, exporters, and logistics providers.

## 📦 1. General Requirements

All goods shipped into or out of the UK must comply with:

- UK customs declarations
- Accurate Harmonized System (HS) codes
- Proper labeling and packaging
- Import VAT and duties where applicable

> Note: Goods sent from outside the UK are subject to customs checks regardless of their value.

## 📑 2. Required Documents

The following documents are typically required for international shipping:

- Commercial Invoice
- Packing List
- Bill of Lading / Air Waybill
- Certificate of Origin (if applicable)
- Import licenses for restricted goods

## 🚫 3. Restricted & Prohibited Items

Certain items are either restricted or prohibited. Examples include:

| Item Type            | Status     | Notes                        |
|----------------------|------------|------------------------------|
| Weapons              | 🚫 Prohibited | Requires special license     |
| Perishable Foods     | ⚠️ Restricted | Must comply with food safety |
| Animal Products      | ⚠️ Restricted | Requires DEFRA approval      |
| Prescription Drugs   | ⚠️ Restricted | Subject to MHRA regulations  |

## 📆 4. Brexit Considerations

Since Brexit, shipments between the UK and EU **are no longer considered domestic**. Key impacts:

- Customs declarations are required
- New VAT rules apply
- Delays at ports may occur due to inspections

## 🚚 5. Carrier Guidelines

Major carriers like Royal Mail, DPD, UPS, and FedEx have their own terms. Always check:

- Maximum weight and size
- Insurance coverage
- Delivery time estimates

## 🧾 6. Import VAT & Duties

Goods valued over £135 are subject to:

- **Import VAT**
- **Customs duties**, depending on origin

**HMRC** provides online tools to calculate estimated fees: [gov.uk/check-customs-duty](https://www.gov.uk/check-customs-duty)

---

## 📬 Need Help?

For further assistance:

- Visit [gov.uk/import-goods](https://www.gov.uk/import-goods)
- Contact HMRC support: 0300 200 3700
`;

export default function Content() {
  return (
    <Container>
      <div className="py-12">
        <Heading level={2} className="!font-normal">
          US Customs and Regulatory Changes
        </Heading>
        <br />
        <div className="my-3.5 prose prose-lg max-w-none">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </Container>
  );
}
