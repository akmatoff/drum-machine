import { useEffect } from "react";

import DrumMachine from "./components/DrumMachine";

import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("keypress", keyPress);

    return () => window.removeEventListener("keypress", keyPress);
  }, []);

  const keyPress = (e: KeyboardEvent) => {};

  return (
    <div className="App">
      <main className="main flex-column centered">
        <DrumMachine />
      </main>
    </div>
  );
}

export default App;
