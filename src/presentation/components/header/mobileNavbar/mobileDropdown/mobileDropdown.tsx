import serviceMap from "../../servicesMap";
import { dropdown } from "./mobileDropdown.css";

export default function MobileDropdown() {
  return (
    <ul className={dropdown}>
      {serviceMap.map((it, i) => {
        return <li key={i}>{it.label}</li>;
      })}
    </ul>
  );
}
