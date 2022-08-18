import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonOutline } from '../../components/Button';
import HeroSlide from '../../components/HeroSlide';
import { catergory, movieType, tvType } from '../../api/tmdbApi';
import MovieList from '../../components/MovieList';

function Home() {
  return (
    <>
      <HeroSlide />

      <div div className='container'>
        <div className='section mb-3'>
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending Movies</h2>
              <Link to="/movie">
                <ButtonOutline className="small">View more</ButtonOutline>
              </Link>
            </div>
            <MovieList catergory={catergory.movie} type={movieType.popular} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top Rated Movies</h2>
              <Link to="/movie">
                <ButtonOutline className="small">View more</ButtonOutline>
              </Link>
            </div>
            <MovieList catergory={catergory.movie} type={movieType.top_rated} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending TV</h2>
              <Link to="/tv">
                <ButtonOutline className="small">View more</ButtonOutline>
              </Link>
            </div>
            <MovieList catergory={catergory.tv} type={tvType.popular} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top Rated TV</h2>
              <Link to="/tv">
                <ButtonOutline className="small">View more</ButtonOutline>
              </Link>
            </div>
            <MovieList catergory={catergory.tv} type={tvType.top_rated} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home