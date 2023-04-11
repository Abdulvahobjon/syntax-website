/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            primary:{
                'light-3':'#FFFBEE',
                'light-2':'#F7E5AE',
                'light-1':'#F2D77A',
                'regular':'#F3C716',
                'dark':'#DCB103',
            },
            navy:{
                'light-4':'#DDE0EA',
                'light-3':'#CED2DE',
                'light-2':'#BEC2CF',
                'light-1':'#526584',
                'regular':'#004268',
            }, 
            orange:{
                'light-4':'#FBF3EE',
                'light-3':'#F1D8C6',
                'light-2':'#E5B998',
                'light-1':'#D88D60',
                'regular':'#DB5F23',
            },
            teal:{
                'light-4': '#F7FEFF',
                'light-3': '#F7FEFF',
                'light-2': '#A4CED2',
                'light-1': '#67B3B9',
                'regular': '#00A1A6',
            },
            error:{
                'regular':'#D41919',
                'light-1':'#F7DCDC'
            },
            black:{
                'light-1': '#333333',
                'light-2': '#5F5F5F',
                'light-3': '#A1A1A1',
                'light-4': '#C8C8C8',
                'light-5': '#D9D9D9',
                'light-6': '#EEEEEE',
            }
          },

          lineHeight:{
            '21':'21px'
          }
      },
    },
    plugins: [],
  }