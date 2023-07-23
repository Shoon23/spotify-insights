import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { MusicCard } from "../TopListening/MusicCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Week = () => {
  return (
    <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {Array(20)
          .fill(0)
          .map((n) => {
            return <MusicCard />;
          })}
      </ScrollArea>
    </TabsContent>
  );
};
