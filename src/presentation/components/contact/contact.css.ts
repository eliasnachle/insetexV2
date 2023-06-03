import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme/theme.css'

export const ContactContainer = style({
  padding: 'calc(3em + 80px) 2em',
  display: 'grid',
  placeItems: 'center',
  '@media': {
    'screen and (max-width: 890px)': {
      padding: 'calc(1em + 80px) 2em',
    },
  },
})

export const ContactContent = style({
  maxWidth: vars.sizes.desktopWidth,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '400px auto',
  gridGap: '3em',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 890px)': {
      gridTemplateColumns: '300px auto',
    },
    'screen and (max-width: 720px)': {
      gridTemplateColumns: 'none',
      gridGap: '1em',
    },
  },
})

export const ContactArticle = style({
  display: 'grid',
  gridGap: '.5rem',
  '@media': {
    'screen and (max-width: 720px)': {
      textAlign: 'center',
    },
  },
})

globalStyle(`${ContactArticle} > h1`, {
  fontSize: '3em',
  color: vars.color.blueText,
  maxWidth: '550px',
  '@media': {
    'screen and (max-width: 720px)': {
      fontSize: '2em',
    },
  },
})

globalStyle(`${ContactArticle} > p`, {
  fontSize: '16px',
  padding: '.25rem 0em 1.5em 0em',
  color: vars.color.lightBlueText,
  fontFamily: vars.fonts.DMSans,
})

export const Button = style({
  textAlign: 'center',
  maxWidth: '600px',
  textDecoration: 'none',
  fontFamily: vars.fonts.DMSans,
  fontWeight: 500,
  fontSize: '14px',
  transition: 'all ease-in 200ms',
  background: vars.color.btnColor,
  color: vars.color.lightText,
  borderRadius: '12px',
  cursor: 'pointer',
  outline: 'none',
  padding: '16px 30px',
  border: 'none',
  ':hover': {
    opacity: '0.85',
  },
})
