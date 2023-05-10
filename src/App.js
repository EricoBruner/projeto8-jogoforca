import Game from "./components/Game";
import Letters from "./components/Letters";

import palavras from "./palavras";

import "./styles/reset.css";
import "./styles/global.css";
import { useState } from "react";

export default function App() {
  let [palavra, setPalavra] = useState(sorteiaPalavra());
  let [jogoIniciado, setJogoIniciado] = useState(false);

  function sorteiaPalavra() {
    palavras.sort(() => Math.random() - 0.5);
    return palavras[0];
  }

  function iniciarJogo() {
    setPalavra(sorteiaPalavra());
    setJogoIniciado(true);
  }

  return (
    <>
      <Game iniciarJogo={iniciarJogo} />
      <Letters jogoIniciado={jogoIniciado} />
    </>
  );
}
