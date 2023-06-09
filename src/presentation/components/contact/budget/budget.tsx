import { ChangeEvent, Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { ESteps } from './budgetEnums'
import { IAddress, IService, IStep, IUserData } from './budgetTypes'
import ControlStep from './controlStep/controlStep'
import Stepper from './stepper/stepper'
import Pests from './steps/pests/pests'

interface BudgetState {
  step: IStep
  services: IService[]
  address: IAddress
  userData: IUserData
}

class Budget extends Component<object, BudgetState> {
  constructor(props: object) {
    super(props)
    this.state = {
      step: { currentStep: 0, status: ESteps.ACTIVE },
      services: [
        { name: 'rat', checked: false },
        { name: 'ant', checked: false },
        { name: 'cockroach', checked: false },
        { name: 'covid', checked: false },
        { name: 'clean', checked: false },
        { name: 'pipe', checked: false },
      ],
      address: { type: '' },
      userData: { name: '', phone: '', mail: '', cep: '', address: '', number: '' },
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

  handleSetStep = (newStep: IStep) => {
    this.setState({
      step: newStep
    })
  }

  render() {
    return (
      <section className={budgetSection}>
        <div className={budgetContainer}>
          <Stepper step={this.state.step} />
          <Pests services={this.state.services} handleInputChange={this.handleInputChange} />
          {/* <ControlStep handleSetStep={this.handleSetStep} step={this.state.step.currentStep} /> */}
        </div>
      </section>
    )
  }
}

export default Budget
