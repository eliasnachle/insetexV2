import headerMap from "../headerMap";
import { navbar } from "./mobileNavbar.css";
import { RiArrowDownSLine } from "react-icons/ri";
import MobileDropdown from "./mobileDropdown/mobileDropdown";
import { Dispatch, SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface UseStateProps {
  isMobile: boolean,
  setIsMobile: Dispatch<SetStateAction<boolean>>,
};

export default function MobileNavbar({isMobile, setIsMobile} : UseStateProps) {
  const [toggleHeight, setToggleDirection] = useState(0);
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleOn = () => {
    setToggleDirection(toggleHeight === 0 ? 220 : 0);
  };

  const handleMobileClick = () => {
    setIsMobile(false)
  }

  return (
    <nav className={navbar} style={{display: isDropdown ? 'block' : 'hidden'}}>
      <ul>
        {headerMap.map((it, i) => {
          if (it.name == "services") {
            return (
              <div key={i}>
                <motion.span onTap={toggleOn}>
                  {it.label} <RiArrowDownSLine style={{ transform: toggleHeight === 0 ? 'rotate(0deg)' : 'rotate(180deg)' }} />
                </motion.span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    style={{ overflowY: "auto" }}
                    animate={{ height: toggleHeight }}
                  >
                    <MobileDropdown isMobile={isMobile} setIsMobile={setIsMobile} />
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          }
          return (
            <li key={i} onClick={handleMobileClick}>
              <Link href={it.url}>{it.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
