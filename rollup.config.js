import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "./src/lib/index.js",

  output: [
    {
      file: "./dist/Button.js",
      format: "es",
      sourcemap: false,
    },
  ],

  plugins: [
    peerDepsExternal(),

    postcss({
      extract: true,
    }),
    babel({ exclude: "node_modules/**" }),
  ],

  external: ["react", "prop-types"],
};
