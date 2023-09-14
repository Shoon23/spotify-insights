import { create } from "zustand";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
import { iTopArtist } from "./artistsStore";
export interface iTopGenre {
  [key: string]: {
    count: number;
    rank: number;
  };
}

export interface iGenreStoreState {
  topWeek: iTopGenre;
  topMonth: iTopGenre;
  topYear: iTopGenre;
  setTopWeek: (topWeek: { items: Array<iTopArtist> }) => void;
  setTopMonth: (topMonth: { items: Array<iTopArtist> }) => void;
  setTopYear: (topYear: { items: Array<iTopArtist> }) => void;
}

export const useGenresStore = create<iGenreStoreState>()((set) => ({
  topWeek: {},
  topMonth: {},
  topYear: {},
  setTopWeek: (topWeek: { items: Array<iTopArtist> }) =>
    set(() => ({ topWeek: getSortedGenreCount(topWeek) })),
  setTopMonth: (topMonth: { items: Array<iTopArtist> }) =>
    set(() => ({ topMonth: getSortedGenreCount(topMonth) })),
  setTopYear: (topYear: { items: Array<iTopArtist> }) =>
    set(() => ({ topYear: getSortedGenreCount(topYear) })),
}));
