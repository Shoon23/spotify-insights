"use client";

import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import { useGenresStore } from "@/store/genresStore";
import { FilterMenu } from "./FilterMenu";
import { Progress } from "@/components/ui/progress";
import { GenreCard } from "./GenreCard";
import { Week } from "../FilterOptions/Week";
import { Months } from "../FilterOptions/Months";
import { Year } from "../FilterOptions/Year";

export const TopGenre = () => {
  const topGenreWeeks = useGenresStore.getState().topGenresWeeks;
  const topGenresMonths = useGenresStore.getState().topGenresMonths;
  const topGenresYears = useGenresStore.getState().topGenresYears;

  return (
    <TabsContent value="genre">
      <Tabs defaultValue="weeks">
        <FilterMenu />
        <Week
          CardComponent={GenreCard}
          accessToken={""}
          genreList={topGenreWeeks}
        />
        <Months
          genreList={topGenresMonths}
          accessToken={""}
          CardComponent={GenreCard}
        />
        <Year
          genreList={topGenresYears}
          accessToken={""}
          CardComponent={GenreCard}
        />
      </Tabs>
    </TabsContent>
  );
};
