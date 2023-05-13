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
import Link from "next/link";

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
            <Link href="/">
              <Logo />
            </Link>
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
                      {it.label}{" "}
                      <RiArrowDownSLine
                        style={{
                          transition: "all ease-in 150ms",
                          transform: isDropdown
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </li>
                  );
                } else {
                  return (
                    <li key={i}>
                      <Link href={it.url}>{it.label}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
          <button className={headerBtn}>
            <Link href="/login">Entrar</Link>
          </button>
          <MdMenu
            className={headerBurger}
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
        {isMobile && <MobileNavbar />}
      </header>
    </>
  );
}
