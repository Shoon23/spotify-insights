"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { ArtistCard } from "../TopListening/ArtistCard";
import { useGenresStore } from "@/store/genresStore";
import isObjectEmpty from "@/utils/isObjectEmpty";
interface WeekListProps {
  getData: (accessToken: string) => Promise<any>;
}

export default function WeekList({ getData }: WeekListProps) {
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const topGenresWeeks = useGenresStore((state) => state.topGenresWeeks);

  useEffect(() => {
    if (isObjectEmpty(topGenresWeeks)) {
      getData(
        "BQDrjgQPWaRb_xL5SYFaZUE-4CD7RjgZBDMksMf2x4W0mE7uzY6yTnmYrSK_80DC1pEY6F2INg0YDe6gvaHmtW7IEEA72iSiOKUDQf-B4sXS1GYoEXCq0ZPGKIxp23kecxVOoqnWbacJ0O6bsYzhlNmODJZS1ahNJObzvjQZxX8LYQoDV8qp8zYBffRRZYExw7RGi3BUlQJC6y0uoUp5qhY"
      ).then((data) => {
        setData(data);
      });
    } else {
    }
  }, []);
  return (
    <div className="p-2 rounded-lg bg-muted">
      <ScrollArea className="h-[70vh]">
        {data?.items?.map((data: any, idx: number) => {
          return <ArtistCard key={idx} rank={idx + 1} data={data} />;
        })}
      </ScrollArea>
    </div>
  );
}
