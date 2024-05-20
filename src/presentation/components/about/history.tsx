import { IoIosPeople } from 'react-icons/io'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { BsHourglassSplit } from 'react-icons/bs'
import { historyContainer, historyItens } from './about.css'
import { useCountUp } from 'use-count-up'
export default function History() {
  const { value: costumerCounter } = useCountUp({
    isCounting: true,
    end: 10.967,
    duration: 2,
  })

  const { value: experienceCounter } = useCountUp({
    isCounting: true,
    end: 30,
    duration: 3,
  })

  return (
    <div className={historyContainer}>
      <article>
        <h1>Trinta Anos de História</h1>
        <p>
          Há mais de três décadas no controle de pragas urbanas. Nossa dedetizadora é referência no
          mercado, oferecendo soluções eficazes para proteger residências e empresas. Com vasta
          experiência e conhecimento, nossa equipe altamente qualificada utiliza tecnologias
          avançadas para identificar e controlar uma ampla gama de pragas. Priorizamos a satisfação
          dos clientes, estabelecendo parcerias sólidas e duradouras. Prezamos pela segurança e
          preservação do meio ambiente, utilizando métodos e produtos aprovados pelos órgãos
          reguladores. Nossa trajetória é um testemunho de compromisso com serviços de qualidade e
          resultados duradouros. Conte com a Insetex para soluções personalizadas e eficientes.
          Proteja seu ambiente contra pragas, confiando em nossa experiência de mais de três
          décadas.
        </p>
      </article>
      <div className={historyItens}>
        <div>
          <IoIosPeople />
          <h2>{costumerCounter}</h2>
          <span>Clientes</span>
        </div>
        <div>
          <BsHourglassSplit />
          <h2>{experienceCounter}</h2>
          <span>Anos de experiencia</span>
        </div>
        <div>
          <RiCustomerService2Fill />
          <h2>24h</h2>
          <span>De Atendimento</span>
        </div>
      </div>
    </div>
  )
}
