## Hono + ESBuild Simple Worker

A lightweight, high-performance edge web application starter built with **Hono**, **la-build**, and **Cloudflare Workers**. 

This repository provides a minimal setup for building server-rendered JSX components or API endpoints using Hono, with an automated build pipeline that compiles TypeScript/JSX via `la-build` before deploying directly to Cloudflare Workers via Wrangler.



## ⚡ Features

- **Ultrafast Server-Side Rendering**: Powered by `hono/jsx` running directly on Cloudflare Workers.
- **Minimal Footprint**: `la-build` bundles worker scripts into an optimized production output (`dist/index.js`).
- **ES Modules**: Fully configured with native ESM (`"type": "module"`).
- **TypeScript & Types**: Full Cloudflare Worker types included via `@cloudflare/workers-types`.



## 📁 Project Structure

```text
.
├── src/
│   ├── blocks/          # Layout blocks (Hero, Features, etc.)
│   ├── components/      # UI components (Header, Footer, Accordion, etc.)
│   ├── pages/           # Page templates (home, about, contact)
│   └── index.ts         # Main Hono worker entry point
├── dist/                # Output directory for compiled worker & assets
├── config.build.js      # la-build build configuration
├── wrangler.jsonc       # Wrangler CLI configuration
└── package.json

```

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/yasirharis/hono-esbuild-starter](https://github.com/yasirharis/hono-esbuild-starter)
cd hono-esbuild-starter
npm install

```

## 🛠️ Development & Building

### Run Local Development Server

To build your application and start the Cloudflare Workers local dev environment using Wrangler:

```bash
npm run dev

```

### Build for Production

Bundles `src/index.ts` into `dist/index.js` using `la-build` with `config.build.js`:

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
| `dev` | `npm run build && wrangler dev` | Compiles the application and starts local dev server with Wrangler. |
| `build` | `la-build -c config.build.js` | Bundles TypeScript/JSX worker code via `la-build`. |
| `deploy` | `npm run build && wrangler deploy` | Builds the project and deploys to Cloudflare Workers. |

## 📄 License

This project is licensed under the **ISC License**.