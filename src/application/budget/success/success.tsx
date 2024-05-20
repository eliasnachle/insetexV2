import { Component } from 'react'
import { stepSuccess } from '@/presentation/styles/budget/steps.css'
import { IUserData } from '@/domain/types/budget/budgetTypes'
import Lottie from 'lottie-react'
import successCheck from '/public/success_check.json'

export interface SuccessProps {
  userData: IUserData
}

export default class Success extends Component<SuccessProps> {
  render() {
    const { userData } = this.props

    return (
      <div className={stepSuccess}>
        <Lottie animationData={successCheck} loop={false} />
        <h1>
          {userData.name.inputValue}, recebemos seu orçamento e estamos trabalhando para atendê-lo.
        </h1>
        <p>
          Obrigado por nos procurar! Estamos elaborando um orçamento adaptado às suas necessidades.
          Aguarde o envio por e-mail. Se precisar de esclarecimentos, estamos à disposição!
        </p>
      </div>
    )
  }
}
