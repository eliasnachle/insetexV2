import Button from "../../button/button"
import { heroContainer } from "./hero.css"

export default function hero() {
  const btnData = {text: 'FAÇA UM ORÇAMENTO'}

  return (
    <section className={heroContainer}>
      <div>
        <h1>Insetex Controle Tecnológico de Insetos</h1>
        <Button text={btnData.text}/>        
      </div>
    </section>
  )
}
