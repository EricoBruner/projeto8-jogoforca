import styles from "./styles.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <img src="assets/img/forca0.png"></img>

      <div>
        <button>Escolher Palavra</button>
        <div className={styles.palavra}>_ _ _ _ _ _ _</div>
      </div>
    </div>
  );
}
