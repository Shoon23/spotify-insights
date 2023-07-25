import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import { useArtistsStore } from "@/artistsStore";
import getSortedGenreCount from "@/utils/getSortedGenreCount";
interface YearProps {
  getYear?: (accessToken: string) => Promise<any>;
  accessToken: string;
  CardComponent: React.FC<any>;
  isArtist?: boolean;
  genreList?: {};
}
export const Year = async ({
  getYear,
  accessToken,
  CardComponent,
  isArtist = false,
  genreList,
}: YearProps) => {
  let yearData;
  if (getYear) {
    yearData = await getYear(accessToken);
  }
  if (isArtist) {
    const sortedGenreCount = getSortedGenreCount(yearData);

    useArtistsStore.setState({ topGenresYears: sortedGenreCount });
  }
  return (
    <TabsContent value="years">
      <ScrollArea className="h-[70vh]">
        {getYear
          ? yearData.items.map((data: any, idx: number) => {
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
