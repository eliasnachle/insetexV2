import { ChangeEvent, Component } from 'react'
import { IAddressData } from '../../budgetTypes'
import CheckboxInput from '../../../../form/checkbox/checkbox'
import typeClient, { addressInputsInline } from './addressMap'
import { AddressDetailProps, AddressDetailState, AddressSuggestion } from './addressTypes'
import AutoComplete from '@/infra/http/autoComplete'
import AddressInput from './adddressInput/addressInput'
import {
  addressContainer,
  inlineInputContainer,
  suggestionContainer,
  typeContainer,
} from './address.css'
import { stepContainer } from '../steps.css'
import Suggestion from './suggestion/suggestion'

export default class AddressDetail extends Component<AddressDetailProps, AddressDetailState> {
  autoComplete: AutoComplete

  handleChangeSuggestion = (
    name: keyof AddressDetailState,
    newSuggestion: AddressSuggestion[] | boolean,
  ) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: newSuggestion,
    }))
  }

  constructor(props: AddressDetailProps) {
    super(props)
    this.state = {
      suggestions: [],
      isSuggestion: false,
    }
    this.autoComplete = new AutoComplete({ handleChangeSuggestion: this.handleChangeSuggestion })
  }

  handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { addressData, handleAddressData } = this.props
    const { value, name } = e.target
    const newAddressData: IAddressData = {
      ...addressData,
      [name]: value,
    }
    handleAddressData(newAddressData)
    if (name === 'address') {
      this.autoComplete.autoCompleteSuggestion(value)
    }
  }

  handleSetSuggestion = (e: AddressSuggestion) => {
    this.setState({ isSuggestion: false })
    const { addressData, handleAddressData } = this.props
    const zipCodeContext = e.context.find((item) => item?.id?.startsWith('postcode'))
    const zipCode = zipCodeContext ? zipCodeContext.text : ''
    const newAddressData: IAddressData = {
      ...addressData,
      address: e.text,
      zipCode: zipCode,
    }
    handleAddressData(newAddressData)
  }

  render() {
    return (
      <div className={stepContainer}>
        <article>
          <h1>Quais serviços serão contratados?</h1>
          <p>Selecione os serviços que você está buscando.</p>
        </article>
        <div>
          <div className={typeContainer}>
            {typeClient.map((it, i) => {
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
            <AddressInput
              label="Endereço"
              value={this.props.addressData.address}
              type="text"
              name="address"
              handleInputChange={this.handleInputChange}
            />
            {this.state.isSuggestion && this.props.addressData.address.length > 3 && (
              <div className={suggestionContainer}>
                {this.state.suggestions.map((it, i) => (
                  <Suggestion key={i} it={it} handleSetSuggestion={this.handleSetSuggestion} />
                ))}
              </div>
            )}
            <div className={inlineInputContainer}>
              {addressInputsInline.map((it, i) => (
                <AddressInput
                  key={i}
                  label={it.label}
                  value={this.props.addressData[it.name]}
                  type={it.type}
                  name={it.name}
                  handleInputChange={this.handleInputChange}
                />
              ))}
            </div>
            <AddressInput
              label="Referência"
              value={this.props.addressData.reference}
              type="text"
              name="reference"
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
