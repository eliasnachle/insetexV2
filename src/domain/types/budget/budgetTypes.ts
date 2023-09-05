import { ServicesProps } from '@/application/budget/services/services'
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
  [key: string]: string
  typeClient: string
  address: string
  addressNumber: string
  complement: string
  reference: string
  zipCode: string
}

export interface IUserData {
  name: string
  phone: string
  email: string
  message: string
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
}

export type StepComponents = {
  [step in Steps]: React.ComponentType<StepPropsMap[step]>
}
