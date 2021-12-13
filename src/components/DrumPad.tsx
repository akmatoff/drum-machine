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
    backgroundColor: clickedState ? "#eec643" : "#434246",
  };

  const playAudio = () => {
    audioElement.current?.play();
  };

  useEffect(() => {
    clickedState && playAudio();

    clicked && setClickedState(clicked);

    const clickTimeout = setTimeout(() => {
      setClickedState(false);
      updateDrumPadsState({ id: id, src: src, clicked: false });
    }, 50);

    return () => clearTimeout(clickTimeout);
  }, [clicked, clickedState, updateDrumPadsState, id, src]);

  return (
    <div
      style={drumPadStyle}
      className="drum-pad"
      onClick={() => {
        setClickedState(true);
        updateDrumPadsState({
          id: id,
          src: src,
          clicked: clickedState,
        } as IDrumPad);
      }}
    >
      {id}
      <audio id={id} src={src} ref={audioElement} autoPlay={false} />
    </div>
  );
}
