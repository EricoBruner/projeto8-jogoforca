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
      <img src={`assets/img/forca${erros}.png`} alt="imagem forca" />

      <div>
        <button
          onClick={() => {
            iniciarJogo();
          }}
        >
          Escolher Palavra
        </button>

        <div className={styles.palavra}>
          {jogoIniciado || status
            ? palavraExibida.map((letra, index) => (
                <div key={index} className={verificaStatus}>
                  {letra}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
