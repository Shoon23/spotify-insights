import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FilterMenu = () => {
  return (
    <>
      <br />
      <TabsList>
        <TabsTrigger value="weeks">Last 4 weeks</TabsTrigger>
        <TabsTrigger value="months">Last 6 months</TabsTrigger>
        <TabsTrigger value="years">All time</TabsTrigger>
      </TabsList>
    </>
  );
};
