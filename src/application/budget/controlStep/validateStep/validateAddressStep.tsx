import { BudgetState, IAddressData } from '@/domain/types/budget/budgetTypes'
import ValidateStep from './validateStep'

export default class ValidateAddressStep extends ValidateStep {
  validate(
    state: BudgetState,
    handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
  ): boolean {
    let isValidated = false
    const fieldsToValidate: [keyof IAddressData, string][] = [
      ['address', 'Endereço inválido'],
      ['typeClient', 'Tipo de cliente inválido'],
      ['addressNumber', 'Número de endereço inválido'],
      ['typeClient', 'Escolha um tipo de estabelecimento']
    ]
    console.log(state.addressData)
    const updatedAddressData: Partial<IAddressData> = {}
    fieldsToValidate.forEach(([fieldName, errorMessage]) => {
      const inputValue = state.addressData[fieldName].inputValue
      if (inputValue.length === 0) {
        updatedAddressData[fieldName] = {
          ...state.addressData[fieldName],
          error: errorMessage,
        }
      }
    })
    if (Object.keys(updatedAddressData).length > 0) {
      handleInputChange('addressData', {
        ...state.addressData,
        ...updatedAddressData,
      })
    } else {
      isValidated = true
    }
    return isValidated
  }
}
