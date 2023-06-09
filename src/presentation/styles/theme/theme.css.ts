import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    blue: '#0085FF',
    primary: '#1566b1',
    btnColor: '#04527a',
    headerShadow: '#f3f3f4',
    blueText: '#0B1851',
    lightBlueText: '#565C6F',
    lightText: '#fff',
    blackText: '#000',
    grayText: '#999',
    lightBlueGrayText: '#618496',
    backgroundLight: '#fff',
    backgroundDark: '#222',
    backgroundGray: '#eee',
    backgroundError: '#ff3333',
    backgroundBlack: '#010101',
    backgroundBlackBlue: '#121826',
    backgroundLightBlue: '#f2f9ff',
    icon: '#0085FF',
    darkBorder: '#333',
    inputBorder: '#e7ebed',
    backgroundDetailItem: '#011b3e',
    titleBackgroundDetailItem: '#5d7ba3',
    pendentItem: '#dad9d9',
    radioBorder: '#c9cfd2',
    success: '#25AA77'
  },
  sizes: {
    desktopWidth: '1200px',
  },
  fonts: {
    DMSans: 'DM Sans, sans-serif',
    Poppins: 'Poppins, sans-serif',
  },
})
