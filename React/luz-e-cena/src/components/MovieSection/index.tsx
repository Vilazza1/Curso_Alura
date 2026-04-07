import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";
import useFetchMovies from "../hooks/useFetchMovies";
import useFilterMovies from "../hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, erro, isLoading } = useFetchMovies();
  const { searchTerm, handleSearch, setSearchTerm, filteredMovies } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText
            value={searchTerm}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) => setSearchTerm(event.target.value)}
            placeholder="Buscar Fimes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em Cartas</h1>
        {isLoading && <p>Carregando Filmes</p>}
        {erro && <p className={styles.error}>{erro}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
