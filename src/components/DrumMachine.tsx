import Audio from "./Audio";
import "./DrumMachine.css";

export default function DrumMachine() {
  const playAudio = (audio: HTMLAudioElement) => {
    audio.play();
  };

  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div id="drum-pad-container">
        <div className="drum-pad" onClick={() => playAudio}>
          Q
          <Audio
            id="Q"
            src="/audio/Cymatics - Atomic Kick 1 - D.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">
          W
          <Audio
            id="W"
            src="/audio/Cymatics - Atomic Snare 2 - F.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">
          E
          <Audio
            id="E"
            src="/audio/Cymatics - Atomic Hihat 1.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">
          A
          <Audio
            id="A"
            src="/audio/Cymatics - Atomic Ride 8.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">
          S
          <Audio
            id="S"
            src="/audio/Cymatics - Assassin Bass 1 - E.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">
          D
          <Audio
            id="D"
            src="/audio/Cymatics - Asteroid Bass - D#.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">
          Z
          <Audio
            id="Z"
            src="/audio/Cymatics - Spitfire Bass 1 - C#.wav"
            playAudio={playAudio}
          />
        </div>
        <div className="drum-pad">X</div>
        <div className="drum-pad">C</div>
      </div>
    </div>
  );
}
