import { style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const btnStyle = style({
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  transition: 'all ease-in 200ms',
  background: vars.color.backgroundLight,
  color: vars.color.lightBlueText,
  borderRadius: '12px',
  cursor: 'pointer',
  outline: 'none',
  padding: '16px 30px',
  border: 'none',
  fontWeight: 600,
  fontSize: '16px',
  ':hover': {
    background: vars.color.backgroundDark,
    color: vars.color.lightText,
  },
})
