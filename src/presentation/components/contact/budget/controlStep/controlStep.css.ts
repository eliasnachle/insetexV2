import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme/theme.css'

export const containerControlStep = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2em'
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

export const previousButton = style({
  padding: '0 15px !important',
  background: `${vars.color.backgroundLight} !important`,
  color: `${vars.color.blueText} !important`
})