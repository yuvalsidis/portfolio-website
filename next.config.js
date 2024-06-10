const nextConfig = {
  reactStrictMode: true,
  // Optional: Customize Webpack configuration
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;