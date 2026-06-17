/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router
        "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                synapseQuantum: {
                    "primary": "#6366f1",
                    "secondary": "#06b6d4",
                    "accent": "#10b981",
                    "neutral": "#0f172a",
                    "base-100": "#ffffff",
                    "base-200": "#f8fafc",
                    "success": "#10b981",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
        ],
    },
}