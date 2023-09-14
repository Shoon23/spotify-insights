"use client";
import React, { useEffect, useState } from "react";
import {
  iGenreStoreState,
  iTopGenre,
  useGenresStore,
} from "@/store/genresStore";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import isObjectEmpty from "@/utils/isObjectEmpty";
import { iArtistStoreState, useArtistStore } from "@/store/artistsStore";
import { fetchSpotifyTops } from "@/service/spotifyService";
import { Loader2 } from "lucide-react";
import TopArtistList from "@/components/TopListening/TopArtistList";

// fetch and set top artist and genre data
export async function fetchAndSetArtistsData(
  accessToken: string,
  selectedFilter: "weeks" | "months" | "years",
  artistStore: iArtistStoreState,
  genreStore: iGenreStoreState
) {
  if (selectedFilter === "weeks" && isObjectEmpty(artistStore.topWeek)) {
    const data = await fetchSpotifyTops(accessToken, "artists", "short_term");
    artistStore.setTopWeek(data);
    genreStore.setTopWeek(data);
  } else if (
    selectedFilter === "months" &&
    isObjectEmpty(artistStore.topMonth)
  ) {
    const data = await fetchSpotifyTops(accessToken, "artists", "medium_term");
    artistStore.setTopMonth(data);
    genreStore.setTopMonth(data);
  } else if (selectedFilter === "years" && isObjectEmpty(artistStore.topYear)) {
    const data = await fetchSpotifyTops(accessToken, "artists", "long_term");
    artistStore.setTopYear(data);
    genreStore.setTopYear(data);
  }
}

export default function TopArtistsPage() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code") as string;

  useEffect(() => {
    const getToken = async (code: string) => {
      try {
        const res = await fetch("http://localhost:3000/api/auth?code=" + code, {
          method: "GET",

          cache: "no-store",
        });
        const data = await res.json();

        console.log(data);
        // router.push(`/top-artists?access_token${data.access_token}`);
      } catch (error) {
        console.log(error);
      }
    };
    // getToken(code);
  }, []);

  const accessToken =
    "BQAUV_80dEcLFAPlusxITeP9421G1Nkp7yYpnRU0GfADih1-g11AvYs4Ufrvrbo6M-JZAU8kQMn2WS2sjJhuFMmyd0J305QuRCrI3IUSDmG7aOAi8zfU3hH8Y70LE5HT1EdLdKE_nR5iafODSBm3a19BXLm4Ake7k9PNH-yW5m-JJRBL_0Lb_YbvXFuz2CqXzyG-gSSU3sqg2jpIWNti8yA";
  const [selectedFilter, setSelectedFilter] = useState<
    "weeks" | "months" | "years"
  >("weeks");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const artistStore = useArtistStore();
  const genreStore = useGenresStore();
  useEffect(() => {
    fetchArtistData();
  }, [selectedFilter]);

  // fetch the top artist with filter
  const fetchArtistData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      fetchAndSetArtistsData(
        accessToken,
        selectedFilter,
        artistStore,
        genreStore
      );
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // render the list of artists
  const renderContent = () => {
    let artistData;

    if (selectedFilter === "weeks") {
      artistData = artistStore.topWeek;
    } else if (selectedFilter === "months") {
      artistData = artistStore.topMonth;
    } else if (selectedFilter === "years") {
      artistData = artistStore.topYear;
    }

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-[70vh]">
          <Loader2 className="mr-2 h-20 w-20 animate-spin" />
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex justify-center items-center h-[70vh]">
          Something went wrong
        </div>
      );
    }

    return <TopArtistList artist={artistData} />;
  };

  return (
    <>
      <nav>
        <Button
          variant={selectedFilter === "weeks" ? "secondary" : "outline"}
          onClick={() => setSelectedFilter("weeks")}
        >
          Weeks
        </Button>
        <Button
          variant={selectedFilter === "months" ? "secondary" : "outline"}
          onClick={() => setSelectedFilter("months")}
        >
          Months
        </Button>
        <Button
          variant={selectedFilter === "years" ? "secondary" : "outline"}
          onClick={() => setSelectedFilter("years")}
        >
          Years
        </Button>
      </nav>
      {renderContent()}
    </>
  );
}
