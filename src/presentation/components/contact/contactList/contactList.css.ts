import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const ContactItens = style({
  display: 'grid',
  gridGap: '1em',
})

export const ContactItem = style({
  display: 'flex',
  gap: '1rem',
  fontFamily: vars.fonts.DMSans,
  cursor: 'pointer',
})

globalStyle(`${ContactItem} > figure > svg`, {
  fontSize: '21px',
  color: vars.color.icon,
})

globalStyle(`${ContactItem} > div > h3`, {
  fontSize: '18px',
  color: vars.color.primary,
})

globalStyle(`${ContactItem} > div > p`, {
  paddingBottom: '.25rem',
  fontSize: '14px',
  color: vars.color.lightBlueText,
})

globalStyle(`${ContactItem} > div > a`, {
  textDecoration: 'none',
  color: vars.color.primary,
})

globalStyle(`${ContactItem} > div > a > span`, {
  transition: 'all ease-in 150ms',
  fontSize: '15px',
  color: vars.color.btnColor,
  fontWeight: 600,
})

globalStyle(`${ContactItem} > div > a > span:hover`, {
  opacity: 0.7,
})
