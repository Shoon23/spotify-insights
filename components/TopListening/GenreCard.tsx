import React from "react";
import { Progress } from "../ui/progress";
interface GenreCardProps {
  data: {
    genre: string;
    count: number;
  };
  rank: number;
}
export const GenreCard = ({ data, rank }: GenreCardProps) => {
  return (
    <div className="mb-2 flex items-center flex-col rounded-lg  bg-background p-2 justify-between px-4">
      <h1 className="font-semibold text-base">{data.genre.toUpperCase()}</h1>
      <div className="w-full flex gap-4 items-center">
        <h1>{rank}</h1>
        <Progress value={data.count} />
      </div>
    </div>
  );
};
