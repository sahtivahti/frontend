import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RecipesIcon from '@material-ui/icons/MenuBook';
import BrewIcon from '@material-ui/icons/Whatshot';
import LogoutIcon from '@material-ui/icons/HighlightOff';

import { Link } from 'react-router-dom';
import { useAuth0 } from '../Auth0Connect';
import { config } from '../Service/Config';

const MenuItems: React.FC = () => {
  const { logout } = useAuth0();
  const handleLogout = () => logout({ returnTo: config.baseurl });

  return (
    <div>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button component={Link} to="/recipes">
        <ListItemIcon>
          <RecipesIcon />
        </ListItemIcon>
        <ListItemText primary="Recipes" />
      </ListItem>

      <ListItem button component={Link} to="/brew">
        <ListItemIcon>
          <BrewIcon />
        </ListItemIcon>
        <ListItemText primary="Brew" />
      </ListItem>

      <Divider />

      <ListItem button onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
};

export default MenuItems;
