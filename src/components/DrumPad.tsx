import { useRef } from "react";

import { IDrumPad } from "./types/types";

export default function DrumPad({ src, id }: IDrumPad) {
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
