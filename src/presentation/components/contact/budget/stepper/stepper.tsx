import {
  concludedStep,
  currentStep,
  lineProgress,
  StepperContainer,
  StepperIcon,
  StepperItem,
} from './stepper.css'
import { Component, Fragment } from 'react'
import stepsMap from './stepsMap'
import { IStep } from '../budgetTypes'
import { ESteps } from '../budgetEnums'

interface IStepProps {
  step: IStep
}

class Stepper extends Component<IStepProps> {
  render() {
    return (
      <div className={StepperContainer}>
        {stepsMap.map((it, i) => (
          <Fragment key={i}>
            <div
              className={`${StepperItem}              
              ${this.props.step.currentStep === i && currentStep}
              ${i < this.props.step.currentStep && concludedStep}
              `}>
              <div className={StepperIcon}>{it.icon}</div>
              <span>{it.label}</span>
            </div>
            {it.id < 2 && <div className={lineProgress} />}
          </Fragment>
        ))}
      </div>
    )
  }
}

export default Stepper
