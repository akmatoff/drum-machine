import { useRef, useEffect } from "react";

import { IDrumPad, IDrumPadComponent } from "./types/types";

export default function DrumPad({
  src,
  id,
  clicked,
  updateDrumPadsState,
}: IDrumPadComponent) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const clickedRef = useRef(clicked);
  const drumPadStyle = {
    backgroundColor: clicked ? "#eec643" : "#434246",
  };

  const playAudio = () => {
    null !== audioElement.current && audioElement.current.play();
  };

  useEffect(() => {
    clicked && playAudio();

    const clickTimeout = setTimeout(() => (clickedRef.current = false), 50);

    return () => clearTimeout(clickTimeout);
  }, [clicked, updateDrumPadsState, id, src]);

  return (
    <div
      style={drumPadStyle}
      className="drum-pad"
      onClick={() => {
        clicked = true;
        updateDrumPadsState({ id: id, src: src, clicked: clicked } as IDrumPad);
      }}
    >
      {id}
      <audio id={id} src={src} ref={audioElement} autoPlay={false} />
    </div>
  );
}
