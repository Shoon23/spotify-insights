"use client";

import { FilterMenu } from "@/components/TopListening/FilterMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function TopListeningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="col-span-4 ">
      {/* tops options */}
      <nav className="w-full flex mb-2">
        <Link className="w-full" href={"/top-artists"}>
          <Button
            className="w-full"
            variant={
              pathname === "/top-artists" || pathname === "/"
                ? "secondary"
                : "outline"
            }
          >
            Artists
          </Button>
        </Link>
        <Link className="w-full" href={"/top-tracks"}>
          <Button
            className="w-full"
            variant={pathname === "/top-tracks" ? "secondary" : "outline"}
          >
            Tracks
          </Button>
        </Link>
        <Link className="w-full" href={"/top-genres"}>
          <Button
            className="w-full"
            variant={pathname === "/top-genres" ? "secondary" : "outline"}
          >
            Genre
          </Button>
        </Link>
      </nav>

      {children}
    </section>
  );
}
