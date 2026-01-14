const { createContext, useState, useContext } = require("react");

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

eexport default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      item => item.id === novoFavorito.id
    );

    if (!favoritoRepetido) {
      setFavorito([...favorito, novoFavorito]);
    } else {
      const novaLista = favorito.filter(
        item => item.id !== novoFavorito.id
      );
      setFavorito(novaLista);
    }
  }

  return (
    <FavoritosContext.Provider
      value={{ favorito, adicionarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, adicionarFavorito } =
    useContext(FavoritosContext);

  return {
    favorito,
    adicionarFavorito
  };
}