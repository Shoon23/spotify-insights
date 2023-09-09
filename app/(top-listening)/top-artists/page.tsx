import React from "react";
import { FilterMenu } from "@/components/TopListening/FilterMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ArtistCard } from "@/components/TopListening/ArtistCard";
import { useGenresStore } from "@/store/genresStore";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
const getTopArtistWeeks = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=short_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getTopArtistMonths = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=medium_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getTopArtistYears = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=long_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function TopArtistsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const topArtistWeeks = await getTopArtistWeeks(
    "BQABtqB1ggsCxj6WChRIcRWonxXimV4qwnNzLjsnytDUxee_ZZX6H8c1K90Dzb8EXnE-aSNui0Z9SxIivjVXEQDhphWrVEKCeZ2jHzYq_wZJNRyA9cArnz9ubSxERLIC6NXi9qbJSFhFOhYP12G2YoozZlrFEndLiQ3q8Nlx5cRO9CBKFlPYeStSj2P2BiV0EwARUIKrB7mtZ2QrizYE9Po"
  );
  const topArtistMonths = await getTopArtistMonths(
    "BQABtqB1ggsCxj6WChRIcRWonxXimV4qwnNzLjsnytDUxee_ZZX6H8c1K90Dzb8EXnE-aSNui0Z9SxIivjVXEQDhphWrVEKCeZ2jHzYq_wZJNRyA9cArnz9ubSxERLIC6NXi9qbJSFhFOhYP12G2YoozZlrFEndLiQ3q8Nlx5cRO9CBKFlPYeStSj2P2BiV0EwARUIKrB7mtZ2QrizYE9Po"
  );
  const topArtistYears = await getTopArtistYears(
    "BQABtqB1ggsCxj6WChRIcRWonxXimV4qwnNzLjsnytDUxee_ZZX6H8c1K90Dzb8EXnE-aSNui0Z9SxIivjVXEQDhphWrVEKCeZ2jHzYq_wZJNRyA9cArnz9ubSxERLIC6NXi9qbJSFhFOhYP12G2YoozZlrFEndLiQ3q8Nlx5cRO9CBKFlPYeStSj2P2BiV0EwARUIKrB7mtZ2QrizYE9Po"
  );
  const sortedWeeksGenre = getSortedGenreCount(topArtistWeeks);
  const sortedMonthsGenre = getSortedGenreCount(topArtistMonths);
  const sortedYearsGenre = getSortedGenreCount(topArtistYears);

  useGenresStore.setState({
    topGenresWeeks: sortedWeeksGenre,
    topGenresMonths: sortedMonthsGenre,
    topGenresYears: sortedYearsGenre,
  });

  return (
    <Tabs className="mb-2" defaultValue="weeks">
      <TabsList>
        <TabsTrigger value="weeks">Last 4 weeks</TabsTrigger>

        <TabsTrigger value="months">Last 6 months</TabsTrigger>

        <TabsTrigger value="years">All time</TabsTrigger>
      </TabsList>

      <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topArtistWeeks.items.map((data: any, idx: number) => {
            return <ArtistCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="months" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topArtistMonths.items.map((data: any, idx: number) => {
            return <ArtistCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="years" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topArtistYears.items.map((data: any, idx: number) => {
            return <ArtistCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
