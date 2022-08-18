import React, { useEffect, useState } from 'react';
import SeasonsItem from "./SeasonsItem";
import tmdbApi from '../../api/tmdbApi';
import "./Seasons.scss";
import { useParams } from 'react-router-dom';

function Seasons(props) {
  const [numOfSeasons, setNumOfSeasons] = useState(0);
  const idStr = useParams().id;

  const seasons = parseInt(idStr.slice(idStr.indexOf('seasons') + 8, idStr.indexOf('&episodes='))) ?? 1;


  useEffect(() => {
    const getSeasons = async () => {
      const details = await tmdbApi.detail('tv', props.id, { params: {} });

      setNumOfSeasons(details.number_of_seasons);
    }

    getSeasons();
  }, [props.id]);

  return (
    <div className='seasons__container'>
      <h3>Seasons</h3>
      <div className='seasons'>
        {
          new Array(numOfSeasons)
            .fill(null)
            .map((item, index) =>
              <SeasonsItem
                isActive={seasons === index + 1}
                id={props.id}
                key={index}
              >
                {index + 1}
              </SeasonsItem>
            )
        }
      </div>
    </div>
  )
}

export default Seasons;