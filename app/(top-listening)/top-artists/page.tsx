"use client";
import React, { useEffect, useState } from "react";
import { FilterMenu } from "@/components/TopListening/FilterMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ArtistCard } from "@/components/TopListening/ArtistCard";
import { useGenresStore } from "@/store/genresStore";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
import { Button } from "@/components/ui/button";
import WeekList from "@/components/TopArtists/WeekList";
import MonthList from "@/components/TopArtists/MonthList";
import YearList from "@/components/TopArtists/YearList";
import { useSearchParams } from "next/navigation";
export default function TopArtistsPage() {
  const genresStore = useGenresStore();
  const fetchArtistWeeks = useGenresStore((state) => state.fetchArtistWeeks);
  const fetchArtistMonths = useGenresStore((state) => state.fetchArtistMonths);
  const fetchArtistYears = useGenresStore((state) => state.fetchArtistYears);

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

  const renderContent = () => {
    if (selectedFilter === "weeks") {
      return <WeekList getData={fetchArtistWeeks} />;
    } else if (selectedFilter === "months") {
      return <MonthList getData={fetchArtistMonths} />;
    } else if (selectedFilter === "years") {
      return <YearList getData={fetchArtistYears} />;
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
