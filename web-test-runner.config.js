import { esbuildPlugin } from '@web/dev-server-esbuild';
import { importMapsPlugin } from '@web/dev-server-import-maps';

export default {
  files: 'test/**/*.test.ts',
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            '/src/client/persons.js': './test/mocks/persons.js',
          },
        },
      },
    }),
    esbuildPlugin({ ts: true, target: 'es2020' }),
  ],
  nodeResolve: true,
};
