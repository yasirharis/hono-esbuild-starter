import { Layout } from '../components/Layout';
import { Accordion } from '../components/Accordion';

export const AboutPage = () => {
  const faqItems = [
    { title: 'What is Hono?', content: 'Hono is a small, simple, and ultrafast web framework built for the Edge.' },
    { title: 'Does this use React?', content: 'No, this relies on native hono/jsx which shares a similar syntax without React overhead.' }
  ];

  return (
    <Layout title="About - Hono App">
      <div style="padding: 3rem 0;">
        <h1>About Us</h1>
        <p style="margin-top: 1rem; color: var(--text-muted);">
          We deliver lightweight and high-performance server-side web applications.
        </p>
        <h2 style="margin-top: 2rem;">Frequently Asked Questions</h2>
        <Accordion items={faqItems} />
      </div>
    </Layout>
  );
};