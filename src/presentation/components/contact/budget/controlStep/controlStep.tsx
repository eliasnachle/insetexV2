import { Component } from 'react'
import { containerControlStep } from './controlStep.css'

interface IStep {
  handleSetStep: (newStep: number) => void
}

class Budget extends Component<IStep> {
  render() {
    return (
      <div className={containerControlStep}>
        <button onClick={() => this.props.handleSetStep(1)}>Continuar</button>
      </div>
    )
  }
}

export default Budget
