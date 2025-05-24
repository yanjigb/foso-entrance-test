import type { Config } from "tailwindcss";
import { extendTheme } from "./share/theme/extend-theme-tailwind";
import { CustomThemeConfig } from 'tailwindcss/types/config'

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: extendTheme as unknown as Partial<CustomThemeConfig>,
  },
  plugins: [],
} satisfies Config;
