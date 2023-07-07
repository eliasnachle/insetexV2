import { formInput } from '@/presentation/styles/inputs/inputs.css'
import { Component } from 'react'
import AddressInput from '../address/adddressInput/addressInput'
import { stepContainer } from '../steps.css'

export default class user extends Component {
  render() {
    return (
      <div className={stepContainer}>
        <article>
          <h1>Quais serviços serão contratados?</h1>
          <p>Selecione os serviços que você está buscando.</p>
        </article>
        <div>
          <div className={formInput}>
            <label>Nome</label>
            <input
              type='text'
            />
          </div>
          <div className={formInput}>
            <label>Telefone</label>
            <input
              type='text'
            />
          </div>
          <div className={formInput}>
            <label>E-mail</label>
            <input
              type='text'
            />
          </div>
        </div>
      </div>
    )
  }
}
