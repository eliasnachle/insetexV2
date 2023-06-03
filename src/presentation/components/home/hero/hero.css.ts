import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme/theme.css'

export const heroContainer = style({
  background: vars.color.primary,
  width: '100%',
  height: '50vh',
  display: 'flex',
  padding: 'calc(2em + 80px) 2em 5em 2em',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1.5em',
  '@media': {
    'screen and (max-width: 720px)': {
      height: 'auto',
    },
  },
})

globalStyle(`${heroContainer} > div`, {
  maxWidth: vars.sizes.desktopWidth,
})

globalStyle(`${heroContainer} > div > h1`, {
  fontSize: 'clamp(3em, 5vw, 6em)',
  fontWeight: 800,
  color: vars.color.lightText,
  paddingBottom: '2rem',
})
