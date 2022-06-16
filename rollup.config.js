import multi from '@rollup/plugin-multi-entry';

export default {
  input: 'src/*.js',
  output: {
    dir: 'bundle',
    entryFileNames: '2.js',
  },
  plugins: [multi({
    exports: true,
    entryFileName: '[name].js'
  })]
};