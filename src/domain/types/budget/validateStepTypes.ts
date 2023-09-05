import { Steps } from './budgetEnum'
import { BudgetState } from './budgetTypes'

export interface IValidateService {
  state: BudgetState
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

export type StepPropsMap = {
  [Steps.STEP_SERVICES]: IValidateService
  [Steps.STEP_ADDRESS]: IValidateService
  [Steps.STEP_USER]: IValidateService
}

export type ValidateStep = {
  [step in Steps]: React.ComponentType<StepPropsMap[step]>
}
