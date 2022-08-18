import React from 'react';
import { Link } from "react-router-dom";
import "./Seasons.scss"

function SeasonsItem({ children, isActive, id }) {
  return (
    <Link
      to={`/tv/${id}&seasons=${children}&episodes=1`}
      className={`btn_square ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  )
}

export default SeasonsItem;