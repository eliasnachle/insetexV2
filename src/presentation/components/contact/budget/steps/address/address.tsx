import { chebkboxItem, chebkboxItemChecked, checkboxInput, formInput } from '@/presentation/styles/inputs/inputs.css'
import { ChangeEvent, Component } from 'react'
import { IAddress } from '../../budgetTypes'
import { stepContainer } from '../steps.css'
import { addressContainer, inlineInputContainer, typeContainer } from './address.css'
import addressMap from './addressMap'

interface AddressDetailProps {
  addressData: IAddress
  handleInputChangeUserType: (e: ChangeEvent<HTMLInputElement>) => void
}

export default class AddressDetail extends Component<AddressDetailProps> {
  render() {
    return (
      <div className={stepContainer}>
        <h1>Quais serviços serão contratados?</h1>
        <p>Selecione os serviços que você está buscando.</p>
        <div className={typeContainer}>
          {addressMap.map((it, i) => {
            const checkedTypeClient = this.props.addressData.typeClient === it.name ? true : false
            return (
              <div className={checkedTypeClient ? `${chebkboxItemChecked} ${chebkboxItem}` : chebkboxItem } key={i}>
                <label>
                  <div>
                    {it.icon}
                    <span>{it.label}</span>
                    <p>{it.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    className={checkboxInput}
                    name={it.name}
                    id={it.name}
                    onChange={this.props.handleInputChangeUserType}
                    checked={checkedTypeClient}
                  />
                </label>
              </div>
            )
          })}
        </div>
        <div className={addressContainer}>
          <div className={formInput}>
            <label>Endereço</label>
            <input type="text" />
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
