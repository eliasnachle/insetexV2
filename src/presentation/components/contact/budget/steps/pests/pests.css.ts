import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../../styles/theme/theme.css'

export const chebkboxItem = style({
  border: `2px solid ${vars.color.inputBorder}`,
  borderRadius: '20px',
  padding: '1em 1.25em',
  width: '200px',
  height: '165px',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  transition: 'all ease 250ms'
})

export const radioInput = style({
  appearance: 'none',
  width: '20px',
  height: '20px',
  border: `2px solid ${vars.color.radioBorder}`,
  borderRadius: '30px',
  background: vars.color.backgroundLight,
  cursor: 'pointer'
})

globalStyle(`${radioInput}:checked`, {
  width: '20px',
  height: '20px',
  border: `5px solid ${vars.color.blue}`,
  boxShadow: `0px 0px 3px 0px ${vars.color.blue}`
})

globalStyle(`${chebkboxItem} > label`, {
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(2, auto)',
  fontFamily: vars.fonts.DMSans,
  width: '100%',
  height: '100%',
  cursor: 'pointer'
})

globalStyle(`${chebkboxItem} > label > div`, {
  display: 'grid',
})

globalStyle(`${chebkboxItem} > label > div > svg`, {
  fill: vars.color.blueText,
  width: '35px',
  height: 'fit-content'
})

globalStyle(`${chebkboxItem} > label > div > span`, {
  fontSize: '16px',
  fontWeight: 500,
  color: vars.color.blueText,
})

globalStyle(`${chebkboxItem} > label > div > p`, {
  fontSize: '14px',
  color: vars.color.lightBlueText,
})

export const chebkboxItemChecked = style({
  border: `2px solid ${vars.color.blue}`,
})

globalStyle(`${chebkboxItemChecked} > label > div > svg`, {
  fill: vars.color.blue
})