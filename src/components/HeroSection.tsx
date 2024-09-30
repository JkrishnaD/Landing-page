import { ArrowRight } from "lucide-react";
import CogImage from "../assets/cog.png";
import Cylinder from "../assets/cylinder.png";
import Noodle from "../assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-24 md:pt-5 md:pb-10 h-full flex justify-center items-center px-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_86%)] overflow-x-clip"
    >
      <div className="container mx-auto ">
        <div className="md:flex lg:flex-row items-center lg:justify-between">
          <div className="md:w-[500px] lg:w-[600px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl lg:pb-3 lg:text-8xl lg:tracking-wide font-bold mt-5 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text tracking-normal">
              Pathway to productivity
            </h1>
            <p className="text-[22px] pt-5 tracking-wide font-light">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex flex-row gap-x-3 pt-5">
              <button className="btn">Get for free</button>
              <button className="flex flex-row items-center justify-center px-3 py-1.5 text-sm gap-x-1">
                Learn More <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[690px] md:flex-1 relative lg:flex lg:justify-center">
            <motion.img
              src={CogImage}
              alt="cog Image"
              className="md:absolute md:h-full md:max-w-none lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              style={{
                translateY: translateY,
              }}
              src={Cylinder}
              width={200}
              height={200}
              className="hidden md:block md:absolute -top-10 -left-32"
            />
            <motion.img
              style={{
                rotate: 30,
                translateY: translateY,
              }}
              src={Noodle}
              width={200}
              height={200}
              className="hidden lg:block absolute -bottom-24 -right-0 rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
