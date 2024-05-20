import { formTextArea } from '@/presentation/styles/inputs/inputs.css'
import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../presentation/styles/theme/theme.css'

export const formContainer = style({
  padding: 'calc(80px + 2em) 1em',
  display: 'grid',
  placeItems: 'center',
})

globalStyle(`${formContainer} > h1`, {
  fontSize: '3em',
  color: vars.color.blueText,
  fontFamily: vars.fonts.Poppins,
  fontWeight: 500,
})

globalStyle(`${formContainer} > p`, {
  color: vars.color.lightBlueText,
  fontSize: '16px',
  fontWeight: 400,
  padding: '.25rem 0 2em 0',
  width: '500px',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 580px)': {
      width: '100%',
      textAlign: 'start',
    },
  },
})

globalStyle(`${formContainer} > div`, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25em',
  '@media': {
    'screen and (max-width: 580px)': {
      width: '100%',
    },
  },
})

globalStyle(`${formContainer} > div > button, ${formTextArea} > div > button`, {
  marginTop: '1em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  cursor: 'pointer',
  transition: 'all ease-in-out 150ms',
  fontFamily: vars.fonts.DMSans,
  fontSize: '16px',
  fontWeight: 500,
  background: vars.color.blue,
  color: vars.color.lightText,
  border: 'none',
  borderRadius: '16px',
  height: '60px',
})

globalStyle(`${formContainer} > div > button:hover`, {
  opacity: 0.7,
})

export const sentMailContainer = style({
  padding: '0 3em 2em',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '700px',
  width: '100%',
  textAlign: 'center',
  background: vars.color.backgroundBlackBlue,
  borderRadius: '35px',
})

globalStyle(`${sentMailContainer} > div > svg`, {
  marginBottom: '-45px',
})

globalStyle(`${sentMailContainer} > div > h1`, {
  fontSize: '2.5em',
  color: vars.color.lightText,
})

globalStyle(`${sentMailContainer} > div > p`, {
  padding: '1em',
  fontSize: '16px',
  color: vars.color.lightText,
  opacity: 0.6,
})

globalStyle(`${sentMailContainer} > div > button:hover`, {
  cursor: 'pointer',
  opacity: 0.8,
})

const rotate = keyframes({
  '0%': { transform: 'rotateZ(0deg)' },
  '100%': { transform: 'rotateZ(360deg)' },
})

export const errorButton = style({
  background: `${vars.color.backgroundError} !important`,
})

export const loadingButton = style({
  fontSize: '1em',
  animation: `${rotate} 1.25s linear infinite`,
})

globalStyle(`${sentMailContainer} > div > button`, {
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  transition: 'all ease-in 200ms',
  background: vars.color.backgroundLight,
  color: vars.color.blackText,
  borderRadius: '12px',
  outline: 'none',
  padding: '16px 40px',
  border: 'none',
  fontSize: '16px',
  marginTop: '10px',
})

export const errorMessage = style({
  textAlign: 'center',
  fontSize: '14px',
  color: vars.color.grayText,
})

globalStyle(`${errorMessage} > a`, {
  color: vars.color.primary,
  textDecoration: 'none',
  cursor: 'pointer',
})
