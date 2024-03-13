import { ServicesProps } from '@/application/budget/services/services'
import { SuccessProps } from '@/application/budget/success/success'
import { UserProps } from '@/application/budget/user/user'
import { AddressDetailProps } from './addressTypes'
import { Steps } from './budgetEnum'

export interface IServiceData {
  detail: string
  services: IService[]
  servicesErrorMessage: string
}

export interface IService {
  name: string
  checked: boolean
}

export interface IAddressData {  
  typeClient: IInputData
  address: IInputData
  addressNumber: IInputData
  complement: IInputData
  reference: IInputData
  zipCode: IInputData
}

export interface IUserData {
  name: IInputData
  phone: IInputData
  email: IInputData
  message: IInputData
}

export interface BudgetState {
  step: number  
  serviceData: IServiceData
  addressData: IAddressData
  userData: IUserData
  suggestions: string[]
}

export type StepPropsMap = {
  [Steps.STEP_SERVICES]: ServicesProps
  [Steps.STEP_ADDRESS]: AddressDetailProps
  [Steps.STEP_USER]: UserProps
  [Steps.STEP_SUCCESS]: SuccessProps}

export interface IInputData {
  inputValue: string
  error?: string
}

export type StepComponents = {
  [step in Steps]: React.ComponentType<StepPropsMap[step]>
}
