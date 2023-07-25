import { create } from "zustand";

interface TopArtistState {
  topGenresYears: {
    [key: string]: {
      count: number;
      rank: number;
    };
  };
  topGenresWeeks: {
    [key: string]: {
      count: number;
      rank: number;
    };
  };
  topGenresMonths: {
    [key: string]: {
      count: number;
      rank: number;
    };
  };
}

export const useArtistsStore = create<TopArtistState>()((set) => ({
  topGenresYears: {},
  topGenresWeeks: {},
  topGenresMonths: {},
}));
