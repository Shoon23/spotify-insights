import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "../ui/scroll-area";

interface YearProps {
  getYear: (accessToken: string) => Promise<any>;
  accessToken: string;
  CardComponent: React.FC<any>;
}
export const Year = async ({
  getYear,
  accessToken,
  CardComponent,
}: YearProps) => {
  const yearData = await getYear(accessToken);

  return (
    <TabsContent value="years">
      {" "}
      <ScrollArea className="h-[70vh]">
        {yearData.items.map((data: any, idx: number) => {
          return <CardComponent key={idx} number={idx + 1} data={data} />;
        })}
      </ScrollArea>
    </TabsContent>
  );
};
