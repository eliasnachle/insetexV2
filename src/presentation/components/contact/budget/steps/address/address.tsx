import { formInput } from '@/presentation/styles/inputs/inputs.css'
import { ChangeEvent, Component } from 'react'
import { IAddressData } from '../../budgetTypes'
import CheckboxInput from '../../../../form/checkbox/checkbox'
import { stepContainer } from '../steps.css'
import {
  addressContainer,
  inlineInputContainer,
  suggestionContainer,
  suggestionItem,
  typeContainer,
} from './address.css'
import addressMap from './addressMap'
import { RiMapPinLine } from 'react-icons/ri'

interface AddressDetailProps {
  addressData: IAddressData
  handleInputChangeUserType: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeAddress: (e: any) => void
  suggestions: any[]
}

export default class AddressDetail extends Component<AddressDetailProps> {  
  render() {    
    return (
      <div className={stepContainer}>
        <h1>Quais serviços serão contratados?</h1>
        <p>Selecione os serviços que você está buscando.</p>
        <div className={typeContainer}>
          {addressMap.map((it, i) => {
            const isChecked = this.props.addressData.typeClient === it.name ? true : false
            return (
              <CheckboxInput
                key={i}
                inputData={it}
                isChecked={isChecked}
                handleInputChange={this.props.handleInputChangeUserType}
              />
            )
          })}
        </div>
        <div className={addressContainer}>
          <div className={formInput}>
            <label>Endereço</label>
            <input type="text" onChange={this.props.handleChangeAddress} name='address' value={this.props.addressData.address}/>
            {this.props.suggestions?.length > 1  && (
              <div className={suggestionContainer}>
                {this.props.suggestions.map((it, i) => (
                  // PEGAR CEP ==> it.context.find((item: { id: string }) => item.id.startsWith('postcode'))
                    <div key={i}>
                    <RiMapPinLine />
                    <div className={suggestionItem}>
                      <span>{it.text}</span>
                      <span>{it.place_name}</span>
                    </div>
                  </div>
                  ))}
              </div>
            )}
          </div>
          <div className={inlineInputContainer}>
            <div className={formInput}>
              <label>Número</label>
              <input type="text" />
            </div>
            <div className={formInput}>
              <label>Complemento</label>
              <input type="text" />
            </div>
          </div>
          <div className={formInput}>
            <label>Referência</label>
            <input type="text" />
          </div>
        </div>
      </div>
    )
  }
}
