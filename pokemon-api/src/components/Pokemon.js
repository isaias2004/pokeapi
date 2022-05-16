import React from 'react'

const Pokemon = (props) => {
    const {pokemon} = props;
    const redHeart= '&#10084;&#65039;';
    const blackHeart= '🖤'
;
  return (
        <div className='pokemon-card'>
            <div className='card'>
                <div>
                    <img src={pokemon.sprites.front_default}
                    alt={pokemon.name} />
                </div>
                <div className='nombre'>
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className='caracteristicas'>
                    <div className='caracteristicas-hijo'>
                        {pokemon.types.map((type,idx) => {
                            return <div key={idx} className="pokemon-type-name">{type.type.name}</div>;
                        })}
                    </div>
                    <button>
                        <div>
                        {blackHeart}
                        </div>
                    </button>
                </div>
            </div>
        </div>  
  );
};

export default Pokemon;