import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from '../../api/apiConfig';

import "./HeroSlide.scss";

function HeroSlide() {
  SwiperCore.use([Autoplay]);
  const [moviesItem, setMoviesItem] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMoviesItem(response.results);
      } catch {
        console.log("Error");
      }
    }

    getMovies();
  }, []);

  return (
    <div className='hero-slide'>
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
      >
        {
          moviesItem.map((item, index) => (
            <SwiperSlide key={index}>
              <HeroSlideItem item={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

const HeroSlideItem = props => {
  const item = props.item;
  const navigate = useNavigate();
  const background = apiConfig.originalImage(item.backdrop_path);

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='hero-slide__item__content'>
        <div className='hero-slide__item__content__info'>
          <h2 className='title'>{item.title}</h2>
          <div className='overview'>
            {item.overview}
          </div>

          <div className='btns'>
            <Button onClick={() => { navigate(`/movie/${item.id}`) }}>Watch Now</Button>
            {/* <ButtonOutline onClick={setModalActive}>Watch Trailer</ButtonOutline> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlide;