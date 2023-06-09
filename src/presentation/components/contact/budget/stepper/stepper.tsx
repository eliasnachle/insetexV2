import {
  completedStep,
  activeStep,
  lineProgress,
  StepperContainer,
  StepperIcon,
  StepperItem,
  progress,
} from './stepper.css'
import { Component, Fragment } from 'react'
import stepsMap from './stepsMap'
import { motion } from 'framer-motion'
import { vars } from '../../../../styles/theme/theme.css'

interface IStepProps {
  step: number
}

const stepperAnimation = { duration: 0.5, ease: 'easeInOut', delay: 0.2 }

export default class Stepper extends Component<IStepProps> {
  render() {
    return (
      <div className={StepperContainer}>
        {stepsMap.map((it, i) => {
          const isActiveStep = this.props.step === i
          const isCompletedStep = i < this.props.step
          return (
            <Fragment key={i}>
              {this.stepIcon(it, isActiveStep, isCompletedStep)}
              {it.id < 2 && this.progressBar(isActiveStep, isCompletedStep)}
            </Fragment>
          )
        })}
      </div>
    )
  }

  private stepIcon(
    it: { id: number; icon: JSX.Element; label: string },
    isActiveStep: boolean,
    isCompletedStep: boolean,
  ) {
    const iconBorderColor = isActiveStep ? vars.color.blue : isCompletedStep ? vars.color.success : vars.color.pendentItem
    const iconBackground = isActiveStep ? '' : isCompletedStep ? vars.color.success : ''
    return (
      <div
        className={`${StepperItem} ${isActiveStep && activeStep} ${isCompletedStep && completedStep}`}>
        <motion.div
          className={StepperIcon}
          initial={false}
          animate={{ border: `2px solid ${iconBorderColor}`, background: iconBackground }}
          transition={{ animation: stepperAnimation }}>
          {it.icon}
        </motion.div>
        <span>{it.label}</span>
      </div>
    )
  }

  private progressBar(isActiveStep: boolean, isCompletedStep: boolean) {
    const progressBarWidth = isActiveStep || isCompletedStep ? '100%' : '0%'
    const progressBarBackground = isActiveStep ? vars.color.blue : isCompletedStep ? vars.color.success : vars.color.pendentItem
    return (
      <div className={lineProgress}>
        <motion.div
          className={progress}
          initial={false}
          animate={{ width: progressBarWidth, background: progressBarBackground }}
          transition={{ animation: stepperAnimation }}
        />
      </div>
    )
  }
}