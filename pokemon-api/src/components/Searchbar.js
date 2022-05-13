import React from 'react'
import { searchPokemon } from '../api';  
const {useState} = React;

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    };

   return (
    <div className="searchbar-contain">
        <div className="contain-buscador">
            <input placeholder="Buscar pokemon..." onChange={onChange}/>
    </div>
        <div className="contain-button">
            <button onClick={onClick}>Buscar</button>
        </div>
    </div>
  );
};

export default Searchbar;