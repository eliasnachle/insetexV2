import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme/theme.css'

export const stepContainer = style({
  display: 'grid',
  placeItems: 'center',
  padding: '1em 0'
})

globalStyle(`${stepContainer} > h1`, {   
    fontSize: '2em',
    fontFamily: vars.fonts.Poppins,
    fontWeight: 500,
    color: vars.color.blueText
})

globalStyle(`${stepContainer} > p`, {   
    padding: '1em 0',
    fontSize: '16px',
    fontFamily: vars.fonts.DMSans,
    color: vars.color.lightBlueText
})

export const stepItem = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  gridGap: '1em',
  padding: '2em 0'
})