import React, { useState } from "react";
import FormStyle from "../styles/Form.module.css";
function Form() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [opinion, setOpinion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}, Correo: ${correo}, Opinion: ${opinion}`);
  };

  return (
    <section className={FormStyle.container}>
      <article className={FormStyle.infovideo}>
        <h1 id="Pelicula">TRAILER PELÍCULA 2023</h1>
        <iframe
          src="https://www.youtube.com/embed/8YQM6VlfiqM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <article className={FormStyle.video}>
          <a
            href="https://www.youtube.com/watch?v=Yo-fQiQrOtA&t=33s"
            target="black"
          >
            ver película
          </a>
          <p>
            Mira el video y no te pierdas de lo nuevo de Mario Bros y Nintendo
          </p>
        </article>

        <article className={FormStyle.contenedor}>
          <p> Los comentarios son la voz de nuestra comunidad. ¿Quieres hacerte escuchar? ¡Comenta abajo!</p>
          <form onSubmit={handleSubmit} className={FormStyle.formulario}>
            <label className={FormStyle.nombre}>
              <input
                className={FormStyle.input}
                type="name"
                placeholder="Nombre o apodo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>

            <label className={FormStyle.correo}>
              <input
                className={FormStyle.input}
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </label>
            <label>
              <textarea
                className={FormStyle.opinion}
                type="opinion"
                placeholder="Cuéntanos tu opinión"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
              />
            </label>
            <button type="submit" className={FormStyle.boton}>
              Publicar
            </button>
          </form>
        </article>
      </article>
    </section>
  );
}

export default Form;