import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';

const config = {
  input: 'src/index.js',
  output: {
    name: 'ReactContextRedux',
    globals: {
      react: 'React'
    }
  },
  external: ['react'],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      presets: [['env', { modules: false }], 'react']
    }),
    resolve({
      browser: true,
      preferBuiltins: true
    }),
    commonjs({
      include: /node_modules/
    }),
    builtins()
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify());
}

export default config;
