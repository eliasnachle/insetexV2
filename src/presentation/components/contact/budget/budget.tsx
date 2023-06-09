import { ChangeEvent, Component } from 'react'
import { budgetContainer, budgetSection } from './budget.css'
import { IAddress, IService, IUserData } from './budgetTypes'
import ControlStep from './controlStep/controlStep'
import Stepper from './stepper/stepper'
import Pests from './steps/pests/pests'

interface BudgetState {
  step: number
  services: IService[]
  address: IAddress
  userData: IUserData
}

class Budget extends Component<object, BudgetState> {
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

  handleSetStep = (newStep: number) => {
    this.setState({
      step: newStep
    })
  }

  render() {
    return (
      <section className={budgetSection}>
        <div className={budgetContainer}>
          <Stepper step={this.state.step} />
          {this.state.step == 0 && <Pests services={this.state.services} handleInputChange={this.handleInputChange} />}
          {this.state.step == 1 && <h1>2</h1>}      
          {this.state.step == 2 && <h1>3</h1>}      
          <ControlStep step={this.state.step} handleSetStep={this.handleSetStep} />
        </div>
      </section>
    )
  }
}

export default Budget
