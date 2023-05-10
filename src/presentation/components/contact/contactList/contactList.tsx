import { ContactItens, ContactItem } from "./contactList.css";
import { contactListMap } from "./contactListMap";
import { easeInOut, motion } from "framer-motion";

export default function ContactList() {
  const contactAnimation = {
    hidden: { x: -50 },
    show: {
      x: 0,
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={ContactItens}
      variants={contactAnimation}
      initial="hidden"
      animate="show"
    >
      {contactListMap.map((it, i) => {
        return (
          <article key={i} className={ContactItem}>
            <figure>{it.figure}</figure>
            <div>
              <h3>{it.title}</h3>
              <p>{it.description}</p>
              <span>{it.value}</span>
            </div>
          </article>
        );
      })}
    </motion.div>
  );
}
