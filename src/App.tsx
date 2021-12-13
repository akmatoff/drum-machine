import { useEffect, useState, useCallback } from "react";

import { IDrumPad } from "./components/types/types";
import DrumMachine from "./components/DrumMachine";

import "./App.css";

function App() {
  const [drumPads, setDrumPads] = useState<IDrumPad[]>([]);

  const keyDown = useCallback((e: KeyboardEvent) => {
    setDrumPads((prevDrumPads) => {
      let drumPadsCopy: IDrumPad[] = [...prevDrumPads];

      drumPadsCopy.map((dp) => {
        if (dp["id"] === e.key.toUpperCase()) {
          dp["clicked"] = true;
        }

        return dp;
      });

      return drumPadsCopy;
    });
  }, []);

  const updateDrumPadsState = useCallback((drumPad: IDrumPad) => {
    console.log("updating");
    setDrumPads((prevDrumPads) => {
      let drumPadsCopy: IDrumPad[] = [...prevDrumPads];

      drumPadsCopy.map((dp) => {
        if (drumPad["id"] === dp["id"]) dp["clicked"] = drumPad["clicked"];
        return dp;
      });

      return drumPadsCopy;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);

    setDrumPads(pads);

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [drumPads, keyDown, updateDrumPadsState]);

  return (
    <div className="App">
      <main className="main flex-column centered">
        <DrumMachine
          drumPads={drumPads}
          updateDrumPadsState={updateDrumPadsState}
        />
      </main>
    </div>
  );
}

export default App;

const pads: IDrumPad[] = [
  {
    src: "/audio/Cymatics - Atomic Kick 1 - D.wav",
    id: "Q",
    title: "Kick",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Atomic Snare 2 - F.wav",
    id: "W",
    title: "Snare",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Atomic Hihat 1.wav",
    id: "E",
    title: "Hi-Hat",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Atomic Ride 8.wav",
    id: "A",
    title: "Ride",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Assassin Bass 1 - E.wav",
    id: "S",
    title: "Bass 1 - E",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Xenomorph Bass 1 - E.wav",
    id: "D",
    title: "Bass 2 - E",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Killer Growl - G.wav",
    id: "Z",
    title: "Bass 3 - G",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Atomic Vocal 5 - Go Off.wav",
    id: "X",
    title: "Vocal",
    clicked: false,
  },
  {
    src: "/audio/Cymatics - Tsunami Bass - F.wav",
    id: "C",
    title: "Bass 4 - F",
    clicked: false,
  },
];
