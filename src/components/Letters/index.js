import styles from "./styles.module.css";

import alfabeto from "./alfabeto";

export default function Letters({ jogoIniciado }) {
  return (
    <div className={styles.container}>
      {alfabeto.map((letra) => (
        <button
          className={jogoIniciado ? styles.letterActive : styles.letterDisabled}
          disabled={jogoIniciado ? false : true}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
