import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formInput, formTextArea, loadingButton } from "../contactForm.css";
import inputFormMap from "./inputForm";
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters"

interface UseStateProps {
    isSent: boolean,
    setIsSent: Dispatch<SetStateAction<boolean>>,
};

export default function UserForm({isSent, setIsSent} : UseStateProps) {    
    const [isValited, setIsValited] = useState(false)
    const [formErrors, setFormErrors] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      if (name == "phone") {
        let maskedValue = e.target.value;
        maskedValue = maskedValue
          .replace(/\D+/g, "")
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
          .replace(/(-\d{4})\d+?$/, "$1");
        return setFormData({ ...formData, phone: maskedValue });
      }
      return setFormData({ ...formData, [name]: value });
    };
  
    const validateFormStep = (values: any) => {
      let errors = { name: "", phone: "", email: "", message: "" };
      const defaultMessage = "Campo obrigatório";
      const regexName = /^(?=.{2,50}$)[a-zA-ZZÀ-ú'.]+(?:\s[a-zA-ZZÀ-ú'.]+)*$/;
      const regexPhone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
      if (values.name.length < 3) {
        errors.name = defaultMessage;
      } else if (!regexName.test(values.name)) {
        errors.name = "Contém espaços em branco";
      }
      if (values.phone.length < 15) {
        errors.phone = defaultMessage;
      } else if (!regexPhone.test(values.phone)) {
        errors.phone = "Telefone inválido";
      }
      if (!values.email) {
        errors.email = defaultMessage;
      } else if (!regexEmail.test(values.email)) {
        errors.email = "Formato inválido!";
      }
      if (!values.message || values.message.length < 4) {
        errors.message = defaultMessage;
      }
      if (Object.values(errors).every((o) => o === "")) {
        setIsValited(true)
      }
      return errors;
    };
  
    const handleSubmitForm = (e: any) => {
      e.preventDefault();
      setTimeout(() => {
        setFormErrors(validateFormStep(formData));  
      }, 250);      
    };
  
    useEffect(() => {
      const getContact = async () => {
          if(!isValited) return
          const response = await axios.post(`/api/contact/sendCustomerContact`, formData)
          if(response.status != 200) return console.log(response)
          setIsSent(true)
        }
      getContact()      
    }, [formData, isValited, setIsSent])
  
    return (
      <div>
          {inputFormMap.map((it, i) => {
            if (it.name == "message") {
              return (
                <div className={formTextArea} key={i}>
                  <label>{it.label}</label>
                  <textarea
                    placeholder={it.placeholder}
                    name={it.name}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <span>{formErrors[it.name as keyof typeof formData]}</span>
                </div>
              );
            }
            return (
              <div className={formInput} key={i}>
                <label>{it.label}</label>
                <input
                  type={it.type}
                  name={it.name}
                  placeholder={it.placeholder}
                  value={formData[it.name as keyof typeof formData]}
                  onChange={handleChange}
                />
                <span>{formErrors[it.name as keyof typeof formData]}</span>
              </div>
            );
          })}
          <button onClick={handleSubmitForm} style={{cursor: isValited ? "default" : "pointer"}}>
            {isValited ? <AiOutlineLoading3Quarters className={loadingButton} /> : "Enviar"}
          </button>
        </div>
    )
  }