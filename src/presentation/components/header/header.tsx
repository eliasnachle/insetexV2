import { useState } from "react";
import { headerContainer, headerLogo } from "./header.css";
import headerMap from "./headerMap";
import Dropdown from "./dropdown/dropdown";
import Logo from "/public/logo.svg";
import { RiArrowDownSLine } from "@react-icons/all-files/ri/RiArrowDownSLine";

export default function Header() {
  const [isDropdown, setIsDropdown] = useState(false);

  const onMouseEnter = () => {
    setIsDropdown(true);
  };

  const onMouseLeave = () => {
    setIsDropdown(false);
  };

  return (
    <>
      <header className={headerContainer}>
        <div className={headerLogo}>
          <Logo />
        </div>
        <nav>
          <ul>
            {headerMap.map((it, i) => {
              if (it.name == "services") {
                return (
                  <li
                    key={i}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    {isDropdown && <Dropdown />}
                    {it.label} <RiArrowDownSLine />
                  </li>
                );
              } else {
                return <li key={i}>{it.label}</li>;
              }
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
