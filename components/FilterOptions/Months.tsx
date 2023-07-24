import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "../ui/scroll-area";

interface MonthsProps {
  getMonths: (accessToken: string) => Promise<any>;
  accessToken: string;
  CardComponent: React.FC<any>;
}
export const Months = async ({
  getMonths,
  accessToken,
  CardComponent,
}: MonthsProps) => {
  const monthsData = await getMonths(accessToken);

  return (
    <TabsContent value="months">
      <ScrollArea className="h-[70vh]">
        {monthsData.items.map((data: any, idx: number) => {
          return <CardComponent key={idx} number={idx + 1} data={data} />;
        })}
      </ScrollArea>
    </TabsContent>
  );
};
