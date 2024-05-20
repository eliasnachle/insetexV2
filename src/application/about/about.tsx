import { AboutContainer } from './about.css'
import Logo from '/public/logo_light.svg'

export default function About() {
  return (
    <section className={AboutContainer}>
      <div>
        <article>
          <Logo />
          <p>
            Há duas décadas no mercado de Controle de Pragas e Desentupimento a INSETEX, vem
            prestando serviços com qualidade, segurança e eficiência altamente especializada,
            seguindo padrões e normas de segurança e qualidade. Fundada há quase três decadas, a
            INSETEX começou a comercializar seus serviços apenas na Grande São Paulo com o objetivo
            inicial de suprir as necessidades locais. buscando constante aprimoramento.
          </p>
        </article>
      </div>
    </section>
  )
}
