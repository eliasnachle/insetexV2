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
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',  
  height: '300px',
  marginTop: '25px',
  '@media': {
    'screen and (max-width: 820px)': {
      height: '100%',
    },
  },
})

globalStyle(`${stepSuccess} > h1`, {
  fontSize: '2em',
  fontFamily: vars.fonts.Poppins,
  fontWeight: 500,
  color: vars.color.blueText,
})

globalStyle(`${stepSuccess} > p`, {
  padding: '1em 0',
  fontSize: '16px',
  fontFamily: vars.fonts.DMSans,
  color: vars.color.lightBlueText,
  height: '100%',
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