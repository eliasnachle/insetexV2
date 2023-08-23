import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../../styles/theme/theme.css'

export const userContainer = style({
  display: 'grid',
  gridGap: '1.25em',
  padding: '0 0 4em 0',
  width: '100%',
})

export const inlineInputContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
})

globalStyle(`${inlineInputContainer} > div > input`, {
  width: '300px',
  maxWidth: '100%',
})

export const userTextAreaContainer = style({})

globalStyle(`${userTextAreaContainer} > div > p`, {
  fontSize: '1.25em',
  fontWeight: '500',
  paddingBottom: '.5em',
  color: vars.color.blueText,
})

globalStyle(`${userTextAreaContainer} > div > textarea`, {
  width: '100%',
})

export const smallText = style({
  fontSize: '12px',
  
})
