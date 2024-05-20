import { serviceContainer } from './about.css'
import AboutUs from '/public/about/about_us.svg'

export default function AboutService() {
  return (
    <div className={serviceContainer}>
      <figure>
        <AboutUs />
      </figure>
      <article>
        <h1>Excelência no Controle de Pragas</h1>
        <p>
          Com décadas de experiência, remodelamos o controle de pragas urbanas. Utilizando
          tecnologias avançadas e metodologias de controle e extermínio, combatemos efetivamente
          pragas e vetores. Somos filiados a órgãos competentes e seguimos diretrizes da OMS, ANVISA
          e ABNT. Nossas equipes são altamente treinadas, oferecendo excelência no cumprimento dos
          contratos. Proporcionamos um programa eficiente de saúde ambiental, buscando a satisfação
          plena dos clientes. Nosso lema: Serviços com Eficiência, Eficácia e Efetividade.
        </p>
      </article>
    </div>
  )
}
