import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const show = style({
  height: '220px',
})

export const hidden = style({
  height: '0px',
})

export const navbar = style({
  position: 'absolute',
  background: vars.color.backgroundBlack,
  height: '100vh',
  width: '100%',
  top: '80px',
  left: 0,
  padding: '1em 1.5em',
  fontFamily: vars.fonts.DMSans,
  zIndex: '100',
})

globalStyle(`${navbar} > ul`, {
  listStyle: 'none',
})

globalStyle(`${navbar} > ul > li`, {
  transition: 'all ease-in-out 150ms',
  paddingTop: '.5rem',
  height: '45px',
  fontSize: '16px',
  borderBottom: `1px solid ${vars.color.darkBorder}`,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
})

globalStyle(`${navbar} > ul > li:hover`, {
  opacity: 0.85,
  color: vars.color.lightText,
})

globalStyle(`${navbar} > ul > li > a`, {
  color: vars.color.lightText,
  textDecoration: 'none',
})

globalStyle(`${navbar} > ul > div`, {
  borderBottom: `1px solid ${vars.color.darkBorder}`,
})

globalStyle(`${navbar} > ul > div > span`, {
  color: vars.color.lightText,
  transition: 'all ease-in-out 150ms',
  paddingTop: '.5rem',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  height: '45px',
})

globalStyle(`${navbar} > ul > div > span:hover`, {
  opacity: 0.85,
  color: vars.color.lightText,
})
