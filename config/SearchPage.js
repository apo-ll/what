export default async function SearchPage({ searchTerm }) {
    const token = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'force-cache'
      }
    );
  
    const data = await response.json();
      
    return data;
  }
