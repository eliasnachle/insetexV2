import Cockroach from '/public/home/serviceIcons/cockroach.svg'
import Rat from '/public/home/serviceIcons/rat.svg'
import Ant from '/public/home/serviceIcons/ant.svg'
import Clean from '/public/home/serviceIcons/clean.svg'
import Covid from '/public/home/serviceIcons/covid.svg'
import Pipe from '/public/home/serviceIcons/pipe.svg'

const pestsMap = [
  {
    icon: <Rat />,
    label: 'Desratização',
    name: 'desratizacao',
    description: 'Combate contra de ratos e roedores.',
  },
  {
    icon: <Ant />,
    label: 'Descupinização',
    name: 'descupinizacao',
    description: 'Remoção eficaz de cupins infestadores.',
  },
  {
    icon: <Cockroach />,
    label: 'Desinsetização',
    name: 'desinsetizacao',
    description: 'Controle de pragas e insetos indesejados.',
  },
  {
    icon: <Clean />,
    label: 'Limpeza De Caixas D’ Água',
    name: 'clean',
    description: 'Limpeza e manutenção de reservatórios.',
  },
  {
    icon: <Covid />,
    label: 'Sanitização',
    name: 'covid',
    description: 'Desinfecção e eliminação de germes.',
  },
  {
    icon: <Pipe />,
    label: 'Desentupimento',
    name: 'pipe',
    description: 'Remoção de obstruções em encanamentos.',
  },
]

export default pestsMap
