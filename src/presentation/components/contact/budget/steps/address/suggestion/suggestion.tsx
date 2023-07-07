import React, { Component } from 'react'
import { RiMapPinLine } from 'react-icons/ri'
import { suggestionItem } from '../address.css'
import { AddressSuggestion } from '../addressTypes'

interface SuggestionProps {
  it: AddressSuggestion
  handleSetSuggestion: (e: AddressSuggestion) => void
}

export default class Suggestion extends Component<SuggestionProps> {
  render() {
    const { it, handleSetSuggestion } = this.props

    return (
      <div>
        <RiMapPinLine />
        <div
          className={suggestionItem}
          onClick={() => {
            handleSetSuggestion(it)
          }}>
          <span>{it.text}</span>
          <span>{it.place_name}</span>
        </div>
      </div>
    )
  }
}
