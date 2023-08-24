import { BudgetState, IUserData } from '@/domain/types/budget/budgetTypes'
import {
  formInput,
  formInputFullWidth,
  formTextArea,
} from '@/presentation/styles/inputs/inputs.css'
import { ChangeEvent, Component } from 'react'
import Input from '../address/input/input'
import { divideBar, stepContainer } from '../steps.css'
import { userContainer, inlineInputContainer, userTextAreaContainer, smallText } from './user.css'

export interface UserProps {
  userData: IUserData  
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

export default class User extends Component<UserProps> {
  handleInputChange = (fieldName: keyof IUserData) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let { value } = e.target
    const { name } = e.target    
    if (name === 'phone') {
      value = value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1') 
    }
    this.props.handleInputChange('userData', {
      ...this.props.userData,
      [fieldName]: value
    });
  };

  render() {
    return (
      <div className={stepContainer}>
        <article>
          <h1>Informe seus dados</h1>
          <p>Preencha os campos abaixo.</p>
        </article>
        <div className={userContainer}>
          <div className={inlineInputContainer}>
            <Input
              label="Nome"
              value={this.props.userData.name}
              type="text"
              name="name"
              handleInputChange={this.handleInputChange('name')}
              className={formInput}
            />
            <Input
              label="Telefone"
              value={this.props.userData.phone}
              type="text"
              name="phone"
              handleInputChange={this.handleInputChange('phone')}
              className={formInput}
            />
          </div>
          <Input
            label="E-mail"
            value={this.props.userData.email}
            type="text"
            name="email"
            handleInputChange={this.handleInputChange('email')}
            className={formInputFullWidth}
          />
          <div className={divideBar} />
          <div className={userTextAreaContainer}>
            <div className={formTextArea}>
              <p>
                Gostaria de enviar alguma mensagem?
                <span className={smallText}> (Não obrigatório)</span>
              </p>
              <textarea placeholder="Use este campo para inserir uma mensagem, se necessário." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
