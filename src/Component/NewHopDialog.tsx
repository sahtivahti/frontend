import React, { useState } from 'react';
import { Dialog, DialogActions, Button, DialogContent, DialogTitle, DialogContentText, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import Hop from '../Model/Hop';

type Props = {
  open: boolean,
  onClose: (hop?: Hop) => void
}

const NewHopDialog: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState<string>();
  const [quantity, setQuantity] = useState<number>();

  const handleSave = () => {
    const hop = new Hop({
      name,
      quantity
    });

    props.onClose(hop);
  };

  return (
    <Dialog open={props.open} onClose={() => props.onClose()} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add hop</DialogTitle>
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
          label="Quantity (g)"
          fullWidth
          onChange={(e) => setQuantity(+e.target.value)}
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

NewHopDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewHopDialog;