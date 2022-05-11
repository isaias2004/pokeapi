import React from 'react';

const Navbar = () => {
  let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  let likePhoto = "https://www.emojiall.com/images/60/skype/2763-fe0f.png"; 

  return (
      <nav>
        <div />
        <div />
        <div>
            <img 
            src={imgUrl}
            alt="pokeapi-logo"
            className="navbar-image"/>
          </div>
          <div>
            <img 
            src={likePhoto}
            alt="button like"
            className="like"  />
          </div>
      </nav>
  )
}

export default Navbar