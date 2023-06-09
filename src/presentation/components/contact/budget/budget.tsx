import { ChangeEvent, Component } from 'react'
import { budgetContainer } from './budget.css'
import Stepper from './stepper/stepper'
import Pests from './steps/pests/pests'

export interface IService {
  name: string
  checked: boolean
}

interface IAddress {
  type: string
}

interface IUserData {
  name: string
  phone: string
  mail: string
  cep: string
  address: string
  number: string
}

interface BudgetState {
  services: IService[]
  address: IAddress
  userData: IUserData
}

class Budget extends Component<object, BudgetState> {
  constructor(props: object) {
    super(props)
    this.state = {
      services: [
        {
          name: 'rat',
          checked: false,
        },
        {
          name: 'ant',
          checked: false,
        },
        {
          name: 'cockroach',
          checked: false,
        },
        {
          name: 'covid',
          checked: false,
        },
        {
          name: 'clean',
          checked: false,
        },
        {
          name: 'pipe',
          checked: false,
        },
      ],
      address: {
        type: '',
      },
      userData: {
        name: '',
        phone: '',
        mail: '',
        cep: '',
        address: '',
        number: '',
      },
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

  render() {
    return (
      <div className={budgetContainer}>
        <Stepper />
        <Pests services={this.state.services} handleInputChange={this.handleInputChange} />
        <button onClick={() => console.log(this.state.services)}>VER</button>
      </div>
    )
  }
}

export default Budget
