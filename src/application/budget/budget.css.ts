import { style } from '@vanilla-extract/css'

export const budgetSection = style({
  display: 'grid',
  placeItems: 'center',
})

export const budgetContainer = style({
  display: 'grid',
  placeItems: 'center',
  maxWidth: '800px',
  width: '100%',
  padding: 'calc(80px + 2em)  2em',
})
