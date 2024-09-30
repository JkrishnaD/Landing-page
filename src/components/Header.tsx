import Logo from "../assets/logosaas.png"

import Menu from "../assets/menu.svg";
import { ArrowRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-center items-center bg-black py-3 text-white text-sm space-x-2">
        <p className="hidden lg:flex text-white/60">
          This Page is included in free saas website kit
        </p>
        <p>View The complete Kit </p>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="logo" width={40} height={40} />
          <img src={Menu} className="h-6 w-6 md:hidden" />
          <nav className="hidden md:flex items-center gap-6 text-black/60">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customer</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="bg-black text-white p-2.5 rounded-lg px-3 tracking-tight font-medium">
              Get for Free
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
