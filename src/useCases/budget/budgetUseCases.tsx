import ValidateAddressStep from '@/application/budget/controlStep/validateStep/validateAddressStep'
import ValidateServicesStep from '@/application/budget/controlStep/validateStep/validateServiceStep'
import ValidateStep from '@/application/budget/controlStep/validateStep/validateStep'
import ValidateUserStep from '@/application/budget/controlStep/validateStep/validateUserStep'
import { Steps } from '@/domain/types/budget/budgetEnum'
import { BudgetFirestore, BudgetState, IService } from '@/domain/types/budget/budgetTypes'
import { auth, firestore } from '@/infra/config/firebaseConfig'
import { scrollToTop } from '@/utils/utils'
import axios from 'axios'
import { signInAnonymously } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

export const sendBudgetMail = async (budgetData: BudgetState): Promise<boolean> => {
  try {
    const response = await axios.post('/api/budget/sendCustomerBudget', budgetData)
    return response.status === 200
  } catch (e) {
    console.error('Erro ao enviar orçamento:', e)
    throw new Error('Failed to send budget mail')
  }
}

export const createValidationStep = (step: Steps): ValidateStep => {
  switch (step) {
    case Steps.STEP_SERVICES:
      return new ValidateServicesStep()
    case Steps.STEP_ADDRESS:
      return new ValidateAddressStep()
    case Steps.STEP_USER:
      return new ValidateUserStep()
    default:
      return new ValidateServicesStep()
  }
}

export function incrementStepAndScrollToTop(
  state: BudgetState,
  handleSetStep: (newStep: Steps) => void,
) {
  handleSetStep(state.step + 1)
  scrollToTop()
}

export const createBudgetFirestore = async (budgetFirestore: BudgetFirestore) => {
  try {
    await signInAnonymously(auth)
    await addDoc(collection(firestore, 'recipeBudget'), {
      address: budgetFirestore.address,
      serviceDetail: budgetFirestore.serviceDetail,
      services: budgetFirestore.services,
      userData: budgetFirestore.userData,
    })
    return true
  } catch (e) {
    console.error('Erro ao enviar orçamento:', e)
    throw new Error('Failed to send budget to firestore')
  }
}

export const parseBudgetFirestore = (budgetData: BudgetState): BudgetFirestore => {
  const address = JSON.stringify(budgetData.addressData)
  const serviceDetail = JSON.stringify(budgetData.serviceData)
  const services = budgetData.serviceData.services
    .filter((service: IService) => service.checked)
    .map((service: IService) => service.name)
  const userData = JSON.stringify(budgetData.userData)
  return { address, serviceDetail, services, userData }
}
