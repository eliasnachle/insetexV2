import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const btnStyle = style({
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  transition: 'all ease-in 200ms',
  background: vars.color.backgroundLight,
  color: vars.color.blackText,
  borderRadius: '12px',
  cursor: 'pointer',
  outline: 'none',
  padding: '15px 35px',
  fontWeight: 500,
  fontSize: '16px',
  border: '2px solid transparent',
  ':hover': {
    border: `2px solid ${vars.color.backgroundLight}`,
    background: 'transparent',
    color: vars.color.lightText,
  },
})

globalStyle(`${btnStyle} > a`, {
  textDecoration: 'none',
})
