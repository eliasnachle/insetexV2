import { BudgetState, IUserData } from '@/domain/types/budget/budgetTypes'
import ValidateStep from './validateStep'

export default class ValidateUserStep extends ValidateStep {
  validate(
    state: BudgetState,
    handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
  ): boolean {
    let isValidated = false
    const fieldsToValidate: [keyof IUserData, string][] = [
      ['name', 'Nome inválido'],
      ['phone', 'Telefone inválido'],
      ['email', 'E-mail inválido'],
    ]
    const updatedUserData: Partial<IUserData> = {}
    fieldsToValidate.forEach(([fieldName, errorMessage]) => {
      const inputValue = state.userData[fieldName].inputValue
      if (inputValue.length === 0) {
        updatedUserData[fieldName] = {
          ...state.userData[fieldName],
          error: errorMessage,
        }
      }
    })
    if (Object.keys(updatedUserData).length > 0) {
      handleInputChange('userData', {
        ...state.userData,
        ...updatedUserData,
      })
    } else {
      isValidated = true
    }
    return isValidated
  }
}
