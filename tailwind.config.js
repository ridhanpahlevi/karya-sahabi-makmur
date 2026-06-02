export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ksm: {
          navy: "#08172C",
          ocean: "#102743",
          leaf: "#19B574",
          mint: "#5CE4A0",
          slate: "#0F172A",
        },
      },
      boxShadow: {
        glow: "0 30px 80px rgba(8, 23, 44, 0.45)",
      },
    },
  },
  plugins: [],
};
