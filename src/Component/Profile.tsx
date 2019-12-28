import React from 'react';
import { useAuth0 } from '../Auth0Connect';
import { Avatar, Popover, makeStyles, Theme, Typography } from '@material-ui/core';
import Title from './Title';

const useStyles = makeStyles((theme: Theme) => ({
  popover: {
    padding: theme.spacing(2)
  }
}));

const Profile: React.FC = () => {
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement|null>(null);
  const classes = useStyles();

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open: boolean = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

  return (
    <React.Fragment>
      <div onClick={handleOpen}>
        <Avatar alt={user.name} src={user.picture} />     
      </div>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.popover}>
          <Title>Profile</Title>

          <Typography>Name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
        </div>
      </Popover>
    </React.Fragment>
  );
};

export default Profile;