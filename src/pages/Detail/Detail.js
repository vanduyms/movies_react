import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './Detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import MovieList from "../../components/MovieList";
import Seasons from '../../components/Seasons/Seasons';
import Episode from '../../components/Episode/Episode';

const Detail = () => {

  let { catergory, id } = useParams();
  if (catergory === 'undefined') catergory = 'tv';


  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(catergory, id, { params: {} });

      setItem(response);
      window.scrollTo(0, 0);
    }
    getDetail();
  }, [catergory, id]);

  return (
    <>
      {
        item && (
          <>
            <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></div>
            <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                <div className="movie-content__poster__img" style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
              </div>
              <div className="movie-content__info">
                <h1 className="title">
                  {item.title || item.name}
                </h1>
                <div className="genres">
                  {
                    item.genres && item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genres__item">{genre.name}</span>
                    ))
                  }
                </div>
                <p className="overview">{item.overview}</p>
                <div className="cast">
                  <div className="section__header">
                    <h2>Casts</h2>
                  </div>
                  <CastList id={item.id} />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="section mb-3">
                <VideoList id={item.id} />
              </div>
              {
                catergory === 'tv' ? (
                  <>
                    <div className='section mb-3'>
                      <Seasons id={item.id} />
                    </div>
                    <div className='section mb-3'>
                      <Episode id={item.id} />
                    </div>
                  </>
                ) :
                  (<></>)
              }
              <div className="section mb-3">
                <div className="section__header mb-2">
                  <h2>Similar</h2>
                </div>
                <MovieList catergory={catergory} type="similar" id={item.id} />
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Detail;