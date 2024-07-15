/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        1: ['1'],
        three: ['3'],
        50: ['0.50']
      },
      height: {
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
      },
      width:{
        10:'10vw',
        11:'11vw',
        15: '15vw',
        20: '20vw',
        25: '25vw',
        30: '30vw',
        33: '33vw',
        40: '40vw',
        63: '63vw',
        66: '66vw',
        75: '75vw',
        80: '80vw',
        90: '90vw',
        95: '95vw',
      },
      color: {
        120: '120%'
      },
      backgroundColor: {
        mainblue: '#113853'
      },
      borderColor: {
        mainblue: '#113853'
      }

    },
  },
  plugins: [],
}

