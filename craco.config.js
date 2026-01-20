const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add polyfills for Node.js modules and browser APIs
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer"),
        "util": require.resolve("util"),
        "url": require.resolve("url"),
        "fs": false,
        "net": false,
        "tls": false,
        "child_process": false,
        "worker_threads": false
      };

      // Configure plugins
      webpackConfig.plugins = webpackConfig.plugins || [];
      
      // Add provide plugin for polyfills
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        })
      );

      // Add node polyfills for browser environment
      if (env === 'production') {
        webpackConfig.optimization = webpackConfig.optimization || {};
        webpackConfig.optimization.nodeEnv = 'production';
      }

      return webpackConfig;
    },
  },
};