import React, { ChangeEvent, Component } from 'react'

interface InputProps {
  className: string | undefined
  label?: string
  value: string
  type?: string
  name: string
  placeholder?: string
  error?: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
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
        {this.props.error && <span>{this.props.error}</span>}
      </div>
    )
  }
}

export class TextArea extends Component<InputProps> {
  render() {
    return (
      <textarea
        placeholder={this.props.placeholder}
        value={this.props.value}
        name={this.props.name}
        onChange={this.props.handleInputChange}
      />
    )
  }
}
