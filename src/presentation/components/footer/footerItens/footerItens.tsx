import { services, contact, about } from './footerMap'
import { footerItem } from './footerItens.css'

export default function FooterItens() {
  return (
    <div>
      <div className={footerItem}>
        <h2>Serviços</h2>
        {services.map((it, i) => (
          <span key={i}>{it.name}</span>
        ))}
      </div>
      <div className={footerItem}>
        <h2>Contato</h2>
        {contact.map((it, i) => (
          <span key={i}>{it.name}</span>
        ))}
      </div>
      <div className={footerItem}>
        <h2>Sobre nós</h2>
        {about.map((it, i) => (
          <span key={i}>{it.name}</span>
        ))}
      </div>
    </div>
  )
}
