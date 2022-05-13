import logo from '../../assets/img/logo.svg';
import {FaSistrix} from 'react-icons/fa';

import React, { useEffect, useState } from "react";
import { tmdbAccess } from '../../services/api';
import { Link } from 'react-router-dom';
import { StyleContainer } from './style';




const Dashboard = () => {

  const [movieGenres, setMovieGenres] = useState([]);

  useEffect( ()=> {

    tmdbAccess.get('/genre/movie/list?&language=pt-BR')
    .then((resp) => setMovieGenres(resp.data))
    .catch((err) => console.log(`erro getGenres => ${err}`))

  }, [])

  

  return (
    <>
      <StyleContainer>

        <aside>
          {/* COLOCAR A SIDEBAR AQUI */}
        </aside>

        <header>

          <div className="cont-header">
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>

            <div className='cont-input-search'>
              <input type="search" placeholder='Pesquisar'/>

              <FaSistrix/>
            </div>
          </div>

        </header>

        <main>
          <nav>

            <ul>
              <li>Todos</li>
              {
                movieGenres.genres && movieGenres.genres.map((genre) => (
                  <li key={genre.id}>
                    {genre.name}
                  </li>
                ))
              }
            </ul>

          </nav>
          
          <ul className='slide'>
            <h3>TOP Filmes</h3>

            {
            /* CONSTRUÇÃO DO MAP AQUI */
            }
          </ul>

          <ul className='slide'>
            <h3>Melhores Filmes</h3>

            {
              /* CONSTRUÇÃO DO MAP AQUI */
            }
          </ul>

          <ul className='slide'>
            <h3>Melhores Séries</h3>

            {
              /* CONSTRUÇÃO DO MAP AQUI */
            }
          </ul>

        </main>

      </StyleContainer>
    </>
  )
};


export default Dashboard;