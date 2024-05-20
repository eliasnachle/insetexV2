import { errorButton, loadingButton } from '@/application/contactForm/contactForm.css'
import { StatusResponse } from '@/domain/enum/statusResponse'
import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetState } from '@/domain/types/budget/budgetTypes'
import {
  sendBudgetMail,
  createValidationStep,
  incrementStepAndScrollToTop,
} from '@/useCases/budgetUseCases'
import { scrollToTop } from '@/utils/utils'
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters'
import { useState } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'

interface IStepProps {
  state: BudgetState
  handleSetStep: (newStep: Steps) => void
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

const ControlStep: React.FC<IStepProps> = ({ state, handleInputChange, handleSetStep }) => {
  const [statusResponse, setStatusResponse] = useState(StatusResponse.NONE)
  const [buttonMessage, setButtonMessage] = useState<string | React.ReactElement>('Enviar mensagem')

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
    setStatusResponse(StatusResponse.LOADING)
    setButtonMessage(<AiOutlineLoading3Quarters className={loadingButton} />)
    try {
      await sendBudgetMail(state)
      incrementStepAndScrollToTop(state, handleSetStep)
      setStatusResponse(StatusResponse.SUCCESS)
      setButtonMessage('Enviado com sucesso!')
    } catch (e) {
      setStatusResponse(StatusResponse.FAILED)
      setButtonMessage('Falha ao enviar')
    }
  }

  if (state.step === Steps.STEP_SUCCESS) return null
  return (
    <div
      className={containerControlStep}
      style={{ justifyContent: state.step >= Steps.STEP_ADDRESS ? 'space-between' : 'flex-end' }}>
      {state.step >= Steps.STEP_ADDRESS && (
        <button className={previousButton} onClick={handlePrevStep}>
          Voltar
        </button>
      )}
      {state.step !== Steps.STEP_USER ? (
        <button onClick={handleNextStepClick}>Continuar</button>
      ) : (
        <button
          onClick={handleNextStepClick}
          style={{ cursor: statusResponse === StatusResponse.LOADING ? 'default' : 'pointer' }}
          className={statusResponse === StatusResponse.FAILED ? errorButton : ''}>
          {buttonMessage}
        </button>
      )}
    </div>
  )
}

export default ControlStep
