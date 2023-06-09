import { Component } from 'react'
import { containerControlStep } from './controlStep.css'

interface IStep {
  step: number
  handleSetStep: (newStep: number) => void
}

class Budget extends Component<IStep> {
  render() {
    return (
      <div className={containerControlStep}>
        <button onClick={() => this.props.handleSetStep(this.props.step+1)}>Continuar</button>
      </div>
    )
  }
}

export default Budget
