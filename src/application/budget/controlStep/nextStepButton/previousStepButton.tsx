import { previousButton } from '../controlStep.css'
import { scrollToTop } from '@/utils/utils'
import { IStepButtonProps } from '@/domain/types/budget/controlStepTypes'

export default function PreviousStepButton({state, handleSetStep}: IStepButtonProps) {
  const handlePrevStep = () => {
    handleSetStep(state.step - 1)
    scrollToTop()
  }

  return (
    <button className={previousButton} onClick={handlePrevStep}>
      Voltar
    </button>
  )
}
