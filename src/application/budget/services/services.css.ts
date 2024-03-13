import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../presentation/styles/theme/theme.css'

export const problemContainer = style({
  display: 'grid',
  padding: '.25rem 0',
  width: '100%'
})

globalStyle(`${problemContainer} > p`, {     
  fontSize: '14px',
  fontWeight: 500,
  fontFamily: vars.fonts.DMSans,  
  color: vars.color.blueText
})

globalStyle(`${problemContainer} > div`, {  
  width: '100%',
  padding: '.5rem 0'
})

globalStyle(`${problemContainer} > div > textarea`, {
  height: '80px',
  marginBottom: '1.5em',
  width: '100%',
  '@media': {
    'screen and (max-width: 820px)': {
      height: '100px',
    },
  },
})