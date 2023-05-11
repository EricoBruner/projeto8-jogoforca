import styles from "./styles.module.css";

export default function Game({
  iniciarJogo,
  jogoIniciado,
  palavraExibida,
  erros,
  status,
}) {
  let verificaStatus =
    status === "ganhou"
      ? styles.ganhou
      : status === "perdeu"
      ? styles.perdeu
      : "";

  return (
    <div className={styles.container}>
      <img
        data-test="game-image"
        src={`assets/img/forca${erros}.png`}
        alt="imagem forca"
      />

      <div>
        <button
          data-test="choose-word"
          onClick={() => {
            iniciarJogo();
          }}
        >
          Escolher Palavra
        </button>

        <div className={styles.palavra}>
          {jogoIniciado || status
            ? palavraExibida.map((letra, index) => (
                <div data-test="word" key={index} className={verificaStatus}>
                  {letra}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
