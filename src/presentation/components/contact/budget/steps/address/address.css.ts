import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../../styles/theme/theme.css'

export const typeContainer = style({
  display: 'flex',
  gap: '1em'
})

globalStyle(`${typeContainer} > div `, {
  width: '230px'
})

export const addressContainer = style({
  display: 'grid',
  gridGap: '1.5em',
  padding: '1.5em 0 3em 0',
  width: '100%'
})

globalStyle(`${addressContainer} > div > input `, {  
  width: '100%'
})

export const inlineInputContainer = style({
  display: 'flex',
  justifyContent: 'space-between'
})

globalStyle(`${inlineInputContainer} > div:first-child > input`, {
  maxWidth: '150px'
})

globalStyle(`${inlineInputContainer} > div:nth-child(2) > input`, {
  maxWidth: '350px'
})