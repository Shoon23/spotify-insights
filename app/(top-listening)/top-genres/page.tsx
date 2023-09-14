"use client";

import TopGenreList from "@/components/TopListening/TopGenreList";
import { Button } from "@/components/ui/button";
import { useGenresStore } from "@/store/genresStore";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { fetchAndSetArtistsData } from "../top-artists/page";
import { useArtistStore } from "@/store/artistsStore";

export default function TopGenresPage() {
  const genreStore = useGenresStore();
  const artistStore = useArtistStore();
  const accessToken =
    "BQAUV_80dEcLFAPlusxITeP9421G1Nkp7yYpnRU0GfADih1-g11AvYs4Ufrvrbo6M-JZAU8kQMn2WS2sjJhuFMmyd0J305QuRCrI3IUSDmG7aOAi8zfU3hH8Y70LE5HT1EdLdKE_nR5iafODSBm3a19BXLm4Ake7k9PNH-yW5m-JJRBL_0Lb_YbvXFuz2CqXzyG-gSSU3sqg2jpIWNti8yA";
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<
    "weeks" | "months" | "years"
  >("weeks");

  useEffect(() => {
    fetchArtistData();
  }, [selectedFilter]);

  // fetch data
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

  // render genre data
  const renderContent = () => {
    let genreData;

    if (selectedFilter === "weeks") {
      genreData = genreStore.topWeek;
    } else if (selectedFilter === "months") {
      genreData = genreStore.topMonth;
    } else if (selectedFilter === "years") {
      genreData = genreStore.topYear;
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

    return <TopGenreList genres={genreData} />;
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
