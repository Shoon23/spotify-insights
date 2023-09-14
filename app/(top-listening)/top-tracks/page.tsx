"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { fetchSpotifyTops } from "@/service/spotifyService";
import { useTrackStore } from "@/store/trackStore";
import { Loader2 } from "lucide-react";
import TopTrackList from "@/components/TopListening/TopTrackList";
import isObjectEmpty from "@/utils/isObjectEmpty";
export default function TopTracksPage() {
  const trackStore = useTrackStore();
  const [selectedFilter, setSelectedFilter] = useState<
    "weeks" | "months" | "years"
  >("weeks");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const accessToken =
    "BQAUV_80dEcLFAPlusxITeP9421G1Nkp7yYpnRU0GfADih1-g11AvYs4Ufrvrbo6M-JZAU8kQMn2WS2sjJhuFMmyd0J305QuRCrI3IUSDmG7aOAi8zfU3hH8Y70LE5HT1EdLdKE_nR5iafODSBm3a19BXLm4Ake7k9PNH-yW5m-JJRBL_0Lb_YbvXFuz2CqXzyG-gSSU3sqg2jpIWNti8yA";
  useEffect(() => {
    fetchTrackData();
  }, [selectedFilter]);
  // fetch tracks data from spotify api
  const fetchTrackData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      if (isObjectEmpty(trackStore.topWeek) && selectedFilter === "weeks") {
        const data = await fetchSpotifyTops(
          accessToken,
          "tracks",
          "short_term"
        );
        trackStore.setTopWeek(data);
      } else if (
        isObjectEmpty(trackStore.topMonth) &&
        selectedFilter === "months"
      ) {
        const data = await fetchSpotifyTops(
          accessToken,
          "tracks",
          "medium_term"
        );
        trackStore.setTopMonth(data);
      } else if (
        isObjectEmpty(trackStore.topYear) &&
        selectedFilter === "years"
      ) {
        const data = await fetchSpotifyTops(accessToken, "tracks", "long_term");
        trackStore.setTopYear(data);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // render top tracks list
  const renderContent = () => {
    let trackData;

    if (selectedFilter === "weeks") {
      trackData = trackStore.topWeek;
    } else if (selectedFilter === "months") {
      trackData = trackStore.topMonth;
    } else if (selectedFilter === "years") {
      trackData = trackStore.topYear;
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

    return <TopTrackList tracks={trackData} />;
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
