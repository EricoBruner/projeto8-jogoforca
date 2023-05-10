import styles from "./styles.module.css";

export default function Game({
  iniciarJogo,
  jogoIniciado,
  palavraExibida,
  erros,
  status,
}) {
  return (
    <div className={styles.container}>
      <img src={`assets/img/forca${erros}.png`} />

      <div>
        <button
          onClick={() => {
            iniciarJogo();
          }}
        >
          Escolher Palavra
        </button>

        <div className={`${styles.palavra} ${status}`}>
          {jogoIniciado
            ? palavraExibida.map((letra, index) => (
                <div key={index}>{letra}</div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
