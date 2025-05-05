import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);

  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50 font-bold">
          Mi Enfoque como Desarrollador
        </p>
        <p className="font-circular-web text-lg text-blue-50 opacity-50">
          Convierto ideas en soluciones tecnológicas innovadoras. Soy un
          desarrollador dedicado al software a medida, diseño web y optimización
          digital, ayudando a empresas y emprendedores a potenciar su presencia
          en el mundo digital. Me apasiona la tecnología y el diseño, por eso
          cada proyecto que creo no solo es funcional, sino que también está
          optimizado para ofrecer la mejor experiencia de usuario. Desde el
          desarrollo de plataformas empresariales hasta sitios web dinámicos y
          automatización de procesos, trabajo con las últimas herramientas y
          metodologías para garantizar calidad, eficiencia y escalabilidad.
        </p>
        <br />
        <p className="font-circular-web text-lg text-blue-50 font-bold">
          ¿Por qué elegirme?
        </p>
        <p className="font-circular-web text-lg text-blue-50 opacity-50">
          🔹 <span className="font-bold">Soluciones personalizadas:</span> Me
          adapto a tus necesidades para crear productos a la medida. <br />
          🔹 <span className="font-bold">Diseño moderno y eficiente:</span>{" "}
          Interfaces atractivas y usabilidad optimizada. <br /> 🔹{" "}
          <span className="font-bold">Tecnología de vanguardia:</span> Uso las
          herramientas más avanzadas para un desarrollo robusto y seguro.
          <br />
          🔹 <span className="font-bold">Compromiso y excelencia:</span> Cada
          línea de código refleja mi pasión y dedicación.
        </p>
        <br />
        <p className="font-circular-web text-lg text-blue-50 font-bold">
          No solo creo software; diseño experiencias digitales que impulsan el
          éxito. <br />
          Si estás listo para llevar tu proyecto al siguiente nivel, ¡hagámoslo
          realidad!
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Mis<b> Servicios </b>
            </>
          }
          description="Ofrezco soluciones integrales para impulsar tu negocio en el mundo digital."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Desarrollo <b>Web</b>
              </>
            }
            description="Creo sitios web responsivos y modernos, optimizados para brindar una experiencia digital excepcional. Tu presencia en línea se transforma en una herramienta de éxito."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                Aplicaciones <b>Multiplataforma</b>
              </>
            }
            description="Lleva tus ideas a cualquier dispositivo. Desarrollo soluciones que funcionan de forma consistente y eficaz en diferentes plataformas, garantizando rendimiento y accesibilidad."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Software
                <b> a la Medida</b>
              </>
            }
            description="Cada negocio es único. Creo soluciones personalizadas que se adaptan a las necesidades específicas de tu empresa, impulsando eficiencia, crecimiento y competitividad."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-5.mp4"
            title={
              <>
                DISEÑO <b>UI/UX</b>
              </>
            }
            description="No solo se trata de tecnología, sino también de experiencia. Diseño interfaces intuitivas y visualmente atractivas que aseguran una interacción fluida y placentera para tus usuarios."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-6.mp4"
            title={
              <>
                Integración y <b>Automatización</b>
              </>
            }
            description="Te ayudo a optimizar tus procesos con sistemas integrados y soluciones de automatización, permitiéndote centrarte en lo que realmente importa: el crecimiento de tu negocio."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
