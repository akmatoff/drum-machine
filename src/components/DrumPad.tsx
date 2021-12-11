import { useRef, useEffect } from "react";

import { IDrumPad, IDrumPadComponent } from "./types/types";

export default function DrumPad({
  src,
  id,
  clicked,
  updateDrumPadsState,
}: IDrumPadComponent) {
  const audioElement = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    null !== audioElement.current && audioElement.current.play();
  };

  useEffect(() => {
    clicked && playAudio();

    updateDrumPadsState({ id: id, src: src, clicked: clicked } as IDrumPad);
  }, [clicked, updateDrumPadsState, id, src]);

  return (
    <div className="drum-pad" onClick={() => (clicked = true)}>
      {id}
      <audio id={id} src={src} ref={audioElement} autoPlay={false} />
    </div>
  );
}
