import { Steps } from './budgetEnum'
import { BudgetState } from './budgetTypes'

export interface IStepButtonProps {
  state: BudgetState
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
  handleSetStep: (newStep: Steps) => void
}
