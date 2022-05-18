import React from 'react';
import "./styles.css"
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './api';
import { FavoriteProvider } from './contexts/favoritesContext';

const {useState, useEffect} = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(['raichu']);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises =  data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))
    } catch(err){

    }
  }

  useEffect(() =>{
    fetchPokemons();
  }, [page])

  const updateFavoritePokemons = (name) =>{
    console.log(name)
  };

  return (
    <FavoriteProvider 
    value={{
       favoritePokemons: favorites,
       updateFavoritePokemons: updateFavoritePokemons
       }}>
      <div>
          <Navbar />
            <div className="App">
            <Searchbar />
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total} />
          </div>
      </div>
    </FavoriteProvider>
  );
}

export default App;
