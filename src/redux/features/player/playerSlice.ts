import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface PlayerState {
  isPlaying: boolean;
}

// Define the initial state using that type
const initialState: PlayerState = {
  isPlaying: false,
}

export const playerSlice = createSlice({
  name: 'player',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    playPause: (state) => {
      state.isPlaying = !state.isPlaying
    }
  },
})

export const { playPause } = playerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsPlaying = (state: RootState) => state.player

export default playerSlice.reducer