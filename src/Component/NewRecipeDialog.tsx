import React, { useState } from 'react';
import { Dialog, DialogActions, Button, DialogContent, DialogTitle, DialogContentText, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import api from '../Service/Api';
import Recipe from '../Model/Recipe';
import { useAuth0 } from '../Auth0Connect';
import { Redirect } from 'react-router-dom';

type Props = {
  open: boolean,
  onClose: () => void
}

const NewRecipeDialog: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState<string>();
  const [recipeId, setRecipeId] = useState<string>();
  const [saving, setSaving] = useState<boolean>(false);

  const { user } = useAuth0();

  const handleSave = async () => {
    const recipe = new Recipe({
      name,
      author: user.email
    });

    setSaving(true);
    const createdRecipe = await api.createRecipe(recipe);
    setSaving(false);

    setRecipeId(createdRecipe.id);
  };

  if (recipeId) {
    return <Redirect to={`/recipes/${recipeId}`} />
  }

  return (
    <Dialog open={props.open} onClose={() => props.onClose()} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create new recipe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please give a name for your new recipe
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Recipe name"
          type="text"
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={!name || saving} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

NewRecipeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewRecipeDialog;
