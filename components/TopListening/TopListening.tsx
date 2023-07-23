import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuBar } from "./MenuBar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopArtists } from "./TopArtists";
import { TopTracks } from "./TopTracks";
export const TopListening = () => {
  return (
    <>
      <Tabs defaultValue="artists">
        <MenuBar />
        <TopArtists />
        <TopTracks />
      </Tabs>
    </>
  );
};
