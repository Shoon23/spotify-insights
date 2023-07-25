import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
import { useArtistsStore } from "@/artistsStore";

interface MonthsProps {
  getMonths?: (accessToken: string) => Promise<any>;
  accessToken: string;
  CardComponent: React.FC<any>;
  isArtist?: boolean;
  genreList?: {};
}
export const Months = async ({
  getMonths,
  accessToken,
  CardComponent,
  isArtist = false,
  genreList,
}: MonthsProps) => {
  let monthsData;

  if (getMonths) {
    monthsData = await getMonths(accessToken);
  }

  if (isArtist) {
    const sortedGenreCount = getSortedGenreCount(monthsData);
    useArtistsStore.setState({ topGenresMonths: sortedGenreCount });
  }

  return (
    <TabsContent value="months">
      <ScrollArea className="h-[70vh]">
        {getMonths
          ? monthsData.items.map((data: any, idx: number) => {
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
