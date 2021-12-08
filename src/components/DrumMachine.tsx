import "./DrumMachine.css";

export default function DrumMachine() {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div id="drum-pad-container">
        <div className="drum-pad">Q</div>
        <div className="drum-pad">W</div>
        <div className="drum-pad">E</div>
        <div className="drum-pad">A</div>
        <div className="drum-pad">S</div>
        <div className="drum-pad">D</div>
        <div className="drum-pad">Z</div>
        <div className="drum-pad">X</div>
        <div className="drum-pad">C</div>
      </div>
    </div>
  );
}
