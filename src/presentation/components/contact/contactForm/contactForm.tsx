import { useState } from "react";
import SentMail from "../sentMail/sentMail";
import { formContainer } from "./contactForm.css";
import UserForm from "./userForm/userForm";

export default function ContactForm() {  
  const [isSent, setIsSent] = useState(false)

  return (    
    <div className={formContainer}>
      <h1>Fale Conosco</h1>
      <p>Preencha todos os campos obrigatórios do formulário de contato com suas informações corretas.</p>    
      {isSent? <SentMail isSent={isSent} setIsSent={setIsSent} /> : <UserForm isSent={isSent} setIsSent={setIsSent} />}      
    </div>
  );
}
