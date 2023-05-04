import React, { useContext, useRef } from "react";
import PostsContext from "../context/Posts";
import CreateStyle from "../styles/Create.module.css";
const Create = function () {
  const { add } = useContext(PostsContext);
  const addForm = useRef(null);
  return (
    <form
      className={CreateStyle.create}
      ref={addForm}
      onSubmit={function (e) {
        e.preventDefault();
        const { elements } = e.target;
        const { title, content, tags, image } = elements;
        add({
          title: String(title.value).toUpperCase(),
          content: content.value,
          tags: String(tags.value).split(","),
          image: image.value,
        });
        addForm.current.reset();
      }}
    >
      <fieldset>
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" name="title" />
      </fieldset>
      <fieldset>
        <label htmlFor="tags">Etiquetas (separado por comas)</label>
        <input type="text" id="tags" name="tags" />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Imagen URL (incluye https:// o http://)</label>
        <input type="text" id="image" name="image" />
      </fieldset>
      <fieldset>
        <label htmlFor="content">Contenido</label>
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
      </fieldset>
      <button>Guardar</button>
    </form>
  );
};

export default Create;