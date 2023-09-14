import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { iTopArtist } from "@/store/artistsStore";

interface ArtistCardProps {
  data: iTopArtist;
  rank: number;
}
export const ArtistCard = ({ data, rank }: ArtistCardProps) => {
  return (
    <div className="mb-2 flex items-center  rounded-lg  bg-background p-2 justify-between px-4">
      <div className="flex  gap-4 items-center">
        <h1 className="font-semibold">{rank}</h1>
        <Image
          className="rounded-md"
          height={150}
          width={150}
          src={data.images[0].url}
          alt=""
        />
        <h1 className="text-lg font-semibold">{data.name}</h1>
      </div>

      <Button className="bg-emerald-500  hover:bg-emerald-600 " asChild>
        <Link href={data.external_urls.spotify} target="_blank">
          Visit
        </Link>
      </Button>
    </div>
  );
};
