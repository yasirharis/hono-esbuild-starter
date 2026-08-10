// configs.js
export default [
  {
    entryPage: 'src/index.tsx',      // JS/TS entry point
    jsOutput: 'dist/index.js',       // JS output destination (optional)
    css: 'src/styles/global.css',    // CSS entry point
    output: 'public/global.css'      // Purged & minified CSS output destination
  },
  {
    entryPage: 'public/admin.html',
    css: 'src/styles/admin.css',
    output: 'public/admin.css'
  }
];