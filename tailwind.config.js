/* eslint-disable @typescript-eslint/no-require-imports */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sunflower: "#ffc400",
        midnight: "#311D42",
        golden: "#F8D300",
        peach: "#FFF0C8",
      },
      backgroundImage: {
        "golden-gradient":
          "linear-gradient(196.42deg, rgba(248, 211, 0, 0.73) 2.71%, rgba(248, 211, 0, 0.23) 58.22%)",
        "reverse-golden-gradient":
          "linear-gradient(46.15deg, #FBE66E 39.79%, #FFFEF8 100.82%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
