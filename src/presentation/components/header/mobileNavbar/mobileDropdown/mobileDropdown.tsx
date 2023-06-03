import Link from 'next/link'
import serviceMap from '../../servicesMap'
import { dropdown } from './mobileDropdown.css'
import { Dispatch, SetStateAction } from 'react'

interface UseStateProps {
  setIsMobile: Dispatch<SetStateAction<boolean>>
}

export default function MobileDropdown({ setIsMobile }: UseStateProps) {
  const handleMobileClick = () => {
    setIsMobile(false)
  }

  return (
    <ul className={dropdown}>
      {serviceMap.map((it, i) => (
        <li key={i} onClick={handleMobileClick}>
          <Link href={it.url}>{it.label}</Link>
        </li>
      ))}
    </ul>
  )
}
