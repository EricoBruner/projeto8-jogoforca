import styles from "./styles.module.css";

export default function Game({ iniciarJogo }) {
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
        <div className={styles.palavra}>{}</div>
      </div>
    </div>
  );
}
