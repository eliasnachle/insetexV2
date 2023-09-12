import { BudgetState, IUserData } from '@/domain/types/budget/budgetTypes'
import Input, { TextArea } from '@/presentation/components/contact/budget/input/input'
import { divideBar, stepContainer } from '@/presentation/styles/budget/steps.css'
import {
  formInput,
  formInputFullWidth,
  formTextArea,
} from '@/presentation/styles/inputs/inputs.css'
import { ChangeEvent, Component } from 'react'
import { userContainer, inlineInputContainer, userTextAreaContainer, smallText } from './user.css'

export interface UserProps {
  userData: IUserData
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

export default class User extends Component<UserProps> {
  handleInputChange =
    <K extends keyof IUserData>(fieldName: K) =>
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
        [fieldName]: {
          inputValue: value,
        },
      })
    }

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
              value={this.props.userData.name.inputValue}
              type="text"
              name="name"
              handleInputChange={this.handleInputChange('name')}
              className={formInput}
              error={this.props.userData.name.error}
            />
            <Input
              label="Telefone"
              value={this.props.userData.phone.inputValue}
              type="text"
              name="phone"
              handleInputChange={this.handleInputChange('phone')}
              className={formInput}
              error={this.props.userData.phone.error}
            />
          </div>
          <Input
            label="E-mail"
            value={this.props.userData.email.inputValue}
            type="text"
            name="email"
            handleInputChange={this.handleInputChange('email')}
            className={formInputFullWidth}
            error={this.props.userData.email.error}
          />
          <div className={divideBar} />
          <div className={userTextAreaContainer}>
            <div className={formTextArea}>
              <p>
                Gostaria de enviar alguma mensagem?
                <span className={smallText}> (Não obrigatório)</span>
              </p>
              <TextArea
                placeholder='Use este campo para inserir uma mensagem, se necessário.'
                value={this.props.userData.message.inputValue}
                name="message"
                handleInputChange={this.handleInputChange('message')}
                className={formTextArea}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
