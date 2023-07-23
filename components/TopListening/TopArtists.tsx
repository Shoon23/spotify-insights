import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FilterMenu } from "./FilterMenu";
import { Week } from "../FilterOptions/Week";
import { Months } from "../FilterOptions/Months";
import { Year } from "../FilterOptions/Year";
export const TopArtists = () => {
  return (
    <TabsContent value="artists">
      <Tabs defaultValue="weeks">
        <FilterMenu />
        <Week />
        <Months />
        <Year />
      </Tabs>
    </TabsContent>
  );
};
