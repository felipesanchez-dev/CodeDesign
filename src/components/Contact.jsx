import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldjpvvq");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        formRef.current?.reset();
      }, 4000);
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4 py-16">
      <div className="w-full max-w-3xl bg-white text-black rounded-2xl shadow-xl p-8 md:p-12">
        {showSuccess ? (
          <div className="text-center py-16">
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              ¡Mensaje enviado!
            </h2>
            <p className="text-lg text-gray-700">
              Gracias por contactarnos. Te responderemos pronto 😊
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-8">
              ¿Tienes una idea en mente?
            </h1>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 text-sm md:text-base"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-1 font-medium text-gray-700"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ej. Juan Pérez"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ej. juan@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                  autoComplete="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-1 font-medium text-gray-700"
                >
                  Número de teléfono (WhatsApp)
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Ej. +57 300 123 4567"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                  autoComplete="tel"
                  pattern="^\+\d{1,3}\s?\d{3}\s?\d{3}\s?\d{4}$"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="mb-1 font-medium text-gray-700"
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="¿Sobre qué quieres hablar?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-1 font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-36 resize-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                {state.submitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
