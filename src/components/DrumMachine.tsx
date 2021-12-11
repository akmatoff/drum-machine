import { IDrumMachine } from "./types/types";
import "./DrumMachine.css";
import DrumPad from "./DrumPad";

export default function DrumMachine({
  drumPads,
  updateDrumPadsState,
}: IDrumMachine) {
  return (
    <div id="drum-machine flex-row centered">
      <div id="display"></div>
      <div id="drum-pad-container">
        {drumPads.map((dp) => {
          return (
            <DrumPad
              key={dp.id}
              src={dp.src}
              id={dp.id}
              title={dp.title}
              clicked={dp.clicked}
              updateDrumPadsState={updateDrumPadsState}
            />
          );
        })}
      </div>
    </div>
  );
}
