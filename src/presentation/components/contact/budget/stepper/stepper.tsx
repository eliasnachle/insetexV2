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

class Stepper extends Component<IStepProps> {
  render() {
    return (
      <div className={StepperContainer}>
        {stepsMap.map((it, i) => (
          <Fragment key={i}>
            <div
              className={`${StepperItem}              
              ${this.props.step === i && activeStep}
              ${i < this.props.step && completedStep}`}>
              <motion.div className={StepperIcon}
              initial={false}
              animate={{
                border: this.props.step === i ? `2px solid ${vars.color.blue}` : i < this.props.step ? `2px solid ${vars.color.success}` : `2px solid ${vars.color.pendentItem}`,
                background: this.props.step === i ? '' : i < this.props.step ? vars.color.success : '',
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.2,
              }}
              >{it.icon}</motion.div>
              <span>{it.label}</span>
            </div>
            {it.id < 2 && (
              <div className={lineProgress}>
                <motion.div
                  className={progress}
                  initial={false}
                  animate={{
                    width: this.props.step === i || i < this.props.step ? '100%' : '0%',
                    background: this.props.step === i ? vars.color.blue : i < this.props.step ? vars.color.success : vars.color.pendentItem,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 0.2,
                  }}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    )
  }
}

export default Stepper
