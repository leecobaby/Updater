import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const fs = require('fs');
const INPUT_DIR = 'src/';
const OUTPUT_DIR = 'output';

export default () => {
  return fs
    .readdirSync(INPUT_DIR)
    .filter(file => file.endsWith('.js'))
    .map(file => ({
      input: INPUT_DIR + file,
      treeshake: false,
      external: [/* some externals */],
      output: {
        format: 'es',
        dir: OUTPUT_DIR,
        globals: {/* some globals */ },
        plugins: [
          getBabelOutputPlugin({
            presets: [
              '@babel/preset-env',
              [
                "minify",
                {
                  "removeConsole": true,
                  "removeDebugger": true,
                  "builtIns": false
                }
              ]
            ],
            "comments": false
          })]
      },
      plugins: [nodeResolve()]
    }))
}