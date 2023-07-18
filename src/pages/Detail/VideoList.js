import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {
  let catergory = useParams().catergory === 'undefined' ? 'tv' : 'movie';
  const idStr = useParams().id;
  const [keyUrl, setKeyUrl] = useState('');
  const seasons = parseInt(idStr.slice(idStr.indexOf('seasons') + 8, idStr.indexOf('&episodes='))) ?? 1;
  const episodes = parseInt(idStr.slice(idStr.indexOf('&episodes=') + 10)) ?? 1;

  useEffect(() => {

    const getVideos = async () => {
      const id = await tmdbApi.detail(catergory, props.id, { params: {} });
      console.log(id);
      console.log(id.imdb_id);

      if (catergory === 'movie') setKeyUrl('movie.php?imdb=' + id.imdb_id);
      else setKeyUrl(`series.php?imdb=${id.imdb_id}&sea=${seasons}&epi=${episodes}`)
    }
    getVideos();
  }, [catergory, props.id, episodes, seasons]);

  return (
    <Video keyUrl={keyUrl} />
  );
}

const Video = props => {
  const { catergory, id } = useParams();
  const [show, setShow] = useState(false);

  let url = "";
  if (catergory === "tv") {
    if (id.includes("&")) {
      let tvSeries = id.split("&");
      url = `/embedtv/${tvSeries[0]}&s=${tvSeries[1].split("=")[1]}&e=${tvSeries[2].split("=")[1]}`;
    }
  } else {
    url = `embed/${id}`;
  }
  if (url) setShow(true);

  const iframeRef = useRef(null);
  // else:
  console.log(url);
  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className="video" hidden={!show}>
      <iframe
        // src={`https://2embed.biz/play/movie.php?imdb=${}`}
        src={"https://www.2embed.cc/" + url}
        ref={iframeRef}
        width="100%"
        height="100%"
        title="video"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}

export default VideoList;