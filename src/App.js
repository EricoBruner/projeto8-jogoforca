import Game from "./components/Game";
import Letters from "./components/Letters";

import palavras from "./palavras";

import "./styles/reset.css";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Game />
      <Letters />
    </>
  );
}
