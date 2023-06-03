import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const footerItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
})

globalStyle(`${footerItem} > h2`, {
  fontSize: '14px',
  fontWeight: 500,
})

globalStyle(`${footerItem} > span`, {
  fontSize: '14px',
  fontWeight: 300,
  color: vars.color.grayText,
})
