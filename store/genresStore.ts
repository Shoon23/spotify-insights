import { create } from "zustand";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
import { fetchSpotifyTops } from "@/service/spotifyService";
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
  fetchArtistYears: (accessToken: string) => Promise<any>;
  fetchArtistWeeks: (accessToken: string) => Promise<any>;
  fetchArtistMonths: (accessToken: string) => Promise<any>;
}

export const useGenresStore = create<TopGenresState>()((set) => ({
  topGenresYears: {},
  topGenresWeeks: {},
  topGenresMonths: {},
  fetchArtistWeeks: async (accessToken: string) => {
    try {
      const data = await fetchSpotifyTops(accessToken, "artists", "short_term");
      set({ topGenresWeeks: getSortedGenreCount(data) });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  fetchArtistMonths: async (accessToken: string) => {
    try {
      const data = await fetchSpotifyTops(
        accessToken,
        "artists",
        "medium_term"
      );
      set({ topGenresMonths: getSortedGenreCount(data) });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  fetchArtistYears: async (accessToken: string) => {
    try {
      const data = await fetchSpotifyTops(accessToken, "artists", "long_term");
      set({ topGenresYears: getSortedGenreCount(data) });

      return data;
    } catch (error) {
      console.log(error);
    }
  },
}));
