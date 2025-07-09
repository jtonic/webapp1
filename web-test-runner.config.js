import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'test/**/*.test.ts',
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'es2020',
      loaders: {
        '.css': 'text',
      },
      tsconfig: 'tsconfig.json',
    }),
  ],
  nodeResolve: true,
};
