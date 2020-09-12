import React from 'react';
import AnimeCard from './AnimeCard';
import { GridList } from '@material-ui/core';

const AnimeList = (props) => {
  return (
    <GridList className="animelist__container">
      {props.data.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </GridList>
  );
};

export default AnimeList;
