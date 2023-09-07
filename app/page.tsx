import { TopListening } from "@/components/TopListening/TopListening";
import getAuthUrl from "@/utils/getAuthUrl";
import Link from "next/link";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuBar } from "@/components/TopListening/MenuBar";
const getToken = async (code: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/auth?code=" + code, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const tokens = await getToken(searchParams.code as string);

  return (
    <section className="col-span-4">
      <Tabs defaultValue="artists">
        <TabsList className="flex">
          <TabsTrigger className="w-full" value="artists">
            Artists
          </TabsTrigger>
          <TabsTrigger className="w-full" value="tracks">
            Tracks
          </TabsTrigger>
          <TabsTrigger className="w-full" value="genre">
            Genre
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
}
