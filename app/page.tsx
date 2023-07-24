import { Sidebar } from "@/components/Sidebar";
import { TopListening } from "@/components/TopListening/TopListening";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const getToken = async (code: string) => {
  let body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI as string,
    client_id: process.env.SPOTIFY_CLIENT_ID as string,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
  });

  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const tokens = await getToken(searchParams.code as string);

  return (
    <main>
      <div className="grid grid-cols-5 px-2">
        <Sidebar className="col-span-1" />
        <section className="col-span-4">
          <TopListening accessToken={tokens.access_token} />
        </section>
      </div>
    </main>
  );
}
