import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#1384bc',
    btnColor: '#04527a',
    darkBtn: '#01293d',
    headerShadow: '#f3f3f4',
    blueText: '#01293d',
    lightBlueText: '#01293dc9',
    lightText: '#fff',
    blackText: '#000',
    grayText: '#999',
    lightBlueGrayText: '#618496',
    backgroundLight: '#fff',
    backgroundDark: '#222',
    backgroundBlack: '#111',
    backgroundGray: '#eee',
    icon: '#30aded',
    darkBorder: '#333',
  },
  sizes: {
    desktopWidth: '1200px',
  },
  fonts: {
    DMSans: 'DM Sans, sans-serif',
  },
})
