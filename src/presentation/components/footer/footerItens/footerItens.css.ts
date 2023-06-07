import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const footerItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
})

globalStyle(`${footerItem} > h2`, {
  fontSize: '14px',
  fontWeight: 600,
  color: vars.color.lightText,
  textTransform: 'uppercase',
  '@media': {
    'screen and (max-width: 920px)': {
      fontSize: '16px',
    },
  },
})

globalStyle(`${footerItem} > span`, {
  fontFamily: vars.fonts.DMSans,
  fontSize: '14px',
  fontWeight: 500,
  color: vars.color.lightText,
  opacity: 0.7,
  '@media': {
    'screen and (max-width: 920px)': {
      fontSize: '18px',
    },
  },
})
