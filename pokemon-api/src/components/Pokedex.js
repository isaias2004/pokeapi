import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons, page, setPage, total } = props;

    const lastPage = () => {
        const nextPage = Math.max(page, 0);
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page, total);
        setPage(nextPage)
    }

  return (
    <div>
        <div className='header'>
            <h1>Pokedex</h1>
            <Pagination 
            page={page + 1}
            totalPages={111}
            onLeftClick={lastPage}
            onRightClick={nextPage} />
        </div>
            <div className='pokedex-grid'>
                {pokemons.map((pokemon, idx) => {
                    return(
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
    </div>
  );
};

export default Pokedex;