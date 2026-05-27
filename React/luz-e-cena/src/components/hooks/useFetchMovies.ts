import { useEffect, useState } from "react";
import type { Movie } from "../../types";
import { getMovies } from "../../api";

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErro(null);
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (err) {
      setErro("Erro ao buscar filmes. Tente novamente");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return { movies, isLoading, erro };
};

export default useFetchMovies;
