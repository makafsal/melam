import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

import {
  selectIsPlaying,
  playPause,
} from "../../../redux/features/player/playerSlice";

export const Player = () => {
  const _isPlaying = useAppSelector(selectIsPlaying).isPlaying;
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(playPause())}>
        {_isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
};
