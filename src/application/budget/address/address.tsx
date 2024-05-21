import { ChangeEvent, Component } from 'react'
import typeClient, {
  addressInputsInline,
} from '../../../presentation/components/contact/budget/addressMap'
import {
  AddressDetailProps,
  AddressDetailState,
  AddressSuggestion,
} from '../../../domain/types/budget/addressTypes'
import AutoComplete from '@/infra/http/autoComplete'
import {
  addressContainer,
  containerTypeClient,
  inlineInputContainer,
  suggestionContainer,
  contentTypeClient,
  typeClientError,
} from './address.css'
import { formInput } from '@/presentation/styles/inputs/inputs.css'
import { IAddressData } from '@/domain/types/budget/budgetTypes'
import { stepContainer } from '@/presentation/styles/budget/steps.css'
import CheckboxInput from '@/presentation/components/form/checkbox/checkbox'
import Input from '@/presentation/components/contact/budget/input/input'
import Suggestion from '@/presentation/components/contact/budget/suggestion/suggestion'

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

  handleInputChange =
    (fieldName: keyof IAddressData) =>
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { value, name, type } = e.target
      if (name === 'address') this.autoComplete.autoCompleteSuggestion(value)
      if (type === 'checkbox') {
        return this.props.handleInputChange('addressData', {
          ...this.props.addressData,
          [fieldName]: {
            inputValue: name,
          },
        })
      }
      this.props.handleInputChange('addressData', {
        ...this.props.addressData,
        [fieldName]: {
          inputValue: value,
        },
      })
    }

  handleSetSuggestion = (e: AddressSuggestion) => { 
    this.setState({ isSuggestion: false })
    const zipCodeContext = e.context.find((item) => item?.id?.startsWith('postcode'))
    const zipCode = zipCodeContext ? zipCodeContext.text : ''    
    const newAddressData: IAddressData = {
      ...this.props.addressData,
      address: {
        inputValue: e.place_name_BR,
      },
      zipCode: {
        inputValue: zipCode,
      },
    }
    this.props.handleInputChange('addressData', newAddressData)
  }

  render() {
    return (
      <div className={stepContainer}>
        <article>
          <h1>Qual a sua necessidade?</h1>
          <p>Escolha o seu tipo de estabelecimento e nos informe seu endereço.</p>
        </article>
        <div>
          <div className={containerTypeClient}>
            <div className={contentTypeClient}>
              {typeClient.map((it, i) => {
                const isChecked =
                  this.props.addressData.typeClient.inputValue === it.name ? true : false
                return (
                  <CheckboxInput
                    key={i}
                    inputData={it}
                    isChecked={isChecked}
                    handleInputChange={this.handleInputChange('typeClient')}
                  />
                )
              })}
            </div>
            {this.props.addressData.typeClient.error && (
              <div className={typeClientError}>
                <span>{this.props.addressData.typeClient.error}</span>
              </div>
            )}
          </div>
          <div className={addressContainer}>
            <Input
              label="Endereço"
              value={this.props.addressData.address.inputValue}
              type="text"
              name="address"
              handleInputChange={this.handleInputChange('address')}
              className={formInput}
              error={this.props.addressData.address.error}
            />
            {this.state.isSuggestion && this.props.addressData.address.inputValue.length > 3 && (
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
                  value={this.props.addressData[it.name as keyof IAddressData].inputValue}
                  type={it.type}
                  name={it.name}
                  handleInputChange={this.handleInputChange(it.name as keyof IAddressData)}
                  error={this.props.addressData[it.name as keyof IAddressData].error}
                  className={formInput}
                />
              ))}
            </div>
            <Input
              label="Referência"
              value={this.props.addressData.reference.inputValue}
              type="text"
              name="reference"
              handleInputChange={this.handleInputChange('reference')}
              error={this.props.addressData.reference.error}
              className={formInput}
            />
          </div>
        </div>
      </div>
    )
  }
}
