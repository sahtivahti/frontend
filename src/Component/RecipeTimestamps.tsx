import React from 'react';
import Recipe from '../Model/Recipe';
import moment from 'moment';
import { Typography } from '@material-ui/core';

type Props = {
  recipe: Recipe
};

const RecipeTimestamps: React.FC<Props> = ({ recipe }) => {
  const createdAt = 'Created ' + moment(recipe.createdAt || undefined).fromNow();
  
  let updatedAt = 'never updated';

  if (recipe.createdAt?.toString() !== recipe.updatedAt?.toString()) {
    updatedAt = 'updated ' + moment(recipe.updatedAt || undefined).fromNow();
  } 

  return <Typography variant="body2">{createdAt}, {updatedAt}</Typography>;
};

export default RecipeTimestamps;