import Logo from "/public/logo_light.svg";
import {
  footerContainer,
  footerContent,
  footerCopyrigth,
  footerGrid,
} from "./footer.css";
import FooterItens from "./footerItens/footerItens";

export default function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={footerContent}>
        <div className={footerGrid}>
          <article>
            <Logo />
          </article>
          <FooterItens />
        </div>
        <div className={footerCopyrigth}>
          <span>Copyright © 2023 Insetex Controle de Pragas.</span>
        </div>
      </div>
    </footer>
  );
}
