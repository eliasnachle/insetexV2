export interface IService {
  name: string
  checked: boolean
}

export interface IAddressData {
  typeClient: string
  address: string
  addressNumber: string
  complement: string
  reference: string
  zipCode: string
  state: string
  city: string
}

export interface IUserData {
  name: string
  phone: string
  mail: string
}
