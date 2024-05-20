import { BudgetState } from '@/domain/types/budget/budgetTypes'

export default abstract class ValidateStep {
  abstract validate(
    state: BudgetState,
    handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
  ): boolean
}
