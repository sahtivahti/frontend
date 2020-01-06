import React, { useState } from 'react';
import Recipe from '../Model/Recipe';
import Paper from './Paper';
import { Grid, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, CircularProgress } from '@material-ui/core';
import Title from './Title';
import NewFermentableDialog from './NewFermentableDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../Service/Api';
import Fermentable from '../Model/Fermentable';

type Props = {
  recipe: Recipe,
  onFermentableAdded: (fermentable: Fermentable) => void,
  onFermentableRemoved: (fermentable: Fermentable) => void
};

const RecipeFermentables: React.FC<Props> = ({ recipe, onFermentableAdded, onFermentableRemoved }) => {
  const [newFermentableDialogOpen, setNewFermentableDialogOpen] = useState<boolean>(false);
  const [fermentableRemovals, setFermentableRemovals] = useState<number[]>([]);

  const handleAddNewFermentable = async () => {
    setNewFermentableDialogOpen(true);
  };

  const handleNewFermentableDialogResult = async (fermentable?: Fermentable) => {
    setNewFermentableDialogOpen(false);
    
    if (!fermentable || !recipe) {
      return;
    }

    const result = await api.addFermentableToRecipe(fermentable, recipe.id);

    onFermentableAdded(result);
  };

  const handleRemoveFermentable = (fermentableIndex: number) => {
    return async () => {
      if (!recipe) {
        return;
      }
  
      const fermentable = recipe.fermentables[fermentableIndex];
      setFermentableRemovals([...fermentableRemovals, fermentable.id]);
  
      await api.removeFermentableFromRecipe(fermentable.id, recipe.id);

      fermentableRemovals.splice(fermentableRemovals.indexOf(fermentable.id), 1);
      setFermentableRemovals([...fermentableRemovals]);

      onFermentableRemoved(fermentable);
    };
  };

  return (
    <Paper>
      <Grid container direction="row">
        <Grid item xs>
          <Title size="small">Fermentables</Title>
        </Grid>
        <Grid item>
          <Button color="primary" onClick={handleAddNewFermentable}>
            New fermentable
          </Button>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity (kg)</TableCell>
            <TableCell>Color (EBC)</TableCell>
            <TableCell padding="checkbox"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipe.fermentables.map((fermentable, i) => (
            <TableRow key={i}>
              <TableCell component="th">{fermentable.name}</TableCell>
              <TableCell>{fermentable.quantity.toFixed(2)}</TableCell>
              <TableCell>{fermentable.color}</TableCell>
              <TableCell>
                <IconButton size="small" onClick={handleRemoveFermentable(i)}>
                  {fermentableRemovals.indexOf(fermentable.id) >= 0 ?
                    <CircularProgress size={24} /> : 
                    <DeleteIcon />
                  }
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NewFermentableDialog open={newFermentableDialogOpen} onClose={handleNewFermentableDialogResult} />
    </Paper>
  );
};

export default RecipeFermentables;