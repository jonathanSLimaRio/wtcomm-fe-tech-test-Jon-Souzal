import React, { useEffect, useState } from 'react';
import { useQuery, MovieCard, Movie } from '@mono-nx-test-with-nextjs/ui';

export const Results: React.FC = () => {
  const { query } = useQuery();
  const [ movies, setMovies ] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchDataApi = async () => {
      const response = await fetch(`/api/movies/?${query}`);
      const data = await response.json();
      setMovies(() => data);
    };
    fetchDataApi();
  }, [query]);

  return (
    <>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.Title} />
      ))}
    </>
  );
};

export default Results;
