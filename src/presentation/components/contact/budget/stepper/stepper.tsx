import {
  completedStep,
  activeStep,
  lineProgress,
  lineProgressActive,
  StepperContainer,
  StepperIcon,
  StepperItem,
  lineProgressCompleted,
} from './stepper.css'
import { Component, Fragment } from 'react'
import stepsMap from './stepsMap'

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
              <div className={StepperIcon}>{it.icon}</div>
              <span>{it.label}</span>
            </div>
            {it.id < 2 && (
              <div
                className={`${lineProgress}  
                ${this.props.step === i && lineProgressActive}
                ${i < this.props.step && lineProgressCompleted}`}
              />
            )}
          </Fragment>
        ))}
      </div>
    )
  }
}

export default Stepper
