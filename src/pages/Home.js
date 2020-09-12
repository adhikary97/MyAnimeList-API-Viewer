import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../context/search';
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Home.scss';

const Home = () => {
  const history = useHistory();
  const search = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      search.setData(data.results);
      localStorage.setItem('myData', JSON.stringify(data.results));
      history.push('/results');
    });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid item>
        <Grid item>
          <img
            alt="luffy"
            src={process.env.PUBLIC_URL + '/luffy.png'}
            height={420}
            width={550}
          />
        </Grid>
        <Grid item>
          <form className="home__form">
            <FormControl type="submit" className="home__formControl">
              <Input
                placeholder="Search for you favorite anime..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="home__input"
              />
              <IconButton
                className="home__iconButton"
                variant="contained"
                color="primary"
                type="submit"
                disabled={!input}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
