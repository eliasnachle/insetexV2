import { IValidateService } from '@/domain/types/budget/validateStepTypes'
import { Component } from 'react'

export default class ValidateUserStep extends Component<IValidateService> {
  validateServicesStep = () => {
    const { state, handleInputChange } = this.props

    const isCheckedService =
      state.serviceData.services.filter((it) => it.checked === true).length > 0

    handleInputChange('serviceData', {
      ...state.serviceData,
      servicesErrorMessage: isCheckedService ? '' : 'erro',
    })

    return isCheckedService
  }

  render() {
    return <div>{/* Your component content */}</div>
  }
}
