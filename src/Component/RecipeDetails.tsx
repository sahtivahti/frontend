import React, { useState, useEffect } from 'react';
import Title from './Title';
import { useParams } from 'react-router-dom';
import { CircularProgress, TextField, Grid, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import Recipe from '../Model/Recipe';
import api from '../Service/Api';
import moment from 'moment';
import Paper from './Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft: 0
      },
    }
  }),
);

const RecipeDetails: React.FC = () => {
  const { id } = useParams();
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(true);
  const [recipe, setRecipe] = useState<Recipe|null>();

  const handleChange = (key: string) => (e: any) => {
    setRecipe({ ...recipe, [key]: e.target.value } as Recipe);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      
      if (!id) {
        return;
      }

      const recipe = await api.getRecipeDetailsById(parseInt(id));

      setRecipe(recipe);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!recipe) {
    return <Typography>Can't load recipe :/</Typography>
  }

  const createdAt = 'Created ' + moment(recipe.createdAt || undefined).fromNow();
  
  let updatedAt = 'never updated';

  if (recipe.createdAt?.toString() !== recipe.updatedAt?.toString()) {
    updatedAt = 'updated ' + moment(recipe.updatedAt || undefined).fromNow();
  } 

  return (
    <React.Fragment>
      <Title>Editing recipe {id}</Title>

      <Grid container>
        <Grid item xs={12} md={4}>
          <Paper>
            <Title size="small">Basics</Title>

            <form className={classes.root}>
              <TextField
                id="name"
                onChange={handleChange('name')}
                value={recipe.name}
                label="Name"
                fullWidth
              />

              <TextField
                id="author"
                value={recipe.author}
                label="Author"
                disabled
                fullWidth
              />

              <Typography variant="body2">
                {createdAt}, {updatedAt}
              </Typography>
            </form>
          </Paper>
        </Grid>

        <Grid item xs></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RecipeDetails;