import styles from "./styles.module.css";

import alfabeto from "./alfabeto";

export default function Letters() {
  return (
    <div className={styles.container}>
      {alfabeto.map((letra) => (
        <button className={styles.letter} disabled={true}>
          {letra}
        </button>
      ))}
    </div>
  );
}
