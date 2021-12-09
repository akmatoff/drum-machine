import { useEffect, useState } from "react";

import { IDrumPad } from "./components/types/types";
import DrumMachine from "./components/DrumMachine";

import "./App.css";

const pads: IDrumPad[] = [
  { src: "/audio/Cymatics - Atomic Kick 1 - D.wav", id: "Q" },
  { src: "/audio/Cymatics - Atomic Snare 2 - F.wav", id: "W" },
  { src: "/audio/Cymatics - Atomic Hihat 1.wav", id: "E" },
  { src: "/audio/Cymatics - Atomic Ride 8.wav", id: "A" },
  { src: "/audio/Cymatics - Assassin Bass 1 - E.wav", id: "S" },
  { src: "/audio/Cymatics - Xenomorph Bass 1 - E.wav", id: "D" },
  { src: "/audio/Cymatics - Chimpanzee Bass 1 - D#.wav", id: "Z" },
  { src: "/audio/Cymatics - Atomic Vocal 5 - Go Off.wav", id: "X" },
  { src: "/audio/Cymatics - Tsunami Bass - F.wav", id: "C" },
];

function App() {
  const [drumPads, setDrumPads] = useState<IDrumPad[]>([]);

  useEffect(() => {
    window.addEventListener("keypress", keyPress);

    setDrumPads(pads);

    return () => window.removeEventListener("keypress", keyPress);
  }, []);

  const keyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case "q":
    }
  };

  return (
    <div className="App">
      <main className="main flex-column centered">
        <DrumMachine drumPads={drumPads} />
      </main>
    </div>
  );
}

export default App;
