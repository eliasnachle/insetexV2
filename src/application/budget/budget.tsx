import React from 'react'
import { Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { BudgetState, StepComponents } from '../../domain/types/budget/budgetTypes'
import Services from '@/presentation/components/contact/budget/steps/services/services'
import AddressDetail from '@/presentation/components/contact/budget/steps/address/address'
import User from '@/presentation/components/contact/budget/steps/user/user'
import Stepper from '@/presentation/components/contact/budget/stepper/stepper'
import ControlStep from '../controlStep/controlStep'

export enum Steps {
  STEP_SERVICES,
  STEP_ADDRESS,
  STEP_USER,
}

const stepComponents: StepComponents = {
  [Steps.STEP_SERVICES]: Services,
  [Steps.STEP_ADDRESS]: AddressDetail,
  [Steps.STEP_USER]: User,
}

export default class Budget extends Component<object, BudgetState> {
  constructor(props: object) {
    super(props)
    this.state = {
      step: Steps.STEP_SERVICES,
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
          <ControlStep state={this.state} handleSetStep={this.handleSetStep} />
        </div>
      </section>
    )
  }
}
