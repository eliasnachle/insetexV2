import { Steps } from '@/domain/types/budget/budgetEnum'
import { IStepButtonProps } from '@/domain/types/budget/controlStepTypes'
import { containerControlStep } from './controlStep.css'
import NextStepButton from './nextStepButton/nextStepButton'
import PreviousStepButton from './nextStepButton/previousStepButton'

export default function ControlStep({ state, handleInputChange, handleSetStep }: IStepButtonProps) {
  if (state.step === Steps.STEP_SUCCESS) return null
  const isStepAddressOrBeyond = state.step >= Steps.STEP_ADDRESS
  const containerStyle = { justifyContent: isStepAddressOrBeyond ? 'space-between' : 'flex-end' }
  const buttonProps = { state, handleInputChange, handleSetStep }
  return (
    <div className={containerControlStep} style={containerStyle}>
      {isStepAddressOrBeyond && <PreviousStepButton {...buttonProps} />}
      <NextStepButton {...buttonProps} />
    </div>
  )
}
