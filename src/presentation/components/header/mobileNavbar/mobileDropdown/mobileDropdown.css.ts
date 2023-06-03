import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme/theme.css'

export const dropdown = style({
  padding: '1em .5rem',
  listStyle: 'none',
  display: 'grid',
  gridGap: '.75rem',
})

globalStyle(`${dropdown} > li`, {
  fontSize: '16px',
  cursor: 'pointer',
})

globalStyle(`${dropdown} > li > a`, {
  color: vars.color.grayText,
  textDecoration: 'none',
})

globalStyle(`${dropdown} > li:hover`, {
  opacity: 0.85,
  color: vars.color.lightText,
})
