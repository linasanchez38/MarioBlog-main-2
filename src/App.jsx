import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UserContext from "./context/User";
import Personas from "./styles/Personas.css";
import History from "./styles/History.css";
import Luigi from "./personajes/Luigi";
import Mario from "./personajes/Mario";
import Posts from "./components/Posts";
import Admin from "./components/Admin";
import Form from "./components/Form";
import Footer from "./components/Footer";

const marioImagenes = [
  "../public/Mpeach2.jpeg",
  "../public/Peach.jpeg",
  "../public/Mario.jpeg",
  "../public/Mars.jpeg",
];

const App = function () {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Slider imagenes={marioImagenes} />
      <Luigi />
      <Mario />
      {!user || user.roll != "admin" ? <Posts /> : <Admin />}
      <Form />
      <Footer />
    </>
  );
};

export default App;