"use client";

import React, { useState } from "react";
import { GenreCard } from "@/components/TopListening/GenreCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MusicCard } from "@/components/TopListening/MusicCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import spotifyIcon from "@/public/icons-spotify.svg";
import WeekList from "@/components/TopTracks/WeekList";
import MonthList from "@/components/TopTracks/MonthList";
import YearList from "@/components/TopTracks/YearList";
import { fetchSpotifyTops } from "@/service/spotifyService";

// const getTopTracksWeeks = async (accessToken: string) => {
//   try {
//     const res = await fetch(
//       "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range=short_term",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const getTopTracksMonths = async (accessToken: string) => {
//   try {
//     const res = await fetch(
//       "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range=medium_term",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const getTopTracksYears = async (accessToken: string) => {
//   try {
//     const res = await fetch(
//       "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range=long_term",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export default function TopTracksPage() {
  const renderContent = () => {
    if (selectedFilter === "weeks") {
      return <WeekList getData={fetchSpotifyTops} />;
    } else if (selectedFilter === "months") {
      return <MonthList getData={fetchSpotifyTops} />;
    } else if (selectedFilter === "years") {
      return <YearList getData={fetchSpotifyTops} />;
    }
  };
  const [selectedFilter, setSelectedFilter] = useState<
    "weeks" | "months" | "years"
  >("weeks");

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
      <div className="">{renderContent()}</div>
    </>
  );
}
