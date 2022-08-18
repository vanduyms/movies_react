import React from 'react';
import { Link } from "react-router-dom";
import "./Episode.scss";

function EpisodeItem({ children, isActive, id, seasons }) {

  return (
    <Link
      to={`/tv/${id}&seasons=${seasons}&episodes=${children}`}
      className={`btn_square ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  )
}

export default EpisodeItem;