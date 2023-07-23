import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MenuBar = () => {
  return (
    <>
      <TabsList className="flex">
        <TabsTrigger className="w-full" value="artists">
          Artists
        </TabsTrigger>
        <TabsTrigger className="w-full" value="tracks">
          Tracks
        </TabsTrigger>
        <TabsTrigger className="w-full" value="genre">
          Genre
        </TabsTrigger>
      </TabsList>
    </>
  );
};
