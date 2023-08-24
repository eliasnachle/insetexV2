import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../theme/theme.css'

export const stepContainer = style({
  display: 'grid',
  padding: '1em 0 0 0',
  width: '100%',
  height: '650px',
})

globalStyle(`${stepContainer} > div`, {
  height: '500px',
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
})

globalStyle(`${stepContainer} > article > p`, {
  padding: '1em 0',
  fontSize: '16px',
  fontFamily: vars.fonts.DMSans,
  color: vars.color.lightBlueText,
  height: '100%',
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
  justifyContent: 'space-between'
})
