import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../presentation/styles/theme/theme.css'

export const userContainer = style({
  display: 'grid',
  gridGap: '1.25em',
  padding: '0 0 4em 0',
  width: '100%',
})

export const inlineInputContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 820px)': {
      flexDirection: 'column',
    },
  },
})

globalStyle(`${inlineInputContainer} > div > input`, {
  width: '300px',
  maxWidth: '100%',
  '@media': {
    'screen and (max-width: 820px)': {
      width: '100%',
    },
  },
})

globalStyle(`${inlineInputContainer} > div:nth-child(2) > label`, {
  '@media': {
    'screen and (max-width: 820px)': {
      marginTop: '1.25em',
    },
  },
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
