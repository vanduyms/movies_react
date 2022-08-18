import React from 'react';

import { useParams } from 'react-router';
import PageHeader from "../../components/PageHeader"

import { catergory as cate } from '../../api/tmdbApi';
import MovieGrid from '../../components/MovieGrid';

const Catalog = () => {

  const { catergory } = useParams();

  return (
    <>
      <PageHeader>
        {catergory === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid catergory={catergory} />
        </div>
      </div>
    </>
  );
}

export default Catalog;