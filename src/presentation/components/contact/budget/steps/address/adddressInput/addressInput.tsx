import { formInput } from '@/presentation/styles/inputs/inputs.css'
import React, { ChangeEvent, Component } from 'react'

interface AddressInputProps {
    label: string
    value: string
    type: string
    name: string
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default class AddressInput extends Component<AddressInputProps> {
  render() {
    return (
      <div className={formInput}>
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
