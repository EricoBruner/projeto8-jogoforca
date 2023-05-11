import { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import Chute from "./components/Chute";
import palavras from "./palavras";

import "./styles/reset.css";
import "./styles/global.css";

export default function App() {
  let [palavra, setPalavra] = useState([]);
  let [palavraExibida, setPalavraExibida] = useState([]);
  let [jogoIniciado, setJogoIniciado] = useState(false);
  let [letrasPressionadas, setLetrasPressionadas] = useState([]);
  let [erros, setErros] = useState(0);
  let [acertos, setAcertos] = useState(0);
  let [status, setStatus] = useState("");

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
    setPalavra([]);
    setLetrasPressionadas([]);
    setAcertos(0);
    setStatus("");
    setErros(0);
    setJogoIniciado(true);
    setPalavra(sorteiaPalavra());
  }

  function verificaLetra(letra) {
    setLetrasPressionadas([letra, ...letrasPressionadas]);
    verificaPalavra(letra);
  }

  function verificaPalavra(letra) {
    let novaPalavraExibida = [...palavraExibida];
    let novoErros = erros;
    let novoAcertos = acertos;

    if (palavra.includes(letra)) {
      palavra.forEach((item, index) => {
        if (item === letra) {
          novaPalavraExibida[index] = letra;
          novoAcertos += 1;
        }
      });
    } else {
      novoErros += 1;
    }

    setErros(novoErros);
    setAcertos(novoAcertos);
    setPalavraExibida(novaPalavraExibida);

    if (novoErros === 6) {
      setPalavraExibida(palavra);
      setStatus("perdeu");
      fimDeJogo();
    } else if (novoAcertos === palavra.length) {
      setStatus("ganhou");
      fimDeJogo();
    }
  }

  function chutandoPalavra(chute) {
    let arrayChute = chute[0].split("");
    let chutouCerto = JSON.stringify(palavra) === JSON.stringify(arrayChute);

    if (chutouCerto) {
      setPalavraExibida(palavra);
      setStatus("ganhou");
      fimDeJogo();
    } else {
      setPalavraExibida(palavra);
      setStatus("perdeu");
      fimDeJogo();
    }
  }

  function fimDeJogo() {
    setJogoIniciado(false);
  }

  return (
    <>
      <Game
        iniciarJogo={iniciarJogo}
        palavra={palavra}
        jogoIniciado={jogoIniciado}
        palavraExibida={palavraExibida}
        erros={erros}
        status={status}
      />
      <Letters
        jogoIniciado={jogoIniciado}
        palavra={palavra}
        palavraExibida={palavraExibida}
        letrasPressionadas={letrasPressionadas}
        verificaLetra={verificaLetra}
      />
      {jogoIniciado && <Chute chutandoPalavra={chutandoPalavra} />}
    </>
  );
}
