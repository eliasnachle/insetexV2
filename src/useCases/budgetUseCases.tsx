import { BudgetState } from '@/domain/types/budget/budgetTypes'
import axios from 'axios'

export const sendBudgetMail = async (budgetData: BudgetState): Promise<boolean> => {
  try {
    const response = await axios.post('/api/budget/sendCustomerBudget', budgetData)
    return response.status === 200
  } catch (e) {
    console.error('Erro ao enviar orçamento:', e)
    return false
  }
}