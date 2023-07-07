import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme/theme.css'

export const containerControlStep = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '2em',
  height: '60px'
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
  background: `${vars.color.backgroundLight} !important`,
  color: `${vars.color.blueText} !important`,
  border: `2px solid ${vars.color.blueText} !important`
})