import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FilterMenu } from "./FilterMenu";
import { Week } from "../FilterOptions/Week";
import { Months } from "../FilterOptions/Months";
import { Year } from "../FilterOptions/Year";
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
export const TopTracks = () => {
  return (
    <TabsContent value="tracks">
      <Tabs defaultValue="weeks">
        <FilterMenu />
        {/* <Week /> */}
        <Months />
        <Year />
      </Tabs>
    </TabsContent>
  );
};
