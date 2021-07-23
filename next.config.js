const transpileModules = require('next-transpile-modules')([
  '@reuters-graphics/style-color',
]);
const { repository } = require('./package.json');

const repoName = repository.split('/')[1];

const prod = process.env.NODE_ENV === 'production';

module.exports = transpileModules({
  assetPrefix: prod ? `https://tr-graphics-globe.vercel.app/${repoName}/` : '',
  devIndicators: {
    autoPrerender: false,
  },
});
