import styles from "./styles.module.css";

export default function Letter({
  letra,
  jogoIniciado,
  letrasPressionadas,
  verificaLetra,
}) {
  return (
    <button
      data-test="letter"
      key={letra}
      onClick={() => verificaLetra(letra)}
      className={
        jogoIniciado && !letrasPressionadas.includes(letra)
          ? styles.letterActive
          : styles.letterDisabled
      }
      disabled={
        jogoIniciado && !letrasPressionadas.includes(letra) ? false : true
      }
    >
      {letra}
    </button>
  );
}
