import { Layout } from '../components/Layout';
import { Hero } from '../blocks/Hero';
import { Features } from '../blocks/Features';

export const HomePage = () => {
  const featureList = [
    { title: 'Fast Rendering', description: 'Powered by Hono JSX for ultra-fast response times.' },
    { title: 'Zero CSS Deps', description: 'Pure CSS styling without heavy dependencies or build steps.' },
    { title: 'TypeScript First', description: 'Fully typed components out of the box.' }
  ];

  return (
    <Layout title="Home - Hono App">
      <Hero
        title="Build Faster Web Applications"
        subtitle="Lightweight, edge-ready web components with Hono and plain CSS."
        ctaHref="/contact"
      />
      <Features items={featureList} />
    </Layout>
  );
};