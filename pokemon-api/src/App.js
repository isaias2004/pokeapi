import React from 'react';
import "./styles.css"
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './api';

const {useState, useEffect} = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(25, 25 * page);
      const promises =  data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch(err){

    }
  }

  useEffect(() =>{
    fetchPokemons();
  }, [page])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        { loading ? <div>Cargando Pokemones...</div> :
        <Pokedex pokemons={pokemons} page={page} setPage={setPage} />
      }
      </div>
    </div>
  );
}

export default App;
