import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import { ValidateStep } from '@/domain/types/budget/validateStepTypes'
import { Component } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'
import ValidateServiceStep from './validateStep/validateServiceStep'

interface IStep {
  state: BudgetState
  handleSetStep: (newStep: number) => void
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

const validationFunctions: {
  [step in Steps]: (
    state: BudgetState,
    handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
  ) => boolean
} = {
  [Steps.STEP_SERVICES]: validateServicesStep,
  [Steps.STEP_ADDRESS]: validateAddressStep,
  [Steps.STEP_USER]: validateUserStep,
}

export default class ControlStep extends Component<IStep> {
  render() {
    const { state, handleSetStep, handleInputChange } = this.props

    const handleNextStep = () => {
      const validationFunction = validationFunctions[state.step as Steps]
      if (validationFunction && validationFunction(state, handleInputChange))
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

function validateServicesStep(
  state: BudgetState,
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
): boolean {
  const isCheckedService = state.serviceData.services.filter((it) => it.checked == true).length > 0
  handleInputChange('serviceData', {
    ...state.serviceData,
    servicesErrorMessage: isCheckedService ? '' : 'erro',
  })
  return isCheckedService
}

function validateAddressStep(
  state: BudgetState,
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
): boolean {
  return state.addressData.address.length >= 1
}

function validateUserStep(
  state: BudgetState,
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
): boolean {
  return state.userData.email.length >= 1
}
