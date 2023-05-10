import styles from "./styles.module.css";

import alfabeto from "./utils/alfabeto";
import Letter from "./Letter";

export default function Letters({
  jogoIniciado,
  letrasPressionadas,
  verificaLetra,
}) {
  return (
    <div className={styles.container}>
      {alfabeto.map((letra) => (
        <Letter
          key={letra}
          letra={letra}
          jogoIniciado={jogoIniciado}
          letrasPressionadas={letrasPressionadas}
          verificaLetra={verificaLetra}
        />
      ))}
    </div>
  );
}
