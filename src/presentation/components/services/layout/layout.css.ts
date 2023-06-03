import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const layoutCotnainer = style({
  padding: 'calc(80px + 2em) 2em',
  display: 'grid',
  placeItems: 'center',
})

export const serviceItem = style({
  maxWidth: vars.sizes.desktopWidth,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '1em',
  alignItems: 'center',
  paddingBottom: '3em',
  '@media': {
    'screen and (max-width: 1080px)': {
      gridTemplateColumns: 'none',
    },
  },
})

globalStyle(`${serviceItem} > article`, {
  maxWidth: '550px',
  width: '100%',
  '@media': {
    'screen and (max-width: 1080px)': {
      maxWidth: '100%',
    },
  },
})

globalStyle(`${serviceItem} > article > h1`, {
  fontSize: '3em',
  color: vars.color.blueText,
  fontFamily: vars.fonts.DMSans,
  paddingBottom: '15px',
})

globalStyle(`${serviceItem} > article > p`, {
  fontSize: '17px',
  color: vars.color.lightBlueText,
  lineHeight: '30px',
  fontFamily: vars.fonts.DMSans,
})

globalStyle(`${serviceItem} > figure`, {
  '@media': {
    'screen and (max-width: 1080px)': {
      display: 'none',
    },
  },
})

globalStyle(`${serviceItem} > figure > img`, {
  width: '100%',
  height: 'auto',
  borderRadius: '25px',
})

export const serviceDetail = style({
  background: vars.color.darkBtn,
  maxWidth: vars.sizes.desktopWidth,
  width: '100%',
  display: 'grid',
  padding: '2em 4em',
  borderRadius: '20px',
  color: vars.color.lightText,
  fontFamily: vars.fonts.DMSans,
  '@media': {
    'screen and (max-width: 1080px)': {
      padding: '1em',
    },
    'screen and (max-width: 720px)': {
      textAlign: 'center',
    },
  },
})

globalStyle(`${serviceDetail} > h1`, {
  fontSize: '3em',
  color: vars.color.lightBlueGrayText,
  paddingBottom: '.75rem',
  width: '100%',
})

export const serviceDetailContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  placeItems: 'center',
  gridGap: '1em 4em',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 1080px)': {
      gridTemplateColumns: 'none',
    },
  },
})

globalStyle(`${serviceDetailContainer} > article`, {
  width: '100%',
})

globalStyle(`${serviceDetailContainer} > article > svg`, {
  width: '2.5em',
  height: '2.5em',
  fill: 'white',
  color: 'white',
})

globalStyle(`${serviceDetailContainer} > article > svg > path`, {
  fill: 'white',
  color: 'white',
})

globalStyle(`${serviceDetailContainer} > article > h2`, {
  fontSize: '25px',
  paddingBottom: '.5rem',
})

globalStyle(`${serviceDetailContainer} > article > p`, {
  fontSize: '16px',
  opacity: '0.7',
})
