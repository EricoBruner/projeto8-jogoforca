import Game from "./components/Game";
import Letters from "./components/Letters";

import palavras from "./palavras";

import "./styles/reset.css";
import "./styles/global.css";
import { useState } from "react";

export default function App() {
  let [palavra, setPalavra] = useState([]);
  let [palavraExibida, setPalavraExibida] = useState([]);
  let [jogoIniciado, setJogoIniciado] = useState(false);

  function sorteiaPalavra() {
    palavras.sort(() => Math.random() - 0.5);
    let novaPalavra = palavras[0].split("");

    setPalavraExibida(
      novaPalavra.map(() => {
        return "_";
      })
    );

    return novaPalavra;
  }

  async function iniciarJogo() {
    setPalavra(sorteiaPalavra());

    setJogoIniciado(true);
  }

  return (
    <>
      <Game
        iniciarJogo={iniciarJogo}
        palavra={palavra}
        jogoIniciado={jogoIniciado}
        palavraExibida={palavraExibida}
      />
      <Letters
        jogoIniciado={jogoIniciado}
        palavra={palavra}
        palavraExibida={palavraExibida}
      />
    </>
  );
}
