import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { catergory } from '../../api/tmdbApi';

import MovieCard from '../MovieCard';

import "./MovieList.scss";

const MovieList = props => {
  let cate = useParams().catergory === 'undefined' ? 'tv' : 'movie';

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case catergory.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(cate, props.id);
      }
      setItems(response.results);
    }

    getList();
  }, []);

  return (
    <div className='movies-list'>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {
          items.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MovieList;