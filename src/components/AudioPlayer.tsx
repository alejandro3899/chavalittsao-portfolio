"use client";

export default function AudioPlayer({
  url
}: {
  url: string | undefined;
  
}) {
  function onPlay(e: any) {
    document.querySelectorAll('audio.js-audio-player').forEach((elm: any) => {
      if (elm !== e.target) {
        elm.pause();
      }
    });
  }
  return (
    <audio onPlay={onPlay} controls controlsList="nodownload" src={url} className="js-audio-player"></audio>
  );
}
