import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  const a = await getToken(searchParams?.code as string);

  console.log(a);
  return (
    <main>
      <div className="">
        <h1>Login with Spotify</h1>
        <Button variant="outline" className="bg-emerald-600 text-white">
          spotifyyy
        </Button>
      </div>
    </main>
  );
}
