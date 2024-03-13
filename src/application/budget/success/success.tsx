import { Component } from 'react'
import { stepContainer, stepSuccess } from '@/presentation/styles/budget/steps.css'
import { IUserData } from '@/domain/types/budget/budgetTypes'
import Lottie from 'lottie-react'
import { useRouter } from 'next/router'

export interface SuccessProps {
  userData: IUserData
}

const successCheck = require('/public/success_check.json')

export default class Success extends Component<SuccessProps> {
  render() {        
    const { userData } = this.props    
    
    return (
      <div className={stepSuccess}>                  
          <Lottie animationData={successCheck} loop={false} />
          <h1>Obrigado, {userData.name.inputValue}!</h1>
          <p>Agradecemos pelo seu interesse em nossos serviços/produtos! Estamos trabalhando duro para preparar um orçamento personalizado para atender às suas necessidades. Fique atento(a), pois em breve você receberá o orçamento completo por e-mail.</p>
          <p>Se tiver alguma dúvida ou precisar de mais informações enquanto isso, não hesite em entrar em contato conosco. Estamos aqui para ajudar!</p>          
      </div>
    )
  }
}
