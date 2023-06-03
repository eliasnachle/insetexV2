import Link from "next/link";
import serviceMap from "../../servicesMap";
import { dropdown } from "./mobileDropdown.css";
import { Dispatch, SetStateAction, useState } from "react";

interface UseStateProps {
  isMobile: boolean,
  setIsMobile: Dispatch<SetStateAction<boolean>>,
};

export default function MobileDropdown({isMobile, setIsMobile} : UseStateProps) {
  const handleMobileClick = () => {
    setIsMobile(false)
  }

  return (
    <ul className={dropdown}>
      {serviceMap.map((it, i) => {
        return (
          <li key={i} onClick={handleMobileClick}>
            <Link href={it.url}>{it.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
