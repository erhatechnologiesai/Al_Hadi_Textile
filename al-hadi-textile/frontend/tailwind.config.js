/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textile: {
          orange: "#FD7803",
          "orange-dark": "#E66B00",
          "orange-light": "#FFF3E8",
          slate: "#23282E",
          "slate-light": "#2D343C",
          charcoal: "#1A1E24",
          canvas: "#FAF9F7",
          "canvas-warm": "#F3F1EC",
          border: "#E7E5E1",
          "border-dark": "#D5D2CB",
          olive: "#2D4030",
          "olive-light": "#EEF2EE",
        }
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        card: "0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 24px -6px rgba(35, 40, 46, 0.12), 0 6px 12px -4px rgba(35, 40, 46, 0.06)",
        "orange-glow": "0 4px 20px -2px rgba(253, 120, 3, 0.35)",
      }
    },
  },
  plugins: [],
};
