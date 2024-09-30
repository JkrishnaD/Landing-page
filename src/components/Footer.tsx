import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "../assets/logosaas.png";
export const Footer = () => {
  return (
    <section className="bg-black text-white/75 py-7 px-5">
      <div className="flex flex-col justify-center items-center space-y-4 gap-y-3">
        <div className="relative inline-block">
          <div className="absolute inset-0 blur-md opacity-70">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-pink-500 via-yellow-400 rounded-full" />
          </div>
          <div className="relative">
            <img
              src={Logo}
              alt="logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="text-base text-center">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center text-center mx-4 gap-x-5 gap-y-2">
          <a className="hover:text-white" href="#">About</a>
          <a className="hover:text-white" href="#">Features</a>
          <a className="hover:text-white" href="#">Customer</a>
          <a className="hover:text-white" href="#">Updates</a>
          <a className="hover:text-white" href="#">Help</a>
        </div>
        <div className="flex flex-row space-x-3">
          <Instagram />
          <Twitter />
          <Github />
          <Linkedin />
          <Youtube />
        </div>
      </div>
    </section>
  );
};
