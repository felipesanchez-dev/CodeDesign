import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { Stars } from "./Stars";
import { Background } from "./Background";
import Boton from "./Boton";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const element = document.querySelector("#hero-content");
    if (element) {
      gsap.from(element, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div
      className="relative min-h-screen w-screen overflow-x-hidden"
      id="inicio">
      {loading && (
        <div className="flex-center absolute z-[100] min-h-screen w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div className="relative px-4 pb-20 before:bg-gradient-to-b before:from-[#020617] before:via-[#020617] before:-z-10 before:inset-0 before:to-[#0B217D] before:size-full before:absolute border-b border-midu-primary inset-0 m-auto">
        <Stars />
        <Background />

        <div
          className="max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center text-center"
          id="hero-content">
          <h2 className="animate-fade-in-up text-5xl sm:text-6xl md:text-[80px] max-w-[20ch] text-white font-bold pt-24 pb-4 text-balance">
            Tu Futuro Digital{" "}
            <span className="text-yellow-400">Comienza Aquí</span>
          </h2>

          <h2 className="pt-6 pb-6 text-xl text-white font-bold max-w-2xl">
            Impulsamos tu idea, negocio o empresa con tecnología innovadora y
            diseño espectacular: páginas web, software a medida y más
          </h2>

          <div className="flex justify-center">
            <Boton />
          </div>

          <div className="mt-16">
            <hr className="pt-8" />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
