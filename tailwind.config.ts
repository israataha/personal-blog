import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{tsx,ts,jsx,js}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
