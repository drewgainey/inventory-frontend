import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1 }}>
                    IT Inventory 
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default NavBar;