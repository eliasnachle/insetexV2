import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#1384bc',
    btnColor: '#04527a',
    darkBtn: '#01293d',
    headerShadow: '#f3f3f4',
    blueText: '#01293d',
    lightBlueText: '#01293dc9',
    lightText: '#fff',
    grayText: '#999',
    backgroundLight: '#fff',
    backgroundDark: '#222',
    backgroundBlack: '#111',
    icon: '#30aded'
  },
  sizes: {
    desktopWidth: '1200px'
  }
});