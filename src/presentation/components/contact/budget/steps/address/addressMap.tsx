import { BsFillBuildingFill, BsFillHouseFill } from 'react-icons/bs'
import { MdFactory } from 'react-icons/md'

const addressMap = [
  {
    icon: <BsFillHouseFill />,
    label: 'Residencial',
    name: 'residence',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <BsFillBuildingFill />,
    label: 'Comercial',
    name: 'commerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <MdFactory />,
    label: 'Industrial',
    name: 'factory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default addressMap
