import { build } from 'esbuild';

(async function main() {
  await build({
    entryPoints: ['./sw.ts'],
    bundle: true,
    platform: 'browser',
    target: ['chrome95', 'es2020'],
    minify: true,
    outfile: 'dist/service-worker.js',
    treeShaking: true
  });
})()
