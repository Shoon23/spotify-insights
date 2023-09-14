import { create } from "zustand";

export interface iTopTrack {
  album: { images: Array<{ url: string }> };
  name: string;
  artists: Array<{
    name: string;
    external_urls: {
      spotify: string;
    };
  }>;
  external_urls: {
    spotify: string;
  };
}

export interface iTrackStoreState {
  topWeek: { items: Array<iTopTrack> } | {};
  topMonth: { items: Array<iTopTrack> } | {};
  topYear: { items: Array<iTopTrack> } | {};
  setTopWeek: (topWeek: { items: Array<iTopTrack> }) => void;
  setTopMonth: (topMonth: { items: Array<iTopTrack> }) => void;
  setTopYear: (topYear: { items: Array<iTopTrack> }) => void;
}

export const useTrackStore = create<iTrackStoreState>()((set) => ({
  topWeek: {},
  topMonth: {},
  topYear: {},
  setTopWeek: (topWeek: { items: Array<iTopTrack> }) =>
    set(() => ({ topWeek })),
  setTopMonth: (topMonth: { items: Array<iTopTrack> }) =>
    set(() => ({ topMonth })),
  setTopYear: (topYear: { items: Array<iTopTrack> }) =>
    set(() => ({ topYear })),
}));
