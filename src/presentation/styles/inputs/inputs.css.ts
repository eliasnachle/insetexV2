import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme/theme.css'

export const chebkboxItem = style({
  border: `2px solid ${vars.color.inputBorder}`,
  borderRadius: '20px',
  padding: '1em 1.25em',
  width: '230px',
  height: '165px',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  transition: 'all ease 250ms',
})

export const checkboxInput = style({
  appearance: 'none',
  width: '20px',
  height: '20px',
  border: `2px solid ${vars.color.radioBorder}`,
  borderRadius: '30px',
  background: vars.color.backgroundLight,
  cursor: 'pointer',
})

globalStyle(`${checkboxInput}:checked`, {
  width: '20px',
  height: '20px',
  border: `5px solid ${vars.color.blue}`,
  boxShadow: `0px 0px 3px 0px ${vars.color.blue}`,
})

globalStyle(`${chebkboxItem} > label`, {
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(2, auto)',
  fontFamily: vars.fonts.DMSans,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
})

globalStyle(`${chebkboxItem} > label > div`, {
  display: 'grid',
})

globalStyle(`${chebkboxItem} > label > div > svg`, {
  fill: vars.color.blueText,
  width: '35px',
  height: 'fit-content',
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
  fill: vars.color.blue,
})

export const formInput = style({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: vars.fonts.DMSans,
})

export const formInputFullWidth = style({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: vars.fonts.DMSans,
})

export const formTextArea = style({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: vars.fonts.DMSans,
})

globalStyle(`${formInput} > label, ${formTextArea} > label, ${formInputFullWidth} > label`, {
  color: vars.color.blackText,
  opacity: 0.7,
  fontSize: '14px',
  fontWeight: 500,
  padding: '0 0 .25rem .25rem',
  '@media': {
    'screen and (max-width: 580px)': {
      fontSize: '16px',
    },
  },
})

globalStyle(`${formInput} > input, ${formTextArea} > textarea, ${formInputFullWidth} > input`, {
  transition: 'all ease-in 50ms',
  background: vars.color.backgroundLight,
  height: '55px',
  width: '500px',
  fontSize: '16px',
  padding: '10px 15px',
  border: `2px solid ${vars.color.inputBorder}`,
  borderRadius: '12px',
  outline: 'none',
  fontFamily: vars.fonts.DMSans,
  '@media': {
    'screen and (max-width: 580px)': {
      width: '100%',
      minHeight: '65px',
    },
  },
})

globalStyle(`${formInput} > span, ${formTextArea} > span, ${formInputFullWidth} > span`, {
  color: vars.color.backgroundError,
  fontSize: '12px',
  fontWeight: 500,
})

globalStyle(`${formTextArea} > textarea`, {
  height: '150px',
  resize: 'none',
})

globalStyle(`${formInput} > input::placeholder, ${formTextArea} > textarea::placeholder, ${formInputFullWidth} > input::placeholder`, {
  fontSize: '14px',
  fontFamily: vars.fonts.DMSans,
  fontWeight: 400,
  color: '#9795ab',
})

globalStyle(`${formInput} > input:focus, ${formTextArea} > textarea:focus, ${formInputFullWidth} > input:focus`, {
  border: '2px solid #00a5ff',
  background: '#00a5ff03',
})

globalStyle(`${formInputFullWidth} > input`, {
  width: '100%'
})

export const errorMessage = style({
  color: `${vars.color.backgroundError} !important`
})