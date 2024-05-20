import React, { useState } from 'react'
import { StatusResponse } from '@/domain/enum/statusResponse'
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters'
import { errorButton, loadingButton } from '@/application/contactForm/contactForm.css'
import { Steps } from '@/domain/types/budget/budgetEnum'
import {
  createValidationStep,
  incrementStepAndScrollToTop,
  sendBudgetMail,
} from '@/useCases/budgetUseCases'
import { IStepButtonProps } from '@/domain/types/budget/controlStepTypes'

export default function NextStepButton({
  state,
  handleInputChange,
  handleSetStep,
}: IStepButtonProps) {
  const [statusResponse, setStatusResponse] = useState(StatusResponse.NONE)
  const [buttonMessage, setButtonMessage] = useState<string | React.ReactElement>('Enviar mensagem')

  const handleNextStepClick = async () => {
    const validationStep = createValidationStep(state.step as Steps)
    if (validationStep.validate(state, handleInputChange))
      state.step === Steps.STEP_USER
        ? await handleSuccessStep()
        : incrementStepAndScrollToTop(state, handleSetStep)
  }

  const handleSuccessStep = async () => {
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

  return (
    <button
      onClick={handleNextStepClick}
      style={{ cursor: statusResponse === StatusResponse.LOADING ? 'default' : 'pointer' }}
      className={statusResponse === StatusResponse.FAILED ? errorButton : ''}>
      {state.step === Steps.STEP_USER ? buttonMessage : 'Continuar'}
    </button>
  )
}
