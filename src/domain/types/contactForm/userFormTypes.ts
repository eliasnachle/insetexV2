import { Dispatch, SetStateAction } from 'react'

export interface IUserForm {
  name: string
  phone: string
  email: string
  message: string
}

export interface IInputData {
  name: string
  label: string
  type: string
  placeholder: string
}

export interface InputUseStateProps {
  values: IInputData
  formErrors: IUserForm
  formData: IUserForm
  setFormData: Dispatch<SetStateAction<IUserForm>>
}
