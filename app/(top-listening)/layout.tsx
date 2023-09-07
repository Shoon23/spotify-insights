"use client";

import { FilterMenu } from "@/components/TopListening/FilterMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopListeningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filter = searchParams?.get("filter") as string;

  return (
    <section className="col-span-4 ">
      {/* tops options */}
      <Tabs className="w-full mb-2" defaultValue="artists">
        <TabsList className="flex">
          <Link className="w-full" href={"/top-artists"}>
            <TabsTrigger className="w-full" value="artists">
              Artists
            </TabsTrigger>
          </Link>
          <Link className="w-full" href={"/top-tracks"}>
            <TabsTrigger className="w-full" value="tracks">
              Tracks
            </TabsTrigger>
          </Link>

          <Link className="w-full" href={"/top-genres"}>
            <TabsTrigger className="w-full" value="genre">
              Genre
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      {children}
    </section>
  );
}
