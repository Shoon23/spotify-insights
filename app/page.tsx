import { TopListening } from "@/components/TopListening/TopListening";
import getAuthUrl from "@/utils/getAuthUrl";
import Link from "next/link";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(useAuthStore.getState().accessToken);
  return (
    <section className="col-span-4">
      {/* <TopListening accessToken={tokens.access_token} /> */}
    </section>
  );
}
