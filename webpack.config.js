module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: "@import '@/styles/variables.scss';",
            },
            options: {
              prependData: "@import '@/styles/variables.scss';",
            },
          },
        ],
      },
    ],
  },
};
