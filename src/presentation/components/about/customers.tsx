import { customersContainer } from "./about.css";
import Image from "next/image";
import customersMap from "./customersMap";
import { easeInOut, motion } from "framer-motion";

export default function Customers() {
  const customerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: easeInOut,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        className={customersContainer}
        variants={customerAnimation}
        initial="hidden"
        animate="show"
      >
        <div>
          {customersMap.map((it, i) => {
            return <Image key={i} src={it.img} alt={it.alt} />;
          })}
        </div>
      </motion.div>
    </>
  );
}
