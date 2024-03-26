// export const tokens = (mode: string) => ({
//   ...(mode === "dark"
//     ? {
//         light_blue : { // sky_blue
//           0: '#8ecae6',
//           100: '#0d2e3d', 
//           200: '#1b5c7a',
//           300: '#288ab7',
//           400: '#51aed9',
//           500: '#8ecae6',
//           600: '#a5d5eb',
//           700: '#bbdff0',
//           800: '#d2eaf5',
//           900: '#e8f4fa'
//         },
//         secondary: { // blue_green
//           0: '#219ebc',
//           100: '#071f25',
//           200: '#0d3e4b',
//           300: '#145d70',
//           400: '#1a7d95',
//           500: '#219ebc',
//           600: '#39bcdc',
//           700: '#6bcce5',
//           800: '#9cddee',
//           900: '#ceeef6'
//         },
//         primary: { // Prussian Blue
//           0: '#023047',
//           100: '#00090e',
//           200: '#01131c',
//           300: '#011c2a',
//           400: '#012638',
//           500: '#023047',
//           600: '#04699b',
//           700: '#06a3f1',
//           800: '#54c3fb',
//           900: '#a9e1fd'
//         },
//         yellow: { // selective_yellow
//           0: '#ffb703',
//           100: '#342500',
//           200: '#684b00',
//           300: '#9c7000',
//           400: '#d09500',
//           500: '#ffb703',
//           600: '#ffc637',
//           700: '#ffd569',
//           800: '#ffe39b',
//           900: '#fff1cd'
//         },
//         orange: { // ut_orange
//           0: '#fb8500',
//           100: '#321b00',
//           200: '#643500',
//           300: '#965000',
//           400: '#c86b00',
//           500: '#fb8500',
//           600: '#ff9e2f',
//           700: '#ffb663',
//           800: '#ffce97',
//           900: '#ffe7cb'
//         },
//         main: {
//           backgroundColor: '#161A25',
//           buttonColor: '#fb8500',
//           fontColor: 'white',
//           rectangleColor:'#242935'
//         }
//       }
//     : {
//         light_blue: { // alice_blue
//           0: '#e1f1f8',
//           100: '#123b4d',
//           200: '#24769a',
//           300: '#48aad4',
//           400: '#95cee6',
//           500: '#e1f1f8',
//           600: '#e8f4fa',
//           700: '#eef7fb',
//           800: '#f3fafc',
//           900: '#f9fcfe'
//         },
//         secondary: { // light_blue
//           0: '#bde8f3',
//           100: '#0d3d49',
//           200: '#1b7b93',
//           300: '#2cb6d8',
//           400: '#75cfe6',
//           500: '#bde8f3',
//           600: '#cbedf6',
//           700: '#d8f2f8',
//           800: '#e5f6fa',
//           900: '#f2fbfd'
//         },
//         primary: { //pale_azure
//           0: '#8ad6fc',
//           100: '#02334c',
//           200: '#046697',
//           300: '#0699e3',
//           400: '#3cbbfa',
//           500: '#8ad6fc',
//           600: '#a0defd',
//           700: '#b7e6fd',
//           800: '#cfeefe',
//           900: '#e7f7fe'
//         },
//         yellow: { //peach
//           0: '#ffecbb',
//           100: '#594000',
//           200: '#b17f00',
//           300: '#ffba0b',
//           400: '#ffd364',
//           500: '#ffecbb',
//           600: '#fff0ca',
//           700: '#fff4d7',
//           800: '#fff7e4',
//           900: '#fffbf2'
//         },
//         orange: { // light_orange
//           0: '#ffdeb9',
//           100: '#582f00',
//           200: '#af5e00',
//           300: '#ff8c08',
//           400: '#ffb560',
//           500: '#ffdeb9',
//           600: '#ffe4c6',
//           700: '#ffebd4',
//           800: '#fff2e2',
//           900: '#fff8f1'
//         },
//         main: {
//           backgroundColor: '#ECEFF8',
//           buttonColor: '#fb8500',
//           fontColor: 'black',
//           rectangleColor:'#E4E7EF'
//         }
//       }
//     )
//   });
export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        primary : { // tomato
          
          100: '#ee6445', 
          200: '#f37758',
          300: '#f8896c',
          400: '#fb9a80',
          500: '#feab94',
          600: '#ffbca9',
        },
        secondary: { // yellow
          
          100: '#faaa33',
          200: '#fdb34d',
          300: '#ffbd65',
          400: '#ffc67b',
          500: '#ffcf91',
          600: '#ffd9a7',
        },
        tertiary: { // cream
          100: '#f8c2a0',
          200: '#f9c9aa',
          300: '#fbcfb5',
          400: '#fcd6bf',
          500: '#fdddca',
          600: '#fee4d4',
        },
        accent: { // indigo
          100: '#456aee',
          200: '#6379f1',
          300: '#7b89f3',
          400: '#9199f5',
          500: '#a5a9f7',
          600: '#b8baf9',
        },
        secondaryAccent: { // ut_orange
          100: '#45cfee',
          200: '#65d4f0',
          300: '#7edaf2',
          400: '#94dff4',
          500: '#a8e5f6',
          600: '#baeaf8',
        },
        background: { // dark blue
          100: '#161a25',
          200: '#2b2f39',
          300: '#42454f',
          400: '#5a5d66',
          500: '#74767e',
          600: '#8e9096',
        },
        main: {
          backgroundColor: '#161A25',
          buttonColor: '#fb8500',
          fontColor: 'white',
          rectangleColor:'#2b2f39'
        }
      }
    : {
      primary : { // tomato
          
        100: '#ee6445', 
        200: '#f37758',
        300: '#f8896c',
        400: '#fb9a80',
        500: '#feab94',
        600: '#ffbca9',
      },
      secondary: { // yellow
        
        100: '#faaa33',
        200: '#fdb34d',
        300: '#ffbd65',
        400: '#ffc67b',
        500: '#ffcf91',
        600: '#ffd9a7',
      },
      tertiary: { // cream
        100: '#f8c2a0',
        200: '#f9c9aa',
        300: '#fbcfb5',
        400: '#fcd6bf',
        500: '#fdddca',
        600: '#fee4d4',
      },
      accent: { // indigo
        100: '#456aee',
        200: '#6379f1',
        300: '#7b89f3',
        400: '#9199f5',
        500: '#a5a9f7',
        600: '#b8baf9',
      },
      secondaryAccent: { // ut_orange
        100: '#45cfee',
        200: '#65d4f0',
        300: '#7edaf2',
        400: '#94dff4',
        500: '#a8e5f6',
        600: '#baeaf8',
      },
      background: { // dark blue
        0: '#d6d6d7',
        100: '#eeeeef',
        200: '#f0f0f1',
        300: '#f2f2f3',
        400: '#f4f4f4',
        500: '#f6f6f6',
        600: '#f7f7f8',
        },
        main: {
          backgroundColor: '#f6f6f6',
          buttonColor: '#fb8500',
          fontColor: 'black',
          rectangleColor:'#eeeeef'
        }
      }
    )
  });
