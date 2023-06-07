import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme/theme.css'

export const footerContainer = style({
  fontFamily: vars.fonts.DMSans,
  background: vars.color.backgroundBlack,
  color: vars.color.lightText,
  display: 'grid',
  placeItems: 'center',
})

export const footerContent = style({
  maxWidth: vars.sizes.desktopWidth,
  width: '100%',
  padding: '0 1em',
})

export const footerGrid = style({  
  display: 'flex',
  justifyContent: 'space-between',
  padding: '45px 0 0 0',
  '@media': {
    'screen and (max-width: 920px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
})

globalStyle(`${footerGrid} > article`, {
  maxWidth: '350px', 
})

globalStyle(`${footerGrid} > article > p`, {
  padding: '1em 0',
  fontSize: '16px',
  opacity: 0.6
})

globalStyle(`${footerGrid} > div`, {
  display: 'flex',
  gap: '3em',
  '@media': {
    'screen and (max-width: 920px)': {
      flexDirection: 'column',
      padding: '1em 0'
    },
  },
})

globalStyle(`${footerGrid} > article > svg`, {
  width: '200px',
})

globalStyle(`${footerGrid} > article > svg > path`, {
  fill: '#fff !important'
})

export const footerCopyrigth = style({
  padding: '20px 0px 30px 0px',
  fontSize: '16px',
  color: vars.color.lightText,
})

globalStyle(`${footerCopyrigth} > hr`, {
  opacity: 0.25,
  margin: '1.75em 0'
})

globalStyle(`${footerCopyrigth} > span`, {
  fontSize: '16px',
})
