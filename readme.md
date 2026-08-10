# Hono + ESBuild Simple Worker

A lightweight, high-performance edge web application starter built with **Hono**, **ESBuild**, and **Cloudflare Workers**. 

This repository provides a minimal setup for building server-rendered JSX components or API endpoints using Hono, with an automated build pipeline that compiles TypeScript/JSX via ESBuild and processes CSS assets using CSSO and PurgeCSS before deploying directly to Cloudflare Workers via Wrangler.



## ⚡ Features

- **Ultrafast Server-Side Rendering**: Powered by `hono/jsx` running directly on Cloudflare Workers.
- **Minimal Footprint**: ESBuild bundles worker scripts into an optimized production output (`dist/index.js`).
- **CSS Pipeline**: Built-in CSS processing pipeline using PurgeCSS (removes unused CSS) and CSSO (optimizes/minifies stylesheets).
- **ES Modules**: Fully configured with native ESM (`"type": "module"`).
- **TypeScript & Types**: Full Cloudflare Worker types included via `@cloudflare/workers-types`.



## 📁 Project Structure

```text
.
├── src/
│   ├── blocks/          # Layout blocks (Hero, Features, etc.)
│   ├── components/      # UI components (Header, Footer, Accordion, etc.)
│   ├── pages/           # Page templates (home, about, contact)
│   ├── index.ts         # Main Hono worker entry point
│   └── styles.css       # Input CSS stylesheet
├── dist/                # Output directory for compiled worker & assets
├── build-css.js         # Custom script running PurgeCSS & CSSO
├── esbuild.config.js    # ESBuild configuration for bundling worker script
├── wrangler.jsonc       # Wrangler CLI configuration
└── package.json

```



## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yasirharis/hono-esbuild-starter
cd hono-esbuild-starter
npm install

```



## 🛠️ Development & Building

### Run Local Development Server

To start the Cloudflare Workers local environment using Wrangler:

```bash
npm run dev

```

### Build CSS Only

Runs `build-css.js` to purge unused styles against your source components and bundle/minify the CSS output:

```bash
npm run build:css

```

### Build Worker Only

Bundles `src/index.ts` and all JSX/TS dependencies into `dist/index.js` using ESBuild:

```bash
npm run build:worker

```

### Build Everything for Production

Runs both CSS compilation and ESBuild bundling sequentially:

```bash
npm run build

```



## 🚀 Deployment

Deploy your application to Cloudflare Workers with a single command:

```bash
npm run deploy

```

**Note:** Make sure you are authenticated with Cloudflare before deploying. You can log in by running `npx wrangler login`.



## 📜 NPM Scripts Reference

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run build && wrangler dev` | Starts local dev server with Wrangler. |
| `build:css` | `node build-css.js` | Purges unused CSS and minifies styles to `dist/`. |
| `build:worker` | `node esbuild.config.js` | Bundles TypeScript/JSX worker code via ESBuild. |
| `build` | `npm run build:css && npm run build:worker` | Full production build sequence. |
| `deploy` | `npm run build && wrangler deploy` | Builds the project and deploys to Cloudflare Workers. |



## 📄 License

This project is licensed under the **ISC License**.