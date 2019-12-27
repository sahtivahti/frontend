import React from 'react';
import { Typography, Link } from '@material-ui/core';
import packagejson from '../../package.json';

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/sahtivahti">
                Sahtivahti
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            {' '}
            Version{' '}
            {packagejson.version}
        </Typography>
    );
};

export default Copyright;