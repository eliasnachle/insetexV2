import React, { ChangeEvent } from 'react'
import { chebkboxItem, chebkboxItemChecked, radioInput } from '../pests.css'

interface IInputData {
  icon: JSX.Element
  label: string
  name: string
  description: string
}

interface PestItemProps {
  inputData: IInputData
  isChecked: boolean
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function PestInput({ inputData, isChecked, handleInputChange }: PestItemProps) {
  return (
    <div className={isChecked ? `${chebkboxItemChecked} ${chebkboxItem}` : chebkboxItem}>
      <label>
        <div>
          {inputData.icon}
          <span>{inputData.label}</span>
          <p>{inputData.description}</p>
        </div>
        <input
          type="checkbox"
          className={radioInput}
          name={inputData.name}
          id={inputData.name}
          onChange={handleInputChange}
          checked={isChecked}
        />
      </label>
    </div>
  )
}
