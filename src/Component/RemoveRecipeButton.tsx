import React, { useState } from 'react';
import { Button, Icon } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Delete';
import Confirm from './Confirm';
import api from '../Service/Api';
import { Redirect } from 'react-router-dom';

type Props = {
  recipeId: number
};

const RemoveRecipeButton: React.FC<Props> = (props: Props) => {
  const { recipeId } = props;
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [recipeRemoved, setRecipeRemoved] = useState<boolean>(false);

  const handleRemove = () => {
    setConfirmOpen(true);
  };

  const handleConfirmResult = async (confirmed: boolean) => {
    setConfirmOpen(false);

    if (!confirmed) {
      return;
    }

    await api.removeRecipeById(recipeId);
    setRecipeRemoved(true);
  };

  if (recipeRemoved) {
    return <Redirect to="/recipes" />;
  }

  return (
    <React.Fragment>
      <Button color="secondary" onClick={handleRemove}>
        <Icon><RemoveIcon /></Icon>
        Remove this recipe
      </Button>
      <Confirm 
        text="Do you really want to remove this recipe?"
        open={confirmOpen}
        onClose={handleConfirmResult}
      />
    </React.Fragment>
  );
};

export default RemoveRecipeButton;