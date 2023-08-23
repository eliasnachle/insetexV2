import { AddressDetailState, AddressSuggestion } from '@/presentation/components/contact/budget/steps/address/addressTypes'
import { Component } from 'react'

interface AddressDetailProps {
  handleChangeSuggestion: (name: keyof AddressDetailState, newSuggestion: AddressSuggestion[] | boolean) => void
}

export default class AutoComplete extends Component<AddressDetailProps> {
  autoCompleteSuggestion = async (value: string) => {
    this.props.handleChangeSuggestion('isSuggestion', true)
    if (value?.length <= 3) return
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${
        process.env.NEXT_PUBLIC_MAP_BOX as string
      }&autocomplete=true&country=BR&language=BR`
      const response = await fetch(endpoint)
      const results = await response.json()
      console.log(results)
      this.props.handleChangeSuggestion('suggestions', results?.features)
    } catch (e) {
      console.error('Error in handleInputChange =>', e)
    }
  }
}
