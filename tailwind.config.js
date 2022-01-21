module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],

  //purge:{ enabled: process.env.NODE_ENV === 'production', content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'], },

  theme: {
    extend: {
      fontFamily: {
        'titlefont': ['titlefont', 'sans-serif'],
        'headingfont': ['headingfont', 'sans-serif'],
        'textfont': ['textfont', 'sans-serif'],
      },
      colors: {
        primecolor: {
          100: "#1C6DD0",
          150: "#0354b7",
          200: "#003a9e",
          250: "#002185",
          300: "#00086c",
          350: "#000053",
        },

        fneucolor: {
          100: "#fff",
          150: "#f5f5f5",
          200: "#e6e6e6",
          250: "#cdcdcd",
          300: "#b4b4b4",
          350: "#969696",
        },

        sneucolor: {
          100: "#000",
          150: "#191919",
          200: "#323232",
          250: "#646464",
          300: "#7d7d7d",
          350: "#969696",
        },


      }
    },
    screens: {
      //That shorthand version of adding a small breakpoint produces an error

      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
