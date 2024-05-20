import { RiMapPinLine } from '@react-icons/all-files/ri/RiMapPinLine'
import { AiFillBug } from '@react-icons/all-files/ai/AiFillBug'
import { MdOutlinePersonOutline } from 'react-icons/md'

const stepsMap = [
  {
    id: 0,
    icon: <AiFillBug />,
    label: 'Serviços',
  },
  {
    id: 1,
    icon: <RiMapPinLine />,
    label: 'Endereço',
  },
  {
    id: 2,
    icon: <MdOutlinePersonOutline />,
    label: 'Dados',
  },
]

export default stepsMap
