import ProductImage from "../assets/product-image.png";
import Tube from "../assets/tube.png";
import Pyramid from "../assets/pyramid.png";
import { ProductFeatures } from "./ProductFeatures";
import { Bell, Leaf, Lock, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Product = () => {
  const productRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productRef}
      className="flex justify-center items-center flex-col bg-gradient-to-b from-[#FFF] to-[#cfd9ff] overflow-x-clip"
    >
      <div className="container mt-28 flex flex-col items-center">
        <div className="md:w-[600px] text-center">
          <div className="tag">Boost Your Productivity</div>
          <h1 className="section-title">
            A more effective way to track progress
          </h1>
          <p className="section-description">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <img src={ProductImage} alt="Product" className="relative" />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={Pyramid}
            alt="Pyramid"
            width={262}
            height={262}
            className="absolute hidden md:block md:-right-36 md:top-5 lg:-right-36 lg:top-10 z-9"
          />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={Tube}
            alt="Tube"
            width={262}
            height={262}
            className="absolute hidden md:block md:-left-44 md:bottom-10 lg:-left-44 lg:bottom-20 z-9"
          />
        </div>
        <div className="flex flex-col py-10 items-center justify-center lg:flex-row md:grid md:grid-cols-2 lg:flex">
          <ProductFeatures
            Icon={Leaf}
            title="Integration ecosystem"
            description="Track your progress and motivate your efforts everyday."
          />
          <ProductFeatures
            Icon={Target}
            title="Goal setting and tracking"
            description="Set and track goals with manageable task breakdowns."
          />
          <ProductFeatures
            Icon={Lock}
            title="Secure data encryption"
            description="Ensure your data’s safety with top-tier encryption."
          />
          <ProductFeatures
            Icon={Bell}
            title="Customizable notifications"
            description="Get alerts on tasks and deadlinesthat matter most."
          />
        </div>
      </div>
    </section>
  );
};
