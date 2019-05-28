import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

const resolveConfig = resolve({
  mainFields: ['jsnext:main', 'module', 'main']
});
const uglifyConfig = uglify();
export default [
  {
    input: './src/main.js',
    output: {
      sourcemap: true,
      file: 'dist/intl-relativeformat.js',
      format: 'umd',
      name: 'IntlRelativeFormat'
    },
    plugins: [resolveConfig]
  },
  {
    input: './src/main.js',
    output: {
      sourcemap: true,
      file: 'dist/intl-relativeformat.min.js',
      format: 'umd',
      name: 'IntlRelativeFormat'
    },
    plugins: [resolveConfig, uglifyConfig]
  },
  {
    input: './src/locales.js',
    output: {
      sourcemap: true,
      file: 'dist/intl-relativeformat-with-locales.js',
      format: 'umd',
      name: 'IntlRelativeFormat'
    },
    plugins: [resolveConfig]
  },
  {
    input: './src/locales.js',
    output: {
      sourcemap: true,
      file: 'dist/intl-relativeformat-with-locales.min.js',
      format: 'umd',
      name: 'IntlRelativeFormat'
    },
    plugins: [resolveConfig, uglifyConfig]
  }
];
