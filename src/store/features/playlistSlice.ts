import { TrackType } from "@/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlayListType = {
  currentTrack: TrackType | null;
  tracks: TrackType[];
  isShuffle: boolean;
  defaultTracks: TrackType[];
  isPlay: boolean;
};

const initialState: PlayListType = {
  currentTrack: null,
  tracks: [],
  isShuffle: false,
  defaultTracks: [],
  isPlay: false,
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist(state, action: PayloadAction<TrackType[]>) {
      state.tracks = action.payload;
      state.defaultTracks = action.payload;
    },
    setCurrentTrack(state, action: PayloadAction<TrackType>) {
      state.currentTrack = action.payload;
    },
    setNextTrack(state) {
      const playlist = state.isShuffle ? state.defaultTracks : state.tracks;
      const indexTrack = playlist.findIndex(
        (item) => item._id === state.currentTrack!._id
      );
      indexTrack < playlist.length
        ? (state.currentTrack = playlist[indexTrack + 1])
        : (state.currentTrack = playlist[playlist.length]);
    },
    setPrevTrack(state) {
        const playlist = state.isShuffle ? state.defaultTracks : state.tracks;
        const indexTrack = playlist.findIndex(
          (item) => item._id === state.currentTrack!._id
        );
        indexTrack > 1
          ? (state.currentTrack = playlist[indexTrack - 1])
          : (state.currentTrack = playlist[0]);
    },
    setShuffle(state) {
      state.defaultTracks.sort(() => Math.random() - 0.5)
    },
    setIsShuffle(state, action: PayloadAction<boolean>) {
      state.isShuffle = action.payload;
    },
    setIsPlay(state, action: PayloadAction<boolean>) {
        state.isPlay = action.payload;
    }
  },
});

export const {
  setPlaylist,
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsShuffle,
  setShuffle,
  setIsPlay,
} = playListSlice.actions;
export const playListReducer = playListSlice.reducer;
