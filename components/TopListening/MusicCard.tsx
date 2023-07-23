import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface MusicCardProps {
  number: number;
  img: string;
  musicName: string;
  artistName?: string;
}
export const MusicCard = ({
  artistName,
  img,
  musicName,
  number,
}: MusicCardProps) => {
  return (
    <div className="mb-2 flex items-center  rounded-lg  bg-background p-2 justify-between px-4">
      <div className="flex  gap-4 items-center">
        <h1 className="font-semibold">{number}</h1>
        <img className="rounded-md" height={150} width={150} src={img} alt="" />
        <h1 className="text-lg font-semibold">{musicName}</h1>
      </div>
      <h1 className="text-lg text-start">{artistName}</h1>
      <Button className="bg-emerald-500 justify-self-end hover:bg-emerald-600 ">
        Play
      </Button>
    </div>
  );
};
