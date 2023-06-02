import {
  ContactContainer,
  ContactContent,
  ContactArticle,
  Button,
} from "./contact.css";
import Link from "next/link";
import ContactList from "./contactList/contactList";
import { easeInOut, motion } from "framer-motion";

export default function Contact() {
  const contactAnimation = {
    hidden: { x: 50 },
    show: {
      x: 0,
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
  };

  return (
    <section className={ContactContainer}>
      <div className={ContactContent}>
        <ContactList />
        <motion.article
          className={ContactArticle}
          variants={contactAnimation}
          initial="hidden"
          animate="show"
        >
          <h1>Procurando uma solução eficaz contra pragas?</h1>
          <p>
            Contrate nosso serviço de dedetização e livre-se das pragas de uma
            vez por todas!
          </p>
          <Link className={Button} href="/contato/fale-conosco">
            Fale conosco
          </Link>
          {/* <Link className={Button} href="/contato/orcamento">
            Faça um Orcamento
          </Link> */}
        </motion.article>
      </div>
    </section>
  );
}
