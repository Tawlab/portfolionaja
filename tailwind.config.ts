import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "neon-blue": "#00D4FF",
                "neon-lime": "#BAFF29",
                "neon-purple": "#B24BF3",
                "dark-bg": "#050810",
                "dark-card": "#0D1117",
                "dark-border": "#1C2333",
                "dark-surface": "#0A0F1E",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Noto Sans Thai", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "neon-glow": "linear-gradient(135deg, #00D4FF22, #BAFF2922)",
                "card-gradient": "linear-gradient(145deg, #0D1117, #0A0F1E)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%, 100%": { boxShadow: "0 0 20px #00D4FF44" },
                    "50%": { boxShadow: "0 0 60px #00D4FF88, 0 0 100px #00D4FF33" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
                "spin-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                pulse2: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.4" },
                },
                "border-run": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
                flicker: {
                    "0%, 100%": { opacity: "1" },
                    "10%": { opacity: "0.8" },
                    "20%": { opacity: "1" },
                    "30%": { opacity: "0.7" },
                    "40%": { opacity: "1" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                glow: "glow 3s ease-in-out infinite",
                shimmer: "shimmer 3s linear infinite",
                "spin-slow": "spin-slow 20s linear infinite",
                pulse2: "pulse2 2s ease-in-out infinite",
                "border-run": "border-run 4s ease infinite",
                flicker: "flicker 5s step-end infinite",
            },
            boxShadow: {
                "neon-blue": "0 0 20px #00D4FF55, 0 0 40px #00D4FF22",
                "neon-lime": "0 0 20px #BAFF2955, 0 0 40px #BAFF2922",
                "neon-purple": "0 0 20px #B24BF355, 0 0 40px #B24BF322",
                "card-hover": "0 20px 60px rgba(0, 212, 255, 0.15)",
            },
        },
    },
    plugins: [],
};

export default config;
