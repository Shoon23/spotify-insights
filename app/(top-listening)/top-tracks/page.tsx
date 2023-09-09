import React from "react";
import { GenreCard } from "@/components/TopListening/GenreCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MusicCard } from "@/components/TopListening/MusicCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import spotifyIcon from "@/public/icons-spotify.svg";
const getTopTracksWeeks = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range=short_term",
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
const getTopTracksMonths = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range=medium_term",
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
const getTopTracksYears = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range=long_term",
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
export default async function TopTracksPage() {
  const topTracksWeeks = await getTopTracksWeeks(
    "BQABtqB1ggsCxj6WChRIcRWonxXimV4qwnNzLjsnytDUxee_ZZX6H8c1K90Dzb8EXnE-aSNui0Z9SxIivjVXEQDhphWrVEKCeZ2jHzYq_wZJNRyA9cArnz9ubSxERLIC6NXi9qbJSFhFOhYP12G2YoozZlrFEndLiQ3q8Nlx5cRO9CBKFlPYeStSj2P2BiV0EwARUIKrB7mtZ2QrizYE9Po"
  );
  const topTracksMonths = await getTopTracksMonths(
    "BQABtqB1ggsCxj6WChRIcRWonxXimV4qwnNzLjsnytDUxee_ZZX6H8c1K90Dzb8EXnE-aSNui0Z9SxIivjVXEQDhphWrVEKCeZ2jHzYq_wZJNRyA9cArnz9ubSxERLIC6NXi9qbJSFhFOhYP12G2YoozZlrFEndLiQ3q8Nlx5cRO9CBKFlPYeStSj2P2BiV0EwARUIKrB7mtZ2QrizYE9Po"
  );
  const topTracksYears = await getTopTracksYears(
    "BQABtqB1ggsCxj6WChRIcRWonxXimV4qwnNzLjsnytDUxee_ZZX6H8c1K90Dzb8EXnE-aSNui0Z9SxIivjVXEQDhphWrVEKCeZ2jHzYq_wZJNRyA9cArnz9ubSxERLIC6NXi9qbJSFhFOhYP12G2YoozZlrFEndLiQ3q8Nlx5cRO9CBKFlPYeStSj2P2BiV0EwARUIKrB7mtZ2QrizYE9Po"
  );

  return (
    <Tabs className="mb-2" defaultValue="weeks">
      <div className="flex justify-between">
        <TabsList>
          <TabsTrigger value="weeks">Last 4 weeks</TabsTrigger>
          <TabsTrigger value="months">Last 6 months</TabsTrigger>
          <TabsTrigger value="years">All time</TabsTrigger>
        </TabsList>

        <Button>
          <Image
            width={25}
            height={25}
            className="mr-1"
            src={spotifyIcon}
            alt="Spotify Logo"
          />{" "}
          Create Playlist
        </Button>
      </div>
      <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topTracksWeeks.items.map((data: any, idx: number) => {
            return <MusicCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="months" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topTracksMonths.items.map((data: any, idx: number) => {
            return <MusicCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="years" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topTracksYears.items.map((data: any, idx: number) => {
            return <MusicCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
