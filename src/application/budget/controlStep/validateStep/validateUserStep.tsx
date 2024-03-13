import { BudgetState, IUserData } from '@/domain/types/budget/budgetTypes'
import ValidateStep from './validateStep'

export default class ValidateUserStep extends ValidateStep {
  validate(
    state: BudgetState,
    handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
  ): boolean {
    let isValidated = true
    const fieldsToValidate: [keyof IUserData, string, RegExp | null][] = [
      ['name', 'Nome inválido', null],
      ['phone', 'Telefone inválido', /^\(\d{2}\)\s\d{4,5}-\d{4}$/],
      ['email', 'E-mail inválido', null],
    ]
    const updatedUserData: Partial<IUserData> = {}
    fieldsToValidate.forEach(([fieldName, errorMessage, regex]) => {
      const inputValue = state.userData[fieldName].inputValue
      if (inputValue.length === 0 || (regex && !regex.test(inputValue))) {
        updatedUserData[fieldName] = {
          ...state.userData[fieldName],
          error: errorMessage,
        }
        isValidated = false
      }
    })
    if (Object.keys(updatedUserData).length > 0) {
      handleInputChange('userData', {
        ...state.userData,
        ...updatedUserData,
      })
    }
    return isValidated
  }
}
