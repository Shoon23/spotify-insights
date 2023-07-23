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

export const MusicCard = () => {
  return (
    <div className="mb-2 flex items-center  rounded-lg  bg-background p-2 justify-between px-4">
      <div className="flex  gap-4 items-center">
        <h1 className="font-semibold">1</h1>
        <img
          className="rounded-md"
          height={150}
          width={150}
          src="https://media.istockphoto.com/id/851987172/photo/woman-face-with-half-sunburn-and-half-sunscreen-beautiful-girl-of-half-latina-and-half-asian.jpg?s=1024x1024&w=is&k=20&c=nAWUraFIbjgCIJN23j0LDkpxDlRdevWDOPke0YlgWHU="
          alt=""
        />
        <h1 className="text-lg font-semibold">Mine</h1>
      </div>
      <h1 className="text-lg ">Taylor Swift</h1>
      <Button className="bg-emerald-500 justify-self-end hover:bg-emerald-600 ">
        Play
      </Button>
    </div>
  );
};
