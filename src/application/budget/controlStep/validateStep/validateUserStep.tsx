import { BudgetState, IUserData } from '@/domain/types/budget/budgetTypes'
import axios from 'axios'
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
      ['email', 'E-mail inválido', /^[^\s@]+@[^\s@]+\.[^\s@]+$/],
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
    sendBudgetMail(state, isValidated).then(() => {
      return isValidated
    })
    return isValidated
  }  
}

const sendBudgetMail = async (budgetData: BudgetState, isValidated: boolean): Promise<boolean> => {
  if (!isValidated) return Promise.resolve(false)
  try {    
    const response = await axios.post('/api/budget/sendCustomerBudget', budgetData)
    return response.status === 200    
  } catch (e) {
    console.error("Erro ao enviar orçamento:", e)
    return false
  }
};