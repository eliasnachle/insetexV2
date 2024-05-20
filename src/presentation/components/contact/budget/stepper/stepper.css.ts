import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../../../styles/theme/theme.css'

export const StepperContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '800px',
  width: '100%',
})

export const lineProgress = style({
  background: vars.color.inputBorder,
  height: '2px',
  borderRadius: '10px',
  width: '100%',
  margin: '0 1em 25px 1em',
})

export const progress = style({
  background: vars.color.blue,
  height: '2px',
  borderRadius: '10px',
  width: '0%',
})

export const StepperItem = style({
  display: 'grid',
  placeItems: 'center',
})

globalStyle(`${StepperItem} > span`, {
  marginTop: '10px',
  fontFamily: vars.fonts.DMSans,
  fontWeight: 500,
  fontSize: '14px',
  color: vars.color.pendentItem,
})

export const StepperIcon = style({
  transition: 'all ease-in-out 250ms',
  border: `2px solid ${vars.color.pendentItem}`,
  height: '45px',
  width: '45px',
  padding: '10px',
  borderRadius: '50px',
})

globalStyle(`${StepperIcon} > svg`, {
  transition: 'all ease-in-out 250ms',
  color: vars.color.pendentItem,
  fill: vars.color.pendentItem,
  height: '100%',
  width: '100%',
})

export const activeStep = style({})

globalStyle(`${activeStep} > div`, {
  border: `2px solid ${vars.color.blue}`,
})

globalStyle(`${activeStep} > div > svg`, {
  color: vars.color.blue,
  fill: vars.color.blue,
})

globalStyle(`${activeStep} > span`, {
  color: vars.color.backgroundBlackBlue,
})

export const completedStep = style({})

globalStyle(`${completedStep} > div`, {
  border: `2px solid ${vars.color.success}`,
  background: vars.color.success,
})

globalStyle(`${completedStep} > div > svg`, {
  fill: vars.color.lightText,
})

globalStyle(`${completedStep} > span`, {
  color: vars.color.success,
})
