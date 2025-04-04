import "./Boton.css";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";

const Boton = () => {
  return (
    <>
      <div className="flex mt-4 flex-wrap justify-center md:flex gap-2">
        <a href="#contact">
          <Button
            id="product-button"
            rightIcon={<FaRegCommentDots />}
            title="Crea con Nosotros"
            containerClass="bg-blue-50 flex items-center justify-center gap-1 text-sm"
          />
        </a>
        <a href="https://www.instagram.com/felipesanchez_dev/">
          <Button
            id="product-button"
            rightIcon={<FaInstagram />}
            title="Instagram"
            containerClass="bg-blue-50 flex items-center justify-center gap-1 text-sm"
          />
        </a>
        <a href="https://www.linkedin.com/in/felipereyessa/">
          <Button
            id="product-button"
            rightIcon={<CiLinkedin />}
            title="Linkedin"
            containerClass="bg-blue-50 flex items-center justify-center gap-1 text-sm"
          />
        </a>
      </div>
    </>
  );
};

export default Boton;
