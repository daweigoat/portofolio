import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#101010",
        "surface-2": "#171717",
        "surface-3": "#1f1f1f",
        border: "rgba(255,255,255,0.06)",
        "border-light": "rgba(255,255,255,0.12)",
        primary: "#ffffff",
        secondary: "#888888",
        muted: "#444444",
        accent: {
          blue: "#3b82f6",
          glow: "rgba(255,255,255,0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1.08", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.2rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.8rem, 3.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.4rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 10rem)",
        "section-sm": "clamp(3rem, 6vw, 6rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(255,255,255,0.05)",
        "glow-md": "0 0 40px rgba(255,255,255,0.08)",
        "glow-lg": "0 0 80px rgba(255,255,255,0.10)",
        "glow-blue": "0 0 40px rgba(59,130,246,0.15)",
        "card": "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "spin-slow": "spin 20s linear infinite",
        "border-flow": "borderFlow 4s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(30px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/assets/images/noise.png')",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "circ-out": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      screens: {
        "xs": "480px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};

export default config;
