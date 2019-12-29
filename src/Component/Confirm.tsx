import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

type Props = {
  open: boolean,
  onClose: (confirmed: boolean) => void,
  text: string
}

const Confirm: React.FC<Props> = (props: Props) => {
  const { open, onClose, text } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => onClose(true)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Confirm;