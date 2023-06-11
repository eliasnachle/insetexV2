import React from 'react'
import { ChangeEvent, Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { IAddressData, IService, IUserData } from './budgetTypes'
import ControlStep from './controlStep/controlStep'
import Stepper from './stepper/stepper'
import AddressDetail from './steps/address/address'
import Pests from './steps/pests/pests'

interface BudgetState {
  step: number
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
      services: [
        { name: 'desratizacao', checked: false },
        { name: 'descupinizacao', checked: false },
        { name: 'desinsetizacao', checked: false },
        { name: 'covid', checked: false },
        { name: 'clean', checked: false },
        { name: 'pipe', checked: false },
      ],
      addressData: { typeClient: '', address: '', addressNumber: '', complement: '', reference: '', zipCode: '', state: '', city: '' },
      userData: { name: '', phone: '', mail: '' },
      suggestions: []
    }
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    this.setState((prevState) => ({
      services: prevState.services.map((service) =>
        service.name === name ? { ...service, checked } : service,
      ),
    }))
  }

  handleSetStep = (newStep: number) => {
    this.setState({
      step: newStep
    })
  }

  handleInputChangeUserType = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    this.setState(({
      addressData: {
        ...this.state.addressData,
        typeClient: name        
      }
    }))
  }

  handleChangeAddress = async (e: any) => { 
    const { value, name } = e.target
    this.setState(({
      addressData: {
        ...this.state.addressData,
        address: value        
      }
    }))
    console.log(value)
    if(value?.length <= 3) return
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${process.env.NEXT_PUBLIC_MAP_BOX as string}&autocomplete=true&country=BR&language=BR`
      const response = await fetch(endpoint)
      const results = await response.json()
      this.setState({
        suggestions: results?.features,
      })
    } catch (e) {
      console.error('error autoComplete =>', e)
    }
  }

  render() {  
    return (
      <section className={budgetSection}>
        <div className={budgetContainer}>
          <Stepper step={this.state.step} />
          {this.state.step == 0 && <Pests services={this.state.services} handleInputChange={this.handleInputChange} />}
          {this.state.step == 1 && <AddressDetail addressData={this.state.addressData} handleInputChangeUserType={this.handleInputChangeUserType} handleChangeAddress={this.handleChangeAddress} suggestions={this.state.suggestions} />}
          {this.state.step == 2 && <h1>3</h1>}      
          <ControlStep step={this.state.step} handleSetStep={this.handleSetStep}/>
        </div>
      </section>
    )
  }
}
