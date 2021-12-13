import { IDrumMachine } from "./types/types";
import "./DrumMachine.css";
import DrumPad from "./DrumPad";

export default function DrumMachine({
  drumPads,
  updateDrumPadsState,
}: IDrumMachine) {
  return (
    <div id="drum-machine" className="flex-column centered">
      <div id="display" className="flex-row">
        {drumPads.map((dp) => dp["clicked"] === true && dp["title"] + " ")}
      </div>
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
