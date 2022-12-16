import { Options } from "$fresh/plugins/twind.ts";

  export default {
    selfURL: import.meta.url,
    theme: {
      colors: {
        'main': '#0379fd',
        'accent': '#1f2a48',
        'primary': '#141c2f',
        'text': '#f0f8ff'
      },
      fontFamily: {
        'main': ['Anonymous Pro', 'monospace', 'sans-serif']
      }
    }
  } as Options;
