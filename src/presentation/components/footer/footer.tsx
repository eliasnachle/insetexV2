import Logo from '/public/logo_light.svg'
import { footerContainer, footerContent, footerCopyrigth, footerGrid } from './footer.css'
import FooterItens from './footerItens/footerItens'

export default function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={footerContent}>
        <div className={footerGrid}>
          <article>
            <Logo />
            <p>
              Sua defesa imbatível contra pragas, soluções sob medida para um ambiente livre e
              tranquilo.
            </p>
          </article>
          <FooterItens />
        </div>
        <div className={footerCopyrigth}>
          <hr />
          <span>CEVS: 351630901-812-000062-1-1 | Copyright © 2025 Insetex Controle de Pragas.</span>
        </div>
      </div>
    </footer>
  )
}
