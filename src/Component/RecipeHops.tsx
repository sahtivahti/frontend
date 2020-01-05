import React, { useState } from 'react';
import Recipe from '../Model/Recipe';
import Paper from './Paper';
import { Grid, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import Title from './Title';
import NewHopDialog from './NewHopDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../Service/Api';
import Hop from '../Model/Hop';

type Props = {
  recipe: Recipe,
  onHopAdded: (hop: Hop) => void,
  onHopRemoved: (hop: Hop) => void
};

const RecipeHops: React.FC<Props> = ({ recipe, onHopAdded, onHopRemoved }) => {
  const [newHopDialogOpen, setNewHopDialogOpen] = useState<boolean>(false);

  const handleAddNewHop = async () => {
    setNewHopDialogOpen(true);
  };

  const handleNewHopDialogResult = async (hop?: Hop) => {
    setNewHopDialogOpen(false);
    
    if (!hop || !recipe) {
      return;
    }

    const result = await api.addHopToRecipe(hop, recipe.id);

    onHopAdded(result);
  };

  const handleRemoveHop = (hopIndex: number) => {
    return async () => {
      if (!recipe) {
        return;
      }
  
      const hop = recipe.hops[hopIndex];
  
      await api.removeHopFromRecipe(hop.id, recipe.id);

      onHopRemoved(hop);
    };
  };

  return (
    <Paper>
      <Grid container direction="row">
        <Grid item xs>
          <Title size="small">Hops</Title>
        </Grid>
        <Grid item>
          <Button color="primary" onClick={handleAddNewHop}>
            New hop
          </Button>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity (g)</TableCell>
            <TableCell>Time</TableCell>
            <TableCell padding="checkbox"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipe.hops.map((hop, i) => (
            <TableRow key={i}>
              <TableCell component="th">{hop.name}</TableCell>
              <TableCell>{hop.quantity}</TableCell>
              <TableCell>n/a</TableCell>
              <TableCell>
                <IconButton size="small" onClick={handleRemoveHop(i)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NewHopDialog open={newHopDialogOpen} onClose={handleNewHopDialogResult} />
    </Paper>
  );
};

export default RecipeHops;