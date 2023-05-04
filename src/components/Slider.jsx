import {useState} from "react";
import SliderStyle from "../styles/Slider.module.css";

function Slider({ imagenes }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <section className={SliderStyle.container}>
      <button className={SliderStyle.botbanneruno} onClick={anteriorImagen}>←</button>
      {imagenes.map((imagen, index) => {
        return (
          <section
            className={
              imagenActual === index
                ? `${SliderStyle.slide} ${SliderStyle.active}`
                : SliderStyle.slide
            }
          >
            {imagenActual === index && (
              <img key={index} src={imagen} alt="imagen" />
            )} 
          </section>
        );
      })}
      <button className={SliderStyle.botbannerdos} onClick={siguienteImagen}>→</button>
    </section>
  );
}

export default Slider;