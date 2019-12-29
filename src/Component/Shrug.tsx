import React from 'react';
import { Grid, Typography } from '@material-ui/core';

type Props = {
  text: string
};

const Shrug: React.FC<Props> = (props: Props) => {
  return (
    <Grid container direction="column" alignContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h1" color="textSecondary">¯\_(ツ)_/¯</Typography>
      </Grid>
      <br/>
      <Grid item>
        <Typography variant="h5" color="textSecondary">Hoops! {props.text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Shrug;