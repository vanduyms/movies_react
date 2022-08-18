import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.scss";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

function Footer() {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content--logo'>
          <div className='logo'>
            <img src={logo} alt="Logo" />
            <Link to="/">tMovies</Link>
          </div>
        </div>

        <div className="footer__content--menus">
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="menu">
            <Link to="/">Top IMDB</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">The gift card</Link>
            <Link to="/">Sound and subtitles</Link>
          </div>
          <div className="menu">
            <Link to="/">#tMovies</Link>
            <Link to="/">#infoFilms</Link>
            <Link to="/">#getGift</Link>
            <Link to="/">#recentFilms</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;