import { ChangeEvent, Component } from 'react'
import { IAddressData } from '../../budgetTypes'
import CheckboxInput from '../../../../form/checkbox/checkbox'
import typeClient, { addressInputsInline } from './addressMap'
import { AddressDetailProps, AddressDetailState, AddressSuggestion } from './addressTypes'
import AutoComplete from '@/infra/http/autoComplete'
import Input from './input/input'
import {
  addressContainer,
  inlineInputContainer,
  suggestionContainer,
  typeContainer,
} from './address.css'
import { stepContainer } from '../steps.css'
import Suggestion from './suggestion/suggestion'
import { formInput } from '@/presentation/styles/inputs/inputs.css'

export default class 
AddressDetail extends Component<AddressDetailProps, AddressDetailState> {
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

  handleInputChange = (fieldName: keyof IAddressData) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name, type } = e.target
    if (name === 'address') this.autoComplete.autoCompleteSuggestion(value)
    if(type == 'checkbox') {
      return this.props.handleInputChange('addressData', {
        ...this.props.addressData,
        typeClient: name
      });  
    }
    this.props.handleInputChange('addressData', {
      ...this.props.addressData,
      [fieldName]: value,
    });
  };

  handleSetSuggestion = (e: AddressSuggestion) => {
    this.setState({ isSuggestion: false })
    const zipCodeContext = e.context.find((item) => item?.id?.startsWith('postcode'))
    const zipCode = zipCodeContext ? zipCodeContext.text : ''
    const newAddressData: IAddressData = {
      ...this.props.addressData,
      address: e.text,
      zipCode: zipCode,
    }
    this.props.handleInputChange('addressData', newAddressData);
  }

  render() {
    return (
      <div className={stepContainer}>
        <article>
          <h1>Qual a sua necessidade?</h1>
          <p>Escolha o seu tipo de estabelecimento e nos informe seu endereço.</p>
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
                  handleInputChange={this.handleInputChange(it.name)}
                />
              )
            })}
          </div>
          <div className={addressContainer}>
            <Input
              label="Endereço"
              value={this.props.addressData.address}
              type="text"
              name="address"
              handleInputChange={this.handleInputChange('address')}
              className={formInput}
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
                <Input
                  key={i}
                  label={it.label}
                  value={this.props.addressData[it.name]}
                  type={it.type}
                  name={it.name}
                  handleInputChange={this.handleInputChange(it.name)}
                  className={formInput}
                />
              ))}
            </div>
            <Input
              label="Referência"
              value={this.props.addressData.reference}
              type="text"
              name="reference"
              handleInputChange={this.handleInputChange('reference')}
              className={formInput}
            />
          </div>
        </div>
      </div>
    )
  }
}
