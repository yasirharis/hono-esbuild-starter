import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.tsx'],  
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['es2020'],
  format: 'esm',
  platform: 'browser',
  outfile: 'dist/index.js',
  treeShaking: true,
  legalComments: 'none',
  drop: ['console', 'debugger'],
  pure: ['console.log'],
})