import headerMap from "../headerMap";
import { navbar } from "./mobileNavbar.css";
import { RiArrowDownSLine } from "react-icons/ri";
import MobileDropdown from "./mobileDropdown/mobileDropdown";
import { useState } from "react";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileNavbar() {
  const [toggleHeight, setToggleDirection] = useState(0);

  const toggleOn = () => {
    setToggleDirection(toggleHeight === 0 ? 220 : 0);
  };

  return (
    <nav className={navbar}>
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
                    <MobileDropdown />
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          }
          return (
            <li key={i}>
              <Link href={it.url}>{it.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
