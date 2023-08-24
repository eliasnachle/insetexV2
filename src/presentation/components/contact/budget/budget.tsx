import React from 'react'
import { ChangeEvent, Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { IAddressData, IService, IUserData } from './budgetTypes'
import ControlStep from './controlStep/controlStep'
import Stepper from './stepper/stepper'
import AddressDetail from './steps/address/address'
import Services from './steps/services/services'
import User from './steps/user/user'

export interface BudgetState {
  step: number
  detail: string
  services: IService[]
  addressData: IAddressData
  userData: IUserData
  suggestions: string[]
}

export enum Steps {
  STEP_SERVICES = 0,
  STEP_ADDRESS = 1,
  STEP_USER = 2,
  STEP_SUCCESS = 3
}

export default class Budget extends Component<object, BudgetState> {
  constructor(props: object) {
    super(props)
    this.state = {
      step: 0,
      detail: '',
      services: [
        { name: 'desratizacao', checked: false },
        { name: 'descupinizacao', checked: false },
        { name: 'desinsetizacao', checked: false },
        { name: 'covid', checked: false },
        { name: 'clean', checked: false },
        { name: 'pipe', checked: false },
      ],
      addressData: {
        typeClient: '',
        address: '',
        addressNumber: '',
        complement: '',
        reference: '',
        zipCode: '',
      },
      userData: { name: '', phone: '', email: '', message: '' },
      suggestions: [],
    }
  }

  handleSetStep = (newStep: number) => {
    this.setState({
      step: newStep,
    })
  }

  handleInputDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    this.setState({
      detail: value,
    })
  }

  handleInputChange = <K extends keyof BudgetState>(
    key: K,
    value: BudgetState[K]
  ) => {
    this.setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  render() {
    return (
      <section className={budgetSection}>
        <div className={budgetContainer}>
          <Stepper step={this.state.step} />
          {this.state.step == Steps.STEP_SERVICES && (
            <Services
              services={this.state.services}
              detail={this.state.detail}
              handleInputChange={this.handleInputChange}
            />
          )}
          {this.state.step == Steps.STEP_ADDRESS && (
            <AddressDetail
              addressData={this.state.addressData}
              handleInputChange={this.handleInputChange}
            />
          )}
          {this.state.step == Steps.STEP_USER && (
            <User
              userData={this.state.userData}
              handleInputChange={this.handleInputChange}
            />
          )}
          <ControlStep state={this.state} handleSetStep={this.handleSetStep} />
        </div>
      </section>
    )
  }
}
