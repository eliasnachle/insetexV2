import {
  formInput,
  formInputFullWidth,
  formTextArea,
} from '@/presentation/styles/inputs/inputs.css'
import { ChangeEvent, Component } from 'react'
import { IUserData } from '../../budgetTypes'
import Input from '../address/input/input'
import { divideBar, stepContainer } from '../steps.css'
import { userContainer, inlineInputContainer, userTextAreaContainer, smallText } from './user.css'

interface UserProps {
  userData: IUserData
  handleUserData: (newUserData: IUserData) => void
}

export default class user extends Component<UserProps> {
  handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { userData, handleUserData } = this.props
    const { value, name } = e.target
    if (name == 'phone') {
      let maskedValue = value
      maskedValue = maskedValue
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
      return handleUserData({ ...userData, phone: maskedValue })
    }
    handleUserData({ ...userData, [name]: value })
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
              value={this.props.userData.name}
              type="text"
              name="name"
              handleInputChange={this.handleInputChange}
              className={formInput}
            />
            <Input
              label="Telefone"
              value={this.props.userData.phone}
              type="text"
              name="phone"
              handleInputChange={this.handleInputChange}
              className={formInput}
            />
          </div>
          <Input
            label="E-mail"
            value={this.props.userData.email}
            type="text"
            name="email"
            handleInputChange={this.handleInputChange}
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
