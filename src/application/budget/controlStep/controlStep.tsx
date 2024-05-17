import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import { sendBudgetMail } from '@/useCases/budgetUseCases'
import { scrollToTop } from '@/utils/utils'
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

const validationSteps: { [step in Steps]: ValidateStep } = {
  [Steps.STEP_SERVICES]: new ValidateServicesStep(),
  [Steps.STEP_ADDRESS]: new ValidateAddressStep(),
  [Steps.STEP_USER]: new ValidateUserStep(),
  [Steps.STEP_SUCCESS]: new ValidateUserStep(),
}

export default class ControlStep extends Component<IStep> {  
  render() {
    const { state, handleSetStep, handleInputChange } = this.props

    if (state.step === Steps.STEP_SUCCESS) return null

    const handleNextStepClick = async () => {      
      const validationFunction = validationSteps[state.step as Steps]
      if (validationFunction && validationFunction.validate(state, handleInputChange))          
      if(state.step != Steps.STEP_USER) {
        handleSetStep(state.step + 1)
        scrollToTop()      
      }            
      await handleSuccessStep(state, handleSetStep)
    }

    const handlePrevStep = () => {
      handleSetStep(state.step - 1)
      scrollToTop()
    }    

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


const handleSuccessStep = async (state: BudgetState, handleSetStep: (newStep: number) => void) => {  
  const response = await sendBudgetMail(state)
  if(response) {
    handleSetStep(state.step + 1)
    scrollToTop()
  }
}