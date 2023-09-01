import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import { Component } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'

interface IStep {
  state: BudgetState
  handleSetStep: (newStep: number) => void
}

const validationFunctions: { [step in Steps]: (state: BudgetState) => boolean } = {
  [Steps.STEP_SERVICES]: validateServicesStep,
  [Steps.STEP_ADDRESS]: validateAddressStep,
  [Steps.STEP_USER]: validateUserStep,
}

export default class ControlStep extends Component<IStep> {
  render() {
    const { state, handleSetStep } = this.props

    const handleNextStep = () => {
      const validationFunction = validationFunctions[state.step as Steps]
      if (validationFunction && validationFunction(state)) handleSetStep(state.step + 1)
    }

    const handlePrevStep = () => {
      handleSetStep(state.step - 1)
    }

    return (
      <div
        className={containerControlStep}
        style={{ justifyContent: state.step >= 1 ? 'space-between' : 'end' }}>
        {state.step >= 1 && (
          <button className={previousButton} onClick={handlePrevStep}>
            Voltar
          </button>
        )}
        <button onClick={handleNextStep}>Continuar</button>
      </div>
    )
  }
}

function validateServicesStep(state: BudgetState): boolean {
  console.log(state.services)
  return state.detail.length >= 1
}

function validateAddressStep(state: BudgetState): boolean {
  return state.addressData.address.length >= 1
}

function validateUserStep(state: BudgetState): boolean {
  return state.userData.email.length >= 1
}
