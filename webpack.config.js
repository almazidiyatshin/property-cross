const HtmlWebPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, options) => {
  const { mode = 'development' } = options;
  const isProd = mode === 'production';

  const getStyleLoaders = () => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
  ];

  const getPlugins = () => {
    const plugins = [
      new HtmlWebPlugin({
        template: 'public/index.html',
      }),
    ];

    if (isProd) {
      const newPlugins = plugins.concat([new MiniCssExtractPlugin()]);
      return newPlugins;
    }

    return plugins;
  };

  return {
    entry: './src/index.js',
    mode: mode,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          resolve: { extensions: ['.ts', '.tsx'] },
          loader: 'ts-loader',
        },
        {
          test: /\.jsx?$/,
          resolve: { extensions: ['.js', '.jsx'] },
          use: 'babel-loader',
        },
        {
          test: /\.js$/,
          exclude: /node-modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader'],
        },
      ],
    },
    plugins: getPlugins(),
    devServer: {
      open: true,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
