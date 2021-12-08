import { useRef, useLayoutEffect } from "react";

interface IAudio {
  src: string;
  id: string;
  playAudio: Function;
}

export default function Audio({ src, id, playAudio }: IAudio) {
  const audioElement = useRef<HTMLAudioElement>(null);

  useLayoutEffect(() => {
    playAudio(audioElement.current);
  });

  return <audio id={id} src={src} ref={audioElement}></audio>;
}
