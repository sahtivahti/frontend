import React, { useState } from 'react';
import { Dialog, DialogActions, Button, DialogContent, DialogTitle, DialogContentText, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import Fermentable from '../Model/Fermentable';

type Props = {
  open: boolean,
  onClose: (fermentable?: Fermentable) => void
}

const NewFermentableDialog: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState<string>();
  const [quantity, setQuantity] = useState<number>();
  const [color, setColor] = useState<number>();

  const handleSave = () => {
    const hop = new Fermentable({
      name,
      quantity,
      color
    });

    props.onClose(hop);
  };

  return (
    <Dialog open={props.open} onClose={() => props.onClose()} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add fermentable</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill required fields
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="number"
          margin="dense"
          id="quantity"
          label="Quantity (kg)"
          fullWidth
          onChange={(e) => setQuantity(+e.target.value)}
        />
        <TextField
          type="number"
          margin="dense"
          id="color"
          label="Color (EBC)"
          fullWidth
          onChange={(e) => setColor(+e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={!name || !quantity} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

NewFermentableDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewFermentableDialog;