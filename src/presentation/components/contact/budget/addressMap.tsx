import { BsFillBuildingFill, BsFillHouseFill } from 'react-icons/bs'
import { MdFactory } from 'react-icons/md'

const typeClient = [
  {
    icon: <BsFillHouseFill />,
    label: 'Residencial',
    name: 'residence',
    description: 'Para a sua residência, seja casa, condomínio ou apartamento.',
  },
  {
    icon: <BsFillBuildingFill />,
    label: 'Comercial',
    name: 'commerce',
    description: 'Para seu comércio, seja loja, restaurante ou escritório.',
  },
  {
    icon: <MdFactory />,
    label: 'Industrial',
    name: 'factory',
    description: 'Para sua indústria, seja ela de manufatura, produção ou processamento.',
  },
]

export const addressInputsInline = [
  {
    type: 'text',
    name: 'addressNumber',  
    label: 'Número'  
  },
  {
    type: 'text',
    name: 'complement',    
    label: 'Complemento'
  },
]

export default typeClient
