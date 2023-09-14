import { create } from "zustand";

export interface iTopArtist {
  images: Array<{
    url: string;
  }>;
  name: string;
  external_urls: {
    spotify: string;
  };
}

export interface iArtistStoreState {
  topWeek: { items: Array<iTopArtist> } | {};
  topMonth: { items: Array<iTopArtist> } | {};
  topYear: { items: Array<iTopArtist> } | {};
  setTopWeek: (topWeek: { items: Array<iTopArtist> }) => void;
  setTopMonth: (topMonth: { items: Array<iTopArtist> }) => void;
  setTopYear: (topYear: { items: Array<iTopArtist> }) => void;
}

export const useArtistStore = create<iArtistStoreState>()((set) => ({
  topWeek: {},
  topMonth: {},
  topYear: {},
  setTopWeek: (topWeek: { items: Array<iTopArtist> }) =>
    set(() => ({ topWeek })),
  setTopMonth: (topMonth: { items: Array<iTopArtist> }) =>
    set(() => ({ topMonth })),
  setTopYear: (topYear: { items: Array<iTopArtist> }) =>
    set(() => ({ topYear })),
}));
