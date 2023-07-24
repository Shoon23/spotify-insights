import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { MusicCard } from "../TopListening/MusicCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NextPage } from "next";

interface WeekProps {
  getWeeks: (accessToken: string) => Promise<any>;
  accessToken: string;
  CardComponent: React.FC<any>;
}
export const Week = async ({
  getWeeks,
  accessToken,
  CardComponent,
}: WeekProps) => {
  const weekData = await getWeeks(accessToken);
  return (
    <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {weekData.items.map((data: any, idx: number) => {
          return <CardComponent key={idx} number={idx + 1} data={data} />;
        })}
      </ScrollArea>
    </TabsContent>
  );
};
