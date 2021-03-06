module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      serif: ["Poppins", "Georgia"],
      mono: ["Poppins", "SFMono-Regular"],
    },

    extend: {
      lineHeight: {
        body: "30px",
        12: "3rem",
      },
      textColor: {
        primary: "#252525",
      },
      screens: {
        1440: "1444px",
        1302: "1302px",
        1161: "1161px",
        900: "900px",
        1210: "1210",
        1100: "1100px",
        964: "964px",
        320: "320px",
        270: "270px",
      },
      colors: {
        one: "#DD5278",
        two: "#7E91E7",
        three: "#F2BA6B",
        four: "#D457E6",
        five: "#6560F6",
        six: "#CF60F6",
        seven: "#60EDF6",
        eight: "#B670E7",
        nine: "#7ACFE9",
        ten: "#F6C859",
        eleven: "#D355E9",
        twelve: "#7CD7E9",
        thirteen: "#BA6DE6",
        fourteen: "#D8F992",
        fifteen: "#56B4C6",
        sixteen: "#6948EE",
        seventeen: "#FF6363",
        eighteen: "#E3A58A",
        nineteen: "#6847ED",
        twenty: "#C1F0FC",
        twentyOne: "#DAD4FF",
        twentyTwo: "#F5BCCC",
        blue: "#676CEF",
        textLight: "#989898",
        textGray: "#5E5E5E",
        text: "#252525",
      },
      fontSize: {
        largest: "60px",
        54: "54px",
        48: "48px",
        larger: "40px",
        large: "32px",
        medium: "27px",
        24: "24px",
        small: "20px",
        extraSmall: "16px",
        mini: "12px",
        superMini: "8px",
      },
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "42px",
      7: "64px",
      8: "80px",
      9: "120px",
      150: "150px",
      180: "180px",
      10: "240px",
      280: "280px",
      11: "300px",
      12: "360px",
      13: "420px",
      450: "450px",
      14: "480px",
      15: "540px",
      400: "400px",
      320: "320px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
