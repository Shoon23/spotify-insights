import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface MusicCardProps {
  data: any;
  number: number;
}
export const MusicCard = ({ data, number }: MusicCardProps) => {
  return (
    <div className="mb-2 grid grid-cols-6 items-center  rounded-lg  bg-background p-2 justify-between px-4">
      <div className="flex col-span-3 gap-4 items-center">
        <h1 className="font-semibold">{number}</h1>
        <Image
          className="rounded-md"
          height={150}
          width={150}
          src={data.album.images[0].url}
          alt=""
        />
        <h1 className="text-lg font-semibold ">{data.name}</h1>
      </div>
      <h1 className="text-lg text-start col-span-2">
        {data.artists.map((artist: any) => {
          return artist.name + " ";
        })}
      </h1>

      <Button className="bg-emerald-500  hover:bg-emerald-600 " asChild>
        <Link href={data.external_urls.spotify} target="_blank">
          Play
        </Link>
      </Button>
    </div>
  );
};
