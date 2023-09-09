"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href={"/"}>
              <Button
                variant={pathname === "/" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Top Listening
              </Button>
            </Link>
            <Link href={"/convert-playlist"}>
              <Button
                variant={
                  pathname === "/convert-playlist" ? "secondary" : "ghost"
                }
                className="w-full justify-start"
              >
                Spotify to Youtube
              </Button>
            </Link>

            {/* <Button
              variant={
                navigationOptions.includes(pathname) ? "ghost" : "secondary"
              }
              className="w-full justify-start"
            >
              Download Youtube Playlist
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
