import { formTextArea } from '@/presentation/styles/inputs/inputs.css'
import { ChangeEvent, Component } from 'react'
import { problemContainer } from './services.css'
import servicesMap from '../../../presentation/components/contact/budget/servicesMap'
import { BudgetState, IService } from '@/domain/types/budget/budgetTypes'
import { divideBar, stepContainer, stepItem } from '@/presentation/styles/budget/steps.css'
import CheckboxInput from '@/presentation/components/form/checkbox/checkbox'
import { TextArea } from '@/presentation/components/contact/budget/input/input'

export interface ServicesProps {
  services: IService[]
  detail: string
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

export default class Services extends Component<ServicesProps> {
  handleInputChangeServices = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    const updatedServices = this.props.services.map((service) =>
      service.name === name ? { ...service, checked } : service,
    )
    this.props.handleInputChange('services', updatedServices)
  }

  render() {
    return (
      <div className={stepContainer}>
        <article>
          <h1>Quais serviços serão contratados?</h1>
          <p>Selecione os serviços que você está buscando.</p>
        </article>
        <div>
          <div className={stepItem}>
            {servicesMap.map((it, i) => {
              const service = this.props.services.find((service) => service.name === it.name)
              const isChecked = service?.checked ?? false
              return (
                <CheckboxInput
                  key={i}
                  inputData={it}
                  isChecked={isChecked}
                  handleInputChange={this.handleInputChangeServices}
                />
              )
            })}
          </div>
          <div className={divideBar} />
          <div className={problemContainer}>
            <p>Nos conte um pouco sobre o seu problema</p>
            <div className={formTextArea}>
              <TextArea
                placeholder="Ex: Tenho enfrentado problemas com insetos em casa, incluindo formigas na despensa e mosquitos que conseguem entrar."
                value={this.props.detail}
                name="detail"
                handleInputChange={(e) => this.props.handleInputChange('detail', e.target.value)}
                className={formTextArea}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
