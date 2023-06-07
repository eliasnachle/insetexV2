import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const chevron = style({
  fontFamily: vars.fonts.DMSans,
  zIndex: '100',
  position: 'absolute',
  marginTop: '-30px',
  marginRight: '20px',
  background: vars.color.backgroundBlack,
  width: '15px',
  height: '15px',
  transform: 'rotate(-45deg)',
})

export const dropdownContainer = style({
  background: vars.color.backgroundBlack,
  padding: '1.5em',
  position: 'absolute',
  marginTop: '315px',
  borderRadius: '5px',
})

export const dropdownHidden = style({
  display: 'none',
})

export const dropdownVisible = style({
  display: 'block',
})

globalStyle(`${dropdownContainer} > ul`, {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25em',
})

globalStyle(`${dropdownContainer} > ul > li`, {
  transition: 'all ease-in 100ms',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
})

globalStyle(`${dropdownContainer} > ul > li > a`, {
  textDecoration: 'none',
  color: vars.color.lightText,
})

globalStyle(`${dropdownContainer} > ul > li:hover`, {
  opacity: 0.5,
})
