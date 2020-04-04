import React, { useState } from 'react';
import { Button, Icon, CircularProgress } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Delete';
import Confirm from './Confirm';
import api from '../Service/Api';
import { Redirect } from 'react-router-dom';

type Props = {
  recipeId: string
};

const ArchiveRecipeButton: React.FC<Props> = (props: Props) => {
  const { recipeId } = props;
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [recipeArchived, setRecipeArchived] = useState<boolean>(false);
  const [archiving, setArchiving] = useState<boolean>(false);

  const handleArchive = () => {
    setConfirmOpen(true);
  };

  const handleConfirmResult = async (confirmed: boolean) => {
    setConfirmOpen(false);

    if (!confirmed) {
      return;
    }

    setArchiving(true);
    await api.archiveRecipeById(recipeId);
    setArchiving(false);

    setRecipeArchived(true);
  };

  if (recipeArchived) {
    return <Redirect to="/recipes" />;
  }

  return (
    <React.Fragment>
      <Button color="secondary" onClick={handleArchive}>
        {archiving ? <CircularProgress size={24} /> : <Icon><RemoveIcon /></Icon>}
        Archive
      </Button>
      <Confirm
        text="Do you really want to archive this recipe?"
        open={confirmOpen}
        onClose={handleConfirmResult}
      />
    </React.Fragment>
  );
};

export default ArchiveRecipeButton;
