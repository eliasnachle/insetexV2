import Button from "../../button/button";
import { heroContainer } from "./hero.css";
import { easeInOut, motion } from "framer-motion";

export default function hero() {
  const btnData = { 
    text: "Faça um orçamento", 
    url: "/contato/orcamento" 
  };
  const heroAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 0.75,
      },
    },
  };

  return (
    <section className={heroContainer}>
      <motion.div variants={heroAnimation} initial="hidden" animate="show">
        <h1>Insetex Controle Tecnológico de Insetos</h1>
        <Button text={btnData.text} url={btnData.url} />
      </motion.div>
    </section>
  );
}
