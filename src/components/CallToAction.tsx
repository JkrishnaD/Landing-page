import { ArrowRight } from "lucide-react";
import Star from "../assets/star.png";
import Spring from "../assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const actionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: actionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={actionRef}
      className=" flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF] to-[#cfd9ff] overflow-x-clip"
    >
      <div className="container">
        <div className="px-11 py-10 mb-20">
          <div className="flex flex-col items-center justify-center text-center relative">
            <h1 className="section-title px-16">Sign up for free today</h1>
            <p className="section-description text-base lg:text-xl lg:w-[700px] mb-7">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <motion.img
              style={{
                translateY: translateY,
              }}
              src={Star}
              width={360}
              height={350}
              alt=""
              className="absolute hidden md:block lg:-left-[90px] -top-[137px] md:-left-[330px]"
            />
            <motion.img
              style={{
                translateY: translateY,
              }}
              src={Spring}
              width={360}
              height={350}
              alt=""
              className="absolute hidden md:block lg:-right-[80px] lg:top-[40px] md:-top-2 md:-right-[300px]"
            />
            <div className="flex flex-row gap-x-3 pt-5">
              <button className="btn">Get for free</button>
              <button className="flex flex-row items-center justify-center px-3 py-1.5 text-sm gap-x-1">
                Learn More <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
