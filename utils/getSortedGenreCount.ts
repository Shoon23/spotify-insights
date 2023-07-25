type GenreCount = {
  [key: string]: {
    count: number;
    rank: number;
  };
};

export default function getSortedGenreCount(artistDataItems: any): GenreCount {
  const topGenres: GenreCount = {};

  // Count the genres
  artistDataItems.items.forEach((item: any) => {
    item.genres.forEach((genre: string) => {
      if (topGenres.hasOwnProperty(genre)) {
        topGenres[genre].count++;
      } else {
        topGenres[genre] = { count: 1, rank: 0 };
      }
    });
  });

  // Convert the hashmap to an array of key-value pairs
  const genreCountArray = Object.entries(topGenres);

  // Sort the array based on values in descending order
  genreCountArray.sort((a, b) => b[1].count - a[1].count);

  // Convert the sorted array back to a hashmap with ranking
  let currentRank = 1;
  let currentCount = genreCountArray[0][1].count;

  const sortedGenreCount: GenreCount = {};
  genreCountArray.forEach(([genre, { count }], index) => {
    if (count < currentCount) {
      currentRank = index + 1;
      currentCount = count;
    }
    sortedGenreCount[genre] = { count, rank: currentRank };
  });

  return sortedGenreCount;
}
