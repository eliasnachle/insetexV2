import { BudgetState } from '@/domain/types/budget/budgetTypes'
import ValidateStep from './validateStep'

export default class ValidateServicesStep extends ValidateStep {
  validate(
    state: BudgetState,
    handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void,
  ): boolean {
    const isCheckedService =
      state.serviceData.services.filter((it) => it.checked == true).length > 0
    handleInputChange('serviceData', {
      ...state.serviceData,
      servicesErrorMessage: isCheckedService ? '' : 'Escolha um serviço para continuar',
    })
    return isCheckedService
  }
}
