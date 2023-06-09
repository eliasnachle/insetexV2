import { ChangeEvent, Component } from 'react'
import { IService } from '../../budget'
import { stepContainer, stepItem } from '../steps.css'
import { chebkboxItem, chebkboxItemChecked, radioInput } from './pests.css'
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
            const isChecked = service && service.checked
            return (
              <div
                className={isChecked ? `${chebkboxItemChecked} ${chebkboxItem}` : chebkboxItem}
                key={i}>
                <label>
                  <div>
                    {it.icon}
                    <span>{it.label}</span>
                    <p>{it.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    className={radioInput}
                    name={it.name}
                    id={it.name}
                    onChange={this.props.handleInputChange}
                  />
                </label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Pests
