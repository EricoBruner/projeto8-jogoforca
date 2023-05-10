import styles from "./styles.module.css";

export default function Game({ iniciarJogo, jogoIniciado, palavraExibida }) {
  return (
    <div className={styles.container}>
      <img src="assets/img/forca0.png"></img>

      <div>
        <button
          onClick={() => {
            iniciarJogo();
          }}
        >
          Escolher Palavra
        </button>
        <div className={styles.palavra}>
          {jogoIniciado
            ? palavraExibida.map((letra) => <div>{letra}</div>)
            : ""}
        </div>
      </div>
    </div>
  );
}
