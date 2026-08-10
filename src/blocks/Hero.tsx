interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export const Hero = ({ title, subtitle, ctaText = 'Get Started', ctaHref = '#' }: HeroProps) => {
  return (
    <section class="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {ctaText && (
        <a href={ctaHref} class="btn">
          {ctaText}
        </a>
      )}
    </section>
  );
};