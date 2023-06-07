import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  errorButton,
  errorMessage,
  formInput,
  formTextArea,
  loadingButton,
} from '../contactForm.css'
import inputFormMap from './inputFormMap'
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters'
import Inputform from './inputForm/inputForm'
import TextareaForm from './textareaForm/textareaForm'
import { IUserForm } from './userFormTypes'
import { useRouter } from 'next/router'

interface UseStateProps {
  setIsSent: Dispatch<SetStateAction<boolean>>
}

enum StatusResponse {
  NONE,
  SUCCESS,
  FAILED,
}

export default function UserForm({ setIsSent }: UseStateProps) {
  const router = useRouter()
  const [statusResponse, setStatusResponse] = useState(StatusResponse.NONE)
  const [isValited, setIsValited] = useState(false)
  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const validateFormStep = (values: IUserForm) => {
    const errors = { name: '', phone: '', email: '', message: '' }
    const defaultMessage = 'Campo obrigatório'
    const regexName = /^(?=.{2,50}$)[a-zA-ZZÀ-ú'.]+(?:\s[a-zA-ZZÀ-ú'.]+)*$/
    const regexPhone = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (values.name.length < 3 || !regexName.test(values.name)) {
      errors.name = values.name.length < 3 ? defaultMessage : 'Contém espaços em branco'
    }
    if (values.phone.length < 15 || !regexPhone.test(values.phone)) {
      errors.phone = values.phone.length < 15 ? defaultMessage : 'Telefone inválido'
    }
    if (!values.email || !regexEmail.test(values.email)) {
      errors.email = !values.email ? defaultMessage : 'Formato inválido!'
    }
    if (!values.message || values.message.length < 4) {
      errors.message = defaultMessage
    }
    setIsValited(Object.values(errors).every((o) => o === ''))
    return errors
  }

  const handleSubmitForm = () => {
    setTimeout(() => {
      setFormErrors(validateFormStep(formData))
    }, 250)
  }

  useEffect(() => {
    const getContact = async () => {
      if (!isValited) return
      try {
        await axios.post('/api/contact/sendCustomerContact', formData)
        setStatusResponse(StatusResponse.SUCCESS)
        setIsSent(true)
      } catch (e) {
        setStatusResponse(StatusResponse.FAILED)
      }
    }
    getContact()
  }, [formData, isValited, setIsSent])

  return (
    <div>
      {inputFormMap.map((it, i) => {
        if (it.name == 'message') {
          return (
            <div className={formTextArea} key={i}>
              <label>{it.label}</label>
              <TextareaForm
                values={it}
                formErrors={formErrors}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          )
        }
        return (
          <div className={formInput} key={i}>
            <label>{it.label}</label>
            <Inputform
              values={it}
              formErrors={formErrors}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        )
      })}
      <button
        onClick={handleSubmitForm}
        style={{ cursor: isValited ? 'default' : 'pointer' }}
        className={statusResponse == StatusResponse.FAILED ? errorButton : ''}>
        {isValited ? <AiOutlineLoading3Quarters className={loadingButton} /> : 'Enviar mensagem'}
      </button>
      {statusResponse == StatusResponse.FAILED && (
        <span className={errorMessage}>
          Houve alguma falha ao enviar, por favor atualize a página{' '}
          <a onClick={() => router.reload()}>clicando aqui</a>.
        </span>
      )}
    </div>
  )
}
