import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          bg: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          text: "var(--text-primary)",
          muted: "var(--text-muted)",
          border: "var(--border-neutral)",
          hover: "var(--surface-hover)",
          blue: "var(--brand-blue)",
          crimson: "var(--brand-crimson)",
          orange: "var(--brand-orange)",
          yellow: "var(--brand-yellow)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
