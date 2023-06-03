import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme/theme.css'

export const notFoundContainer = style({
  padding: 'calc(2em + 80px) 2em',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
})

globalStyle(`${notFoundContainer} > h1`, {
  fontSize: 'clamp(5em, 6vw, 16em)',
  color: vars.color.blueText,
})

globalStyle(`${notFoundContainer} > h2`, {
  fontSize: '3em',
  color: vars.color.blueText,
})

globalStyle(`${notFoundContainer} > p`, {
  maxWidth: '600px',
  fontSize: '16px',
  color: vars.color.lightBlueText,
  padding: '1em 0',
})

globalStyle(`${notFoundContainer} > a`, {
  textAlign: 'center',
  maxWidth: '600px',
  width: '100%',
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  fontWeight: 500,
  fontSize: '14px',
  transition: 'all ease-in 200ms',
  background: vars.color.btnColor,
  color: vars.color.lightText,
  borderRadius: '12px',
  cursor: 'pointer',
  outline: 'none',
  padding: '16px 30px',
  border: 'none',
})
