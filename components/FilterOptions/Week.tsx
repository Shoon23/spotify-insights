import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { MusicCard } from "../TopListening/MusicCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NextPage } from "next";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
import { useArtistsStore } from "@/artistsStore";

interface WeekProps {
  getWeeks?: (accessToken: string) => Promise<any>;
  accessToken: string;
  CardComponent: React.FC<any>;
  isArtist?: boolean;
  genreList?: {};
}
export const Week = async ({
  getWeeks,
  accessToken,
  CardComponent,
  isArtist = false,
  genreList,
}: WeekProps) => {
  let weekData;
  if (getWeeks) {
    weekData = await getWeeks(accessToken);
  } else if (genreList) {
    const a = Object.entries(genreList);

    console.log(a);
  }

  if (isArtist) {
    const sortedGenreCount = getSortedGenreCount(weekData);
    useArtistsStore.setState({ topGenresWeeks: sortedGenreCount });
  }
  return (
    <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {getWeeks
          ? weekData.items.map((data: any, idx: number) => {
              return <CardComponent key={idx} rank={idx + 1} data={data} />;
            })
          : genreList &&
            Object.entries(genreList).map(([genre, data]: any, idx: number) => {
              return (
                <CardComponent
                  key={idx}
                  rank={data.rank}
                  data={{ genre: genre, count: data.count }}
                />
              );
            })}
      </ScrollArea>
    </TabsContent>
  );
};
