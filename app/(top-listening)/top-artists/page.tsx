import React from "react";
import { FilterMenu } from "@/components/TopListening/FilterMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ArtistCard } from "@/components/TopListening/ArtistCard";
const getTopArtistWeeks = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=short_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getTopArtistMonths = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=medium_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getTopArtistYears = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=long_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function TopArtistsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const topArtistWeeks = await getTopArtistWeeks(
    "BQCPoBEYnE5_C6J98MYJPEgo-K_wkvlytp69Qe0Z3vYP6ZIRh21z3hO367Zf5j3qo7yfqiaWVvxvFVOBoTzdT85Wsr2cB2Qbn8mI56dAwCzhdOc1x1SPgRXLzi71_LgpNogwZkeTribYCziyGie-hVGtPWftq4tsU_1J_aPmBdHG53CCQbJiyGDHTl1ZsN7w-Li9VdLbXN6qD98dyn8W9sU"
  );
  const topArtistMonths = await getTopArtistMonths(
    "BQCPoBEYnE5_C6J98MYJPEgo-K_wkvlytp69Qe0Z3vYP6ZIRh21z3hO367Zf5j3qo7yfqiaWVvxvFVOBoTzdT85Wsr2cB2Qbn8mI56dAwCzhdOc1x1SPgRXLzi71_LgpNogwZkeTribYCziyGie-hVGtPWftq4tsU_1J_aPmBdHG53CCQbJiyGDHTl1ZsN7w-Li9VdLbXN6qD98dyn8W9sU"
  );
  const topArtistYears = await getTopArtistYears(
    "BQCPoBEYnE5_C6J98MYJPEgo-K_wkvlytp69Qe0Z3vYP6ZIRh21z3hO367Zf5j3qo7yfqiaWVvxvFVOBoTzdT85Wsr2cB2Qbn8mI56dAwCzhdOc1x1SPgRXLzi71_LgpNogwZkeTribYCziyGie-hVGtPWftq4tsU_1J_aPmBdHG53CCQbJiyGDHTl1ZsN7w-Li9VdLbXN6qD98dyn8W9sU"
  );

  return (
    <Tabs className="mb-2" defaultValue="weeks">
      <TabsList>
        <TabsTrigger value="weeks">Last 4 weeks</TabsTrigger>

        <TabsTrigger value="months">Last 6 months</TabsTrigger>

        <TabsTrigger value="years">All time</TabsTrigger>
      </TabsList>

      <TabsContent value="weeks" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topArtistWeeks.items.map((data: any, idx: number) => {
            return <ArtistCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="months" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topArtistMonths.items.map((data: any, idx: number) => {
            return <ArtistCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="years" className="p-2 rounded-lg bg-muted">
        <ScrollArea className="h-[70vh]">
          {topArtistYears.items.map((data: any, idx: number) => {
            return <ArtistCard key={idx} rank={idx + 1} data={data} />;
          })}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
