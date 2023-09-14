"use client";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { MusicCard } from "./MusicCard";
interface TopTrackListProps {
  tracks: any;
}

export default function TopTrackList({ tracks }: TopTrackListProps) {
  return (
    <div className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {tracks?.items?.map((data: any, idx: number) => {
          return <MusicCard key={idx} rank={idx + 1} data={data} />;
        })}
      </ScrollArea>
    </div>
  );
}
