import type { Configuration } from 'webpack';
import path from 'path';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'postcss-loader' },
  ],
});

// Tailwind CSS 配置

// 静态资源处理
rules.push({
  test: /\.(png|jpe?g|gif|ico|webp)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/images/[name].[hash:8][ext]',
  },
});

// SVG 处理 - 支持作为模块导入
rules.push({
  test: /\.svg$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/images/[name].[hash:8][ext]',
  },
});

rules.push({
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[name].[hash:8][ext]',
  },
});

rules.push({
  test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/media/[name].[hash:8][ext]',
  },
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src/renderer/src'),
      '@main': path.resolve(__dirname, 'src/main'),
      '@preload': path.resolve(__dirname, 'src/preload'),
    },
  },
};
