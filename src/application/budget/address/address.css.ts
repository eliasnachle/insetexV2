import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../presentation/styles/theme/theme.css'

export const containerTypeClient = style({
  display: 'flex',
  flexDirection: 'column'
})

export const contentTypeClient = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1em'
})

globalStyle(`${contentTypeClient} > div `, {
  width: '230px'
})

export const addressContainer = style({
  display: 'grid',
  gridGap: '1.5em',
  padding: '0 0 3em 0',
  width: '100%'
})

globalStyle(`${addressContainer} > div > input `, {  
  width: '100%'
})

export const inlineInputContainer = style({
  display: 'flex',
  justifyContent: 'space-between'
})

globalStyle(`${inlineInputContainer} > div:first-child > input`, {
  maxWidth: '200px'
})

globalStyle(`${inlineInputContainer} > div:nth-child(2) > input`, {
  maxWidth: '400px'
})

export const suggestionContainer = style({
  marginTop: '90px',
  border: `2px solid ${vars.color.inputBorder}`,
  borderRadius: '12px',
  background: vars.color.backgroundLight,
  position: 'absolute',
  zIndex: '999',
  width: '736px'
})

globalStyle(`${suggestionContainer} > div`, {
  padding: '0 1em',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  cursor: 'pointer'
})

globalStyle(`${suggestionContainer} > div > svg`, {
  fill: vars.color.lightBlueText
})

export const suggestionItem = style({
  display: 'flex',
  flexDirection: 'column',
})

globalStyle(`${suggestionItem} > span`, {
  fontSize: '16px',
  transition: 'all ease-in 150ms',
  color: vars.color.lightBlueText,
})

globalStyle(`${suggestionContainer} > span:hover`, {
  color: vars.color.blackText,
})

globalStyle(`${suggestionItem} > span:nth-child(2)`, {
  fontSize: '14px',
  transition: 'all ease-in 150ms',
  color: vars.color.grayText,  
})


export const typeClientError = style({
  display: 'flex',
  padding: '0.5em 0',
  color: vars.color.backgroundError,
  fontSize: '13px',
  fontWeight: 500,
})