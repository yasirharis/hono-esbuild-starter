interface Feature {
  title: string;
  description: string;
}

export const Features = ({ items }: { items: Feature[] }) => {
  return (
    <section class="features">
      {items.map((item, idx) => (
        <div class="feature-card" key={idx}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};