import { ESteps } from './budgetEnums'

export interface IStep {
  currentStep: number
  status: ESteps
}

export interface IService {
  name: string
  checked: boolean
}

export interface IAddress {
  type: string
}

export interface IUserData {
  name: string
  phone: string
  mail: string
  cep: string
  address: string
  number: string
}
