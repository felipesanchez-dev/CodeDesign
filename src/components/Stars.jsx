import { useEffect, useRef } from "react";

const NUM_STARS = 150;

export function Stars() {
  const divRef = useRef(null);

  useEffect(() => {
    const stars = divRef.current;
    if (!stars) return;

    stars.querySelectorAll("div").forEach((star) => {
      const size = Math.random() > 0.5 ? 1 : 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = `${Math.random()}`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
    });
  }, []);

  return (
    <div
      ref={divRef}
      className="-z-10 pointer-events-none absolute size-full inset-0 m-auto"
    >
      {Array.from({ length: NUM_STARS }).map((_, i) => (
        <div className="absolute bg-white rounded-full" key={i} />
      ))}
    </div>
  );
}
