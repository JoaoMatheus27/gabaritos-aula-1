import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png' /* os dois pontos servem para navegar entre as casas(pastas). Ex: ../ sobe uma casa  ../../ sobe duas casas ../../../ sobe tres casas e assim por diante */

const Header = () => {
  return (
    <div className='header'>
     <img src={logoSpotify} alt="Logo do spotify" />          
      <a className='header__link' href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  )
}

export default Header


/*linha 7: as chaves servem para o source identificar que ele esta interagindo com javascript. */