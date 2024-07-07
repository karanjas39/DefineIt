import React, { useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={playAudio}>
        <FaPlayCircle className="text-3xl" />
      </button>
    </div>
  );
}

export default AudioPlayer;
