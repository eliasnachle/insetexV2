import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme/theme.css'

export const containerControlStep = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center'
})

globalStyle(`${containerControlStep} > button`, {
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  fontSize: '14px',
  transition: 'all ease-in 200ms',
  background: vars.color.blue,
  color: vars.color.lightText,
  borderRadius: '12px',
  outline: 'none',
  padding: '16px 45px',
  border: 'none',
  cursor: 'pointer'
})

globalStyle(`${containerControlStep} > button:hover`, {
  opacity: 0.8
})
