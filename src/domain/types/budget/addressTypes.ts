import { BudgetState, IAddressData } from '@/domain/types/budget/budgetTypes'

export interface AddressDetailProps {
  addressData: IAddressData
  handleInputChange: <K extends keyof BudgetState>(key: K, value: BudgetState[K]) => void
}

export interface AddressSuggestion {
  id: string
  type: string
  place_type: string[]
  relevance: number
  properties: {
    accuracy: string
    mapbox_id: string
  }
  text_BR: string
  place_name_BR: string
  text: string
  place_name: string
  center: [number, number]
  geometry: {
    type: string
    coordinates: [number, number]
  }
  context: AddressContext[]
}

export interface AddressContext {
  id: string
  wikidata?: string
  mapbox_id: string
  text_BR: string
  text: string
  short_code?: string
}

export interface AddressDetailState {
  suggestions: AddressSuggestion[]
  isSuggestion: boolean
}
