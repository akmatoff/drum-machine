import { IDrumMachine } from "./types/types";
import "./DrumMachine.css";
import DrumPad from "./DrumPad";

export default function DrumMachine({ drumPads }: IDrumMachine) {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div id="drum-pad-container">
        {drumPads.map((dp) => {
          return <DrumPad key={dp.id} src={dp.src} id={dp.id} />;
        })}
      </div>
    </div>
  );
}
