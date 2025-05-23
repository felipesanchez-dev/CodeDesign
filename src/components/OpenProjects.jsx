import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#0a0a0a]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                {/* ***** TÍTULO MODIFICADO ***** */}
                <span className="text-blue-500 mb-2 block text-lg font-semibold">
                  Mi Portafolio
                </span>
                <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Proyectos Recientes
                </h2>
                {/* ***** DESCRIPCIÓN MODIFICADA ***** */}
                <p className="text-gray-300 text-base">
                  Aquí puedes ver algunos de mis proyectos recientes, incluyendo
                  desarrollo web, aplicaciones móviles y otras exploraciones de
                  código abierto. ¡Echa un vistazo al código!
                  {/* Alternativa: Una muestra de mis trabajos recientes. Desarrollo proyectos open-source para aprender, experimentar y compartir con la comunidad. */}
                </p>
              </div>
            </div>
          </div>

          {/* --- Filtros y Tarjetas (Sin cambios estructurales, ya parecen personales) --- */}
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {[
                  { label: "Todos", value: "all" },
                  { label: "Web", value: "web" },
                  { label: "Aplicaciones", value: "movil" },
                  { label: "Otros Proyectos", value: "otros" },
                ].map((item) => (
                  <li key={item.value} className="mb-1">
                    <button
                      // Asumo que tienes definidas las funciones handleProject y showCard en tu componente
                      onClick={() => handleProject(item.value)}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === item.value // Asumo que showCard es una variable de estado
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-blue-600 hover:text-white"
                      }`}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {/* Las tarjetas ya apuntan a tu GitHub (felipesanchez-dev), así que están bien */}
            <PortfolioCard
              ImageHref="/img/open-1.png"
              category="web"
              title="Plantilla de portafolio"
              button="Ver codigo"
              buttonHref="https://github.com/felipesanchez-dev/PortafolioDev"
              showCard={showCard} // Asumo que showCard es una variable de estado
            />
            <PortfolioCard
              ImageHref="/img/open-2.png"
              category="otros"
              title="Traductor de voz"
              button="Ver codigo"
              buttonHref="https://github.com/felipesanchez-dev/InterVoz-"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/img/open-4.png"
              category="movil"
              title="Chat GPT"
              button="Ver codigo"
              buttonHref="https://github.com/felipesanchez-dev/ChatIA-GPT"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/img/open-5.png"
              category="movil"
              title="App del clima"
              button="Ver codigo"
              buttonHref="https://github.com/felipesanchez-dev/Pronostico-del-Clima"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/img/open-6.png"
              category="movil"
              title="App de noticias"
              button="Ver codigo"
              buttonHref="https://github.com/felipesanchez-dev/app-noticias"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={ImageHref}
              alt="Open source"
              className="w-[600px] h-[400px] object-cover"
            />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-[#1e1e1e] py-[34px] px-3 text-center shadow-lg">
            <span className="text-blue-500 mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="inline-block rounded-md border border-gray-700 py-[10px] px-7 text-sm font-medium text-gray-300 transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
