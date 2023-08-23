import React from 'react'
import { ChangeEvent, Component } from 'react'
import SentMail from '../sentMail/sentMail'
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

  handleInputDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    this.setState({
      detail: value,
    })
  }

  handleInputChangeServices = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    this.setState((prevState) => ({
      services: prevState.services.map((service) =>
        service.name === name ? { ...service, checked } : service,
      ),
    }))
  }

  handleSetStep = (newStep: number) => {
    this.setState({
      step: newStep,
    })
  }

  handleInputChangeUserType = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    this.setState({
      addressData: {
        ...this.state.addressData,
        typeClient: name,
      },
    })
  }

  handleAddressData = (newAddressData: IAddressData) => {
    this.setState({
      addressData: newAddressData,
    })
  }

  handleUserData = (newUserData: IUserData) => {
    this.setState({
      userData: newUserData,
    })
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
              handleInputDetail={this.handleInputDetail}
              handleInputChangeServices={this.handleInputChangeServices}
            />
          )}
          {this.state.step == Steps.STEP_ADDRESS && (
            <AddressDetail
              addressData={this.state.addressData}
              handleInputChangeUserType={this.handleInputChangeUserType}
              handleAddressData={this.handleAddressData}
            />
          )}
          {this.state.step == Steps.STEP_USER && (
            <User
              userData={this.state.userData}
              handleUserData={this.handleUserData}
            />
          )}
          <ControlStep state={this.state} handleSetStep={this.handleSetStep} />
        </div>
      </section>
    )
  }
}
