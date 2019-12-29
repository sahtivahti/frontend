import React from 'react';
import { makeStyles, Theme, createStyles, Paper as MaterialPaper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2)
    }
  }),
);

const Paper: React.FC = (props) => {
  const classes = useStyles();

  return (
    <MaterialPaper className={classes.paper}>
      {props.children}
    </MaterialPaper>
  );
};

export default Paper;