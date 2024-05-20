import { InputUseStateProps } from '@/domain/types/contactForm/userFormTypes'

export default function Inputform({
  values,
  formErrors,
  formData,
  setFormData,
}: InputUseStateProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name == 'phone') {
      let maskedValue = e.target.value
      maskedValue = maskedValue
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
      return setFormData({ ...formData, phone: maskedValue })
    }
    return setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <input
        type={values.type}
        name={values.name}
        placeholder={values.placeholder}
        value={formData[values.name as keyof typeof formData]}
        onChange={handleChange}
      />
      <span>{formErrors[values.name as keyof typeof formData]}</span>
    </>
  )
}
