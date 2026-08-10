export interface AccordionItem {
  title: string;
  content: string;
}

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
  return (
    <div class="accordion">
      {items.map((item, idx) => (
        <details class="accordion-item" key={idx}>
          <summary class="accordion-header">{item.title}</summary>
          <div class="accordion-content">
            <p>{item.content}</p>
          </div>
        </details>
      ))}
    </div>
  );
};