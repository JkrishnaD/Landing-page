import { twMerge } from "tailwind-merge";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColoumn = testimonials.slice(0, 3);
const secondColoumn = testimonials.slice(3, 6);
const thirdColoumn = testimonials.slice(6, 9);

const TestimonialComponent = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={twMerge(props.className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: props.duration || 10,
        }}
        className="flex flex-col gap-5"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((items, index) => (
              <div
                key={index}
                className=" lg:flex flex-col card justify-center"
              >
                <p>{items.text}</p>
                <div className="flex flex-row items-center gap-x-2 pt-5">
                  <img src={items.imageSrc} alt="" className="h-12 w-12" />
                  <div>
                    <p className="font-semibold leading-5">{items.name}</p>
                    <p className="leading-5 tracking-tight">{items.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="flex items-center justify-center flex-col">
        <div className="tag">Testmonials</div>
        <h1 className="section-title">What our users say</h1>
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 mt-5 justify-center items-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialComponent testimonials={firstColoumn} />
          <TestimonialComponent
            testimonials={secondColoumn}
            className="hidden md:block"
            duration={15}
          />
          <TestimonialComponent
            testimonials={thirdColoumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
};
