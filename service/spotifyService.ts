const fetchSpotifyTops = async (
  accessToken: string,
  type: "artists" | "tracks",
  timeRange: "short_term" | "medium_term" | "long_term"
) => {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/me/top/${type}?limit=50&offset=0&time_range=${timeRange}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(`fetching as ${type} from spotify`);
    return await res.json();
  } catch (error) {
    console.error(
      `Error fetching top artists for time range ${timeRange}:`,
      error
    );
    throw error;
  }
};

export { fetchSpotifyTops };
