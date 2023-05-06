import { useState } from "react";
import {
  headerContainer,
  headerLogo,
  headerContent,
  headerBtn,
  headerBurger,
} from "./header.css";
import headerMap from "./headerMap";
import Dropdown from "./dropdown/dropdown";
import Logo from "/public/logo.svg";
import { RiArrowDownSLine } from "@react-icons/all-files/ri/RiArrowDownSLine";
import { MdMenu } from "react-icons/md";
import MobileNavbar from "./mobileNavbar/mobileNavbar";

export default function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onMouseEnter = () => {
    setIsDropdown(true);
  };

  const onMouseLeave = () => {
    setIsDropdown(false);
  };

  return (
    <>
      <header className={headerContainer}>
        <div className={headerContent}>
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
          <button className={headerBtn}>Entrar</button>
          <MdMenu className={headerBurger} onClick={() => setIsMobile(!isMobile)} />
        </div>
        {isMobile && <MobileNavbar />}        
      </header>
    </>
  );
}
