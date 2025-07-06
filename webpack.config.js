import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/client/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist/client'),
    compress: true,
    port: 8080,
    proxy: [
      {
        context: ['/persons'],
        target: 'http://localhost:3000',
      },
    ],
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Intercept the favicon request and send a 204 No Content response.
      devServer.app.get('/favicon.ico', (req, res) => {
        res.status(204).send();
      });

      return middlewares;
    },
  },
};
