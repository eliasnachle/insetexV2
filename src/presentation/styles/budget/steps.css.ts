import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../theme/theme.css'

export const stepContainer = style({
  display: 'grid',
  padding: '1em 0 0 0',
  width: '100%',
  height: '650px',
  '@media': {
    'screen and (max-width: 820px)': {
      height: 'auto',
    },
  },
})

globalStyle(`${stepContainer} > div`, {
  height: '500px',
  '@media': {
    'screen and (max-width: 820px)': {
      height: 'auto',
    },
  },
})

globalStyle(`${stepContainer} > article`, {
  display: 'grid',
  placeItems: 'center',
  height: '100px',
})

globalStyle(`${stepContainer} > article > h1`, {
  fontSize: '2em',
  fontFamily: vars.fonts.Poppins,
  fontWeight: 500,
  color: vars.color.blueText,
  '@media': {
    'screen and (max-width: 820px)': {
      fontSize: '18px'
    },
  },
})

globalStyle(`${stepContainer} > article > p`, {
  padding: '1em 0',
  fontSize: '16px',
  fontFamily: vars.fonts.DMSans,
  color: vars.color.lightBlueText,
  height: '100%',
  '@media': {
    'screen and (max-width: 820px)': {
      padding: '0'
    },
  },
})

export const divideBar = style({
  height: '1px',
  width: '100%',
  background: vars.color.radioBorder,
  margin: '1em 0',
  borderRadius: '10px',
})

export const stepItem = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  gridGap: '1em',
  width: '100%',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 820px)': {
      gridTemplateColumns: 'repeat(auto-fill, 200px)'
    },
    'screen and (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      placeItems: 'center'
    },
  },
})

export const stepSuccess = style({
  background: vars.color.backgroundBlackBlue,
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',    
  marginTop: '25px',
  padding: '0em 4em 2em 4em',
  borderRadius: '35px',
  '@media': {
    'screen and (max-width: 820px)': {
      height: '100%',
      padding: '0em 1.5em',
    },
  },
})

globalStyle(`${stepSuccess} > h1`, {
  fontSize: '1.75em',
  fontFamily: vars.fonts.Poppins,
  fontWeight: 600,
  color: vars.color.lightText,
  '@media': {
    'screen and (max-width: 820px)': {
      fontSize: '18px',
    },
  },
})

globalStyle(`${stepSuccess} > p`, {
  padding: '1em 0',
  fontSize: '14px',
  fontFamily: vars.fonts.Poppins,
  color: vars.color.grayText,
  height: '100%',
  letterSpacing: '0.25px'
})

globalStyle(`${stepSuccess} > button`, {
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  transition: 'all ease-in 200ms',
  background: vars.color.backgroundBlackBlue,
  color: vars.color.lightText,
  borderRadius: '12px',
  outline: 'none',
  padding: '16px 40px',
  border: 'none',
  fontSize: '16px',  
  cursor: 'pointer'
})

globalStyle(`${stepSuccess} > button:hover`, {  
  opacity: 0.8,
})