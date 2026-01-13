const { createContext, useState } = require("react");

export const FavaritosContext = createContext();
FavaritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavaritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavaritosContext.Provider>
  );
}
