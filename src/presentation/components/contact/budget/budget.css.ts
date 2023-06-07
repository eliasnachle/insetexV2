import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const budgetContainer = style({
  display: 'grid',
  placeItems: 'center',
  padding: 'calc(80px + 2em) 2em'
})