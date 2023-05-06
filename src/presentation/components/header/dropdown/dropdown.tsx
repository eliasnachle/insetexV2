import serviceMap from "../servicesMap";
import { dropdownContainer, chevron } from "./dropdown.css";
import { easeOut, motion } from "framer-motion";

export default function Dropdown() {
    const heroAnimation = {
      hidden: {
        y: -10,
        opacity: 0.5,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          ease: easeOut,
          duration: 0.25,
        }
      },
  };

  return (
    <motion.nav
      variants={heroAnimation}
      initial="hidden"
      animate="show"
      className={dropdownContainer}
    >
      <div className={chevron}></div>
      <ul>
        {serviceMap.map((it, i) => {
          return <li key={i}>{it.label}</li>;
        })}
      </ul>
    </motion.nav>
  );
}
