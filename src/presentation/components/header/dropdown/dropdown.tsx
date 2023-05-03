import dropdownMap from "./dropdownMap";
import { dropdownContainer, chevron } from "./dropdown.css";

export default function Dropdown() {
  return (
    <nav className={dropdownContainer}>
      <div className={chevron}></div>
      <ul>
        {dropdownMap.map((it, i) => {
          return <li key={i}>{it.label}</li>;
        })}
      </ul>
    </nav>
  );
}
