import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import EpisodeItem from "./EpisodeItem";
import "./Episode.scss"

function Episode(props) {
  const idStr = useParams().id;
  const seasons = parseInt(idStr.slice(idStr.indexOf('seasons') + 8, idStr.indexOf('&episodes='))) ?? 1;
  const episodes = parseInt(idStr.slice(idStr.indexOf('&episodes=') + 10)) ?? 1;

  const [numOfEpisodes, setNumOfEpisodes] = useState(0);


  useEffect(() => {
    const getEpisodes = async () => {
      const details = await tmdbApi.detail('tv', props.id, { params: {} });

      setNumOfEpisodes(details.seasons.filter((item, index) =>
        item.season_number === seasons
      )[0].episode_count);
    }

    getEpisodes();
  }, [props.id, seasons]);


  return (
    <div className='episode__container'>
      <h3>Episode</h3>
      <div className='episodes'>
        {
          new Array(numOfEpisodes)
            .fill(null)
            .map((item, index) =>
              <EpisodeItem
                isActive={episodes === index + 1}
                key={index}
                id={props.id}
                seasons={seasons}
              >
                {index + 1}
              </EpisodeItem>)
        }
      </div>
    </div>
  )
}

export default Episode;