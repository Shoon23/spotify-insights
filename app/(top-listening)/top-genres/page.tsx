"use client";

import { GenreCard } from "@/components/TopListening/GenreCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGenresStore } from "@/store/genresStore";
import React from "react";

export default function TopGenresPage() {
  // const topGenreWeeks = useGenresStore((state) => state.topGenresWeeks);
  // const topGenresMonths = useGenresStore((state) => state.topGenresMonths);
  // const topGenresYears = useGenresStore((state) => state.topGenresYears);
  // return (
  //   <Tabs className="mb-2" defaultValue="weeks">
  //     <TabsList>
  //       <TabsTrigger value="weeks">Last 4 weeks</TabsTrigger>
  //       <TabsTrigger value="months">Last 6 months</TabsTrigger>
  //       <TabsTrigger value="years">All time</TabsTrigger>
  //     </TabsList>
  //     <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
  //       <ScrollArea className="h-[70vh]">
  //         {Object.entries(topGenreWeeks).map(
  //           ([genre, data]: any, idx: number) => {
  //             return (
  //               <GenreCard
  //                 key={idx}
  //                 rank={data.rank}
  //                 data={{ genre: genre, count: data.count }}
  //               />
  //             );
  //           }
  //         )}
  //       </ScrollArea>
  //     </TabsContent>
  //     <TabsContent value="months" className="p-2 rounded-lg bg-muted">
  //       <ScrollArea className="h-[70vh]">
  //         {Object.entries(topGenresMonths).map(
  //           ([genre, data]: any, idx: number) => {
  //             return (
  //               <GenreCard
  //                 key={idx}
  //                 rank={data.rank}
  //                 data={{ genre: genre, count: data.count }}
  //               />
  //             );
  //           }
  //         )}
  //       </ScrollArea>
  //     </TabsContent>
  //     <TabsContent value="years" className="p-2 rounded-lg bg-muted">
  //       <ScrollArea className="h-[70vh]">
  //         {Object.entries(topGenresYears).map(
  //           ([genre, data]: any, idx: number) => {
  //             return (
  //               <GenreCard
  //                 key={idx}
  //                 rank={data.rank}
  //                 data={{ genre: genre, count: data.count }}
  //               />
  //             );
  //           }
  //         )}
  //       </ScrollArea>
  //     </TabsContent>
  //   </Tabs>
  // );
}
