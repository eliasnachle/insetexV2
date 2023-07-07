export interface IService {
  name: string
  checked: boolean
}

export interface IAddressData {
  [key: string]: any
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
  mail: string
}
