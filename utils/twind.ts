import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        'main': '#0379fd',
        'accent': '#1f2a48',
        'primary': '#141c2f'
      },
      fontFamily: {
        'main': ['Anonymous Pro', 'monospace', 'sans-serif']
      }
    }
  }
};
if (IS_BROWSER) setup(config);
