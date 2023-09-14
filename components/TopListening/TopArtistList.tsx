"use client";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { ArtistCard } from "./ArtistCard";

interface TopArtistListProps {
  artist: any;
}

export default function TopArtistList({ artist }: TopArtistListProps) {
  return (
    <div className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {artist?.items?.map((data: any, idx: number) => {
          return <ArtistCard key={idx} rank={idx + 1} data={data} />;
        })}
      </ScrollArea>
    </div>
  );
}
