import { build } from 'esbuild';
import { PurgeCSS } from 'purgecss';
import { minify } from 'csso';
import fs from 'fs';
import path from 'path';

// ------------------- Helper: get all imported files -------------------
async function getDependencies(entryPoint) {
  const result = await build({
    entryPoints: [entryPoint],
    bundle: true,
    write: false,
    metafile: true,
    platform: 'browser',
    // If you use JSX, TypeScript, etc., esbuild handles them automatically.
    // If you have custom loaders or plugins, add them here.
    // Example: loader: { '.tsx': 'tsx' } – esbuild already knows.
    loader: { '.html': 'text' },
  });

  // metafile.inputs contains all files that were read, with absolute paths
  const allFiles = Object.keys(result.metafile.inputs)
    .map(file => path.resolve(file)) // convert to absolute paths
    // Optional: filter out node_modules if you only want your source files
    .filter(file => !file.includes('node_modules'));

  return allFiles;
}

// ------------------- Your configurations -------------------
const configs = [
  {
    entryPage: 'src/pages/home.tsx',
    css: 'src/styles/global.css',
    output: 'public/global.css'
  },
  {
    entryPage: 'public/admin.html',
    css: 'src/styles/admin.css',
    output: 'public/admin.css'
  }
];

// ------------------- Process each config -------------------
async function processConfig({ entryPage, css, output }) {
  console.log(`Processing ${css} → ${output}`);

  // 1. Get all dependencies from the entry page
  const allFiles = await getDependencies(entryPage);
  console.log(`  Found ${allFiles.length} imported files`);

  // 2. Purge
  const purgeResults = await new PurgeCSS().purge({
    content: allFiles,   // now an array of absolute file paths
    css: [{ raw: fs.readFileSync(css, 'utf8') }],
    // Add safelist, extractors, etc. if needed
  });
  const purgedCss = purgeResults[0].css;

  // 3. Minify
  const minified = minify(purgedCss).css;

  // 4. Write output
  fs.writeFileSync(output, minified, 'utf8');
  console.log(`  ✅ ${output} generated`);
}

// ------------------- Run everything -------------------
Promise.all(configs.map(processConfig))
  .then(() => console.log('🎉 All done!'))
  .catch(err => {
    console.error('❌', err);
    process.exit(1);
  });