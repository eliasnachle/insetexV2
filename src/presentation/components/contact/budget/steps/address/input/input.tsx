import React, { ChangeEvent, Component } from 'react'
import { BudgetState } from '../../../budget'

interface InputProps {
    className: string | undefined
    label: string
    value: string
    type: string
    name: string
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default class Input extends Component<InputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.handleInputChange}
          value={this.props.value}
        />
      </div>
    )
  }
}
