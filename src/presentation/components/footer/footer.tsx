import Logo from "/public/logo_light.svg";
import {
  footerContainer,
  footerContent,
  footerCopyrigth,
  footerItem,
  footerGrid,
  FooterContianerItens,
} from "./footer.css";
import { services, contact, about } from "./footerMap";

export default function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={footerContent}>
        <div className={footerGrid}>
          <article>
            <Logo />
          </article>
          <div className={footerItem}>
            <h2>Serviços</h2>
            {services.map((it, i) => {
              return <span key={i}>{it.name}</span>;
            })}
          </div>
          <div className={footerItem}>
            <h2>Serviços</h2>
            {services.map((it, i) => {
              return <span key={i}>{it.name}</span>;
            })}
          </div>
          <div className={footerItem}>
            <h2>Contato</h2>
            {contact.map((it, i) => {
              return <span key={i}>{it.name}</span>;
            })}
          </div>
          <div className={footerItem}>
            <h2>Sobre nós</h2>
            {about.map((it, i) => {
              return <span key={i}>{it.name}</span>;
            })}
          </div>
        </div>
        <div className={footerCopyrigth}>
          <span>Copyright © 2023 Insetex Controle de Pragas.</span>
        </div>
      </div>
    </footer>
  );
}
