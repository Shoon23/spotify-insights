"use client";

import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { GenreCard } from "./GenreCard";

interface TopGenreListProps {
  genres: any;
}

export default function TopGenreList({ genres }: TopGenreListProps) {
  return (
    <div className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {Object.entries(genres).map(([genre, data]: any, idx: number) => {
          return (
            <GenreCard
              key={idx}
              rank={data.rank}
              data={{ genre: genre, count: data.count }}
            />
          );
        })}
      </ScrollArea>
    </div>
  );
}
