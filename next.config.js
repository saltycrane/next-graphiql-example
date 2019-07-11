const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: config => {
    // Get rid of warnings for *.flow files:
    // ./node_modules/graphql-language-service-interface/dist/getHoverInformation.js.flow 16:12
    // Module parse failed: Unexpected token (16:12)
    // You may need an appropriate loader to handle this file type.
    // https://github.com/graphql/graphiql/issues/617#issuecomment-344104641
    config.module.rules.push({
      test: /\.flow$/,
      use: { loader: "ignore-loader" },
    });
    return config;
  },
});
