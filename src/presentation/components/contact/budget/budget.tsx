import React from 'react'
import { ChangeEvent, Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { IAddressData, IService, IUserData } from './budgetTypes'
import ControlStep from './controlStep/controlStep'
import Stepper from './stepper/stepper'
import AddressDetail from './steps/address/address'
import Pests from './steps/pests/pests'
import User from './steps/user/user'

interface BudgetState {
  step: number
  detail: string
  services: IService[]
  addressData: IAddressData
  userData: IUserData
  suggestions: string[]
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
      userData: { name: '', phone: '', mail: '' },
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

  render() {
    return (
      <section className={budgetSection}>
        <div className={budgetContainer}>
          <Stepper step={this.state.step} />
          {this.state.step == 0 && (
            <Pests
              services={this.state.services}
              detail={this.state.detail}
              handleInputDetail={this.handleInputDetail}
              handleInputChangeServices={this.handleInputChangeServices}
            />
          )}
          {this.state.step == 1 && (
            <AddressDetail
              addressData={this.state.addressData}
              handleInputChangeUserType={this.handleInputChangeUserType}
              handleAddressData={this.handleAddressData}
            />
          )}
          {this.state.step == 2 && (
            <User />
          )}
          <ControlStep step={this.state.step} handleSetStep={this.handleSetStep} />
        </div>
        {/* <button onClick={() => console.log(this.state.addressData)}>oi</button> */}
      </section>
    )
  }
}
