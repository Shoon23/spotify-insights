import Link from "next/link";
import { Button } from "@/components/ui/button";
import generateRandomString from "@/utils/generateRandomString";

const getAuthUrl = () => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";
  const params = new URLSearchParams();

  params.append("response_type", "code");
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID as string);
  params.append("scope", scope);
  params.append("redirect_uri", process.env.SPOTIFY_REDIRECT_URI as string);
  params.append("state", state);

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  return spotifyAuthUrl;
};
// get auth tokens for spotify
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
export default function Home() {
  return (
    <main>
      <div className="">
        <h1>Login with Spotify</h1>
        <Button variant="outline" className="bg-emerald-600 text-white" asChild>
          <Link href={getAuthUrl()}>Login</Link>
        </Button>
      </div>
    </main>
  );
}
