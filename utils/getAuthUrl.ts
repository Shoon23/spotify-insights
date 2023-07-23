import generateRandomString from "./generateRandomString";

export default function getAuthUrl() {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email user-top-read";
  const params = new URLSearchParams();

  params.append("response_type", "code");
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID as string);
  params.append("scope", scope);
  params.append("redirect_uri", process.env.SPOTIFY_REDIRECT_URI as string);
  params.append("state", state);

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  return spotifyAuthUrl;
}
