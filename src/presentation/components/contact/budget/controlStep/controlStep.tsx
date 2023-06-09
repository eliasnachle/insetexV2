import { Component } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'

interface IStep {
  step: number
  handleSetStep: (newStep: number) => void
}

export default class ControlStep extends Component<IStep> {
  render() {
    const handleNextStep = () => {
      this.props.handleSetStep(this.props.step + 1)
    }

    const handlePrevStep = () => {
      this.props.handleSetStep(this.props.step - 1)
    }

    return (
      <div className={containerControlStep} style={{justifyContent: this.props.step >= 1 ? 'space-between' : 'end'}}>        
        {this.props.step >= 1 && <button className={previousButton} onClick={handlePrevStep}>Voltar</button>}
        <button onClick={handleNextStep}>Continuar</button>
      </div>
    )
  }
}