import {
  chebkboxItem,
  chebkboxItemChecked,
  checkboxInput,
} from '@/presentation/styles/inputs/inputs.css'
import React, { ChangeEvent } from 'react'

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

export default function CheckboxInput({ inputData, isChecked, handleInputChange }: PestItemProps) {
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
          className={checkboxInput}
          name={inputData.name}
          id={inputData.name}
          onChange={handleInputChange}
          checked={isChecked}
        />
      </label>
    </div>
  )
}
