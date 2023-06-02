import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { SpotifyPlaybackSDK } from "spotify-playback-sdk";

import {
  selectIsPlaying,
  playPause,
} from "../../../redux/features/player/playerSlice";
import { useMemo } from "react";

export const Player = () => {
  const _isPlaying = useAppSelector(selectIsPlaying).isPlaying;
  const dispatch = useAppDispatch();

  return (
    <>
      {/* <button onClick={() => dispatch(playPause())}>
        {_isPlaying ? "Pause" : "Play"}
      </button> */}
      {/* <WebPlayback token="BQAiWmOi2wDu4TrckLYK0h9Dd2qPyHtKmhSZsKU8vy7o1rZeyhRdgUYkTnAHD_M6whasAvrN6xZFfrRqHCdh22tl0l2yKu-NGRnEDwzCyaZtkaPNYW4" /> */}
    </>
  );
};
