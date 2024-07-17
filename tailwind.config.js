/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'b-lg': '-9px 10px 13px 0px rgba(0,0,0,0.75);',
      },
      scale:{
        120:"120%"
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif'],
    },
      flex: {
        1: ['1'],
        three: ['3'],
        50: ['0.50']
      },
      height: {
        p1: '1px',
        5: '5vh',
        15: '15vh',
        20: '20vh',
        25: '25vh',
        30: '30vh',
        33: '33vh',
        40: '40vh',
        63: '63vh',
        66: '66vh',
        75: '75vh',
        80: '80vh',
        90: '90vh',
        95: '95vh',
        100: "100vh"
      },
      width: {
        10: '10vw',
        11: '11vw',
        12:'12vw',
        13: '13vw',
        14: '14vw',
        15: '15vw',
        20: '20vw',
        23: '23vh',
        15: '15vw',
        20: '20vw',
        23: '23vh',
        24: "24vw",
        25: '25vw',
        27: '27vw',
        30: '30vw',
        31: '31vw',
        33: '33vw',
        40: '40vw',
        63: '63vw',
        66: '66vw',
        75: '75vw',
        80: '80vw',
        83:'83vw',
        90: '90vw',
        95: '95vw',
        100: "100vw"
      },
      color: {
        120: '120%',
        purple: '#C8ACD6'
      },
      backgroundColor: {
        mainblue: '#113853',
        secBlue: '#ccd6f6'
      },
      borderColor: {
        mainblue: '#113853'
      },
      textColor: {
        yaFlixBlue: 'rgb(55, 134, 252)',
        blueText: '#ccd6f6'
      },
    },
  },
  plugins: [],
}

