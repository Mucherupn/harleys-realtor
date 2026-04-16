import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f1",
          500: "#e71212",
          700: "#bf0f0f"
        },
        ink: "#111111",
        muted: "#4b5563",
        surface: "#f5f5f5",
        border: "#e5e7eb",
        premium: "#161616"
      },
      boxShadow: {
        premium: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        premium: "0.9rem"
      },
      maxWidth: {
        container: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
