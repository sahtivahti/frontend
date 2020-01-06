import React from 'react';
import Recipe from '../Model/Recipe';
import { Chip, Grid } from '@material-ui/core';

type Props = {
  recipe: Recipe
};

const RecipeMeta: React.FC<Props> = ({ recipe }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Chip label={<span><b>ABV: </b>{recipe.abv}</span>} />
      </Grid>
      <Grid item>
        <Chip label={<span><b>Color: </b>{recipe.color} ({recipe.colorName})</span>} />
      </Grid>
      <Grid item>
        <Chip label={<span><b>IBU: </b>{recipe.ibu}</span>} />
      </Grid>
    </Grid>
  );
};

export default RecipeMeta;