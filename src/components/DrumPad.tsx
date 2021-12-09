import { useRef } from "react";

interface IAudio {
  src: string;
  id: string;
}

export default function DrumPad({ src, id }: IAudio) {
  const audioElement = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    null !== audioElement.current && audioElement.current.play();
  };

  return (
    <div className="drum-pad" onClick={playAudio}>
      {id}
      <audio id={id} src={src} ref={audioElement}></audio>
    </div>
  );
}
