import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import NewRecipeDialog from './NewRecipeDialog';

const NewRecipeButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <Button color="primary" onClick={() => setOpen(true)}>
        New recipe
      </Button>

      <NewRecipeDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default NewRecipeButton;