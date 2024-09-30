import { motion } from "framer-motion";
import Acme from "../assets/logo-acme.png";
import Apex from "../assets/logo-apex.png";
import Celestial from "../assets/logo-celestial.png";
import Echo from "../assets/logo-echo.png";
import Pulse from "../assets/logo-pulse.png";
import Quantum from "../assets/logo-quantum.png";

export const Logos = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex overflow-x-hidden items-center justify-center md:py-10 py-8 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-14 flex-none pr-14 w-[calc(200%)]"
          >
            <img src={Acme} alt="" className="logo-image" />
            <img src={Apex} alt="" className="logo-image" />
            <img src={Celestial} alt="" className="logo-image" />
            <img src={Echo} alt="" className="logo-image" />
            <img src={Pulse} alt="" className="logo-image" />
            <img src={Quantum} alt="" className="logo-image" />

            <img src={Acme} alt="" className="logo-image" />
            <img src={Apex} alt="" className="logo-image" />
            <img src={Celestial} alt="" className="logo-image" />
            <img src={Echo} alt="" className="logo-image" />
            <img src={Pulse} alt="" className="logo-image" />
            <img src={Quantum} alt="" className="logo-image" />

            <img src={Acme} alt="" className="logo-image" />
            <img src={Apex} alt="" className="logo-image" />
            <img src={Celestial} alt="" className="logo-image" />
            <img src={Echo} alt="" className="logo-image" />
            <img src={Pulse} alt="" className="logo-image" />
            <img src={Quantum} alt="" className="logo-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
