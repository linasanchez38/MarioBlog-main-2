import React from "react";
import moneda from "../audio/coin.wav";
import otro from "../img/mariotime.jpg";
import oeste from "../img/mariocuri.jpg";
import { useState } from "react";
import vida from "../audio/1up.wav";
import tort from "../img/tortuga.webp";
import boo from "../img/boo.gif";

const Mario = () => {
  const [show, setShow] = useState(0);
  const showStoryOne = function (e) {
    e.preventDefault();
    if (show !== 1) {
      setShow(1);
    } else {
      setShow(0);
    }
  };
  const showStoryTwo = function (e) {
    e.preventDefault();
    if (show !== 2) {
      setShow(2);
    } else {
      setShow(0);
    }
  };
  const audioluigi = function (audio) {
    const reproducir = new Audio(audio);
    reproducir.play();
  };

  return (
    <>
      <articule className="fondo" id="Historia">
        <h2 className="tituloh2">HISTORIA DE MARIO</h2>
        <section className="wrapper">
          <section className="card">
            <img classname="foto" src={otro} />

            <section className="info">
              <p>
                Descubre la historia detrás del juego más icónico de todos los tiempos
              </p>
              <form onSubmit={showStoryOne}>
                {/* <a href="#"className='btn' onClick={() => audioluigi(moneda)}> MAS INFORMACION</a> */}
                <button className="btn" onClick={() => audioluigi(moneda)}>
                  ver historia{" "}
                </button>
              </form>
            </section>
          </section>
        </section>
        <section className="wrapper">
          <section className="card">
            <img src={oeste} />

            <section className="info">
              <p>
                ¡Desbloquea secretos impresionantes! Descubre las curiosidades más asombrosas de Mario Bross
              </p>
              <form onSubmit={showStoryTwo}>
                {/* <a href="#"className='btn' onClick={() => audioluigi(moneda)}> MAS INFORMACION</a> */}
                <button className="btn" onClick={() => audioluigi(moneda)}>
                  curiosidades
                </button>
              </form>
            </section>
          </section>
        </section>
      </articule>

      {show !== 0 && show === 1 ? (
        <article className="parrafouno">
          <h3 className="tituloh3">HISTORIA</h3>
          <p className="parrafo">
            {" "}
            ¿Quién no ha oído hablar de Mario Bros? Desde que se lanzó el primer juego en 1985, la historia de este fontanero italiano ha cautivado a jugadores de todas las edades en todo el mundo. Con su bigote y su gorra roja, Mario se ha convertido en uno de los personajes más icónicos de los videojuegos.
          </p>
          <p>
            En la saga de Mario Bros, Mario vive en el Reino Champiñón, un lugar lleno de criaturas mágicas y peligrosas. Su misión principal es salvar a la princesa Peach, quien ha sido secuestrada por el malvado Bowser, el rey de los Koopa. Pero esto es sólo el comienzo de sus aventuras.
          </p>
          <p>
            En su camino, Mario debe superar numerosos obstáculos y derrotar a todo tipo de enemigos, desde Goombas hasta Boos y Bob-ombs. Y aunque cuenta con la ayuda de su hermano Luigi, a menudo debe enfrentarse solo a las peligrosas trampas y desafíos que se interponen en su camino.
          </p>
          <p>
            La saga de Mario Bros ha evolucionado con el tiempo, introduciendo nuevos personajes y mundos mágicos. También ha dado lugar a películas, programas de televisión y muchos otros productos, pero lo que nunca ha cambiado es la emoción y la aventura que se siente al intentar un juego de Mario.
          </p>
          <p>
            En resumen, la historia de Mario Bros es emocionante y llena de acción, peligros, enemigos y desafíos. La saga ha cautivado
            a jugadores de todo el mundo durante décadas, y sigue siendo uno de los juegos más queridos y populares de todos los tiempos.
          </p>

          <form onSubmit={showStoryOne}>
            <button className="botones" onClick={() => audioluigi(vida)}>
              REGRESA
            </button>
          </form>
        </article>
      ) : null}
      {show !== 0 && show === 2 ? (
        <article className="parrafodos">
          <h3 className="tituloh3">CURIOSIDADES</h3>
          <p>
            Mario fue originalmente llamado "Jumpman" en el juego "Donkey Kong" de 1981, y su nombre actual se debe a que el personal de Nintendo of America pensó que el personaje se parecía al propietario del almacén, Mario Segale.
          </p>
          <p>
            El bigote de Mario fue agregado por el diseñador de personajes Shigeru Miyamoto porque era difícil dibujar una boca clara en la
            resolución de píxeles de los juegos de arcade de la época.
          </p>
          <p>
            En el juego original de Super Mario Bros, los ladrillos utilizados para construir el mundo del juego fueron diseñados para parecerse a las latas de cerveza. El famoso tema musical de Super Mario Bros fue compuesto por el músico japonés Koji Kondo. También compuso la música de otros juegos de Nintendo, como The Legend of Zelda.
          </p>
          <p>
            El personaje Luigi, hermano de Mario, fue nombrado en honor a un trabajador de la fábrica de Nintendo of America llamado Mario
            Segale, quien había sugerido el nombre "Mario" para el personaje principal. El personaje de Bowser fue originalmente concebido como un buey, pero finalmente se convirtió en un dinosaurio con características de tortuga.
          </p>
          <p>
            En el juego "Super Mario 64", el jugador puede ver una foto de la verdadera mascota de Miyamoto, un perro llamado Pikku. En el juego "Super Mario World", el dinosaurio Yoshi fue originalmente concebido como un reemplazo temporal para el personaje
            de Toad, pero se convirtió en un personaje popular y recurrente en los juegos de Mario.
          </p>
          <p>
            En el juego "Super Mario Bros. 3", se puede encontrar una flauta mágica que permite al jugador saltar a mundos posteriores. Esta
            flauta es en realidad una referencia a la flauta mágica del cuento de hadas "Pied Piper of Hamelin".
          </p>
          <p>
            Mario ha aparecido en más de 200 juegos diferentes desde su debut en 1981, lo que lo convierte en uno de los personajes de videojuegos más populares y reconocidos del mundo.
          </p>

          <form onSubmit={showStoryTwo}>
            <button className="botones" onClick={() => audioluigi(vida)}>
              REGRESA
            </button>
          </form>
        </article>
      ) : null}
    </>
  );
};

export default Mario;