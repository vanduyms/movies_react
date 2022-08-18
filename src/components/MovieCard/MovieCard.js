import React from 'react';
import './MovieCard.scss';

import { Link, useParams } from 'react-router-dom';
import { Button } from '../Button';

import apiConfig from '../../api/apiConfig';

const MovieCard = props => {
  const { catergory } = useParams();
  const item = props.item;

  const link = `/${catergory}/` + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;