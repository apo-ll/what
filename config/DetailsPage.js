/* Fetching the information about the movie/tv */
export async function fetchDetails({id, media_type}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

/* Fetching Trailers of the movie/tv */
export async function fetchTrailers({id, media_type}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en-US`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
