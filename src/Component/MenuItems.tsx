import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RecipesIcon from '@material-ui/icons/MenuBook';
import BrewIcon from '@material-ui/icons/Whatshot';

const MenuItems: React.FC = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <RecipesIcon />
        </ListItemIcon>
        <ListItemText primary="Recipes" />
      </ListItem> 

      <ListItem button>
        <ListItemIcon>
          <BrewIcon />
        </ListItemIcon>
        <ListItemText primary="Brew" />
      </ListItem> 
    </div>
  );
};

export default MenuItems;