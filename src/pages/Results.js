import { Box, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { SearchContext } from '../context/search';

const Results = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem('myData')));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
  }, [search]);

  return (
    <Box mt={2}>
      {(dataExists && <AnimeList data={search.animeData} />) || (
        <Typography>No Data Exists</Typography>
      )}
    </Box>
  );
};

export default Results;
