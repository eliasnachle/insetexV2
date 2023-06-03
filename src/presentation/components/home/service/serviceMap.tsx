import { serviceItemSvg } from './service.css'
import Cockroach from '/public/home/serviceIcons/cockroach.svg'
import Rat from '/public/home/serviceIcons/rat.svg'
import Ant from '/public/home/serviceIcons/ant.svg'
import Clean from '/public/home/serviceIcons/clean.svg'
import Covid from '/public/home/serviceIcons/covid.svg'
import Pipe from '/public/home/serviceIcons/pipe.svg'

const serviceMap = [
  {
    name: 'desinsetizacao',
    title: 'Desinsetização',
    description:
      'A desinsetização tem como foco o combate e extermínio das pragas urbanas mais comuns (Baratas, formigas, moscas, percevejos, dentre tantos outros), é importante analisar cada caso pois diferentes pragas possuem diferentes metodologias, mas de maneira genérica, a desinsetização, pode combater os mais diversos insetos.',
    svg: <Cockroach className={serviceItemSvg} />,
  },
  {
    name: 'desratizacao',
    title: 'Desratização',
    description:
      'O combate e extermínio de roedores nem sempre se dará com a eliminação de todos os indivíduos do local, uma desratização eficiente irá tanto eliminar quanto manter afastado qualquer roedor que queira adentrar ao local. Nossa metodologia abrange os principais tipos de roedores.',
    svg: <Rat className={serviceItemSvg} />,
  },
  {
    name: 'descupinizacao',
    title: 'Descupinização',
    description:
      'O manejo e controle de cupins é extremamente sério, um serviço mal prestado pode não apenas destruir um móvel quanto um imóvel. O combate a essa praga feito por nós é de extremo cuidado, visando o extermínio total da colônia e a preservação da área afetada, a identificação do tipo e tratamento pode variar, mas os riscos oferecidos pelos cupins não podem ser ignorados.',
    svg: <Ant className={serviceItemSvg} />,
  },
  {
    name: 'desentupimento',
    title: 'Desentupimento',
    description:
      'A desinsetização tem como foco o combate e extermínio das pragas urbanas mais comuns (Baratas, formigas, moscas, percevejos, dentre tantos outros), é importante analisar cada caso pois diferentes pragas possuem diferentes metodologias, mas de maneira genérica, a desinsetização, pode combater os mais diversos insetos.',
    svg: <Pipe className={serviceItemSvg} />,
  },
  {
    name: 'limpeza',
    title: 'Limpeza De Caixas D’ Água',
    description:
      'A desinsetização tem como foco o combate e extermínio das pragas urbanas mais comuns (Baratas, formigas, moscas, percevejos, dentre tantos outros), é importante analisar cada caso pois diferentes pragas possuem diferentes metodologias, mas de maneira genérica, a desinsetização, pode combater os mais diversos insetos.',
    svg: <Clean className={serviceItemSvg} />,
  },
  {
    name: 'sanitizacao',
    title: 'Sanitização',
    description:
      'A eliminação de germes, bactérias e vírus em um ambiente nem sempre é possível através de técnicas de limpeza convencional utilizando água, sabão e alvejantes pois em muitos casos concentrações não são adequadas.',
    svg: <Covid className={serviceItemSvg} />,
  },
]

export default serviceMap
