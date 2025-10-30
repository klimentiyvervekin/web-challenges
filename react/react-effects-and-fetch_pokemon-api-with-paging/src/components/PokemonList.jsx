import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0); // 0-я страница
  const limit = 20;
  const offset = page * limit;

  // отдельная функция загрузки (можно переиспользовать)
  async function loadPokemon(currentOffset) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${limit}`
      );
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  // грузим при первом рендере и при смене страницы
  useEffect(() => {
    loadPokemon(offset);
  }, [offset]);

  // твоя идея: менять страницу
  function changePage(direction) {
    // direction: -1 = назад, +1 = вперёд
    setPage((p) => Math.max(0, p + direction));
  }

  return (
    <main>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button
          type="button"
          onClick={() => changePage(-1)}
          disabled={page === 0}
        >
          Previous Page
        </button>
        <button type="button" onClick={() => changePage(1)}>
          Next Page
        </button>
      </div>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
