import { Component } from 'react'
import { BudgetState, Steps } from '../budget'
import { containerControlStep, previousButton } from './controlStep.css'

interface IStep {
  state: BudgetState
  handleSetStep: (newStep: number) => void
}

export default class ControlStep extends Component<IStep> {
  render() {
    const handleNextStep = () => {
      validateStep(this.props.state)
      this.props.handleSetStep(this.props.state.step + 1)
    }

    const handlePrevStep = () => {
      this.props.handleSetStep(this.props.state.step - 1)
    }

    return (
      <div
        className={containerControlStep}
        style={{ justifyContent: this.props.state.step >= 1 ? 'space-between' : 'end' }}>
        {this.props.state.step >= 1 && (
          <button className={previousButton} onClick={handlePrevStep}>
            Voltar
          </button>
        )}
        <button onClick={handleNextStep}>Continuar</button>
      </div>
    )
  }
}

function validateStep(state: BudgetState) {
  if (state.step == Steps.STEP_SERVICES) {
    console.log(state.services)
    console.log(state.detail)
  }
  if (state.step == Steps.STEP_ADDRESS) {
    console.log(state.addressData)
  }
  if(state.step == Steps.STEP_USER) {
    console.log(state.userData)
  }
}
