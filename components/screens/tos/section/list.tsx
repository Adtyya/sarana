import Accordion, { AccordionItem } from "@/components/accordion";
import Container from "@/components/wrapper/container";

const tosList: AccordionItem[] = [
  {
    title: "xxxxxxxxxx",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae gravida tellus. Fusce a mattis purus. Nam sagittis feugiat ullamcorper. Proin eget dolor in elit efficitur ultrices eget id lectus. Mauris vel condimentum lectus, id ultricies lacus. Nunc feugiat neque diam, id interdum lacus fringilla id. Phasellus nulla dui, vehicula ac porta vitae, maximus sed tortor. Vestibulum faucibus at elit ac maximus. Nulla ultricies ultricies libero, ac efficitur erat feugiat vitae. Sed vel enim euismod, cursus neque tincidunt, pulvinar ligula. Vestibulum nibh orci, pellentesque ut ante id, ultrices sodales sapien. Nunc rhoncus ipsum libero, gravida gravida lectus suscipit quis.",
    open: true,
  },
  {
    title: "xxxxxxxxxx",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae gravida tellus. Fusce a mattis purus. Nam sagittis feugiat ullamcorper. Proin eget dolor in elit efficitur ultrices eget id lectus. Mauris vel condimentum lectus, id ultricies lacus. Nunc feugiat neque diam, id interdum lacus fringilla id. Phasellus nulla dui, vehicula ac porta vitae, maximus sed tortor. Vestibulum faucibus at elit ac maximus. Nulla ultricies ultricies libero, ac efficitur erat feugiat vitae. Sed vel enim euismod, cursus neque tincidunt, pulvinar ligula. Vestibulum nibh orci, pellentesque ut ante id, ultrices sodales sapien. Nunc rhoncus ipsum libero, gravida gravida lectus suscipit quis.",
  },
  {
    title: "xxxxxxxxxx",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae gravida tellus. Fusce a mattis purus. Nam sagittis feugiat ullamcorper. Proin eget dolor in elit efficitur ultrices eget id lectus. Mauris vel condimentum lectus, id ultricies lacus. Nunc feugiat neque diam, id interdum lacus fringilla id. Phasellus nulla dui, vehicula ac porta vitae, maximus sed tortor. Vestibulum faucibus at elit ac maximus. Nulla ultricies ultricies libero, ac efficitur erat feugiat vitae. Sed vel enim euismod, cursus neque tincidunt, pulvinar ligula. Vestibulum nibh orci, pellentesque ut ante id, ultrices sodales sapien. Nunc rhoncus ipsum libero, gravida gravida lectus suscipit quis.",
  },
];

export default function List() {
  return (
    <Container>
      <div className="py-12">
        <Accordion items={tosList} />
      </div>
    </Container>
  );
}
