import { Component } from 'react'
import { containerControlStep, previousButton } from './controlStep.css'

interface IStep {
  step: number
  handleSetStep: (newStep: number) => void
}

class ControlStep extends Component<IStep> {
  render() {
    const handleNextStep = () => {
      this.props.handleSetStep(this.props.step + 1)
    }

    const handlePrevStep = () => {
      this.props.handleSetStep(this.props.step - 1)
    }

    return (
      <div className={containerControlStep}>        
        {this.props.step >= 1 && <button className={previousButton} onClick={handlePrevStep}>Voltar</button>}
        <button onClick={handleNextStep}>Continuar</button>
      </div>
    )
  }
}

export default ControlStep
