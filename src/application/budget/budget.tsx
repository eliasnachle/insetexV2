import React, { Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { BudgetState, StepComponents } from '../../domain/types/budget/budgetTypes'
import Stepper from '@/presentation/components/contact/budget/stepper/stepper'
import ControlStep from './controlStep/controlStep'
import Services from './services/services'
import AddressDetail from './address/address'
import User from './user/user'
import { Steps } from '@/domain/types/budget/budgetEnum'
import Success from './success/success'

const stepComponents: StepComponents = {
  [Steps.STEP_SERVICES]: Services,
  [Steps.STEP_ADDRESS]: AddressDetail,
  [Steps.STEP_USER]: User,
  [Steps.STEP_SUCCESS]: Success,
}

export default class Budget extends Component<object, BudgetState> {
  constructor(props: object) {
    super(props)
    this.state = {
      step: Steps.STEP_USER,      
      serviceData: {
        services:[
          { name: 'desratizacao', checked: false },
          { name: 'descupinizacao', checked: false },
          { name: 'desinsetizacao', checked: false },
          { name: 'covid', checked: false },
          { name: 'clean', checked: false },
          { name: 'pipe', checked: false },
        ],
        detail: '',
        servicesErrorMessage: ''
      },
      addressData: {
        typeClient: { inputValue: ''},
        address: { inputValue: '' },
        addressNumber: { inputValue: '' },
        complement: { inputValue: '' },
        reference: { inputValue: '' },
        zipCode: { inputValue: '' },
      },
      userData: { 
        name: { inputValue: ''},
        phone: { inputValue: ''},
        email: { inputValue: ''},
        message: { inputValue: ''},
      },
      suggestions: [],
      isCompletedForm: false
    }
  }

  handleSetStep = (newStep: number) => {
    this.setState({
      step: newStep,
    })
  }

  handleInputChange = <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => {
    this.setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  render() {
    const StepComponent = stepComponents[this.state.step as Steps]
    return (
      <section className={budgetSection}>
        <div className={budgetContainer}>
          <Stepper step={this.state.step} />
          {StepComponent && (
            <StepComponent {...this.state} handleInputChange={this.handleInputChange} />
          )}
          <ControlStep
            state={this.state}
            handleSetStep={this.handleSetStep}
            handleInputChange={this.handleInputChange}
          />
        </div>
      </section>
    )
  }
}
