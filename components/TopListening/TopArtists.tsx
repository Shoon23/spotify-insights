import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FilterMenu } from "./FilterMenu";
import { Week } from "../FilterOptions/Week";
import { Months } from "../FilterOptions/Months";
import { Year } from "../FilterOptions/Year";

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
interface TopArtistsProps {
  accessToken: string;
}
export const TopArtists = async ({ accessToken }: TopArtistsProps) => {
  return (
    <TabsContent value="artists">
      <Tabs defaultValue="weeks">
        <FilterMenu />
        <Week getWeeks={getTopArtistWeeks} accessToken={accessToken} />
        <Months />
        <Year />
      </Tabs>
    </TabsContent>
  );
};
