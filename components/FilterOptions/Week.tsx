import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { MusicCard } from "../TopListening/MusicCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface WeekProps {
  getWeeks: (accessToken: string) => Promise<any>;
  accessToken: string;
}
export const Week = async ({ getWeeks, accessToken }: WeekProps) => {
  const weekData = await getWeeks(accessToken);
  return (
    <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {weekData.items.map((music: any, idx: number) => {
          return (
            <MusicCard
              number={idx + 1}
              img={music.images[0].url}
              musicName={music.name}
            />
          );
        })}
      </ScrollArea>
    </TabsContent>
  );
};
