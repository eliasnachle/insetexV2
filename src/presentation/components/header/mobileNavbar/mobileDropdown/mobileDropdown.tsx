import Link from "next/link";
import serviceMap from "../../servicesMap";
import { dropdown } from "./mobileDropdown.css";

export default function MobileDropdown() {
  return (
    <ul className={dropdown}>
      {serviceMap.map((it, i) => {
        return (
          <li key={i}>
            <Link href={it.url}>{it.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
