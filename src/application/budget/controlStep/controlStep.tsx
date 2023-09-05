import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import { Component } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'
import ValidateAddressStep from './validateStep/validateAddressStep'
import ValidateServicesStep from './validateStep/validateServiceStep'
import ValidateStep from './validateStep/validateStep'
import ValidateUserStep from './validateStep/validateUserStep'

interface IStep {
  state: BudgetState
  handleSetStep: (newStep: number) => void
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

const validationFunctions: { [step in Steps]: ValidateStep } = {
  [Steps.STEP_SERVICES]: new ValidateServicesStep(),
  [Steps.STEP_ADDRESS]: new ValidateAddressStep(),
  [Steps.STEP_USER]: new ValidateUserStep(),
}

export default class ControlStep extends Component<IStep> {
  render() {
    const { state, handleSetStep, handleInputChange } = this.props

    const handleNextStep = () => {
      const validationFunction = validationFunctions[state.step as Steps]
      if (validationFunction && validationFunction.validate(state, handleInputChange))
        handleSetStep(state.step + 1)
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