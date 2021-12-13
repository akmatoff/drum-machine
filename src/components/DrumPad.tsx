import { useRef, useEffect, useState } from "react";

import { IDrumPad, IDrumPadComponent } from "./types/types";

export default function DrumPad({
  src,
  id,
  clicked,
  updateDrumPadsState,
}: IDrumPadComponent) {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [clickedState, setClickedState] = useState(clicked);
  const drumPadStyle = {
    backgroundColor: clicked ? "#eec643" : "#434246",
  };

  const playAudio = () => {
    audioElement.current?.play();
  };

  useEffect(() => {
    clicked && playAudio();

    const clickTimeout = setTimeout(() => {
      setClickedState(false);
      updateDrumPadsState({ id: id, src: src, clicked: false });
    }, 50);

    clickedState &&
      updateDrumPadsState({
        id: id,
        src: src,
        clicked: clickedState,
      } as IDrumPad);

    return () => clearTimeout(clickTimeout);
  }, [clicked, clickedState, updateDrumPadsState, id, src]);

  return (
    <div
      style={drumPadStyle}
      className="drum-pad"
      id={id}
      onClick={() => setClickedState(true)}
    >
      {id}
      <audio
        className="clip"
        id={id}
        src={src}
        ref={audioElement}
        autoPlay={false}
      />
    </div>
  );
}
