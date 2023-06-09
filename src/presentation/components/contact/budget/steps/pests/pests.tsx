import { ChangeEvent, Component } from 'react'
import { IService } from '../../budgetTypes'
import { stepContainer, stepItem } from '../steps.css'
import PestInput from './pestInput/pestInput'
import pestsMap from './pestsMap'

interface PestsProps {
  services: IService[]
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

class Pests extends Component<PestsProps> {
  render() {
    return (
      <div className={stepContainer}>
        <h1>Quais serviços serão contratados?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className={stepItem}>
          {pestsMap.map((it, i) => {
            const service = this.props.services.find((service) => service.name === it.name)
            const isChecked = service?.checked ?? false
            return (
                <PestInput
                key={i}
                inputData={it}
                isChecked={isChecked}
                handleInputChange={this.props.handleInputChange}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Pests
