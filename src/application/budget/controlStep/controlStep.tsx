import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import { sendBudgetMail, createValidationStep, incrementStepAndScrollToTop } from '@/useCases/budgetUseCases'
import { scrollToTop } from '@/utils/utils'
import { Component } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'

interface IStepProps {
  state: BudgetState
  handleSetStep: (newStep: number) => void
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

export default class ControlStep extends Component<IStepProps> {
  render() {
    const { state, handleInputChange, handleSetStep } = this.props

    const handleNextStepClick = async () => {
      const validationStep = createValidationStep(state.step as Steps)
      if (validationStep.validate(state, handleInputChange)) {
        state.step === Steps.STEP_USER 
        ? await handleSuccessStep(state, handleSetStep)
        : incrementStepAndScrollToTop(state, handleSetStep)        
      }
    }

    const handlePrevStep = () => {
      handleSetStep(state.step - 1)
      scrollToTop()
    }

    async function handleSuccessStep(state: BudgetState, handleSetStep: (newStep: Steps) => void) {
      const response = await sendBudgetMail(state)
      if (response) incrementStepAndScrollToTop(state, handleSetStep)
    }

    if (state.step === Steps.STEP_SUCCESS) return null
    return (
      <div
        className={containerControlStep}
        style={{ justifyContent: state.step >= Steps.STEP_ADDRESS ? 'space-between' : 'end' }}>
        {state.step >= Steps.STEP_ADDRESS && (
          <button className={previousButton} onClick={handlePrevStep}>
            Voltar
          </button>
        )}
        <button onClick={handleNextStepClick}>Continuar</button>
      </div>
    )
  }
}
