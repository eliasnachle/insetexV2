import Link from 'next/link'
import { btnStyle } from './button.css'

interface BtnProps {
  text: string
  url: string
}

export default function Button({ text, url }: BtnProps) {
  return (
    <Link className={btnStyle} href={url}>
      {text}
    </Link>
  )
}
