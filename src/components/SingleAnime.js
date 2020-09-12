import React from 'react';
import { Grid, Paper, Typography, Link } from '@material-ui/core';
import './SingleAnime.scss';

const SingleAnime = (props) => {
  console.log(props.info);
  const title = props.info.title;
  const imageUrl = props.info.image_url;
  const rating = props.info.rating;
  const airing = String(props.info.airing);
  const broadcast = props.info.broadcast;
  const score = props.info.score;
  const url = props.info.url;
  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justify="center"
      alignContent="center"
      alignItems="center"
      className="singleanime__container"
    >
      <Grid item>
        <img src={imageUrl} alt={title} className="singleanime__image" />
      </Grid>
      <Grid item>
        <Paper elevation={3} className="singleanime__description">
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            Airing: {airing}
          </Typography>
          <Typography variant="h5" component="h2">
            Score: {score}
          </Typography>
          <Typography variant="h5" component="h2">
            Broadcast: {broadcast}
          </Typography>
          <Typography variant="h5" component="h2">
            Rating: {rating}
          </Typography>
          <Link component="button" variant="body1" href={url}>
            My Anime List
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SingleAnime;
