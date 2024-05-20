import { whatsappIcon } from './whatsapp.css'
import Link from 'next/link'
import WhatsappIcon from '/public/whatsapp_icon.svg'

export default function Whatsapp() {
  return (
    <>
      <Link
        className={whatsappIcon}
        href="https://api.whatsapp.com/send?phone=551123591308&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
        target="_blank">
        <WhatsappIcon />
      </Link>
    </>
  )
}
