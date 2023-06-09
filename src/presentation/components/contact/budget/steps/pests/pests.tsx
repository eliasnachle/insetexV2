import { ChangeEvent, Component } from 'react'
import { formTextArea } from '../../../contactForm/contactForm.css'
import { IService } from '../../budgetTypes'
import { divideBar, stepContainer, stepItem } from '../steps.css'
import PestInput from './pestInput/pestInput'
import { problemContainer } from './pests.css'
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
        <div className={divideBar} />
          <div className={problemContainer}>
            <p>Nos conte um pouco sobre o seu problema</p>
            <div className={formTextArea}>              
              <textarea placeholder='Ex: Tenho enfrentado problemas com insetos em casa, incluindo formigas na despensa e mosquitos que conseguem entrar.' />
            </div>
          </div>
      </div>
    )
  }
}

export default Pests
