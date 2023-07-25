import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FilterMenu } from "./FilterMenu";
import { Week } from "../FilterOptions/Week";
import { Months } from "../FilterOptions/Months";
import { Year } from "../FilterOptions/Year";
import { MusicCard } from "./MusicCard";
import { Button } from "../ui/button";
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

interface TopTracksProps {
  accessToken: string;
}
export const TopTracks = ({ accessToken }: TopTracksProps) => {
  return (
    <TabsContent value="tracks">
      <Tabs defaultValue="weeks">
        <div className="flex justify-between">
          <FilterMenu />

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
        <Week
          getWeeks={getTopTracksWeeks}
          accessToken={accessToken}
          CardComponent={MusicCard}
        />
        <Months
          getMonths={getTopTracksMonths}
          accessToken={accessToken}
          CardComponent={MusicCard}
        />
        <Year
          getYear={getTopTracksYears}
          accessToken={accessToken}
          CardComponent={MusicCard}
        />
      </Tabs>
    </TabsContent>
  );
};
