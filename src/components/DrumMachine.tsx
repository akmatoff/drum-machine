import "./DrumMachine.css";
import DrumPad from "./DrumPad";

export default function DrumMachine() {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div id="drum-pad-container">
        <DrumPad src="/audio/Cymatics - Atomic Kick 1 - D.wav" id="Q" />
        <DrumPad src="/audio/Cymatics - Atomic Snare 2 - F.wav" id="W" />
        <DrumPad src="/audio/Cymatics - Atomic Hihat 1.wav" id="E" />
        <DrumPad src="/audio/Cymatics - Atomic Ride 8.wav" id="A" />
        <DrumPad src="/audio/Cymatics - Assassin Bass 1 - E.wav" id="S" />
        <DrumPad src="/audio/Cymatics - Xenomorph Bass 1 - E.wav" id="D" />
        <DrumPad src="/audio/Cymatics - Chimpanzee Bass 1 - D#.wav" id="Z" />
        <DrumPad src="/audio/Cymatics - Atomic Vocal 5 - Go Off.wav" id="X" />
        <DrumPad src="/audio/Cymatics - Tsunami Bass - F.wav" id="C" />
      </div>
    </div>
  );
}
