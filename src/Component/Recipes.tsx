import React, { useEffect, useState } from 'react';
import Recipe from '../Model/Recipe';
import api from '../Service/Api';
import { Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Grid } from '@material-ui/core';
import Title from './Title';
import { Link, useRouteMatch } from 'react-router-dom';
import NewRecipeButton from './NewRecipeButton';
import Paper from './Paper';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const { url } = useRouteMatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const recipes = await api.getRecipes();
      setRecipes(recipes);
      setLoading(false);
    })();
  }, []);

  if (loading) {
   return <CircularProgress />;
  }

  return (
    <Paper>
      <Grid container direction="row" alignContent="space-between">
        <Grid item xs>
          <Title>My recipes</Title>
        </Grid>
        <Grid item>
          <NewRecipeButton />
        </Grid>
      </Grid>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {recipes.map((recipe: Recipe) => (
          <TableRow key={recipe.id}>
            <TableCell><Link to={`${url}/${recipe.id}`}>{recipe.name}</Link></TableCell>
            <TableCell>{recipe.author}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Recipes;