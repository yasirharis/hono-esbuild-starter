import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  title?: string;
  children: any;
}

export const Layout = (props: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title || 'Hono App'}</title>
        <link rel="stylesheet" href="global.css" />
      </head>
      <body>
        <div class="layout">
          <Header />
          <main class="main-content container">{props.children}</main>
          <Footer />
          <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
           document.addEventListener('click', (e) => {
              const btn = e.target.closest('button');
              if (btn) alert('Hero clicked!');
           });

           document.addEventListener('DOMContentLoaded', () => {
              //load('css', '/global.css');
           });

           const load = (type, url) => {
              const selector = type === 'css' ? \`link[href="\${url}"]\` : \`script[src="\${url}"]\`;
              if (document.querySelector(selector)) return;
              const el = document.createElement(type === 'css' ? 'link' : 'script');
              if (type === 'css') {
                el.rel = 'stylesheet';
                el.href = url;
                document.head.appendChild(el);
              } else {
                el.src = url;
                document.body.appendChild(el);
              }
          };

          })();
        `
      }} />
        </div>
      </body>
    </html>
  );
};