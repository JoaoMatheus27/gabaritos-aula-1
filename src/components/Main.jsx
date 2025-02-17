import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";


const main = () => {
  return(
    <div className='main'>
      <div className='item-list'>
        <div className='item-list__header'>
          <h2>Artistas populares</h2>
          <a className='item-list__link' href="/">
          Mostrar tudo
          </a>
        </div>

        

        <div className="item-list__container">

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Henrique & Juliano</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9" alt="Imagem do Artista X" 
                />
              </div>

                <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
                />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">MC Tuto</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Jorge & Mateus</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">NATTAN</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image"src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Grupo Menos É Mais</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Zé Neto & Cristiano</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image"src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Matheus & Kauan</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image"src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Oruam</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image"src="https://akamai.sscdn.co/uploadfile/letras/fotos/a/3/2/0/a3209e2e1b58e41abeaf32aeeb7b3954.jpg" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Milo J</p>
                <p className="single-item__type">Artista</p>
              </div>
            </div>  

          </a>
          

{/* Musicas */}
        </div>  
      </div>

      <div className='item-list'>
        <div className='item-list__header'>
          <h2>Músicas populares</h2>
          <a className='item-list__link' href="/">
          Mostrar tudo
          </a>
        </div>

        <div className="item-list__container">

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Última Saudade - Ao Vivo</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Xonei</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e02dc16c0b3939b95e09076ec5e" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">A Danada Me Ligando</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e0299ca4be43858f41a3bad9728" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">2025</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e021711f153c860d22a47e70893" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Eu, Você, O Mar e Ela</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e02afcda189d3e44b4abefddecb" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Logo eu</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e0231f12348a3c599711764f399" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Fechando o Circo - Ao Vivo</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e02430015276203dca5020dab68" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Amor Na Praia</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d00001e0234be7f78f89236075cc69c56" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">Com Ou Sem Mim - Ao Vivo</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i.scdn.co/image/ab67616d0000b273055cea306ade28a459e948b4" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title">MILO J || BZRP Music Sessions #57</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>

          <a className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                className="single-item__image" src="https://i1.sndcdn.com/artworks-UOBi3JgqE91O-0-t500x500.jpg" alt="Imagem do Artista X" 
                />
              </div>

              <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} 
              />
            </div>

            <div className="single-item__texts"> 
              <div className="single-item__2lines"> 
                <p className="single-item__title"> Milo J</p>
                <p className="single-item__type">Música</p>
              </div>
            </div>  

          </a>
          

        </div>  
      </div>
    </div>
  ) 
}

export default main