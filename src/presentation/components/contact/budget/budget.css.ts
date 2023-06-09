import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const budgetSection = style({
  display: 'grid',
  placeItems: 'center'
})

export const budgetContainer = style({
  display: 'grid',
  placeItems: 'center',
  maxWidth: '800px',
  padding: 'calc(80px + 2em)  2em',
})