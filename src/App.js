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
  let [letrasPressionadas, setLetrasPressionadas] = useState([]);

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

  function iniciarJogo() {
    setPalavra(sorteiaPalavra());
    setJogoIniciado(true);
  }

  function verificaLetra(letra) {
    setLetrasPressionadas([letra, ...letrasPressionadas]);
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
        letrasPressionadas={letrasPressionadas}
        verificaLetra={verificaLetra}
      />
    </>
  );
}
