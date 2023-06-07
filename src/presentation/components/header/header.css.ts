import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme/theme.css'

export const headerContainer = style({
  fontFamily: vars.fonts.DMSans,
  width: '100%',
  height: '80px',
  padding: '.5rem 1em',
  boxShadow: `inset 0 -1px 0 ${vars.color.headerShadow}`,
  display: 'grid',
  placeItems: 'center',
  background: vars.color.backgroundLight,
  position: 'fixed',
  zIndex: '100',
})

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: vars.sizes.desktopWidth,
  width: '100%',
})

export const headerLogo = style({
  display: 'block',
})

globalStyle(`${headerLogo} > a > svg`, {
  width: '5em',
  fontSize: '2em',
})

globalStyle(`${headerContent} > nav`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 720px)': {
      display: 'none',
    },
  },
})

globalStyle(`${headerContent} > nav > ul`, {
  display: 'flex',
  listStyle: 'none',
  gap: '1.5em',
})

globalStyle(`${headerContent} > nav > ul > li`, {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  height: '65px',
})

globalStyle(`${headerContent} > nav > ul > li > a`, {
  textDecoration: 'none',
  color: vars.color.blackText,
})

globalStyle(`${headerContent} > nav > ul > li > a:hover`, {
  opacity: 0.8,
})

export const headerBtn = style({
  fontFamily: vars.fonts.DMSans,
  transition: 'all ease-in 200ms',
  background: vars.color.blue,
  color: vars.color.lightText,
  borderRadius: '12px',
  cursor: 'pointer',
  outline: 'none',
  padding: '12px 30px',
  border: 'none',
  fontWeight: 500,
  fontSize: '15px',
  ':hover': {
    opacity: '0.85',
  },
  '@media': {
    'screen and (max-width: 720px)': {
      display: 'none',
    },
  },
})

globalStyle(`${headerBtn} > a`, {
  textDecoration: 'none',
  color: vars.color.lightText,
})

export const headerBurger = style({
  display: 'none',
  fontSize: '2em',
  background: vars.color.backgroundGray,
  padding: '.25rem',
  borderRadius: '5px',
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 720px)': {
      display: 'block',
    },
  },
})
