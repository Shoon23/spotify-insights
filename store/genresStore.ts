import { create } from "zustand";

interface TopGenresState {
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

export const useGenresStore = create<TopGenresState>()((set) => ({
  topGenresYears: {},
  topGenresWeeks: {},
  topGenresMonths: {},
}));
