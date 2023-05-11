import { useState } from "react";
import styles from "./styles.module.css";

export default function Chute({ chutandoPalavra }) {
  const [chute, setChute] = useState("");

  return (
    <div className={styles.container}>
      <h1>Já sei a palavra!</h1>
      <input
        data-test="guess-input"
        type="text"
        value={chute}
        onChange={(e) => setChute(e.target.value)}
      />
      <button
        data-test="guess-button"
        onClick={() => {
          chutandoPalavra(chute);
        }}
      >
        Chutar
      </button>
    </div>
  );
}
